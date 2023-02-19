import motor.motor_asyncio
from model import Blog

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.blogList
collection = database.blog

async def fetch_all_blogs():
    blogs = []
    cursor = collection.find({})
    async for document in cursor:
        blogs.append(Blog(**document))
    return blogs
async def fetch_all_blogs_by_title(title):
    blogs = []
    cursor = collection.find({"title":{"$regex" : title , "$options" : 'i' }})
    async for document in cursor:
        blogs.append(Blog(**document))
    return blogs

async def create_blog(blog):
    document = blog
    result = await collection.insert_one(document)
    return document

async def fetch_one_blog(id):
    document = await collection.find_one({"blogid": id})
    return document


async def update_likes(id, likes):
    await collection.update_one({"blogid": id}, {"$set": {"likes": likes}})
    document = await collection.find_one({"blogid": id})
    return document
