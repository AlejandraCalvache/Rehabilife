from flask import Flask
from flask_cors import CORS
from routers.update_route import update_bp

app = Flask(__name__)
CORS(app)  # Habilita CORS

# Registro de rutas
app.register_blueprint(update_bp, url_prefix="/update")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)