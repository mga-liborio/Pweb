from .views import CategoryModelViewSet, ReservationModelViewSet, VehicleModelViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.SimpleRouter()


router.register(r'categories', CategoryModelViewSet,
                basename="category")
router.register(r'reservations', ReservationModelViewSet,
                basename="reservation")
router.register(r'vehicles', VehicleModelViewSet, basename="vehicle")

urlpatterns = [
    path('', include(router.urls))
]
