from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser
from typing import List, Optional
import os
from dotenv import load_dotenv
import json
from prompts import get_roadmap_prompt

load_dotenv()

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:8000",
        "https://aifutureroadmap.up.railway.app",
        "https://lavish-art-production.up.railway.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserInput(BaseModel):
    name: str
    email: str
    role: str
    years_of_experience: str
    description: str
    ctc: str

class YearlyMilestone(BaseModel):
    year: str
    role_title: str
    salary_range: str
    focus_area: str
    skills_to_acquire: List[str]
    agentic_transformation: str  # How agents replace/augment this specific phase

class RoadmapResponse(BaseModel):
    career_summary: str
    five_year_roadmap: List[YearlyMilestone]
    authoritative_sources: List[str]
    growth_potential_analysis: str

@app.post("/generate-roadmap", response_model=RoadmapResponse)
async def generate_roadmap(user_input: UserInput):
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="OpenAI API Key not configured")

    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

    parser = PydanticOutputParser(pydantic_object=RoadmapResponse)

    prompt = get_roadmap_prompt()

    _input = prompt.format_messages(
        name=user_input.name,
        role=user_input.role,
        description=user_input.description,
        years_of_experience=user_input.years_of_experience,
        ctc=user_input.ctc,
        format_instructions=parser.get_format_instructions()
    )

    try:
        response = await llm.ainvoke(_input)
        return parser.parse(response.content)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
