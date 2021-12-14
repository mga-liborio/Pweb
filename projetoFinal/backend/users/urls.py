from django.urls import path, include
from rest_framework import routers
from .views import EmployeeModelViewSet, CustomerModelViewSet, RegisterCustomerView

router = routers.DefaultRouter()

router.register('admin/customers', CustomerModelViewSet,
                basename="customer")
router.register('admin/employees', EmployeeModelViewSet, basename="employee")

urlpatterns = [
    # path('auth/', include('rest_framework.urls')),
    path('auth/', include('rest_auth.urls')),
    path('customer/register', RegisterCustomerView.as_view()),
    path(r'', include(router.urls))
]
