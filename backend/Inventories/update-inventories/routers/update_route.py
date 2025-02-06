from flask import Blueprint, request, jsonify
from utils.auth import verify_jwt
from utils.db import get_db_connection
from models.inventory_model import update_inventory_item

update_bp = Blueprint("update", __name__)

@update_bp.route("/<int:item_id>", methods=["PUT"])
@verify_jwt
def update_item(item_id):
    try:
        data = request.json
        if not data:
            return jsonify({"error": "Datos incompletos"}), 400

        name = data.get("name")
        description = data.get("description")
        quantity = data.get("quantity")
        price = data.get("price")

        connection = get_db_connection()
        rows_affected = update_inventory_item(connection, item_id, name, description, quantity, price)
        connection.close()

        if rows_affected == 0:
            return jsonify({"error": "Insumo no encontrado"}), 404

        return jsonify({"message": "Insumo actualizado exitosamente"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
