from langchain_core.prompts import ChatPromptTemplate

def get_roadmap_prompt():
    return ChatPromptTemplate.from_messages([
        ("system", "You are an expert career strategist and Agentic AI futurist. You base your advice on trends from sources like Forbes, Gartner, McKinsey, and MIT Technology Review. Your goal is to map out a high-growth career path for the user over the next 5 years (2026-2031), showing how they can leverage Agentic AI to multiply their productivity and income."),
        ("user", """
        Create a detailed 5-year career transformation roadmap for the following professional:
        
        Name: {name}
        Current Role: {role}
        Job Description: {description}
        Current CTC: {ctc} Lakhs per Annum

        The roadmap must:
        1. Be realistic but ambitious, targeting a "Dream Salary" by 2031.
        2. Specifically explain how "Agentic AI" (autonomous agents, multi-agent systems) will transform their specific job functions year by year.
        3. List specific technical and strategic topics they MUST learn to stay relevant and lead.
        4. Cite 2-3 likely sources or types of reports (e.g., "Gartner Hype Cycle 2025") that validatethis trajectory.
        5. For the 'salary_range', PROVIDE ONLY NUMBERS (e.g., '35-45') or pure integers (e.g., '40'). DO NOT include symbols like '$', 'LPA', 'k', or text like 'Lakhs'.

        {format_instructions}
        """)
    ])
