import json
import os

def load_candidates():
    base_dir = os.path.dirname(os.path.dirname(__file__))
    path = os.path.join(base_dir, "data", "candidates.json")

    with open(path, "r") as f:
        return json.load(f)

def match_candidates(jd):
    candidates = load_candidates()
    results = []

    for c in candidates:
        matched = set(jd["skills"]).intersection(c["skills"])

        skill_score = len(matched) / max(len(jd["skills"]), 1)
        exp_score = 1 if c["experience"] >= jd["experience"] else 0.5

        match_score = (skill_score * 70) + (exp_score * 30)

        results.append({
            "name": c["name"],
            "match_score": round(match_score, 2),
            "reason": f"Matched skills: {list(matched)}"
        })

    return results