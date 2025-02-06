from flask import Blueprint, jsonify
from utils.auth import verify_jwt
from utils.db import get_db_connection
from models.inventory_model import delete_inventory_item

delete_bp = Blueprint("delete", __name__)

@delete_bp.route("/<int:item_id>", methods=["DELETE"])
@verify_jwt
def delete_item(item_id):
    try:
        connection = get_db_connection()
        rows_affected = delete_inventory_item(connection, item_id)
        connection.close()

        if rows_affected == 0:
            return jsonify({"error": "Insumo no encontrado"}), 404

        return jsonify({"message": "Insumo eliminado exitosamente"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
