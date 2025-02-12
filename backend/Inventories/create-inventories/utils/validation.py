def validate_inventory_data(data):
    """Valida que los datos de un producto sean correctos."""
    required_keys = {"name", "description", "quantity", "price"}
    if not data or not required_keys.issubset(data.keys()):
        return False, {"error": "Faltan datos"}, 400
    
    if not isinstance(data["quantity"], int) or data["quantity"] <= 0:
        return False, {"error": "Invalid amount"}, 400
    
    if not isinstance(data["price"], (int, float)) or data["price"] <= 0:
        return False, {"error": "Invalid price"}, 400
    
    return True, None, None
