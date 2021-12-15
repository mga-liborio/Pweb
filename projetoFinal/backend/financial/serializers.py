from django.db import models
from accessories.models import Service
from accessories.serializers import ReadServiceSerializer
from core.models import Rent, Vehicle
from core.serializers import ReadRentSerializer, ReadVehicleSerializer
from rest_framework import serializers
from users.models import Address
from users.serializers import ReadAddressSerializer
from .models import Providers, Expenses, Income


class ReadProviderSerializer(serializers.ModelSerializer):
    address = ReadAddressSerializer()
    serivices = ReadServiceSerializer()

    class Meta:
        model = Providers
        fields = ("name", "email", "email2", "email3", "cellphone", 
        "phone", "cnpj", "address", "services" )
        read_only_fields = fields


class ReadIncomeSerializer(serializers.ModelSerializer):
    rent = ReadRentSerializer()

    class Meta:
        model = Income
        fields = ("name", "date", "price", "rent", "description")
        read_only_fields = fields


class ReadExpensesSerializer(serializers.ModelSerializer):
    service = ReadServiceSerializer()
    service = ReadVehicleSerializer()


    class Meta:
        model = Expenses
        fields =  ("service", "vehicle", "employeed", "description", "price", "category" )
        read_only_fields = fields


class WriteProvideSerializer(serializers.ModelSerializer):
    address = serializers.SlugRelatedField(
        slug_field="name", queryset=Address.objects.all())
    services = serializers.SlugRelatedField(
        slug_field="name", queryset=Service.objects.all())

    class Meta:
        model = Providers
        fields = ("name", "email", "email2", "email3", "cellphone", 
        "phone", "cnpj", "address", "services" )



class WriteExpensesSerilizers(serializers.ModelSerializer): 
    service = serializers.SlugRelatedField(
        slug_field="name", queryset=Service.objects.all())
    vehicle = serializers.SlugRelatedField(
        slug_field="license_plate", queryset=Vehicle.objects.all())

    class Meta:
      model = Expenses
      fields =  ("service", "vehicle", "employeed", "description", "price", "category" )


class WriteIncomeSerializer(serializers.ModelSerializer):
    rent = serializers.SlugRelatedField(
        slug_field="id", queryset=Rent.objects.all())

    class Meta:
      model = Income
      fields = ("name", "date", "price", "rent", "description")
