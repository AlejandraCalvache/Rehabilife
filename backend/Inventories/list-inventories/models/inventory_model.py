from utils.db import get_db_connection

def fetch_all_inventory():
    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:
            query = "SELECT id, name, description, quantity, price, created_at FROM inventory"
            cursor.execute(query)
            result = cursor.fetchall()
    finally:
        connection.close()
    return result
