from django.contrib import admin
from .models import Pet,PetImage, Breed


admin.site.register(Pet)
admin.site.register(PetImage)
admin.site.register(Breed)
