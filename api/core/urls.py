from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from debug_toolbar.toolbar import debug_toolbar_urls
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from account.views import CustomTokenObtainPairView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/pets/', include(('pets.urls', 'pets'), namespace="pets")),
    path('api/v1/orders/', include(('order.urls', 'orders'), namespace="orders")),
    path('api/v1/reviews/', include(('review.urls', 'reviews'), namespace="reviews")),
    path('api/v1/address/', include(('address.urls', 'address'), namespace="address")),
    path('api/v1/accounts/', include(('account.urls', 'accounts'), namespace="accounts")),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) \
  + debug_toolbar_urls()