from django.db.models import query
from rest_framework import serializers
from core.models import Category, Rent, Vehicle
from users.models import User


class ReadCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name", "passengers", "price")
    # read_only_fields = fields


class WriteCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("name", "passengers", "price")


class ReadVehicleSerializer(serializers.ModelSerializer):
    category = ReadCategorySerializer()

    class Meta:
        model = Vehicle
        fields = ("id", "license_plate", "color", "brand", "car_model", "year", "category", "chassi_number", "renavam", "price",
                  "have_gps", "is_for_pcd", "kilometers", "full_tank", "fuel_liters", "status")
        read_only_fields = fields


class WriteVehicleSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        slug_field="name", queryset=Category.objects.all())

    class Meta:
        model = Vehicle
        fields = ("license_plate", "color", "brand", "car_model", "year", "category", "chassi_number", "renavam", "price",
                  "have_gps", "is_for_pcd", "kilometers", "full_tank", "fuel_liters", "status")


class WriteRentSerializer(serializers.ModelSerializer):
    vehicle = serializers.SlugRelatedField(
        slug_field="license_plate", queryset=Vehicle.objects.all())
    customer = serializers.SlugRelatedField(
        slug_field="email", queryset=User.objects.all())

    class Meta:
        model = Rent
        fields = ("vehicle", "start_date", "end_date", "return_date",
                  "is_approved", "total_price", "is_returned")


class ReadRentSerializer(serializers.ModelSerializer):
    vehicle = serializers.SlugRelatedField(
        slug_field="license_plate", queryset=Vehicle.objects.all())

    class Meta:
        model = Rent
        fields = ("id", "vehicle", "start_date", "return_date",
                  "is_approved", "total_price", "is_returned")
        read_only_fields = fields
