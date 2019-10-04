from rest_framework import serializers
from rotas.models import Rota, Destino, DestinoDeRota, Avaliacao, AvaliacoesDeDestino


class RotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rota
        fields = '__all__'

class DestinoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destino
        fields = '__all__'

class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avaliacao
        fields = '__all__'

class DestinoDeRotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DestinoDeRota
        fields = '__all__'

class AvaliacaoesDeDestinoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvaliacoesDeDestino
        fields = '__all__'

