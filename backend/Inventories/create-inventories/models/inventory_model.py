def insert_inventory_item(connection, name, description, quantity, price):
    query = """
        INSERT INTO inventory (name, description, quantity, price)
        VALUES (%s, %s, %s, %s)
    """
    with connection.cursor() as cursor:
        cursor.execute(query, (name, description, quantity, price))
        connection.commit()
