def parse_jd(jd_text: str):
    jd_text = jd_text.lower()

    skills = []
    for skill in ["java", "python", "sql", "spring", "react"]:
        if skill in jd_text:
            skills.append(skill)

    return {
        "role": "Software Engineer",
        "skills": skills,
        "experience": 2
    }