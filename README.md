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