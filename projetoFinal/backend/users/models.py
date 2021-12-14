from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Address(models.Model):
    street = models.TextField(max_length=100)
    number = models.IntegerField()
    city = models.TextField(max_length=100)
    zip_code = models.TextField(max_length=8)
    state = models.TextField(max_length=15)
    country = models.TextField(max_length=50)
    neighborhood = models.TextField()


class User(AbstractUser):
    name = models.TextField(max_length=100)
    email = models.EmailField(_('email address'), unique=True)
    cpf = models.CharField(max_length=11, null=True)
    username = models.TextField(null=True, blank=True)
    registration = models.CharField(max_length=8, null=True)
    salary = models.DecimalField(max_digits=6, decimal_places=2, null=True)

    rg = models.TextField(max_length=11, null=True)
    cnh = models.TextField(max_length=15, null=True)
    category_cnh = models.TextField(max_length=2, null=True)
    cnh_first_date = models.DateField(auto_now=True, null=True)
    address = models.ForeignKey(
        Address, on_delete=models.CASCADE, blank=True, null=True, related_name="addresses")
    is_staff = models.BooleanField(default=False)
    profession = models.TextField(blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'username']

    def __str__(self):
        return "{}".format(self.email)
