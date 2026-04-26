from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.jd_parser import parse_jd
from app.matcher import match_candidates
from app.engagement import simulate_interest, chat_with_candidate

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JDInput(BaseModel):
    jd_text: str

@app.get("/")
def home():
    return {"message": "AI Talent Agent Running 🚀"}

@app.post("/process")
def process_jd(data: JDInput):
    jd = parse_jd(data.jd_text)
    candidates = match_candidates(jd)

    results = []
    for c in candidates:
        interest = simulate_interest(c)
        final_score = (c["match_score"] * 0.6) + (interest * 0.4)

        results.append({
            "name": c["name"],
            "match_score": c["match_score"],
            "interest_score": interest,
            "final_score": round(final_score, 2),
            "reason": c["reason"]
        })

    return sorted(results, key=lambda x: x["final_score"], reverse=True)

@app.post("/chat")
def chat(data: dict = Body(...)):
    return {
        "reply": chat_with_candidate(data["name"], data["message"])
    }