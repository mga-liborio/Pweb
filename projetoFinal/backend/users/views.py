from rest_framework.generics import CreateAPIView, ListCreateAPIView
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import ReadCustomerSerializer, WriteCustomerSerializer, ReadEmployeeSerializer, WriteEmployeeSerializer


class CustomerModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    permisison_classes = IsAdminUser

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadCustomerSerializer
        return WriteCustomerSerializer


class RegisterCustomerView(CreateAPIView):
    queryset = User.objects.filter(is_staff=False)
    permission_classes = AllowAny,
    serializer_class = WriteCustomerSerializer


class EmployeeModelViewSet(ModelViewSet):
    queryset = User.objects.filter(is_staff=True)
    permission_classes = IsAdminUser

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadEmployeeSerializer
        return WriteEmployeeSerializer
