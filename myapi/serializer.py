# serializers.py
from rest_framework import serializers
from .models import Property,Property_Type

class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = ['address', 'price', 'bedrooms', 'bathrooms', 'description']


class HouseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property_Type
        fields = ['name']