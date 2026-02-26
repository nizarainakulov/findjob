from pydantic import BaseModel
from typing import Optional, List


class Vacancy(BaseModel):
    id: str
    emoji: str
    title: str
    company: str
    salary: str
    location: str
    type: str             # fulltime | parttime | remote | hybrid
    category: str
    description: str
    requirements: str
    applicants: int = 0
    views: int = 0
    status: str = "active"  # active | paused
    published_date: str
    employer_id: str
    no_experience: bool = False


class VacancyCreate(BaseModel):
    title: str
    company: str
    salary: Optional[str] = "по договорённости"
    location: str = "Алматы"
    type: str = "fulltime"
    category: str = "it"
    description: Optional[str] = ""
    requirements: Optional[str] = ""
    employer_id: str
    no_experience: bool = False
