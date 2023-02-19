
from fastapi import FastAPI, HTTPException

from model import Blog

from database import (
    fetch_all_blogs,
    create_blog,
    fetch_one_blog,
    update_likes,
    fetch_all_blogs_by_title
    )

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/api/bloglist")
async def get_blog():
    response = await fetch_all_blogs()
    return response
@app.get("/api/bloglist/{title}")
async def fetch_all_by_title(title : str):
    response = await fetch_all_blogs_by_title(title)
    return response

@app.get("/api/blog/{id}", response_model=Blog)
async def get_blog_by_id(id):
    response = await fetch_one_blog(id)
    if response:
        return response
    raise HTTPException(404, f"There is no blog")   

@app.post("/api/blog/", response_model=Blog)
async def post_blog(blog: Blog):
    response = await create_blog(blog.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/blog/{id}", response_model=Blog)
async def put_blog(id, likes):
    response = await update_likes(id, likes)
    if response:
        return response
    raise HTTPException(404, f"There is no such blog")