from fastapi import APIRouter, Query
from typing import Optional, List
from models.vacancy import Vacancy, VacancyCreate
from database.vacancies_db import get_all_vacancies, create_vacancy, get_vacancy_by_id

router = APIRouter()


@router.get("/", response_model=List[Vacancy])
def list_vacancies(
    q: Optional[str] = Query(None, description="Search query"),
    location: Optional[str] = None,
    type: Optional[str] = None,
    category: Optional[str] = None,
    no_experience: bool = False,
):
    """Return all vacancies with optional filters."""
    return get_all_vacancies(q=q, location=location, type=type,
                             category=category, no_experience=no_experience)


@router.get("/{vacancy_id}", response_model=Vacancy)
def get_vacancy(vacancy_id: str):
    """Return a single vacancy by ID."""
    return get_vacancy_by_id(vacancy_id)


@router.post("/", response_model=Vacancy, status_code=201)
def post_vacancy(data: VacancyCreate):
    """Create and publish a new vacancy (employer only)."""
    return create_vacancy(data)
