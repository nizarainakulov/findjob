# Stub database layer — replace with SQLAlchemy / SQLite / PostgreSQL

VACANCIES: list = []


def get_all_vacancies(q=None, location=None, type=None, category=None, no_experience=False):
    result = VACANCIES
    if q:
        result = [v for v in result if q.lower() in v["title"].lower() or q.lower() in v["description"].lower()]
    if location:
        result = [v for v in result if v["location"] == location]
    if type:
        result = [v for v in result if v["type"] == type]
    if category:
        result = [v for v in result if v["category"] == category]
    if no_experience:
        result = [v for v in result if v.get("no_experience")]
    return result


def get_vacancy_by_id(vacancy_id: str):
    return next((v for v in VACANCIES if v["id"] == vacancy_id), None)


def create_vacancy(data) -> dict:
    import uuid, datetime
    v = data.dict()
    v["id"] = str(uuid.uuid4())
    v["applicants"] = 0
    v["views"] = 0
    v["status"] = "active"
    v["published_date"] = datetime.date.today().strftime("%d %b")
    VACANCIES.append(v)
    return v
