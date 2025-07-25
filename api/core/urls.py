from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from account.views import CustomTokenObtainPairView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('dogs.urls', namespace="dogs")),
    path('api/v1/', include('order.urls', namespace="orders")),
    path('api/v1/', include('review.urls', namespace="reviews")),
    path('api/v1/', include('address.urls', namespace="address")),
    path('api/v1/', include('account.urls', namespace="accounts")),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
