# CreateCategories Microservice

This is a microservice that manages the creation of product categories in an inventory management system. It uses Node.js, Sequelize, and Docker, and is deployed on AWS EC2.

## Features

- **Create categories**: Allows the creation of new product categories through a RESTful API.
- **Dockerized**: The service is designed to run inside a Docker container.
- **Swagger Documentation**: The API is documented using Swagger UI, making it easy to use and understand.
- **Automated Deployment**: GitHub Actions is used to build the Docker image and automatically deploy it to AWS EC2.

## Architecture

This service consists of:

1. **Node.js Backend**: Using Express as the web server and Sequelize for interacting with the PostgreSQL database.
2. **Database**: PostgreSQL, configured through environment variables.
3. **Docker**: The application runs inside a Docker container.
4. **Deployment on AWS EC2**: The service is automatically deployed to an EC2 instance in the cloud.

## Requirements

To run this project locally, make sure you have the following requirements:

- **Node.js**: version 18 or higher.
- **Docker**: To build and run the containers.
- **PostgreSQL**: A database configured with the appropriate credentials.


