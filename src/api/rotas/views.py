from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets
from .serializers import *


class RotasViewSet(viewsets.ModelViewSet):

    queryset = Rota.objects.all()
    filter_backends = [DjangoFilterBackend]
    serializer_class = RotaSerializer


class DestinosViewSet(viewsets.ModelViewSet):
    
    queryset = Destino.objects.all()
    filter_backends = [DjangoFilterBackend]
    serializer_class = DestinoSerializer
    filterset_fields = ['tipo', 'nome']