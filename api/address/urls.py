from rest_framework.routers import SimpleRouter
from .views import AddressViewSet

app_name = "address"

router = SimpleRouter()
router.register(r"address", AddressViewSet, basename="address")

urlpatterns = router.urls
