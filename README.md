# backend-codespace

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js
```

This project was created using `bun init` in bun v1.1.21. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

-Express async function has four parameters : error, request, response, next

# Connecting database in MERN with debugging

- Created MongoDb Atlas account.
- Created a Database and connect I.P Address to access database from anywhere.
- Used `dotenv , mongoose , express` packages.
- Two important points about database connectivity: 

    1. When connecting to databases, handling potential data-not-found scenarios is essential. Employ try/catch blocks or promises to manage errors or we can also use promises.

        - key to remember : ( wrap in try-catch )

    2. Database operations involve latency, and traditional synchronous code can lead to blocking, where the program waits for the database query to complete before moving on. So, we should async/await which allows for non-blocking execution, enabling the program to continue with other tasks while waiting for the database response. 

        - key to remember :  ( always remember the database is in another continent, so use async await)

- Used two approach to connect the database - 1. In Index File, 2. In Seprate DB file

# Mongoose Model Making and Setup

```bash
bun i mongoose-aggregate-paginate-v2
```
- Mongoose aggregate paginate : This package helps in writing aggregation query (true power of mongoose)

```bash
bun i bcryptjs 
bun i bcrypt
```
- This bcrypt library helps us ot hash our password. And can also check your passwords

```bash
bun i jsonwebtoken
```
- JWT : JSON web tokens are made cryptographically {payload, verification signature, secret}
Also called, Bearer Token =>  Anyone which will send this token will recive the data from database

- Pre Hook : Used to encrypt the password justs before saving them in database, cant use arrow function in pre hook callback function becz they dont have this.constructor refference in them which is neccessary for the pre hook, use async function with next reffernece

# File upload in Backend
- Cloudnary : Storage Service for Photos, Videos etc.
```bash
npm i cloudinary
bun i cloudinary
```

Express-fileupload or Multer
```bash
npm i multer
bun i multer
```
- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

# Logic For User Registraton
- get user details from frontend
- validation - not empty
- check if user already exists - username, email
- check for images, check for avatar
- upload them to cloudinary, avatar 
- create user object - creat entry in db
- remove password & refresh token field from response
- check for user creation
- return response

# Logic for User Login
- req body -> data
- username or email
- find the user
- password check
- access and refresh token 
- send cookies
- return response

-Access Token - Short lived, not stored in db
Refresh Token - Long lived, stored in db
When access token expires, the frontend sends the refresh token to the backend to validate user (login), once again.