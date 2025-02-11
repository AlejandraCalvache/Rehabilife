from flask import Flask
from flask_cors import CORS
from flask_graphql import GraphQLView
from flasgger import Swagger
from dotenv import load_dotenv
from schemas.schema import schema
from utils.auth import verify_jwt

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS
Swagger(app)  # Enable Swagger UI

# GraphQL Endpoint with JWT Authentication
app.add_url_rule(
    '/graphql',
    view_func=verify_jwt(GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True  # GraphiQL UI enabled
    ))
)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5003)
