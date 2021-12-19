from django.urls import path, include
from rest_framework import routers
from .views import ( ExpensesModelViewSet, IncomeModelViewSet, ProviderModelViewSet, ) 

router = routers.DefaultRouter()


router.register('admin/providers', ProviderModelViewSet, basename="provider")
router.register('admin/incomes', IncomeModelViewSet, basename="income")
router.register('admin/expenses', ExpensesModelViewSet, basename="expense")


urlpatterns = [
    path(r'', include(router.urls))
]
