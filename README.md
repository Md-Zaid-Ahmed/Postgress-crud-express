# 🛠️ Node.js + Express + PostgreSQL CRUD API with Docker

A simple REST API to perform basic **CRUD operations** on a `users` table using:

- **Node.js** and **Express** for the backend  
- **PostgreSQL** for the database  
- **Docker** for containerization  

---

## 📦 Tech Stack

- Node.js  
- Express.js  
- PostgreSQL  
- Docker + Docker Compose

---

## 🐳 Setup : Running PostgreSQL in Docker Container with Volume 

To run the project with Docker and PostgreSQL, follow the setup guide:  
🔗 [Docker Setup Guide](https://medium.com/@basit26374/how-to-run-postgresql-in-docker-container-with-volume-bound-c141f94e4c5a)

---

## 📡 API Endpoints

### 📥 Create User  
**POST** `http://localhost:5001/api/user`  
**Request Body:**
```json
{
  "name": "zaid",
  "email": "zaid123@test.com"
}
```
**Response:**
```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 6,
    "name": "zaid",
    "email": "zaid123@test.com",
    "created_at": "2025-05-29T11:06:52.025Z"
  }
}
```
---

### 🔍 Get User by ID  
**GET** `http://localhost:5001/api/user/1`  
**Response:**
```json
{
  "status": 201,
  "message": "User fetched successfully",
  "data": {
    "id": 1,
    "name": "Zaid",
    "email": "zaid@example.com",
    "created_at": "2025-05-28T13:27:03.963Z"
  }
}
```

---

### 📥 Create User  
**POST** `http://localhost:5001/api/user`  
**Request Body:**
```json
{
  "name": "zaid",
  "email": "zaid123@test.com"
}
```
**Response:**
```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 6,
    "name": "zaid",
    "email": "zaid123@test.com",
    "created_at": "2025-05-29T11:06:52.025Z"
  }
}
```

---

### ✏️ Update User  
**PUT** `http://localhost:5001/api/user/4`  
**Request Body:**
```json
{
  "name": "zaid k",
  "email": "zaid12345@test.com"
}
```
**Response:**
```json
{
  "status": 201,
  "message": "User updated successfully",
  "data": {
    "id": 4,
    "name": "yoyo1",
    "email": "yoyo1@test.com",
    "created_at": "2025-05-29T11:00:49.696Z"
  }
}
```

---

### 🗑️ Delete User  
**DELETE** `http://localhost:5001/api/user/4`  
**Response:**
```json
{
  "status": 201,
  "message": "User deleted successfully",
  "data": {
    "id": 4,
    "name": "yoyo1",
    "email": "yoyo1@test.com",
    "created_at": "2025-05-29T11:00:49.696Z"
  }
}
```
