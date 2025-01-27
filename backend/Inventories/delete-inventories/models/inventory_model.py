def delete_inventory_item(connection, item_id):
    query = "DELETE FROM inventory WHERE id = %s"
    with connection.cursor() as cursor:
        rows_affected = cursor.execute(query, (item_id,))
        connection.commit()
        return rows_affected
