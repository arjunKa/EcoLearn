from rest_framework import serializers
from .models import Tree, Garden, Vehicle, Food, Metric, Recycle, Province

# class EcoLearningSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tree
#         fields = ('type', 'amount_carbon', 'description',)
        
class TreeSerializer(serializers.ModelSerializer):
    # type = serializers.CharField(max_length=100)
    # amount_carbon = serializers.DecimalField(max_digits=10, decimal_places=2)
    # description = serializers.CharField(default ="text")
    class Meta:
        model = Tree
        fields = '__all__'
        
class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garden
        fields = '__all__'
        
class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'
        
class MetricSerializer(serializers.ModelSerializer):

    class Meta:
        model = Metric
        fields = '__all__'
 
class RecycleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recycle
        fields = '__all__'
        
class ProvinceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Province
        fields = '__all__'    
        
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