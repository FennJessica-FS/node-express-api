## NodeJS CRUD API

This project is a Node.js and Express API demonstrating full CRUD functionality using in-memory data storage. The API includes routes to create, retrieve, update, and delete user data, as well as a service check endpoint to confirm the server is running.

Postman was used to test all routes, including GET (all users and by ID), POST, PUT, and DELETE. Proper HTTP status codes and error handling are implemented throughout the application.

## API Routes

GET /  
Returns a simple service check message.

GET /users  
Returns all users.

GET /users/:id  
Returns a single user by ID.

POST /users  
Creates a new user.  
Request body:
{
  "name": "User Name"
}

PUT /users/:id  
Updates an existing user by ID.

DELETE /users/:id  
Deletes a user by ID.
