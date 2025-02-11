from flask import Blueprint, request, jsonify
from utils.auth import verify_jwt
from utils.validation import validate_inventory_data
from services.inventory_service import add_inventory_item

create_bp = Blueprint("create", __name__)

@create_bp.route("/create", methods=["POST"])
@verify_jwt
def create_item():
    """Crea un nuevo producto en el inventario."""
    data = request.json
    valid, error, status = validate_inventory_data(data)
    if not valid:
        return jsonify(error), status

    new_item = add_inventory_item(data["name"], data["description"], data["quantity"], data["price"])
    return jsonify({"message": "Producto agregado", "id": new_item.id}), 201
