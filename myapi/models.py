from django.db import models


class Property(models.Model):
    address = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField()
    description = models.TextField()




class Property_Type(models.Model):

    type = models.CharField(max_length=100)




class RegistrationFileType(models.Model):

    type = models.CharField(max_length=100)


class City(models.Model):

    name = models.CharField(max_length=100)



class DocumentStatus(models.Model):

    name = models.CharField(max_length=100)

class LightingDirection(models.Model):

    name = models.CharField(max_length=100)
