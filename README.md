# NodeJS CRUD API

This project is a Node.js and Express API demonstrating full CRUD functionality using file-based persistence with Node’s `fs` module. User data is stored in a JSON file (`users.json`) and persists across server restarts.

## Features

- Full CRUD operations for users
- File-based data persistence using Node.js `fs`
- Express routing with proper HTTP methods
- Meaningful HTTP status codes
- Error handling for invalid routes and missing resources
- Service check endpoint to confirm the server is running

## API Routes

### Service Check
- `GET /`
  - Returns a confirmation message indicating the server is running

### Users

- `GET /users`
  - Returns all users
  - Status: `200 OK`

- `GET /users/:id`
  - Returns a single user by ID
  - Status: `200 OK`
  - Returns `404 Not Found` if the user does not exist

- `POST /users`
  - Creates a new user
  - Request Body (JSON):
    ```json
    {
      "name": "User Name"
    }
    ```
  - Status: `201 Created`
  - Returns `400 Bad Request` if required data is missing

- `PUT /users/:id`
  - Updates an existing user by ID
  - Request Body (JSON):
    ```json
    {
      "name": "Updated Name"
    }
    ```
  - Status: `200 OK`
  - Returns `404 Not Found` if the user does not exist
  - Returns `400 Bad Request` if required data is missing

- `DELETE /users/:id`
  - Deletes a user by ID
  - Status: `200 OK`
  - Returns `404 Not Found` if the user does not exist

## Error Handling

- Invalid or undefined routes return:
  - `404 Not Found`
- Meaningful error messages are provided for missing resources and invalid requests

## Testing

All routes were tested using Postman, including:
- GET (all users and by ID)
- POST
- PUT
- DELETE

## Technologies Used

- Node.js
- Express
- JavaScript
- File System (`fs`)
- Postman
