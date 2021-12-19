from django.db.models import fields
from rest_framework import serializers
from .models import Address, User


class WriteAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class ReadAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ("id", "street", "number", "zip_code",
                  "state", "city", "neighborhood", "country",)
        read_only_fields = fields


class ReadCustomerSerializer(serializers.ModelSerializer):
    address = ReadAddressSerializer()

    class Meta:
        model = User
        fields = ("id", "name", "email", "password", "cpf", "rg", "cnh", "category_cnh",
                  "cnh_first_date", "address", "profession")
        read_only_fields = fields


class WriteCustomerSerializer(serializers.ModelSerializer):
    address = WriteAddressSerializer()

    class Meta:
        model = User
        fields = ("name", "email", "password", "cpf", "rg", "cnh", "category_cnh",
                  "cnh_first_date", "address", "profession")

    def create(self, user_data):
        add = user_data.pop('address')
        addressObj = Address.objects.create(**add)
        user = User.objects.create(address=addressObj, **user_data)
        user.save()
        return user


class ReadEmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "name", "email", "registration", "salary")
        read_only_fields = fields


class WriteEmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("name", "email", "registration", "salary", "is_staff")
