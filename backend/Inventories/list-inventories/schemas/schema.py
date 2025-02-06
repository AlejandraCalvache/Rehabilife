import graphene
from graphene import ObjectType, Int, String, Float, List
from models.inventory_model import fetch_all_inventory
from datetime import datetime

# Definición del tipo de dato GraphQL para un inventario
class InventoryItemType(ObjectType):
    id = Int()
    name = String()
    description = String()
    quantity = Int()
    price = Float()
    createdAt = String()  # Puedes usar un custom scalar para DateTime si lo deseas

# Consulta raíz de GraphQL
class Query(ObjectType):
    # Campo 'inventory' devuelve una lista de InventoryItemType
    inventory = List(InventoryItemType)

    def resolve_inventory(root, info):
        # Aquí se podría extraer el token desde info.context y validar con utils.auth si se desea
        items = fetch_all_inventory()
        # Convertir la fecha a formato ISO (si es que viene como datetime)
        for item in items:
            if item.get("createdAt") and isinstance(item["createdAt"], datetime):
                item["createdAt"] = item["createdAt"].isoformat()
        return items

# Esquema GraphQL con la consulta definida
schema = graphene.Schema(query=Query)
