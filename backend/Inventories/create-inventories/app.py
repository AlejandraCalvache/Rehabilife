from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
import os
from models.inventory_model import db, Inventory
from dotenv import load_dotenv

# Cargar variables de entorno
load_dotenv()

app = Flask(__name__)

# Configuración de la base de datos y seguridad
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

# Inicialización de extensiones
db.init_app(app)
CORS(app)
jwt = JWTManager(app)

@app.route("/inventory", methods=["POST"])
#@jwt_required()#
def create_inventory():
    try:
        data = request.get_json()

        # Validación de datos
        if not data or not all(k in data for k in ("name", "description", "quantity", "price")):
            return jsonify({"error": "Faltan datos"}), 400

        # Crear insumo
        new_item = Inventory(
            name=data["name"],
            description=data["description"],
            quantity=data["quantity"],
            price=data["price"]
        )

        db.session.add(new_item)
        db.session.commit()

        return jsonify({"message": "Insumo creado exitosamente"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
