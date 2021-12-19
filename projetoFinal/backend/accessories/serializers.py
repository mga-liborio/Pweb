from rest_framework import serializers
from accessories.models import BookingOptions, Checklist, Insurance, Service


class ReadServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ("id", "name", "price")
        read_only_fields = fields


class WriteServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ("name", "price")


class ReadInsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = ("id", "name", "price", "description")
        read_only_fields = fields


class WriteInsuranceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insurance
        fields = ("name", "price", "description")


class ReadBookingOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingOptions
        fields = ("id", "price", "description")
        read_only_fields = fields


class WriteBookingOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingOptions
        fields = ("price", "description")


class ReadChecklistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checklist
        fields = ("id", "paint_scratch", "tires_good", "kilometers", "lights_working", "panel_lights", "brake_lights", "seats", "roof", "is_clean", "glasses",
                  "observations", "gps_working", "lock_working", "fuel_liters", "security_items", "oil", "water", "brake_fluid", "singed_customer", "singed_employee")
        read_only_fields = fields


class WriteChecklistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checklist
        fields = ("id", "paint_scratch", "tires_good", "kilometers", "lights_working", "panel_lights", "brake_lights", "seats", "roof", "is_clean", "glasses",
                  "observations", "gps_working", "lock_working", "fuel_liters", "security_items", "oil", "water", "brake_fluid", "singed_customer", "singed_employee")
