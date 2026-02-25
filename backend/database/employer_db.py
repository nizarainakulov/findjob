# Stub database layer for employer profiles

EMPLOYERS: dict = {}
ANALYTICS: dict = {}


def get_employer(employer_id: str) -> dict | None:
    return EMPLOYERS.get(employer_id)


def update_employer(employer_id: str, data) -> dict:
    if employer_id not in EMPLOYERS:
        EMPLOYERS[employer_id] = {}
    EMPLOYERS[employer_id].update({k: v for k, v in data.dict().items() if v is not None})
    return EMPLOYERS[employer_id]


def get_employer_stats(employer_id: str) -> dict:
    return ANALYTICS.get(employer_id, {
        "active_vacancies": 0, "total_applicants": 0,
        "total_views": 0, "hired": 0,
        "weekly_views": [0]*7, "weekly_responses": [0]*7,
    })
