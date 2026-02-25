# Stub database layer for candidates / applications
import uuid, datetime

APPLICATIONS: list = []


def get_applications_for_vacancy(vacancy_id: str, status_filter=None) -> list:
    result = [a for a in APPLICATIONS if a["vacancy_id"] == vacancy_id]
    if status_filter:
        result = [a for a in result if a["status"] == status_filter]
    return result


def apply_to_vacancy(data) -> dict:
    app = {
        "id": str(uuid.uuid4()),
        "vacancy_id": data.vacancy_id,
        "user_id": data.user_id,
        "name": "",
        "university": "",
        "role": "",
        "skills": [],
        "match_percent": 0,
        "status": "new",
        "applied_date": datetime.date.today().strftime("%d %b"),
    }
    APPLICATIONS.append(app)
    return app


def update_application_status(application_id: str, new_status: str) -> dict | None:
    app = next((a for a in APPLICATIONS if a["id"] == application_id), None)
    if app:
        app["status"] = new_status
    return app


def get_applications_by_user(user_id: str) -> list:
    return [a for a in APPLICATIONS if a["user_id"] == user_id]
