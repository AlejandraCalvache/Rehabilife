def update_inventory_item(connection, item_id, name, description, quantity, price):
    query = """
        UPDATE inventory
        SET name = COALESCE(%s, name),
            description = COALESCE(%s, description),
            quantity = COALESCE(%s, quantity),
            price = COALESCE(%s, price)
        WHERE id = %s
    """
    with connection.cursor() as cursor:
        rows_affected = cursor.execute(query, (name, description, quantity, price, item_id))
        connection.commit()
        return rows_affected
