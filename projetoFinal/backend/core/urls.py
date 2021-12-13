from .views import CategoryModelViewSet, RentModelViewSet, VehicleModelViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()


router.register('categories', CategoryModelViewSet,
                basename="category")
router.register('rents', RentModelViewSet,
                basename="rents")
router.register('vehicles', VehicleModelViewSet, basename="vehicle")

urlpatterns = [
    path(r'', include(router.urls))
]
