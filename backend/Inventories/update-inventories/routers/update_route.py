from flask import Blueprint, request, jsonify
from utils.auth import verify_jwt
from services.update_service import modify_inventory_item

update_bp = Blueprint("update", __name__)

@update_bp.route("/<int:item_id>", methods=["PUT"])
@verify_jwt
def update_item(item_id):
    """Endpoint to update an inventory item by ID."""
    data = request.json
    if not data:
        return jsonify({"error": "Missing data"}), 400

    response, status = modify_inventory_item(
        item_id,
        data.get("name"),
        data.get("description"),
        data.get("quantity"),
        data.get("price")
    )
    return jsonify(response), status
