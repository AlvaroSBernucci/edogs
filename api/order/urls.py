from rest_framework.routers import SimpleRouter
from .views import OrderViewSet, OrderItemViewSet

app_name = "orders"

router = SimpleRouter()
router.register(r"orders", OrderViewSet, basename="orders")
router.register(r"orders-itens", OrderItemViewSet, basename="order-itens")

urlpatterns = router.urls
