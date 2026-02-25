from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models.candidate import Application, ApplicationCreate, StatusUpdate
from database.candidates_db import (
    get_applications_for_vacancy, apply_to_vacancy,
    update_application_status, get_applications_by_user
)

router = APIRouter()


@router.get("/vacancy/{vacancy_id}", response_model=List[Application])
def list_applicants(vacancy_id: str, status: Optional[str] = None):
    """List all applicants for a given vacancy."""
    return get_applications_for_vacancy(vacancy_id, status_filter=status)


@router.post("/apply", response_model=Application, status_code=201)
def apply(data: ApplicationCreate):
    """Submit a job application."""
    return apply_to_vacancy(data)


@router.patch("/{application_id}/status")
def change_status(application_id: str, body: StatusUpdate):
    """Update application status (employer action)."""
    updated = update_application_status(application_id, body.status)
    if not updated:
        raise HTTPException(status_code=404, detail="Application not found")
    return updated


@router.get("/user/{user_id}", response_model=List[Application])
def user_applications(user_id: str):
    """Get all applications submitted by a seeker."""
    return get_applications_by_user(user_id)
