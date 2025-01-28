from flask import Blueprint, request, jsonify
from utils.auth import verify_jwt
from utils.db import get_db_connection
from models.inventory_model import insert_inventory_item

create_bp = Blueprint("create", __name__)

@create_bp.route("/", methods=["POST"])
@verify_jwt
def create_item():
    try:
        data = request.json
        if not data or not all(k in data for k in ("name", "description", "quantity", "price")):
            return jsonify({"mistake": "Incomplete data"}), 400
        
        name = data["name"]
        description = data["description"]
        quantity = int(data["quantity"])
        price = float(data["price"])

        connection = get_db_connection()
        insert_inventory_item(connection, name, description, quantity, price)
        connection.close()

        return jsonify({"message": "Input created successfully"}), 201

    except Exception as e:
        return jsonify({"mistake": str(e)}), 500
