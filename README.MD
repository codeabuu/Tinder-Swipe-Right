# Tinder Web Clone App

# Webstack – Portfolio Project

## Team Project by: Lawrence Maduabuchi & Abdullahi Ngui

## Project done during **Short Specialization** at **ALX School**. This is our Final Project in ALX, to showcase our creativity and skills\*\*.

## Technologies

- MERN STACK`- MongoDB, ExpressJs, ReactJS, NodeJS
- Front-End (ReactJS)
- Back-End (NodeJS, ExpressJS)
- Database (MongoDB- NoSQL)

## App Design & Main Features

- Once you create an account, you will start seeing profiles of different users based on your preferences.
- For every user of the app, Tinder shows these information details: current age, mutual friends (via matching preferences), mutual interests between the users, and target description. The process of matching starts here when you can do the following:

* Swipe-Right/Tick: If you like a profile, you will swipe right.
* Swipe-Left: If you don’t like a profile, you will swipe left.
* Match: If both the profiles swipe right, it’s a match.

| Components | Description |
| -------- | ----------- |
| ` Dependencies` | The code imports necessary Node.js modules such as Express, MongoDB, UUID, JSON Web Token (JWT), bcrypt for password hashing, validator for input validation, and cors for enabling CORS (Cross-Origin Resource Sharing).|
| ` Endpoints:` | /signup: Allows users to sign up by providing an email and password. Validates email format and password strength. Stores user data in MongoDB after hashing the password.
|'Endpoints login:' | /login: Handles user login authentication. Compares provided credentials with stored hashed passwords in the database and issues a JWT token upon successful authentication.|
|'Endpoints user:' | /user: Retrieves individual user data based on the provided user ID.|
|'Endpoints addmatch:' | /addmatch: Updates a user's matches list with a new matched user ID.|
|'Endpoints usersRetrieval:' |/users: Retrieves user data for multiple users based on their user IDs.|
|'Endpoints gendered-users:' | /gendered-users: Retrieves users based on their gender identity.|
|'Endpoints update:' | /user: Updates user data in the database.|
|'Endpoints messaging:' |/messages: Retrieves messages between two users based on their user IDs.|
|'Endpoints AddMessage:' |/message: Adds a message to the database.|
| ` Database Connection` | The code connects to a MongoDB database using a connection string (uri variable) containing the necessary credentials.|
| ` Error Handling` | Basic error handling is implemented for database operations, with error logging and appropriate HTTP responses.|
| ` Middleware` | Express middleware functions are used for parsing JSON requests and enabling CORS.|
| ` Server` | Finally, the application listens on a specified port (8000) for incoming HTTP requests..|

