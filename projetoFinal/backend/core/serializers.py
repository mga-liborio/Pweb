from rest_framework import serializers
from core.models import Category, Reservation, Vehicle


class ReadCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("id", "name", "passengers")
    # read_only_fields = fields


class WriteCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("name", "passengers")


class ReadVehicleSerializer(serializers.ModelSerializer):
    category = ReadCategorySerializer()

    class Meta:
        model = Vehicle
        fields = ("id", "license_plate", "color", "brand", "car_model", "category", "chassi_number", "renavam",
                  "have_gps", "is_for_pcd", "kilometers", "fuel_liters", "status")
        read_only_fields = fields


class WriteVehicleSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(
        slug_field="name", queryset=Category.objects.all())

    class Meta:
        model = Vehicle
        fields = ("license_plate", "color", "brand", "car_model", "category", "chassi_number", "renavam",
                  "have_gps", "is_for_pcd", "kilometers", "fuel_liters", "status")


class WriteReservationSerializer(serializers.ModelSerializer):
    vehicle = serializers.SlugRelatedField(
        slug_field="license_plate", queryset=Vehicle.objects.all())

    class Meta:
        model = Reservation
        fields = ("vehicle", "rent_date", "return_date",
                  "is_approved", "total_price", "is_returned")


class ReadReservationSerializer(serializers.ModelSerializer):
    vehicle = serializers.SlugRelatedField(
        slug_field="license_plate", queryset=Vehicle.objects.all())

    class Meta:
        model = Reservation
        fields = ("id", "vehicle", "rent_date", "return_date",
                  "is_approved", "total_price", "is_returned")
        read_only_fields = fields
