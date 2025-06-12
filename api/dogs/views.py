from rest_framework import viewsets
from .models import Dog, DogImage, Breed
from .serializer import DogSerializer, DogImageSerializer, BreedSerializer


class DogViewSet(viewsets.ModelViewSet):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['include_owner'] = True
        return context

class DogImageViewSet(viewsets.ModelViewSet):
    queryset = DogImage.objects.all()
    serializer_class = DogImageSerializer

class BreedViewSet(viewsets.ModelViewSet):
    queryset = Breed.objects.all()
    serializer_class = BreedSerializer
