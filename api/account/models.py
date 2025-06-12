from django.db import models
from django.contrib.auth.models import AbstractUser

class Account(AbstractUser):
    img_profile = models.ImageField(upload_to='profile_pics', blank=True, null=True)
