from __future__ import annotations
# views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Property,Property_Type ,RegistrationFileType,City ,DocumentStatus,LightingDirection
from .serializer import PropertySerializer,HouseTypeSerializer
import logging
from rest_framework import generics
from django.http import JsonResponse


logger = logging.getLogger(__name__)

@api_view(['POST'])
def create_property(request):
    if request.method == 'POST':
        logger.debug(f"Request data: {request.data}")
        serializer = PropertySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        logger.error(f"Validation errors: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
def PropertyTypeList(request):

    ######################################### PAGE1 ###################
    queryset = Property_Type.objects.all()
    property_types_list = list(queryset.values_list('type', flat=True))

    queryset = RegistrationFileType.objects.all()
    RegistrationFileType_list = list(queryset.values_list('type', flat=True))
   
    queryset = City.objects.all()
    CityNameList = list(queryset.values_list('name', flat=True))


    ######################################### PAGE3 #################

    queryset = DocumentStatus.objects.all()
    DocumentStatusList = list(queryset.values_list('name', flat=True))

    queryset = LightingDirection.objects.all()
    LightingDirectionList = list(queryset.values_list('name', flat=True))

    RestorationStatusList = ['بازسازی', 'هیچکدام']


    data ={}
    data['property_types']= property_types_list
    data['registration_types']= RegistrationFileType_list
    data['CityNameList']= CityNameList
    data['DocumentStatusList']= DocumentStatusList
    data['LightingDirectionList']= LightingDirectionList
    data['RestorationStatusList']= RestorationStatusList

    return JsonResponse(data)



def ConvertObjectModeltoList(queryset,field:list):

    l = []

    for key,value in enumerate(field):
        l.append(field[key])

    return l