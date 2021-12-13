from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import ReadCustomerSerializer, WriteCustomerSerializer, ReadEmployeeSerializer, WriteEmployeeSerializer


class CustomerModelViewSet(ModelViewSet):
    queryset = User.objects.filter(is_staff=False)

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadCustomerSerializer
        return WriteCustomerSerializer


class EmployeeModelViewSet(ModelViewSet):
    queryset = User.objects.filter(is_staff=True)

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadEmployeeSerializer
        return WriteEmployeeSerializer
