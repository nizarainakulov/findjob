from pydantic import BaseModel, EmailStr
from typing import Optional


class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: str = "student"  # student | employer


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: str
    name: str
    email: str
    role: str


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
