from utils.db import get_db_connection

def fetch_all_inventory():
    """Fetch all inventory items securely using SQL parameterization."""
    query = "SELECT id, name, description, quantity, price, created_at FROM inventory"
    try:
        connection = get_db_connection()
        with connection.cursor() as cursor:
            cursor.execute(query)
            result = cursor.fetchall()
    finally:
        connection.close()
    return result
