# backend/main.py
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Setup CORS agar Next.js bisa memanggil API ini
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Ganti dengan URL production nanti
    allow_methods=["*"],
    allow_headers=["*"],
)

# Konfigurasi Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-pro')

class ChatRequest(BaseModel):
    message: str

# Prompt khusus agar AI ber-cosplay jadi asistenmu
SYSTEM_PROMPT = """
Kamu adalah 'Riyan AI Assistant', asisten virtual pribadi dari Riyan Sandi Prayoga.
Tugasmu adalah menjawab pertanyaan pengunjung website portofolio Riyan dengan sopan, cerdas, dan sedikit gaya teknologi.

Info tentang Riyan:
- Peran: AI Engineer, Full-Stack Developer, Cybersecurity Researcher.
- Pendidikan: Teknik Informatika di ITERA (2023-Sekarang).
- Proyek Utama: SisaBisa (AI Food Waste), Desa Lempasing (Web Desa), VulnCheck (Cybersecurity).
- Pengalaman: AI Engineer di DBS Foundation (MBKM), Teaching Assistant di ITERA.
- Skill: Python, TensorFlow, FastAPI, Laravel, React, Ethical Hacking.

Jawablah pertanyaan sesingkat dan sejelas mungkin. Jika ditanya hal di luar Riyan, 
jawablah dengan ramah bahwa fokusmu adalah membantu mengenalkan profil Riyan.
"""

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        chat_session = model.start_chat(history=[])
        full_prompt = f"{SYSTEM_PROMPT}\n\nPertanyaan User: {request.message}"
        response = chat_session.send_message(full_prompt)
        return {"reply": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)