from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets
from .serializers import *


class RotasViewSet(viewsets.ModelViewSet):

    queryset = Rota.objects.all()
    filter_backends = [SearchFilter]
    serializer_class = RotaSerializer
    search_fields = ['titulo', 'descricao', 'destinos__nome']


class DestinosViewSet(viewsets.ModelViewSet):
    
    queryset = Destino.objects.all()
    filter_backends = [SearchFilter]
    serializer_class = DestinoSerializer
    search_fields = ['tipo', 'nome']
