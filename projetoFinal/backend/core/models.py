from django.db import models
from accessories.models import Checklist, BookingOptions, Insurance, Service
from users.models import User


class Category(models.Model):
    name = models.TextField(unique=True)
    passengers = models.IntegerField()
    price = models.DecimalField(max_digits=4, decimal_places=2)

    def __str__(self):
        return self.name


class Vehicle(models.Model):
    license_plate = models.TextField(max_length=7, unique=True)
    color = models.TextField()
    brand = models.TextField()
    car_model = models.TextField()
    year = models.IntegerField()
    chassi_number = models.TextField(unique=True)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    renavam = models.TextField(unique=True)
    photo = models.ImageField(null=True, blank=True)
    have_gps = models.BooleanField()
    is_for_pcd = models.BooleanField()
    kilometers = models.DecimalField(max_digits=10, decimal_places=1)
    full_tank = models.DecimalField(max_digits=3, decimal_places=1)
    fuel_liters = models.DecimalField(max_digits=3, decimal_places=1)
    status = models.TextField()
    category = models.ForeignKey(
        Category, null=False, blank=False, on_delete=models.DO_NOTHING, related_name="categories")

    def __str__(self):
        return f"{self.car_model} {self.license_plate}"


class Rent(models.Model):
    vehicle = models.ForeignKey(
        Vehicle, null=False, blank=False, on_delete=models.DO_NOTHING, related_name="vehicles")
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    is_approved = models.BooleanField(default=False)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_returned = models.BooleanField(default=False)
    return_date = models.DateTimeField(blank=True)
    rent_checklist = models.ForeignKey(
        Checklist, related_name="rent_checklist", on_delete=models.CASCADE, blank=True)
    return_checklist = models.ForeignKey(
        Checklist, related_name="return_checklist", on_delete=models.CASCADE, blank=True)
    customer = models.ForeignKey(
        User, related_name="customers", on_delete=models.DO_NOTHING, blank=False, null=False)
    approved_by = models.ForeignKey(
        User, related_name="employees", on_delete=models.DO_NOTHING, blank=True, null=True)
    bookingOptions = models.ManyToManyField(
        BookingOptions, related_name="booking_options")
    services = models.ManyToManyField(
        Service, related_name="services")
    Insurance = models.ManyToManyField(
        Insurance, related_name="insurances")

    def __str__(self):
        return f"{self.vehicle}  {self.is_returned}"


'''
{
    "license_plate" : "DMG2G50",
    "color" : "Marrom",
    "brand" : "Ford",
    "year": 1998,
    "car_model" : "Escort XR3 2.0 Conversível",
    "chassi_number" : "1CS ABENd3 VB zu8535",
    "renavam" : "902ds031CSABEN535",
    "have_gps" : true, 
    "is_for_pcd" : false,
    "kilometers" : 10421.2,
    "full_tank": 70.0,
    "fuel_liters" : 70.0,
    "price": 20.00,
    "status" : "available",
    "category" : "Sedã"
}
{
    "license_plate" : "FDF4928",
    "color" : "ROSA",
    "brand" : "Fiat",
    "year": 1998,
    "car_model" : "Oggi",
    "chassi_number" : "2f0 7AWsTz 3F tF9547",
    "renavam" : "AS76A56723D34F",
    "have_gps" : false,
    "is_for_pcd" : false,
    "price": 5.60,
    "kilometers" : 4276.2,
    "full_tank": 70.0,
    "fuel_liters" : 60.0,
    "status" : "rented",
    "category" : "Sedã"
}
{ 
    "license_plate" : "OPQ8G77",
    "color" : "PRATA",
    "brand" : "Renault",
    "year": 2018,
    "car_model" : "Express 1.6/ RL 1.6",
    "chassi_number" : "3Ad hG9gj9 wA 299683",
    "renavam" : "56S56DRA3AGj9WA83",
    "have_gps" : true, 
    "is_for_pcd" : true,
    "price": 20.00,
    "kilometers" : 426.2,
    "full_tank": 70.0,
    "fuel_liters" : 40.0,
    "status" : "repair",
    "category" : "Hatch"
}

{ 
    "name":"hatch",
"passengers" : 4
}

{
    "name":"seda",
    "passengers":4
}

'''
