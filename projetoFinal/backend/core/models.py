from django.db import models


class Category(models.Model):
    name = models.TextField()
    passengers = models.IntegerField()

    def __str__(self):
        return self.name


class Vehicle(models.Model):
    license_plate = models.TextField(max_length=7, unique=True)
    color = models.TextField()
    brand = models.TextField()
    car_model = models.TextField()
    chassi_number = models.TextField(unique=True)
    renavam = models.TextField(unique=True)
    # imageCar = models.ImageField()
    have_gps = models.BooleanField()
    is_for_pcd = models.BooleanField()
    kilometers = models.DecimalField(max_digits=10, decimal_places=1)
    fuel_liters = models.DecimalField(max_digits=10, decimal_places=3)
    status = models.TextField()
    category = models.ForeignKey(
        Category, null=False, blank=False, on_delete=models.DO_NOTHING, related_name="categories")

    def __str__(self):
        return f"{self.car_model} {self.license_plate}"


class Reservation(models.Model):
    vehicle = models.ForeignKey(
        Vehicle, null=False, blank=False, on_delete=models.DO_NOTHING, related_name="vehicles")
    rent_date = models.DateField()
    return_date = models.DateField()
    is_approved = models.BooleanField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_returned = models.BooleanField()

    def __str__(self):
        return f"{self.vehicle}  {self.is_returned}"


'''
{
    "license_plate" : "DMG0G50",
    "color" : "Marrom",
    "brand" : "Ford",
    "car_model" : "Escort XR3 2.0 Conversível",
    "chassi_number" : "1CS ABENc3 VB zu8535",
    "renavam" : "9021031CSABEN535",
    "have_gps" : true, 
    "is_for_pcd" : false,
    "kilometers" : 10421.2,
    "fuel_liters" : 70.0,
    "status" : "available",
    "category" : "Sedã"
}
{
    "license_plate" : "FDF4928",
    "color" : "ROSA",
    "brand" : "Fiat",
    "car_model" : "Oggi",
    "chassi_number" : "2f0 7AWsTz 3F tF9547",
    "renavam" : "AS76A56723D34F",
    "have_gps" : false,
    " is_for_pcd" : false,
    "kilometers" : 4276.2,
    "fuel_liters" : 60.0,
    "status" : "rented",
    "category" : "Sedã"
}
{ 
    "license_plate" : "OPQ8G77",
    "color" : "PRATA",
    "brand" : "Renault",
    "car_model" : "Express 1.6/ RL 1.6",
    "chassi_number" : "3Ad hG9gj9 wA 299683",
    "renavam" : "56S56DRA3AGj9WA83",
    "have_gps" : true, 
    "is_for_pcd" : true,
    "kilometers" : 426.2,
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
