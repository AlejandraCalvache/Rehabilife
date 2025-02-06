from flask import Flask
from flask_cors import CORS
from routers.delete_route import delete_bp

app = Flask(__name__)
CORS(app)  # Habilita CORS

# Registro de rutas
app.register_blueprint(delete_bp, url_prefix="/delete")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5002)
