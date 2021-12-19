from django.urls import path, include
from rest_framework import routers
from .views import (CategoryModelViewSet, CategoryListRetrieveView,
                    RentModelViewSet, VehicleListRetrieveView, VehicleModelViewSet)

router = routers.DefaultRouter()


router.register('admin/vehicles', VehicleModelViewSet, basename="vehicle")
router.register('vehicles', VehicleListRetrieveView, basename="vehicle")
router.register('categories', CategoryListRetrieveView, basename="category")
router.register('admin/categories', CategoryModelViewSet,
                basename="category")
router.register('rents', RentModelViewSet,
                basename="rents")


urlpatterns = [
    path(r'', include(router.urls))
]
