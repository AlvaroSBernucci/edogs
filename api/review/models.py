from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
from pets.models import Pet

class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE, related_name="reviews")
    pet = models.ForeignKey(Pet,on_delete=models.CASCADE, related_name="reviews")
    comment = models.TextField("Comentário")
    rating = models.PositiveSmallIntegerField("Nota", validators=[MinValueValidator(1), MaxValueValidator(5)],help_text="1 a 5 estrelas")
    created_at = models.DateTimeField("Criado em", auto_now_add=True)

    def __str__(self):
        return f"{self.pet.name} – {self.rating} estrelas"
