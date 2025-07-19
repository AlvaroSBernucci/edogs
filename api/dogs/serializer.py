from rest_framework import serializers
from .models import Dog, DogImage, Breed
from account.serializer import AccountSerializer

class DogSerializer(serializers.ModelSerializer):
    dog_owner = serializers.SerializerMethodField()
    dog_breed = serializers.SerializerMethodField()
    class Meta:
        model = Dog
        fields = ["age", "description", "gender", "name", "price", "dog_owner", "dog_breed"]

    def get_dog_owner(self, obj):
        if self.context.get('include_owner'):
            return AccountSerializer(obj.owner).data
        return None

    def get_dog_breed(self, obj):
        if self.context.get('include_breed'):
            return BreedSerializer(obj.breed).data
        return None


class DogImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogImage
        fields = "__all__"

class BreedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breed
        fields = "__all__"
