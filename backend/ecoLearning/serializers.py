from rest_framework import serializers
from .models import Tree

# class EcoLearningSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tree
#         fields = ('type', 'amount_carbon', 'description',)
        
class TreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = ('type', 'amount_carbon', 'description')
        
# class CustomTreeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tree
#         fields = ('type', 'amount_carbon', 'description', 'carbon_reduction', 'age')
    
    
#     type = serializers.CharField()
#     age = serializers.IntegerField()
#     carbon_reduction = serializers.DecimalField(max_digits=10, decimal_places=2)
#     amount_carbon = serializers.DecimalField(max_digits=10, decimal_places=2)
#     description = serializers.CharField()
    #     type = models.CharField(max_length=100)
#     amount_carbon = models.DecimalField(max_digits=10, decimal_places=2)
#     description = models.TextField(default ="text")
#     age = models.IntegerField()
#     carbon_reduction = models.DecimalField(max_digits=10, decimal_places=2)