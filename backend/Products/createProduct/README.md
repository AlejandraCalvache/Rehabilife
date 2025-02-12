# Microservice for Create Products

<p>
This microservice performs the action of creating products in a startup called Rehabilife. It has an interface where it calls this microservice through a defined URL. The microservice performs this action through an endpoint and stores it in a postgres database that is hosted in the cloud. The use of this microservice will depend on the user's role.
</p>

#### Contributors
- Alejandra Mishell Calvache Ortiz
- Karen Chicaiza Aguirre


#### How to install and run the project? :wrench:
The project requires Node.js and npm installed on your system. To install and run the project, follow these steps:

###### Clone the repository:

- `git clone <URL_OF_REPOSITORY>`
- `cd <URL_OF_REPOSITORY> `

###### Install dependencies:

- `composer install`

###### Set environment variables:
Create a .env file in the root of the project and set the following environment variables:
- DB_USER=your_postgresql_user
- DB_HOST=your_postgresql_host
- DB_DATABASE=your_postgresql_database
- DB_PASSWORD=your_postgresql_password
- DB_PORT=server_port

###### Run the server:
- npm start

###### How to use the project
<p>
To use the microservice, follow the steps above to install and run the project. Once the program is running you can use the Rehabilife platform frontend which should also run on your local machine or you can use the Swagger documentation available, so you will no longer need to have the Rehabilife platform frontend to test this microservice.
</p>

###### Technologies used for this microservice
- **Node JS** for the backend server.
- **PostgreSQL** for the database.
- **Swagger** for API documentation.
- **Docker** for optional containerization.