from models.inventory_model import delete_inventory_item

def remove_inventory_item(item_id):
    """Handles inventory item deletion logic."""
    rows_affected = delete_inventory_item(item_id)
    if rows_affected == 0:
        return {"error": "Item not found"}, 404
    return {"message": "Item deleted successfully"}, 200
