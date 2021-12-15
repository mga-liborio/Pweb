from financial.models import Expenses, Income, Providers
from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet
from financial.serializers import ( ReadExpensesSerializer, ReadIncomeSerializer, ReadProviderSerializer, WriteExpensesSerilizers, WriteIncomeSerializer, WriteProvideSerializer )

class ProviderModelViewSet(ModelViewSet):
    queryset = Providers.objects.all()
    permission_classes = [IsAdminUser, ]

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadProviderSerializer
        return WriteProvideSerializer

class IncomeModelViewSet(ModelViewSet):
    queryset = Income.objects.all()
    permission_classes = [IsAdminUser, ]

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadIncomeSerializer
        return WriteIncomeSerializer

class ExpensesModelViewSet(ModelViewSet):
    queryset = Expenses.objects.all()
    permission_classes = [IsAdminUser, ]

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadExpensesSerializer
        return WriteExpensesSerilizers
