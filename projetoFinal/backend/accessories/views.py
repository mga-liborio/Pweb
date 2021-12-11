from rest_framework.viewsets import ModelViewSet
from accessories.models import BookingOptions, Checklist, Insurance, Service
from accessories.serializers import ReadBookingOptionsSerializer, ReadChecklistSerializer, ReadInsuranceSerializer, ReadServiceSerializer, WriteBookingOptionsSerializer, WriteChecklistSerializer, WriteInsuranceSerializer, WriteServiceSerializer


class ServiceModelViewSet(ModelViewSet):
    queryset = Service.objects.all()

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadServiceSerializer
        return WriteServiceSerializer


class InsuranceModelViewSet(ModelViewSet):
    queryset = Insurance.objects.all()

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadInsuranceSerializer
        return WriteInsuranceSerializer


class BookingOptionsModelViewSet(ModelViewSet):
    queryset = BookingOptions.objects.all()

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadBookingOptionsSerializer
        return WriteBookingOptionsSerializer


class ChecklistModelViewSet(ModelViewSet):
    queryset = Checklist.objects.all()

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadChecklistSerializer
        return WriteChecklistSerializer
