from django.shortcuts import render
from rest_framework import viewsets
from .serializers import (
    TreeSerializer,
    GardenSerializer,
    VehicleSerializer,
    FoodSerializer,
)
from .models import Tree, Garden, Vehicle, Food
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS

# from Objects.Tree import Tree as t2
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
import json
from django.http import JsonResponse
from django.db.models import Q
from .permissions import IsAuthenticatedOrReadOnly
import asyncio
from django.http import HttpResponse
# Create your views here.
from rest_framework.decorators import action

class TreeView(viewsets.ModelViewSet):
    serializer_class = TreeSerializer
    queryset = Tree.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    
    def get_queryset(self):
        tree_type = self.request.GET.get("type")
        
        # Implement your custom logic to handle the GET request
        # For example, you can filter the queryset and return specific data
        if tree_type:
            queryset = self.queryset.filter(type=tree_type)
        else:
            queryset = Tree.objects.all()
        # else:
        #     queryset = self.filter_queryset(self.get_queryset())  # Apply any queryset filtering
        serializer = self.get_serializer(queryset, many=True)
        print("go")
        serialized_data = serializer.data
        return serialized_data


class GardenView(viewsets.ModelViewSet):
    serializer_class = GardenSerializer
    queryset = Garden.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]


class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]


class FoodView(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]


# class CustomTree:
#     def __init__(self, tree_type, age, carbon_reduction, amount_carbon, description):
#         self.tree_type = tree_type
#         self.age = age
#         self.carbon_reduction = carbon_reduction
#         self.amount_carbon = amount_carbon
#         self.description = description


