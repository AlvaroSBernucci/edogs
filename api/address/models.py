from django.db import models
from django.conf import settings

class Address(models.Model):
    street = models.CharField(max_length=300, verbose_name="Rua")
    number = models.CharField(max_length=20, blank=True, verbose_name="Número")
    city = models.CharField(max_length=100, verbose_name="Cidade")
    state = models.CharField(max_length=50, verbose_name="Estado")
    zip_code = models.CharField(max_length=30, verbose_name="CEP")
    country = models.CharField(max_length=30, verbose_name="País")
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="addresses")

    def __str__(self):
        return f"{self.street}, {self.number} – {self.city}/{self.state}"
