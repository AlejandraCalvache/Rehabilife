from models.inventory_model import update_inventory_item

def modify_inventory_item(item_id, name=None, description=None, quantity=None, price=None):
    """
    Updates an inventory item with the provided fields.
    If a field is not provided, the existing value is retained.
    
    Args:
        item_id (int): The ID of the inventory item to update.
        name (str, optional): The new name of the item.
        description (str, optional): The new description of the item.
        quantity (int, optional): The updated quantity.
        price (float, optional): The updated price.

    Returns:
        dict: Success or error message.
        int: HTTP status code.
    """
    rows_affected = update_inventory_item(item_id, name, description, quantity, price)
    
    if rows_affected == 0:
        return {"error": "Item not found"}, 404
    
    return {"message": "Item updated successfully"}, 200
