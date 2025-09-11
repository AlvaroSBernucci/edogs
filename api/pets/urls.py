from rest_framework.routers import SimpleRouter
from .views import PetViewSet, PetImageViewSet, BreedViewSet

app_name = "pets"

router = SimpleRouter()
router.register(r"pets", PetViewSet, basename="pets")
router.register(r"pets-images", PetImageViewSet, basename="pets-images")
router.register(r"pets-breed", BreedViewSet,"pets-breed")

urlpatterns = router.urls
