import graphene
from graphene import ObjectType, Int, String, Float, List
from services.inventory_service import get_inventory_items

class InventoryItemType(ObjectType):
    id = Int()
    name = String()
    description = String()
    quantity = Int()
    price = Float()
    created_at = String()

class Query(ObjectType):
    inventory = List(InventoryItemType)

    def resolve_inventory(root, info):
        return get_inventory_items()

schema = graphene.Schema(query=Query)
