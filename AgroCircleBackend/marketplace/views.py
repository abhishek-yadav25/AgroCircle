from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Product, Farmer, Buyer
from .serializers import ProductSerializer, FarmerSerializer, BuyerSerializer


# ---------------- PRODUCT API ----------------

@api_view(["GET"])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


# ---------------- FARMER API ----------------

@api_view(["POST"])
def farmer_register(request):
    print("POST RECEIVED")
    print(request.data)

    serializer = FarmerSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)

    print(serializer.errors)
    return Response(serializer.errors, status=400)

@api_view(["POST"])
def buyer_register(request):
    serializer = BuyerSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)