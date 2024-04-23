"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from ecoLearning import views as b2
# from .views import tree_list

#these are api tools for admin access, to add new entires and delete them
router = routers.DefaultRouter()
router.register(r'trees', b2.TreeView, basename = 'trees')
router.register(r'gardens', b2.GardenView, basename = 'gardens')
router.register(r'vehicles', b2.VehicleView, basename = 'vehicles')
router.register(r'food', b2.FoodView, basename = 'food')
router.register(r'metric', b2.MetricView, basename = 'metric')

urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/ecolearning/trees/', b2.tree_list, name = "trees"),
    path('api/ecolearning/gardens/', b2.garden, name = "gardens"),
    path('api/ecolearning/vehicles/', b2.vehicle, name = "vehicles"),
    path('api/ecolearning/food/', b2.food, name = "food"),
    # path('api/ecolearning/metric/', b2.food, name = "metric"),
    # re_path('api/ecolearning/$', b2.tree_list),
    # re_path(r'^api/ecolearning/([0-9])$', b2.TreeView.as_view({'get': 'tree'}))
    
]