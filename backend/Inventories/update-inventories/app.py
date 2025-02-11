from flask import Flask
from flask_cors import CORS
from flasgger import Swagger
from dotenv import load_dotenv
from routers.update_route import update_bp

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__)
CORS(app)  # Habilita CORS
Swagger(app)  # Habilita Swagger UI

# Registrar rutas
app.register_blueprint(update_bp, url_prefix="/update")

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
