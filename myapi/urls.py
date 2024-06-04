from django.urls import path
from .views import create_property,PropertyTypeList


urlpatterns = [
    path('api/properties/', create_property, name='create_property'),
    path('api/get_parms/', PropertyTypeList, name='create_property'),
    # Other URL patterns...
]