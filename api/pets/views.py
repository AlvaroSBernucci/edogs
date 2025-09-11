from rest_framework import viewsets
from .models import Pet, PetImage, Breed
from .serializer import PetSerializer, PetImageSerializer, BreedSerializer
from django_filters.rest_framework import DjangoFilterBackend

class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all().select_related("owner", "breed").prefetch_related("images")
    serializer_class = PetSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['age', 'gender']




class PetImageViewSet(viewsets.ModelViewSet):
    queryset = PetImage.objects.all()
    serializer_class = PetImageSerializer

class BreedViewSet(viewsets.ModelViewSet):
    queryset = Breed.objects.all()
    serializer_class = BreedSerializer
