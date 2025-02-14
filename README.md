# URL Shortener

A scalable URL shortener service with advanced analytics, user authentication via Google Sign-In, and rate limiting. This project includes a Node.js backend and a React frontend with Material-UI.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Backend API Endpoints](#backend-api-endpoints)
  - [Frontend Routes](#frontend-routes)
- [Curl Commands](#curl-commands)
- [Docker](#docker)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create short URLs with custom aliases.
- Group URLs under specific topics (e.g., acquisition, activation, retention).
- Detailed analytics for individual and overall URLs.
- User authentication via Google Sign-In.
- Rate limiting to prevent abuse.
- Dockerized for easy deployment.

## Technologies

- **Backend**: Node.js, Express, MongoDB, Redis
- **Frontend**: React, Material-UI
- **Authentication**: Passport.js with Google OAuth 2.0
- **Containerization**: Docker, Docker Compose

## Setup

### Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js and npm installed for local development.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. **Set Up Environment Variables**:

   Create a `.env` file in the root directory with the following content:

   ```
   PORT=5000
   MONGO_URI=mongodb://mongo:27017/url-shortener
   REDIS_URL=redis://redis:6379
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

3. **Build and Run with Docker Compose**:

   ```bash
   docker-compose up --build
   ```

   This will build and start all the services defined in the `docker-compose.yml` file.

4. **Access the Application**:

   - Backend API: `http://localhost/api`
   - Frontend: `http://localhost`

## Usage

### Backend API Endpoints

- **POST /api/url/shorten**: Create a new short URL.
- **GET /api/url/:alias**: Redirect to the original URL.
- **GET /api/analytics/:alias**: Get analytics for a specific URL.
- **GET /api/analytics/topic/:topic**: Get analytics for a specific topic.
- **GET /api/analytics/overall**: Get overall analytics.

### Frontend Routes

- **/login**: Login page.
- **/create**: Create a new short URL.
- **/urls**: List of created URLs.
- **/analytics/:alias**: Analytics for a specific URL.
- **/analytics/overall**: Overall analytics.

## Curl Commands

### Backend

- **Create Short URL**:

  ```bash
  curl -X POST "http://localhost/api/url/shorten" \
       -H "Content-Type: application/json" \
       -d '{
             "longUrl": "https://blackspace.com",
             "customAlias": "blackspace",
             "topic": "acquisition"
           }'
  ```

- **Redirect Short URL**:

  ```bash
  curl -X GET "http://localhost/api/url/blackspace"
  ```

- **Get URL Analytics**:

  ```bash
  curl -X GET "http://localhost/api/analytics/blackspace"
  ```

- **Get Topic-Based Analytics**:

  ```bash
  curl -X GET "http://localhost/api/analytics/topic/acquisition"
  ```

- **Get Overall Analytics**:

  ```bash
  curl -X GET "http://localhost/api/analytics/overall"
  ```

### Frontend

- **Fetch Login Page**:

  ```bash
  curl -X GET "http://localhost/login"
  ```

- **Fetch Create URL Page**:

  ```bash
  curl -X GET "http://localhost/create"
  ```

- **Fetch URL List Page**:

  ```bash
  curl -X GET "http://localhost/urls"
  ```

- **Fetch URL Analytics Page**:

  ```bash
  curl -X GET "http://localhost/analytics/blackspace"
  ```

- **Fetch Overall Analytics Page**:

  ```bash
  curl -X GET "http://localhost/analytics/overall"
  ```

## Docker

The project uses Docker and Docker Compose to manage the application and its dependencies. The `docker-compose.yml` file defines services for the backend, frontend, MongoDB, Redis, and Nginx.

- **Build and Run**:

  ```bash
  docker-compose up --build
  ```

- **Stop Services**:

  ```bash
  docker-compose down
  ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Explanation

- **Features**: Lists the key features of the URL shortener application.
- **Technologies**: Describes the technologies used in the project.
- **Setup**: Provides step-by-step instructions for setting up and running the project.
- **Usage**: Describes the API endpoints and frontend routes.
- **Curl Commands**: Lists `curl` commands for interacting with the backend and frontend.
- **Docker**: Explains how to use Docker and Docker Compose to manage the application.
- **Contributing**: Encourages contributions and provides basic guidelines.
- **License**: Specifies the project's license.



## Additional routes

### Base URL

Assuming your application is running locally with Nginx as a reverse proxy, the base URL for accessing your services is:

- **Base URL**: `http://localhost`

### Frontend Routes (Browser Access)

1. **Login Page**
   - **Route**: `http://localhost/login`
   - **Description**: Access the login page to authenticate via Google Sign-In.

2. **Create URL Page**
   - **Route**: `http://localhost/create`
   - **Description**: Access the page to create a new short URL.

3. **URL List Page**
   - **Route**: `http://localhost/urls`
   - **Description**: View a list of all created URLs.

4. **URL Analytics Page**
   - **Route**: `http://localhost/analytics/example`
   - **Description**: View analytics for a specific URL (replace `example` with the actual alias).

5. **Overall Analytics Page**
   - **Route**: `http://localhost/analytics/overall`
   - **Description**: View overall analytics for all URLs.

### Backend API Endpoints (Curl Commands)

1. **User Authentication**

   - **Google Login**
     - **Route**: `http://localhost/api/auth/google`
     - **Curl Command**:
       ```bash
       curl -X GET "http://localhost/api/auth/google"
       ```
     - **Description**: Initiate the Google OAuth flow. Typically, this involves a browser redirect.

2. **Create Short URL**

   - **Route**: `http://localhost/api/url/shorten`
   - **Curl Command**:
     ```bash
     curl -X POST "http://localhost/api/url/shorten" \
          -H "Content-Type: application/json" \
          -d '{
                "longUrl": "https://example.com",
                "customAlias": "example",
                "topic": "acquisition"
              }'
     ```
   - **Description**: Create a new short URL.

3. **Redirect Short URL**

   - **Route**: `http://localhost/api/url/example`
   - **Curl Command**:
     ```bash
     curl -X GET "http://localhost/api/url/example"
     ```
   - **Description**: Redirect to the original URL (replace `example` with the actual alias).

4. **Get URL Analytics**

   - **Route**: `http://localhost/api/analytics/example`
   - **Curl Command**:
     ```bash
     curl -X GET "http://localhost/api/analytics/example"
     ```
   - **Description**: Get analytics for a specific URL (replace `example` with the actual alias).

5. **Get Topic-Based Analytics**

   - **Route**: `http://localhost/api/analytics/topic/acquisition`
   - **Curl Command**:
     ```bash
     curl -X GET "http://localhost/api/analytics/topic/acquisition"
     ```
   - **Description**: Get analytics for all URLs grouped under a specific topic (replace `acquisition` with the actual topic).

6. **Get Overall Analytics**

   - **Route**: `http://localhost/api/analytics/overall`
   - **Curl Command**:
     ```bash
     curl -X GET "http://localhost/api/analytics/overall"
     ```
   - **Description**: Get overall analytics for all URLs.

### Notes

- **Authentication**: For endpoints that require authentication, include an `Authorization` header with a valid JWT token. For example:

  ```bash
  curl -X GET "http://localhost/api/analytics/overall" \
       -H "Authorization: Bearer YOUR_JWT_TOKEN"
  ```

- **Data Format**: Ensure that the data sent in POST requests is in the correct JSON format.
- **Error Handling**: Check the responses for errors and handle them accordingly in your application.# url-shortener
