# Agentic Career Roadmap Generator

A full-stack AI application that generates a personalized, 5-year career roadmap based on your current role and Agentic AI trends.

## Tech Stack
- **Frontend**: React + Vite, Recharts, Lucide React (Premium UI with Glassmorphism)
- **Backend**: Python FastAPI, LangChain, OpenAI GPT-4o-mini

## Setup Instructions

### 1. Configure Environment
Create a `.env` file in the `backend/` directory and add your OpenAI API Key:
```
OPENAI_API_KEY=sk-proj-...
```

### 2. Run Backend
Open a terminal in the root directory:
```powershell
# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Run the server
python -m uvicorn backend.main:app --reload
```
The backend will run on `http://localhost:8000`.

### 3. Run Frontend
Open a new terminal in the `frontend/` directory:
```powershell
npm run dev
```
The frontend will run on `http://localhost:5173`.

## Features
- **Projected Salary Growth**: Visual graph of your potential earnings.
- **Year-by-Year Roadmap**: Specific skills to learn and actions to take.
- **Agentic AI Transformation**: How AI agents will automate and augment your specific role.
