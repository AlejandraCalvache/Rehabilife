from utils.db import get_db_connection

def delete_inventory_item(item_id):
    """Deletes an inventory item securely using SQL parameterization."""
    query = "DELETE FROM inventory WHERE id = %s"
    try:
        connection = get_db_connection()
        with connection.cursor() as cursor:
            cursor.execute(query, (item_id,))
            connection.commit()
            rows_affected = cursor.rowcount
        return rows_affected
    finally:
        connection.close()