@api_view(["GET", "POST"])
def tree_list(request):
    print("-------------------------------------")
    print("request ", request)
    print("request.method ", request.method)

    if request.method == "GET":
        print("request.GET ", request.GET)
        try:
            tree = Tree.objects.all()
            tree_type = request.GET.get("type")
            age = request.GET.get("age")

            if tree_type:
                tree = Tree.objects.get(type=tree_type)
            else:
                serializer = TreeSerializer(tree, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            if not age:
                age = 0

            print(age)
            print("tree type", tree_type)

            amount_carbon = tree.amount_carbon
            description = tree.description
            carbon_reduction = float(int(age) * float(amount_carbon))
            custom_obj = {
                "type": tree_type,
                "age": int(age),
                "carbon_reduction": carbon_reduction,
                "amount_carbon": amount_carbon,
                "description": description,
            }
            # Convert the dictionary to a JSON string
            # json_data = json.dumps(custom_obj)
            return Response(custom_obj, status=status.HTTP_200_OK)
        except Tree.DoesNotExist:
            return Response(
                {"error": "Tree not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "POST":
        try:
            # Get the treeData from request data
            trees = request.data.get("treeData", [])
            print("tree type", trees)
            # Initialize an empty list to store the processed data
            arr = []
            trees_map = {}
            # Process each tree item
            for item in trees:
                # Create a new dictionary for each item
                tree_dict = {}

                tree_type = item.get("selectedOption")
                try:
                    # Fetch the tree object from the database
                    tree = Tree.objects.get(type=tree_type)
                except Tree.DoesNotExist:
                    return Response(
                        {"error": f'Tree with type "{tree_type}" not found'},
                        status=status.HTTP_404_NOT_FOUND,
                    )

                # Populate the dictionary with tree data
                tree_dict["type"] = tree_type
                tree_dict["total"] = float(tree.amount_carbon)*int(item.get("age"))

                # Append the dictionary to the list
                if tree_type in trees_map:
                    trees_map[tree_type] += tree_dict["total"]
                else:
                    trees_map[tree_type] = tree_dict["total"]

            for item in trees_map:
                arr.append({"type": item, "total": trees_map[item]})
                print("array", arr)

            # Return the processed data as JSON response
            return Response(arr, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def garden(request):
    print("-------------------------------------")
    print("request ", request)
    print("request.method ", request.method)

    if request.method == "GET":
        print("request.GET ", request.GET)
        try:
            garden = Garden.objects.all()
            garden_type = request.GET.get("type")
            amount = request.GET.get("amount")
            print(garden_type)
            if garden_type:
                print("good")
                garden = Garden.objects.get(type=garden_type)
                print("good")
            else:
                serializer = GardenSerializer(garden, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            # print(garden)
            if not amount:
                amount = 0

            print(amount)
            print("tree type", garden_type)

            amount_carbon = garden.amount
            description = garden.description
            carbon_reduction = float(int(amount) * float(amount_carbon))
            custom_obj = {
                "type": garden_type,
                "carbon_reduction": carbon_reduction,
                "amount_carbon": amount_carbon,
                "description": description,
            }
            # Convert the dictionary to a JSON string
            # json_data = json.dumps(custom_obj)
            return Response(custom_obj, status=status.HTTP_200_OK)
        except Garden.DoesNotExist:
            return Response(
                {"error": "Garden not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def vehicle(request):
    print("-------------------------------------")
    print("request ", request)
    print("request.method ", request.method)

    if request.method == "GET":
        print("request.GET ", request.GET)
        try:
            garden = Vehicle.objects.all()
            garden_type = request.GET.get("type")
            distance = int(request.GET.get("distance"))
            idling = int(request.GET.get("idling"))
            print(garden_type)
            if garden_type:
                print("good")
                garden = Vehicle.objects.get(type=garden_type)
                print("good")
            else:
                serializer = VehicleSerializer(garden, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            # print(garden)
            if not distance:
                distance = 0

            print(distance)
            print("tree type", garden_type)

            amount_carbon = garden.amount
            description = garden.description
            carbon_reduction_driving = float(distance * float(amount_carbon))
            carbon_reduction_idling = 0.03*idling
            total_carbon_reduction = carbon_reduction_driving + carbon_reduction_idling
            
            custom_obj = {
                "type": garden_type,
                "total_carbon_reduction": total_carbon_reduction,
                "carbon_reduction_driving": carbon_reduction_driving,
                "carbon_reduction_idling": carbon_reduction_idling,
                "distance": distance,
                "amount_carbon": amount_carbon,
                "idling": idling,
                "description": description,
            }
            # Convert the dictionary to a JSON string
            # json_data = json.dumps(custom_obj)
            return Response(custom_obj, status=status.HTTP_200_OK)
        except Vehicle.DoesNotExist:
            return Response(
                {"error": "Garden not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def food(request):
    print("-------------------------------------")
    print("request ", request)
    print("request.method ", request.method)

    if request.method == "POST":
        try:
            # Get the treeData from request data
            food = request.data.get("foodData", [])
            print("tree type", food)
            # Initialize an empty list to store the processed data
            arr = []

            # Process each tree item
            for item in food:
                # Create a new dictionary for each item
                tree_dict = {}
                food_type = str.lower(item.get("selectedOption"))
                try:
                    # Fetch the tree object from the database
                    tree = Food.objects.get(Q(type__iexact=food_type))

                    # Populate the dictionary with tree data
                    tree_dict["type"] = food_type
                    quantity = int(item.get("amount"))
                    tree_dict["total"] = float(tree.amount_carbon * quantity)

                    # Append the dictionary to the list
                    arr.append(tree_dict)
                    print("array", arr)
                except Tree.DoesNotExist:
                    return Response(
                        {"error": f'Tree with type "{food_type}" not found'},
                        status=status.HTTP_404_NOT_FOUND,
                    )

            # Return the processed data as JSON response
            return Response(arr, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    # # 2. Create
    # def post(self, request, *args, **kwargs):
    #     '''
    #     Create the Todo with given todo data
    #     '''
    #     data = {
    #         'task': request.data.get('task'),
    #         'completed': request.data.get('completed'),
    #         'user': request.user.id
    #     }
    #     serializer = EcoLearningSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)

    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class TreeApiView(APIView):
#     # add permission to check if user is authenticated
#     permission_classes = [permissions.IsAuthenticated]

#     # 1. List all
#     def get(self, request, *args, **kwargs):
#         '''
#         List all the todo items for given requested user
#         '''
#         todos = Todo.objects.filter(user = request.user.id)
#         serializer = TodoSerializer(todos, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

#     # 2. Create
#     def post(self, request, *args, **kwargs):
#         '''
#         Create the Todo with given todo data
#         '''
#         data = {
#             'task': request.data.get('task'),
#             'completed': request.data.get('completed'),
#             'user': request.user.id
#         }
#         serializer = TodoSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
