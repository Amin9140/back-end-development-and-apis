# Build a Data Sanitizer

A freeCodeCamp lab built with Node.js and Express that cleans and validates form input using custom middleware.

## Features

- `inputCleaner` converts the username to lowercase and strips HTML tags from the comment.
- `inputValidator` requires a username of at least 3 characters and redirects back to the form with an error otherwise.
- `POST /submit` applies both middleware at route level and returns the sanitised data as JSON.

## Run it

1. Install dependencies with `npm i`
2. Start the server with `node server.js`
3. Open http://localhost:3000 in your browser