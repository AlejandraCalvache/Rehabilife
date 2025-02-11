from utils.db import get_db_connection

def update_inventory_item(item_id, name, description, quantity, price):
    """Update inventory item securely using SQL parameterization."""
    query = """
        UPDATE inventory
        SET name = COALESCE(%s, name),
            description = COALESCE(%s, description),
            quantity = COALESCE(%s, quantity),
            price = COALESCE(%s, price)
        WHERE id = %s
    """
    try:
        connection = get_db_connection()
        with connection.cursor() as cursor:
            cursor.execute(query, (name, description, quantity, price, item_id))
            connection.commit()
            rows_affected = cursor.rowcount
        return rows_affected
    finally:
        connection.close()
