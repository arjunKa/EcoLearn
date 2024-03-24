from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    
    def _str_(self):
        return self.title
    
class Tree(models.Model):
    age = models.IntegerField()
    type_tree = models.CharField(max_length=100)
    amount_carbon = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.age} year old {self.type_tree} with {self.amount_carbon} carbon"


