from django.contrib import admin

from .models import Property_Type,RegistrationFileType,City,DocumentStatus\
    ,LightingDirection

# Register your models here.


admin.site.register(Property_Type)
admin.site.register(RegistrationFileType)
admin.site.register(City)
admin.site.register(DocumentStatus)
admin.site.register(LightingDirection)
