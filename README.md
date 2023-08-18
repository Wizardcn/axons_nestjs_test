# Nest.js CRUD API

This repository contains a Nest.js project that implements a CRUD (Create, Read, Update, Delete) API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js
- npm 
- Docker

## API Endpoints
API Endpoints which has service available
- GET /users - Get a list of all users.
- GET /users/:id - Get details of a specific user.
- POST /users - Create a new user.
- PATCH /users/:id - Update a user.
- DELETE /users/:id - Delete a user.

## Get Started
1. Start mysql using docker compose
```bash
docker-compose up -d
```
2. Start server
```
npm run start
```

## cURL

- Create
```bash
curl --location 'localhost:3000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "Username": "artna",
    "Email": "artna@example.com",
    "DateOfBirth": "2001-10-02"
}'
```

- Read one
```bash
curl --location 'localhost:3000/users/1'
```

- Read all
```bash
curl --location 'localhost:3000/users'
```

- Delete
```bash
curl --location --request DELETE 'localhost:3000/users/1'
```

- Update
```bash
curl --location --request PATCH 'localhost:3000/users/4' \
--header 'Content-Type: application/json' \
--data '{
    "Username": "prayut"
}'
```
