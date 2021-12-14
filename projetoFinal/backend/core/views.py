
from rest_framework.permissions import BasePermission, IsAdminUser
from rest_framework.viewsets import ModelViewSet
from core.models import Category, Vehicle, Rent
from core.serializers import ReadCategorySerializer, ReadRentSerializer, ReadVehicleSerializer, WriteCategorySerializer, WriteRentSerializer, WriteVehicleSerializer


class VehicleListRetrieveView(ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = ReadVehicleSerializer


class CategoryListRetrieveView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = ReadCategorySerializer


class VehicleModelViewSet(ModelViewSet):
    queryset = Vehicle.objects.all()
    permission_classes = IsAdminUser

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadVehicleSerializer
        return WriteVehicleSerializer


class CategoryModelViewSet(ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = IsAdminUser

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadCategorySerializer
        return WriteCategorySerializer


class RentPermissions(BasePermission):
    message = "This Rent is only for the owner"

    def has_object_permission(self, request, view, obj):
        return (obj.customer == request.user) or IsAdminUser


class RentModelViewSet(ModelViewSet, RentPermissions):
    queryset = Rent.objects.all()
    permission_classes = [RentPermissions]

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadRentSerializer
        return WriteRentSerializer
