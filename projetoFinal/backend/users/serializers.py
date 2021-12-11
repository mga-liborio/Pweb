from rest_framework import serializers

from core.serializers import WriteCategorySerializer
from .models import Address, User


class WriteAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class ReadAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ("id", "street", "number", "zip_code",
                  "state", "city", "country",)
        read_only_fields = fields


class ReadUserSerializer(serializers.ModelSerializer):
    address = ReadAddressSerializer()

    class Meta:
        model = User
        fields = ("id", "name", "email", "cpf", "rg", "cnh", "category_cnh",
                  "cnh_first_date", "address", "is_approved", "profession")
        read_only_fields = fields


class WriteUserSerializer(serializers.ModelSerializer):
    address = WriteAddressSerializer()

    class Meta:
        model = User
        fields = ("name", "email", "cpf", "rg", "cnh", "category_cnh",
                  "cnh_first_date", "address", "profession")

    def create(self, user_data):
        add = user_data.pop('address')
        addressObj = Address.objects.create(**add)
        user = User.objects.create(address=addressObj, **user_data)
        user.save()
        return user
