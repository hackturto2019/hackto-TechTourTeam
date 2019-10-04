from django.urls import path, include, re_path
from .views import RotasViewSet, DestinosViewSet
from django.conf.urls import url

urlpatterns = [
    path('rotas/', RotasViewSet.as_view({'get': 'list'}), name='rotas-filter'),
    path('destinos/', DestinosViewSet.as_view({'get': 'list'}), name='destinos-filter'),
]
