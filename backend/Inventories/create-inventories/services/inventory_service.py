from models.inventory_model import db, Inventory

def add_inventory_item(name, description, quantity, price):
    """Add a new product to the inventory"""
    new_item = Inventory(name=name, description=description, quantity=quantity, price=price)
    db.session.add(new_item)
    db.session.commit()
    return new_item
