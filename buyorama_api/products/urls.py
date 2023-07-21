from django.urls import path
from products import views
from products.views import ProductsAPIView, ProductAPIView

urlpatterns = [
    path('products/', ProductsAPIView.as_view()),
    path('product/<int:pk>/', ProductAPIView.as_view()),
]
