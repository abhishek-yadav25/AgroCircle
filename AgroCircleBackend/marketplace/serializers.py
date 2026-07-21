from rest_framework import serializers
from .models import Product, Farmer,Buyer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = "__all__"

class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = "__all__"