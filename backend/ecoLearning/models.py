from django.db import models

class Tree(models.Model):
    # id = models.IntegerField(primary_key=True)
    type = models.CharField(max_length=100)
    amount_carbon = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(default ="text")

class Garden(models.Model):
    # id = models.IntegerField(primary_key=True)
    type = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=4)
    description = models.TextField(default ="text")
   
class Vehicle(models.Model):
    # id = models.IntegerField(primary_key=True)
    type = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=4)
    description = models.TextField(default ="text")
    
class Food(models.Model):
    # id = models.IntegerField(primary_key=True)
    type = models.CharField(max_length=100)
    amount_carbon = models.DecimalField(max_digits=6, decimal_places=4)
    per_year = models.IntegerField()
    description = models.TextField(default ="text")

# class Tree2(models.Model):
#     type = models.CharField(max_length=100)
#     amount_carbon = models.DecimalField(max_digits=10, decimal_places=2)
#     description = models.TextField(default ="text")
#     age = models.IntegerField()
#     carbon_reduction = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.age} year old {self.type} with {self.amount_carbon} carbon"



