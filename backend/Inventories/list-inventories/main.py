from flask import Flask
from flask_cors import CORS
from flask_graphql import GraphQLView
from schemas.schema import schema

app = Flask(__name__)
CORS(app)  # Permite solicitudes CORS desde cualquier origen

# Configuración del endpoint GraphQL en /graphql con la interfaz GraphiQL
app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True  # Interfaz para pruebas
    )
)

if __name__ == '__main__':
    # Cambiamos el puerto a 5003
    app.run(debug=True, host="0.0.0.0", port=5003)
