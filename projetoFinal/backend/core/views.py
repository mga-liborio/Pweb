from rest_framework.viewsets import ModelViewSet

from core.models import Category, Vehicle, Reservation
from core.serializers import ReadCategorySerializer, ReadReservationSerializer, ReadVehicleSerializer, WriteCategorySerializer, WriteReservationSerializer, WriteVehicleSerializer


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


class ReservationModelViewSet(ModelViewSet):
    queryset = Reservation.objects.all()

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadReservationSerializer
        return WriteReservationSerializer
