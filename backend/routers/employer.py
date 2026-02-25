from fastapi import APIRouter, HTTPException
from models.employer import EmployerProfile, EmployerUpdate
from database.employer_db import get_employer, update_employer, get_employer_stats

router = APIRouter()


@router.get("/{employer_id}", response_model=EmployerProfile)
def get_employer_profile(employer_id: str):
    emp = get_employer(employer_id)
    if not emp:
        raise HTTPException(status_code=404, detail="Employer not found")
    return emp


@router.put("/{employer_id}", response_model=EmployerProfile)
def update_employer_profile(employer_id: str, data: EmployerUpdate):
    return update_employer(employer_id, data)


@router.get("/{employer_id}/stats")
def employer_stats(employer_id: str):
    """Return analytics: views, responses, hired per vacancy."""
    return get_employer_stats(employer_id)
