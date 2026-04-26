import random

responses = [
    "Yes, I’m interested in this opportunity.",
    "Sounds good, can you share more details?",
    "I might consider if it's remote.",
    "Currently not looking, but open to discussion."
]

def simulate_interest(candidate):
    return random.randint(50, 100)

def chat_with_candidate(name, message):
    return random.choice(responses)