# ✈️ FlightDeals

FlightDeals is a fullstack application that allows users to register, authenticate, and search for flights, with the option to save favorite flights. The project is primarily focused on the backend with NestJS.

## 🚀 Features

* User registration and login
* JWT authentication
* Password hashing
* External flight API consumption
* Save and delete flights
* Pagination
* Frontend connected to backend
* MongoDB in Docker

## 🛠️ Technologies

### Backend
* NestJS
* TypeScript
* MongoDB
* Mongoose
* JWT
* bcrypt

### Frontend
* Next.js
* TypeScript

### Infrastructure
* Docker
* Docker Compose

## ⚙️ Environment Variables

### Backend (`backend/.env`)
```env
PORT=4000
MONGO_URL=mongodb://mongo:27017/nest-flight
JWT_SECRET=your_secret
```

### Frontend (`frontend/.env`)
```env
NEXT_PUBLIC_API_URL=http://backend:4000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
```

## 🐳 How to Run the Project Locally

### Requirements:
* Docker
* Docker Compose
```bash
docker compose up --build
```

### Available Services:
* Frontend: http://localhost:3000
* Backend: http://localhost:4000
* MongoDB: port 27017

## 🧪 API Usage (Postman)

### Signup
```
POST http://localhost:4000/api/auth/signup
```
```json
{
  "email": "user@test.com",
  "password": "123456"
}
```

### Login
```
POST http://localhost:4000/api/auth/login
```

Use the returned token in protected endpoints:
```
Authorization: Bearer <token>
```

## 👨‍💻 Author

Kenedy Paulino