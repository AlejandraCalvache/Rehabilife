from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import os
from db import db, init_db
from routers.create_route import create_bp
from dotenv import load_dotenv
from flasgger import Swagger

# Load environment variables
load_dotenv()

app = Flask(__name__)
Swagger(app)

# Configuración
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

# Inicializar extensiones
init_db(app)
CORS(app)  # Habilitar CORS en toda la aplicación
jwt = JWTManager(app)

# Registrar Blueprint
app.register_blueprint(create_bp, url_prefix="/inventory")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
