# Countries Node REST API

This is a Node.js REST API project that uses Express.js to handle HTTP requests. The application also includes basic setup for handling environment variables and making HTTP requests with Axios. It is designed to be run locally for development purposes.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Testing the API](#testing-the-api)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

## Installation

To install the application and its dependencies, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd goit-node-rest-api

2. Install the dependencies:
npm install

## Configuration
Before running the application, ensure that you have the necessary environment variables configured.

Create a .env file in the root of the project and add the following configuration:

DB_HOST
PORT
JWT_SECRET
UKR_NET_PASS 
UKR_NET_EMAIL
BASE_URL

## Running the Application
To run the application in development mode with live reloading (using nodemon), use the following command:
npm run dev

This will start the server on port 4000, as defined in the .env file.

Alternatively, you can start the server in production mode with the following command:

npm run start


## Testing the API
To test the API, you can use a tool like Postman or Insomnia. The available endpoints are as follows:

GET /api/country?countryCode={countryCode}&country={countryName}
Retrieves country information based on the country code and name.

### Example Request:

GET http://localhost:4000/api
GET http://localhost:4000/api/country?countryCode=IT&country=Italy

### Scripts
npm run dev
Runs the application in development mode using nodemon for automatic reloading.

npm run start
Runs the application in production mode (without live reloading).