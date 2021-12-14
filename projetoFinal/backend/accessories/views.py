from django.db.models import query
from rest_framework.decorators import permission_classes
from rest_framework.permissions import BasePermission, IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from accessories.models import BookingOptions, Checklist, Insurance, Service
from accessories.serializers import ReadBookingOptionsSerializer, ReadChecklistSerializer, ReadInsuranceSerializer, ReadServiceSerializer, WriteBookingOptionsSerializer, WriteChecklistSerializer, WriteInsuranceSerializer, WriteServiceSerializer


class ServiceListRetrieveView(ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ReadServiceSerializer


class InsuranceListRetrieveView(ModelViewSet):
    queryset = Insurance.objects.all()
    serializer_class = ReadInsuranceSerializer


class BookingOptionsListRetrieveView(ModelViewSet):
    queryset = BookingOptions.objects.all()
    serializer_class = ReadBookingOptionsSerializer


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


class ChecklistPermissions(BasePermission):
    message = "This Checklist is only for the owner"

    def has_object_permission(self, request, view, obj):
        return obj.customer == request.user and IsAuthenticated or IsAdminUser


class ChecklistModelViewSet(ModelViewSet, ChecklistPermissions):
    queryset = Checklist.objects.all()
    permission_classes = [ChecklistPermissions]

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return ReadChecklistSerializer
        return WriteChecklistSerializer
