from pydantic import BaseModel
from typing import Optional


class EmployerProfile(BaseModel):
    id: str
    company_name: str
    industry: str
    city: str
    website: Optional[str] = ""
    about: Optional[str] = ""
    size: Optional[str] = ""
    verified: bool = False


class EmployerUpdate(BaseModel):
    company_name: Optional[str] = None
    industry: Optional[str] = None
    city: Optional[str] = None
    website: Optional[str] = None
    about: Optional[str] = None
    size: Optional[str] = None
