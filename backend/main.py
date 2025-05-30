from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Разрешаем запросы от фронтенда
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модель данных музея
class Museum(BaseModel):
    id: int
    title: str
    image: str
    description: str

# Пример "базы данных"
museums_db = [
    Museum(
        id=1,
        title="Канальчик Денчика",
        image="../images/sicko.png",
        description="""<a href="https://t.me/sickorevenge" target="_blank">Ссылочка на тгк</a>"""
    ),
    Museum(
        id=2,
        title="Канальчик кьюти",
        image="../images/qute.png",
        description="""<a href="https://t.me/qut3e" target="_blank">Ссылочка на тгк</a>"""
    ),
    Museum(
        id=3,
        title="Канальчик снежаны",
        image="../images/snezha.png",
        description="""<a href="https://t.me/user1ecx1tal0hh" target="_blank">Ссылочка на тгк</a>"""
    ),
    Museum(
        id=4,
        title="Патипаблик",
        image="../images/party.png",
        description="""<a href="https://t.me/partyypublic" target="_blank">Ссылочка на тгк</a>"""
    )
    
]

# API для поиска
@app.get("/api/museums")
async def get_museums(q: str = ""):
    if not q:
        return museums_db
    
    q = q.lower()
    return [m for m in museums_db 
            if q in m.title.lower() 
            or q in m.description.lower()]
