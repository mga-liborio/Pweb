from .views import BookingOptionsModelViewSet, ChecklistModelViewSet, InsuranceModelViewSet, ServiceModelViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.SimpleRouter()


router.register(r'services', ServiceModelViewSet, basename="services")
router.register(r'booking-options', BookingOptionsModelViewSet,
                basename="booking-option")
router.register(r'insurances', InsuranceModelViewSet,
                basename="insurance")
router.register(r'checklists', ChecklistModelViewSet,
                basename="checklist")

urlpatterns = [
    path('', include(router.urls)),
]
