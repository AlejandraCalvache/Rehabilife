from flask import Flask
from flask_cors import CORS
from routers.create_route import create_bp

app = Flask(__name__)
CORS(app)  # Habilita CORS para permitir solicitudes desde otros orígenes

# Registro de rutas
app.register_blueprint(create_bp, url_prefix="/create")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
