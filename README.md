# FindJob 🚀

> AI-powered job search platform for Kazakhstani students and employers.

---

## Project Structure

```
stars/
├── frontend/          # Static web app (HTML + JS + CSS)
│   ├── index.html
│   ├── app.js
│   └── style.css
│
├── backend/           # Python FastAPI REST API
│   ├── main.py              # App entry point
│   ├── routers/
│   │   ├── auth.py          # POST /api/auth/register, /login
│   │   ├── vacancies.py     # GET/POST /api/vacancies
│   │   ├── employer.py      # GET/PUT /api/employer/{id}
│   │   └── candidates.py    # GET/POST /api/candidates
│   ├── models/
│   │   ├── vacancy.py       # Pydantic schemas
│   │   ├── user.py
│   │   ├── employer.py
│   │   └── candidate.py
│   └── database/
│       ├── vacancies_db.py  # In-memory stub (replace with SQLAlchemy)
│       ├── users_db.py
│       ├── employer_db.py
│       └── candidates_db.py
│
├── requirements.txt   # Python dependencies
└── README.md
```

---

## Quick Start

### Frontend
Simply open `frontend/index.html` in a browser, or serve it with any static server:
```bash
cd frontend
npx serve .
```

### Backend
```bash
# Install dependencies
pip install -r requirements.txt

# Run dev server
cd backend
uvicorn main:app --reload --port 8000
```

API docs available at: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register student or employer |
| POST | `/api/auth/login` | Login and get JWT token |
| GET | `/api/vacancies` | List vacancies (with filters) |
| POST | `/api/vacancies` | Post a new vacancy |
| GET | `/api/vacancies/{id}` | Single vacancy |
| GET | `/api/employer/{id}` | Employer profile |
| PUT | `/api/employer/{id}` | Update employer profile |
| GET | `/api/employer/{id}/stats` | Analytics (views, responses) |
| POST | `/api/candidates/apply` | Apply to a vacancy |
| GET | `/api/candidates/vacancy/{id}` | List applicants |
| PATCH | `/api/candidates/{id}/status` | Update application status |
| GET | `/api/candidates/user/{id}` | User's own applications |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML / JS / CSS |
| Backend | Python 3.12 + FastAPI |
| Validation | Pydantic v2 |
| Auth | JWT (python-jose) |
| Database | SQLAlchemy (stub → PostgreSQL) |
| Server | Uvicorn |

---

## Development Notes

- The `database/` layer currently uses **in-memory Python lists** as stubs.  
  Replace with SQLAlchemy models + a real DB (PostgreSQL / SQLite) for production.
- JWT auth stubs are in `routers/auth.py` — integrate `python-jose` for real tokens.
- All CORS origins are open (`*`) for development. Restrict in production.
