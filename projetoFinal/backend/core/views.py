from rest_framework.permissions import BasePermission
from rest_framework.viewsets import ModelViewSet
from core.models import Category, Vehicle, Rent
from core.serializers import ReadCategorySerializer, ReadRentSerializer, ReadVehicleSerializer, WriteCategorySerializer, WriteRentSerializer, WriteVehicleSerializer


class VehicleModelViewSet(ModelViewSet):
    queryset = Vehicle.objects.all()

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadVehicleSerializer
        return WriteVehicleSerializer


class CategoryModelViewSet(ModelViewSet):
    queryset = Category.objects.all()

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadCategorySerializer
        return WriteCategorySerializer


class RentPermission(BasePermission):
    message = "This Rent is only for the owner"

    def has_object_permission(self, request, view, obj):
        if request.user.is_admin or request.user.is_staff:
            return True
        return obj.customer == request.user


class RentModelViewSet(ModelViewSet):
    queryset = Rent.objects.all()

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadRentSerializer
        return WriteRentSerializer
