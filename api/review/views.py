from rest_framework import mixins, viewsets
from .models import Review
from .serializer import ReviewSerializer

class ReviewViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
