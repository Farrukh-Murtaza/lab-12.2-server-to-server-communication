# Server-to-Server Fun Fact API

A simple Express.js API that demonstrates **server-to-server communication** using Axios.

The application exposes a local API endpoint that requests a random fun fact from the **Useless Facts API**, extracts only the fact text, and returns it to the client in a simplified JSON format.

## Features

* Express.js server
* ES Modules (`import` / `export`)
* Axios for server-to-server HTTP requests
* MVC-style project structure
* External API integration
* Async/await
* Try/catch error handling
* HTTP 500 error handling
* Simplified JSON response

## Technologies Used

* Node.js
* Express.js
* Axios
* JavaScript
* ES Modules

## Project Structure

```text
server-to-server-api/
│
├── controllers/
│   └── funFactController.js
│
├── routes/
│   └── funFactRoutes.js
│
├── services/
│   └── funFactService.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Architecture

The application uses an MVC-style architecture with a service layer for external API communication.

```text
Client
   │
   │ GET /api/fun-fact
   ▼
Express Server
   │
   ▼
Route
   │
   ▼
Controller
   │
   ▼
Service
   │
   │ Axios GET request
   ▼
Useless Facts API
   │
   │ JSON response
   ▼
Service extracts "text"
   │
   ▼
Controller
   │
   ▼
Client
```

### Routes

Responsible for defining API endpoints and connecting them to controllers.

### Controllers

Responsible for handling HTTP requests and responses.

### Services

Responsible for communicating with the external Useless Facts API and extracting the required data.

## External API

This project uses the **Useless Facts API**:

`https://uselessfacts.jsph.pl/api/v2/facts/random`

The API does not require an API key.

A response from the external API contains several properties, including:

```json
{
  "id": "d046f554-9430-4113-9528-56455147814b",
  "text": "A standard deck of cards is a calendar...",
  "source": "djtech.net",
  "source_url": "http://www.djtech.net/humor/useless_facts.htm",
  "language": "en",
  "permalink": "https://uselessfacts.jsph.pl/api/v2/facts/d046f554-9430-4113-9528-56455147814b"
}
```

The application extracts only the `text` property.

## API Endpoint

### Get a Random Fun Fact

```http
GET /api/fun-fact
```

### Local URL

```text
http://localhost:3000/api/fun-fact
```

### Successful Response

```json
{
  "fact": "A standard deck of cards is a calendar..."
}
```

Only the `fact` property is returned to the client instead of the complete response from the external API.

### Error Response

If the external API request fails, the server returns an HTTP `500` response:

```json
{
  "error": "Could not fetch fun fact"
}
```

## Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd server-to-server-api
```

### 3. Install dependencies

```bash
npm install
```

The project uses:

* `express`
* `axios`

## Running the Server

Start the server with:

```bash
npm start
```

Alternatively:

```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

You should see:

```text
Server is running on http://localhost:3000
```

## Testing the API

Open the following URL in your browser:

```text
http://localhost:3000/api/fun-fact
```

Each time the endpoint is requested, the Express server makes a new request to the Useless Facts API and returns a random fact.

Example:

```json
{
  "fact": "The original name of Bank of America was Bank of Italy."
}
```

You can also test the endpoint using tools such as Postman or cURL:

```bash
curl http://localhost:3000/api/fun-fact
```

## Error Handling

The application uses `async/await` and `try...catch` to handle errors when communicating with the external API.

The service catches errors from Axios:

```js
try {
  const response = await axios.get(
    "https://uselessfacts.jsph.pl/api/v2/facts/random"
  );

  return response.data.text;
} catch (error) {
  console.error("Failed to fetch fun fact:", error.message);

  throw new Error("Could not fetch fun fact");
}
```

The controller then handles the error and sends an appropriate HTTP response:

```js
res.status(500).json({
  error: "Could not fetch fun fact"
});
```

This prevents the application from exposing the external API response directly to the client.

## Learning Objectives

This project demonstrates:

1. Setting up an Express server.
2. Creating an API route.
3. Making server-to-server HTTP requests.
4. Using Axios to consume an external API.
5. Working with asynchronous JavaScript using `async/await`.
6. Handling errors with `try...catch`.
7. Extracting specific data from an external API response.
8. Returning a customized JSON response.
9. Organizing an Express application using an MVC-style architecture.
