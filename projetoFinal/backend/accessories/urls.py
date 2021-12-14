from .views import BookingOptionsListRetrieveView, BookingOptionsModelViewSet, ChecklistModelViewSet, InsuranceModelViewSet, ServiceListRetrieveView, ServiceModelViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()


router.register('services', ServiceListRetrieveView, basename="services")
router.register('booking-options', BookingOptionsListRetrieveView,
                basename="booking-option")
router.register('insurances', ServiceModelViewSet, basename="insurance")
router.register('checklists', ServiceModelViewSet, basename="checklist")
router.register('admin/services', ServiceModelViewSet, basename="services")
router.register('admin/booking-options', BookingOptionsModelViewSet,
                basename="booking-option")
router.register('admin/insurances', InsuranceModelViewSet,
                basename="insurance")
router.register('admin/checklists', ChecklistModelViewSet,
                basename="checklist")

urlpatterns = [
    path(r'', include(router.urls)),
]
