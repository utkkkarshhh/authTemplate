# AuthTemplate

AuthTemplate is a basic template for implementing JWT-based authentication using Node.js, Express, MongoDB, and EJS.

## About

This repository provides a starting point for building authentication systems in Node.js applications. It includes user registration, login, and authentication using JSON Web Tokens (JWT). The template is designed to be easily customizable and extendable to fit specific project requirements.

## Tech Used

- **Node.js**: A JavaScript runtime environment that executes JavaScript code outside of a web browser.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database that provides high performance, high availability, and easy scalability.
- **EJS**: Embedded JavaScript templates for generating HTML markup with plain JavaScript.

## How to Run

To run the AuthTemplate application, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/utkkkarshhh/authTemplate
```

2. Navigate to the project directory:

```bash
cd authtemplate
```

3. Install dependencies using npm:

```bash
npm install
```

4. Set up your environment variables:
   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:
     - `PORT`: The port number for running the server.
     - `DB_URL`: The connection URL for MongoDB.
     - Other variables as needed for your specific configuration.

5. Start the server:

```bash
npm start
```

6. Access the application in your web browser:

```
http://localhost:port/
```

Replace `port` with the port number defined in your `.env` file.

You can now register, login, and authenticate users using the AuthTemplate application.

