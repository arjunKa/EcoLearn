from django.shortcuts import render
from rest_framework import viewsets
from .serializers import (
    TreeSerializer,
    GardenSerializer,
    VehicleSerializer,
    FoodSerializer,
    MetricSerializer,
    RecycleSerializer,
    ProvinceSerializer,
)
from .models import Tree, Garden, Vehicle, Food, Metric, Recycle, Province


# from Objects.Tree import Tree as t2
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.db.models import Q
from .permissions import IsAuthenticatedOrReadOnly


# Create your views here.
from rest_framework.decorators import action


class TreeView(viewsets.ModelViewSet):
    serializer_class = TreeSerializer
    queryset = Tree.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Check if the request is for a specific object by primary key
        pk = self.kwargs.get("pk")
        if pk is not None:
            return Tree.objects.filter(pk=pk)

        # If not, proceed with the original logic to filter by "type" parameter
        type = self.request.GET.get("type")
        if type:
            queryset = self.queryset.filter(Q(type__iexact=type))
        else:
            queryset = Tree.objects.all()

        return queryset


class GardenView(viewsets.ModelViewSet):
    serializer_class = GardenSerializer
    queryset = Garden.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Check if the request is for a specific object by primary key
        pk = self.kwargs.get("pk")
        if pk is not None:
            return Garden.objects.filter(pk=pk)

        # If not, proceed with the original logic to filter by "type" parameter
        type = self.request.GET.get("type")
        if type:
            queryset = self.queryset.filter(Q(type__iexact=type))
        else:
            queryset = Garden.objects.all()

        return queryset


class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Check if the request is for a specific object by primary key
        pk = self.kwargs.get("pk")
        if pk is not None:
            return Vehicle.objects.filter(pk=pk)

        # If not, proceed with the original logic to filter by "type" parameter
        type = self.request.GET.get("type")
        if type:
            queryset = self.queryset.filter(Q(type__iexact=type))
        else:
            queryset = Vehicle.objects.all()

        return queryset


