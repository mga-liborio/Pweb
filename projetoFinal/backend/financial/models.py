from django.db import models


class Provider(models.Model):
    name = models.TextField()
    email = models.EmailField()
    email2 = models.EmailField()
    email3 = models.EmailField()
    cellphone = models.TextField(max_length=11)
    phone = models.TextField(max_length=11)
    cnpj = models.TextField(max_length=18)
    # address = models.OneToOneField(
    #     Address, on_delete=models.CASCADE, related_name="addresses")
    # services = ManyToManyField('Service', related_name='providers', blank=True)
