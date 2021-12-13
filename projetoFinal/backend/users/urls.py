from django.urls import path, include
from rest_framework import routers
from .views import EmployeeModelViewSet, CustomerModelViewSet
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly

router = routers.DefaultRouter()

router.register('customers', CustomerModelViewSet,
                basename="customer")
router.register('employees', EmployeeModelViewSet, basename="employee")

urlpatterns = [
    path('auth/', include('rest_framework.urls')),
    path(r'', include(router.urls))
]
