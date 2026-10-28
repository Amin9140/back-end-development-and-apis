# Build a Data Sanitizer

A freeCodeCamp lab built with Node.js and Express that cleans and validates form input using custom middleware.

## Features

- `inputCleaner` converts the username to lowercase and strips HTML tags from the comment.
- `inputValidator` requires a username of at least 3 characters and redirects back to the form with an error otherwise.
- `POST /submit` applies both middleware at route level and returns the sanitised data as JSON.

## Run it