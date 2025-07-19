from rest_framework import viewsets
from .models import Dog, DogImage, Breed
from .serializer import DogSerializer, DogImageSerializer, BreedSerializer
from django_filters.rest_framework import DjangoFilterBackend

class DogViewSet(viewsets.ModelViewSet):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['age', 'gender']

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['include_owner'] = True
        context['include_breed'] = True
        return context



class DogImageViewSet(viewsets.ModelViewSet):
    queryset = DogImage.objects.all()
    serializer_class = DogImageSerializer

class BreedViewSet(viewsets.ModelViewSet):
    queryset = Breed.objects.all()
    serializer_class = BreedSerializer
