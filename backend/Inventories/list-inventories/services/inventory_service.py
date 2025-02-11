from models.inventory_model import fetch_all_inventory
from datetime import datetime

def get_inventory_items():
    """Fetch and format inventory items."""
    items = fetch_all_inventory()
    for item in items:
        if item.get("created_at") and isinstance(item["created_at"], datetime):
            item["created_at"] = item["created_at"].isoformat()
    return items
