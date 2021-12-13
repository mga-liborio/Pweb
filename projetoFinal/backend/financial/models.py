from django.db import models
from django.db.models.fields import related
from rest_framework.serializers import ModelSerializer
from accessories.models import Service
from users.models import Address, User
from core.models import Rent, Vehicle


class Providers(models.Model):
    name = models.TextField()
    email = models.EmailField()
    email2 = models.EmailField()
    email3 = models.EmailField()
    cellphone = models.TextField(max_length=11)
    phone = models.TextField(max_length=11)
    cnpj = models.TextField(max_length=18)
    address = models.ForeignKey(
        Address, on_delete=models.CASCADE, related_name="provider_addresses")
    services = models.ForeignKey(
        Service, related_name="provider_Services", on_delete=models.DO_NOTHING, blank=True)


class Expenses(models.Model):
    service = models.ForeignKey(
        Service, related_name="expense_Services", on_delete=models.DO_NOTHING, blank=True, null=True)
    car = models.ForeignKey(
        Vehicle, related_name="Vehicles", on_delete=models.DO_NOTHING, blank=True, null=True)
    approved_by = models.ForeignKey(
        User, related_name="Employees", on_delete=models.DO_NOTHING, blank=False, null=False)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.TextField()


class Income(models.Model):
    name = models.TextField()
    date = models.DateField(auto_now=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    rent = models.ForeignKey(
        Rent, related_name="rents", on_delete=models.DO_NOTHING, blank=True, null=True)
    description = models.TextField()
