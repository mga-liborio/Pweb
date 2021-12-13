from .views import BookingOptionsModelViewSet, ChecklistModelViewSet, InsuranceModelViewSet, ServiceModelViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()


router.register('services', ServiceModelViewSet, basename="services")
router.register('booking-options', BookingOptionsModelViewSet,
                basename="booking-option")
router.register('insurances', InsuranceModelViewSet,
                basename="insurance")
router.register('checklists', ChecklistModelViewSet,
                basename="checklist")

urlpatterns = [
    path(r'', include(router.urls)),
]
