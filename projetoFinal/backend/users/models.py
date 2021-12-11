from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone


class Address(models.Model):
    street = models.TextField(max_length=100)
    number = models.IntegerField()
    city = models.TextField(max_length=100)
    zip_code = models.TextField(max_length=8)
    state = models.TextField(max_length=15)
    country = models.TextField(max_length=50)


class User(AbstractUser):
    name = models.TextField(max_length=100)
    email = models.EmailField(_('email address'), unique=True)
    cpf = models.TextField(max_length=11)
    rg = models.TextField(max_length=11)
    cnh = models.TextField(max_length=15)
    category_cnh = models.TextField(max_length=2)
    cnh_first_date = models.DateField(auto_now=True)
    address = models.ForeignKey(
        Address, on_delete=models.CASCADE, blank=True, null=True, related_name="addresses")
    is_approved = models.BooleanField(default=False)
    profession = models.TextField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'name', 'cpf', 'cnh']

    def __str__(self):
        return "{}".format(self.email)
