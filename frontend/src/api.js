const BASE_URL = "http://127.0.0.1:8000";

export async function processJD(jd) {
  const res = await fetch(`${BASE_URL}/process`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jd_text: jd }),
  });

  return res.json();
}

export async function chatAPI(name, message) {
  const res = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, message }),
  });

  return res.json();
}