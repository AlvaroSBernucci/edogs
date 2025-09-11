from django.db import models
from django.core.validators import MinValueValidator
from account.models import Account

class Breed(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nome da Raça")
    description = models.TextField(verbose_name="Descrição da raça")

    def __str__(self):
        return self.name

class Pet(models.Model):
    GENDER_CHOICES = [
        ("Male", "Macho"),
        ("Female", "Fêmea")
    ]

    name = models.CharField(max_length=100, verbose_name="Nome")
    age = models.IntegerField(verbose_name="Idade")
    gender = models.CharField(max_length=30,choices=GENDER_CHOICES, default="Male",verbose_name="Gênero")
    description = models.TextField(blank=True, null=True, verbose_name="Descrição")
    price = models.DecimalField(max_digits=7, decimal_places=2, validators=[MinValueValidator(0)],verbose_name="Preço R$")
    created_at = models.DateField(auto_now_add=True, verbose_name="Criado em")
    updated_at = models.DateField(auto_now=True, verbose_name="Atualizado em")
    breed = models.ForeignKey(Breed, on_delete=models.CASCADE, related_name="pet_breed")
    owner = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="pet_owner")

    def __str__(self):
        return self.name

class PetImage(models.Model):
    image = models.ImageField(upload_to="pets/%Y/%m/%d/")
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name="images")

    def __str__(self):
        return f"Pet: {self.pet.name} - Raça: {self.pet.breed}"
