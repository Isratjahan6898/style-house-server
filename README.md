# Backend - Product Filtering and Pagination

## Project Overview

This is the backend of the Product Filtering and Pagination project. The API is built using Node.js, Express.js, and MongoDB. It provides endpoints for retrieving products with filtering, pagination, and sorting functionalities.

## Installation

To get started, clone the repository using `git clone https://github.com/yourusername/backend-repo.git` and navigate to the project directory with `cd backend-repo`. Once inside the directory, install the necessary dependencies by running `npm install`.

## Project Setup

For the project setup, you will need to create a `.env` file in the root directory with environment variables such as `PORT=5000` and `MONGO_URI=your_mongodb_connection_string`. After setting up the environment variables, you can start the development server using `npm run dev`. This will start the server on [http://localhost:5000](http://localhost:5000). To run the server in production mode, use `npm start`. Ensure that you have a MongoDB database set up and connected via the `MONGO_URI` in your `.env` file.

## Dependencies

This project relies on several key dependencies, including Express.js for building the web application framework, Mongoose for MongoDB object modeling, dotenv for environment variable management, Cors for handling Cross-Origin Resource Sharing, and Morgan for HTTP request logging.

## Contributing

We welcome contributions! If you’d like to contribute, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
