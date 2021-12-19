from django.db import models


class Service(models.Model):
    name = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)


class Insurance(models.Model):
    name = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()


class BookingOptions(models.Model):
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)


class Checklist(models.Model):
    paint_scratch = models.BooleanField()
    tires_good = models.BooleanField()
    kilometers = models.DecimalField(max_digits=10, decimal_places=1)
    lights_working = models.BooleanField()
    panel_lights = models.BooleanField()
    brake_lights = models.BooleanField()
    seats = models.BooleanField()
    roof = models.BooleanField()
    is_clean = models.BooleanField()
    glasses = models.BooleanField()
    observations = models.TextField()
    gps_working = models.BooleanField()
    lock_working = models.BooleanField()
    fuel_liters = models.DecimalField(max_digits=100, decimal_places=3)
    security_items = models.BooleanField()
    oil = models.BooleanField()
    water = models.BooleanField()
    brake_fluid = models.BooleanField()
    singed_customer = models.BooleanField()
    singed_employee = models.BooleanField()