class FoodView(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Check if the request is for a specific object by primary key
        pk = self.kwargs.get("pk")
        if pk is not None:
            return Food.objects.filter(pk=pk)

        # If not, proceed with the original logic to filter by "type" parameter
        type = self.request.GET.get("type")
        if type:
            queryset = self.queryset.filter(Q(type__iexact=type))
        else:
            queryset = Food.objects.all()

        return queryset


class RecycleView(viewsets.ModelViewSet):
    serializer_class = RecycleSerializer
    queryset = Recycle.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Check if the request is for a specific object by primary key
        pk = self.kwargs.get("pk")
        if pk is not None:
            return Recycle.objects.filter(pk=pk)

        # If not, proceed with the original logic to filter by "type" parameter
        type = self.request.GET.get("type")
        if type:
            queryset = self.queryset.filter(Q(type__iexact=type))
        else:
            queryset = Recycle.objects.all()

        return queryset


class ProvinceView(viewsets.ModelViewSet):
    serializer_class = ProvinceSerializer
    queryset = Province.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Check if the request is for a specific object by primary key
        pk = self.kwargs.get("pk")
        if pk is not None:
            return Province.objects.filter(pk=pk)

        # If not, proceed with the original logic to filter by "type" parameter
        name = self.request.GET.get("name")
        if name:
            queryset = self.queryset.filter(Q(name__iexact=name))
        else:
            queryset = Province.objects.all()

        return queryset


class MetricView(viewsets.ModelViewSet):
    serializer_class = MetricSerializer
    queryset = Metric.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        # Check if the request is for a specific object by primary key
        pk = self.kwargs.get("pk")
        if pk is not None:
            return Metric.objects.filter(pk=pk)

        # If not, proceed with the original logic to filter by "type" parameter
        type = self.request.GET.get("type")
        if type:
            queryset = self.queryset.filter(Q(type__iexact=type))
        else:
            queryset = Metric.objects.all()

        return queryset


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
                tree = Tree.objects.get(Q(type__iexact=tree_type))
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
            total = 0
            # Process each tree item
            for item in trees:
                # Create a new dictionary for each item
                tree_dict = {}
                tree_type = item.get("selectedOption")
                quantity = int(item.get("age"))

                try:
                    # Fetch the tree object from the database
                    tree = Tree.objects.get(Q(type__iexact=tree_type))
                except Tree.DoesNotExist:
                    return Response(
                        {"error": f'Tree with type "{tree_type}" not found'},
                        status=status.HTTP_404_NOT_FOUND,
                    )
                print("trees array:", arr)

                check = False
                for ele in arr:
                    if ele["type"] == tree_type:
                        ele["total"] += float(tree.amount_carbon) * quantity
                        ele["quantity"] += quantity
                        total += float(tree.amount_carbon) * quantity
                        print("tree found")
                        check = True
                        break
                if check:
                    continue

                # Populate the dictionary with tree data
                tree_dict["type"] = tree_type
                tree_dict["total"] = float(tree.amount_carbon) * quantity
                tree_dict["amount_carbon"] = float(tree.amount_carbon)
                tree_dict["quantity"] = quantity
                total += float(tree.amount_carbon) * quantity

                arr.append(tree_dict)
            print("trees array:", arr)

            # Return the processed data as JSON response
            obj = {"list": arr, "total": total}
            # arr.append([{'total':total}])
            print(obj)
            return Response(obj, status=status.HTTP_200_OK)

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
            quantity = int(request.GET.get("quantity"))
            print(garden_type)
            if garden_type:
                print("good")
                garden = Garden.objects.get(Q(type__iexact=garden_type))
                print("good")
            else:
                serializer = GardenSerializer(garden, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            # print(garden)
            if not quantity:
                quantity = 0

            print(quantity)
            print("tree type", garden_type)

            amount_carbon = garden.amount_carbon
            description = garden.description
            carbon_reduction = float(quantity * float(amount_carbon))
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
            vehicle = Vehicle.objects.all()
            vehicle_type = request.GET.get("type")
            distance = float(request.GET.get("distance"))
            idling = float(request.GET.get("idling"))

            print("distance", distance)
        except Vehicle.DoesNotExist:
            return Response(
                {"error": "Garden not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        # print(garden_type)
        if vehicle_type:
            # print("good")
            garden = Vehicle.objects.get(Q(type__iexact=vehicle_type))
            # print("good")
        else:
            serializer = VehicleSerializer(vehicle, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        # print(garden)
        if not distance:
            distance = 0

        print(distance)
        # print("tree type", vehicle_type)

        amount_carbon = float(garden.amount_carbon)
        description = garden.description
        carbon_reduction_driving = distance * amount_carbon
        carbon_reduction_idling = 0.03 * idling
        total_carbon_reduction = carbon_reduction_driving + carbon_reduction_idling

        custom_obj = {
            "type": vehicle_type,
            "total_carbon_reduction": round(total_carbon_reduction, 2),
            "carbon_reduction_driving": round(carbon_reduction_driving, 2),
            "carbon_reduction_idling": round(carbon_reduction_idling, 2),
            "distance": distance,
            "amount_carbon": amount_carbon,
            "idling": idling,
            "description": description,
        }
        print(custom_obj)
        # Convert the dictionary to a JSON string
        # json_data = json.dumps(custom_obj)
        return Response(custom_obj, status=status.HTTP_200_OK)


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
            total = 0

            # Process each tree item
            for item in food:
                # Create a new dictionary for each item
                tree_dict = {}
                food_type = str.lower(item.get("selectedOption"))
                quantity = float(item.get("quantity"))
                try:
                    # Fetch the tree object from the database
                    tree = Food.objects.get(Q(type__iexact=food_type))

                except Tree.DoesNotExist:
                    return Response(
                        {"error": f'Tree with type "{food_type}" not found'},
                        status=status.HTTP_404_NOT_FOUND,
                    )

                # Populate the dictionary with tree data
                tree_dict["type"] = food_type

                check = False
                for ele in arr:
                    if ele["type"] == food_type:
                        ele["total"] += float(tree.amount_carbon) * quantity
                        ele["quantity"] += quantity
                        total += float(tree.amount_carbon) * quantity
                        check = True
                        break
                if check:
                    continue

                tree_dict["quantity"] = quantity
                tree_dict["total"] = float(tree.amount_carbon) * quantity
                total += float(tree.amount_carbon) * quantity

                # Append the dictionary to the list
                arr.append(tree_dict)
                print("array", arr)

            obj = {"list": arr, "total": total}

            # Return the processed data as JSON response
            return Response(obj, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
