from pydantic import BaseModel
from typing import Optional


class Application(BaseModel):
    id: str
    vacancy_id: str
    user_id: str
    name: str
    university: str
    role: str
    skills: list[str]
    match_percent: int
    status: str = "new"   # new | reviewed | interview | hired | rejected
    applied_date: str


class ApplicationCreate(BaseModel):
    vacancy_id: str
    user_id: str


class StatusUpdate(BaseModel):
    status: str   # new | reviewed | interview | hired | rejected
