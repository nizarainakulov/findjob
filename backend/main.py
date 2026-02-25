from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import vacancies, auth, employer, candidates

app = FastAPI(
    title="FindJob API",
    description="Backend API for FindJob — AI-powered job search platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router,       prefix="/api/auth",       tags=["Auth"])
app.include_router(vacancies.router,  prefix="/api/vacancies",  tags=["Vacancies"])
app.include_router(employer.router,   prefix="/api/employer",   tags=["Employer"])
app.include_router(candidates.router, prefix="/api/candidates", tags=["Candidates"])


@app.get("/")
def root():
    return {"message": "FindJob API is running", "docs": "/docs"}
