from django.urls import path
from .views import product_list, farmer_register, buyer_register

urlpatterns = [
    path("products/", product_list, name="product-list"),
    path("farmers/", farmer_register, name="farmer-register"),
    path("buyers/", buyer_register, name="buyer-register"),
]