from django.contrib import admin
from .models import Product, Farmer, Buyer


@admin.register(Farmer)
class FarmerAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "mobile",
        "email",
        "state",
        "district",
        
    )

    search_fields = (
        "name",
        "mobile",
        "email",
    )


@admin.register(Buyer)
class BuyerAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "mobile",
        "email",
        "company",
        "state",
        "crop",
    )

    search_fields = (
        "name",
        "mobile",
        "email",
        "company",
    )


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "price",
    )