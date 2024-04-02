from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TreeSerializer
from .models import Tree
# from Objects.Tree import Tree as t2
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
import json
from django.http import JsonResponse

# Create your views here.

class TreeView(viewsets.ModelViewSet):
    serializer_class = TreeSerializer
    queryset = Tree.objects.all()
    

    
# class CustomTree:
#     def __init__(self, tree_type, age, carbon_reduction, amount_carbon, description):
#         self.tree_type = tree_type
#         self.age = age
#         self.carbon_reduction = carbon_reduction
#         self.amount_carbon = amount_carbon
#         self.description = description
    
@api_view(['GET','POST'])
def tree_list(request):
    print("-------------------------------------")
    print("request ",request)
    print("request.method ",request.method)
  
    if request.method == 'GET':
        print("request.GET ",request.GET)
        try:
            tree = Tree.objects.all()
            tree_type = request.GET.get('type')
            age = request.GET.get('age')

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
            carbon_reduction = float(int(age)*float(amount_carbon))
            custom_obj = {
                'type': tree_type,
                'age': int(age),
                'carbon_reduction': carbon_reduction,
                'amount_carbon': amount_carbon,
                'description': description
            }
            # Convert the dictionary to a JSON string
            # json_data = json.dumps(custom_obj)
            return Response(custom_obj, status=status.HTTP_200_OK)
        except Tree.DoesNotExist:
            return Response({'error': 'Tree not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
    if request.method == 'POST':
        try:
            # Get the treeData from request data
            trees = request.data.get('treeData', [])
            print("tree type", trees)
            # Initialize an empty list to store the processed data
            arr = []

            # Process each tree item
            for item in trees:
                # Create a new dictionary for each item
                tree_dict = {}
                tree_type = item.get('selectedOption')
                try:
                    # Fetch the tree object from the database
                    tree = Tree.objects.get(type=tree_type)
                    
                    # Populate the dictionary with tree data
                    tree_dict['type'] = tree_type
                    tree_dict['total'] = float(tree.amount_carbon)
                    
                    # Append the dictionary to the list
                    arr.append(tree_dict)
                    print("array", arr)
                except Tree.DoesNotExist:
                    return Response({'error': f'Tree with type "{tree_type}" not found'}, status=status.HTTP_404_NOT_FOUND)
            
            # Return the processed data as JSON response
            return Response(arr, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

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