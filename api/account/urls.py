from django.urls import path
from .views import UserMeView

app_name = "accounts"

urlpatterns = [
  path('me/', UserMeView.as_view(), name='accounts-me'),
]
