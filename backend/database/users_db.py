# Stub database layer for users
import uuid, hashlib

USERS: list = []


def _hash(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()


def create_user(data) -> dict | None:
    if any(u["email"] == data.email for u in USERS):
        return None
    user = {"id": str(uuid.uuid4()), "name": data.name,
            "email": data.email, "password": _hash(data.password), "role": data.role}
    USERS.append(user)
    return user


def authenticate_user(email: str, password: str) -> str | None:
    user = next((u for u in USERS if u["email"] == email and u["password"] == _hash(password)), None)
    if not user:
        return None
    # Return a simple token stub — replace with JWT (python-jose)
    return f"stub-token-{user['id']}"
