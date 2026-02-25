from fastapi import APIRouter, HTTPException
from models.user import UserLogin, UserRegister, UserOut, Token
from database.users_db import create_user, authenticate_user

router = APIRouter()


@router.post("/register", response_model=UserOut, status_code=201)
def register(data: UserRegister):
    """Register a new user (student or employer)."""
    user = create_user(data)
    if not user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return user


@router.post("/login", response_model=Token)
def login(data: UserLogin):
    """Authenticate user and return JWT token."""
    token = authenticate_user(data.email, data.password)
    if not token:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"access_token": token, "token_type": "bearer"}
