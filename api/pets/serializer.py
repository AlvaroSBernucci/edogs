from rest_framework import serializers
from .models import Pet, PetImage, Breed
from account.serializer import AccountSerializer
    


class PetImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = PetImage
        fields = ["image"]

class BreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breed
        fields = "__all__"

class PetSerializer(serializers.ModelSerializer):
    pet_image = PetImageSerializer(many=True, source="images")
    owner_username = serializers.CharField(source="owner.username")
    breed_name = serializers.CharField(source="breed.name")
    breed_description = serializers.CharField(source="breed.description")

    class Meta:
        model = Pet
        fields = ["id", "name", "age", "gender", "price", "owner_username", "breed_name", "description", "breed_description", "pet_image"]