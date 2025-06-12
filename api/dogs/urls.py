from rest_framework.routers import SimpleRouter
from .views import DogViewSet, DogImageViewSet, BreedViewSet

app_name = "dogs"

router = SimpleRouter()
router.register(r"dogs", DogViewSet, basename="dogs")
router.register(r"dogs-images", DogImageViewSet, basename="dogs-images")
router.register(r"dogs-breed", BreedViewSet,"dogs-breed")

urlpatterns = router.urls
