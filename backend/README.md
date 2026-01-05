<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Flight app search

1. Clone repository
2. Run it

```
npm install
```

3. Need Nest cli instaled

```
npm i -g @nestjs/cli
```

4. build database
you need to have docker installed for that

```
docker-compose up -d
```

** Make sure you have the environment variables **

PORT 

JWT_SECRET

MONGO_URL 

FLIGHT_API_KEY 

## endpoits

* Auth

Post .../api/auth/signin
Post .../api/auth/signup

* flight

Get .../api/flight?page=1

* Saved flights

Get .../api/save-flight
Post .../api/save-flight
Delete .../api/save-flight/:id

## Used stacks
MongoDB
Nest
JWT
Axios
bcrypt