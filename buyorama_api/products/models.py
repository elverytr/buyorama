from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=50)
    images = models.CharField(max_length=1000)
    price = models.IntegerField()
    stock = models.IntegerField()
    sizes = models.CharField(max_length=50)