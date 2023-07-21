from django.shortcuts import render
from django.views import View
from products.models import Product
from rest_framework import generics
from django.http import HttpResponse
from products import serializers

class ProductsAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer

class ProductAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer