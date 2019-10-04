from django.contrib.auth.models import User
from django.db import models


class Pessoa(models.Model):
  nome = models.CharField(verbose_name='Nome completo', max_length=300)
  idade = models.IntegerField()
  email = models.EmailField()
  telefone = models.CharField(max_length=11)
  escolaridade = models.CharField(verbose_name='Escolaridade', max_length=128, choices=(
    ('fundamental_incompleto', 'Fundamental incompleto'),
    ('fundamental', 'Fundamental'),
    ('medio_incompleto', 'Ensino Médio incompleto'),
    ('media', 'Ensino Médio'),
    ('superior_incompleto', 'Superior incompleto'),
    ('Superior', 'Superior'),
  ))
  como_conheceu = models.CharField(verbose_name='Como conheceu?', max_length=128, choices=(
    ('amigos', 'Amigos'),
    ('conta_propria', 'Conta Propria')
  ))
  pontuacao = models.IntegerField('Quantidade de pontos')


def diretorio_imagens_destino(instance, filename):
  return 'imagens/{}'.format(filename)


class ArquivoImagem(models.Model):
  arquivo = models.FileField(upload_to=diretorio_imagens_destino)


class Avaliacao(models.Model):
  comentario = models.TextField()
  pessoa = models.ForeignKey('Pessoa', verbose_name='Quem avaliou', on_delete=models.SET_NULL, null=True)
  eh_sustentavel = models.NullBooleanField(null=True)
  tem_bom_atendimento = models.NullBooleanField(null=True)


def diretorio_imagens_destino_destaque(instance, filename):
  return 'imagens/destino/{}/{}'.format(
    instance.pk, filename
  )


class Destino(models.Model):
  proprietario = models.ForeignKey(User, verbose_name='Usuário', on_delete=models.SET_NULL, null=True)
  nome = models.CharField(verbose_name='Nome', max_length=250)
  descricao = models.TextField()
  custo_estimado = models.FloatField()
  tempo_estimado = models.FloatField()
  imagens_destino = models.ManyToManyField('ArquivoImagem', verbose_name='Imagens do Destino', through='ImagensDestino')
  imagem_destaque = models.FileField(verbose_name='Imagem destaque',  upload_to=diretorio_imagens_destino_destaque)
  pontuacao_checkin = models.IntegerField()
  avaliacoes = models.ManyToManyField('Avaliacao', verbose_name='Avaliações', through='AvaliacoesDeDestino')
  tipo = models.CharField(max_length=128, choices=(
    ('atracao', 'Atração'),
    ('hospedagem', 'Hotel'),
    ('restaurante', 'Restaurante'),
    ('evento', 'Evento'),
  ))

  def __str__(self):
    return self.nome


class AvaliacoesDeDestino(models.Model):
  avaliacao = models.ForeignKey('Avaliacao', on_delete=models.CASCADE)
  destino = models.ForeignKey('Destino', on_delete=models.SET_NULL, null=True)


def diretorio_imagens_destino(instance, filename):
  return 'imagens/destino/{}/{}'.format(
    instance.pk, filename
  )


class ImagensDestino(models.Model):
  arquivo = models.ForeignKey('ArquivoImagem', on_delete=models.SET_NULL, null=True)
  destino = models.ForeignKey('Destino', on_delete=models.CASCADE)

  def __str__(self):
    return self.destino


def diretorio_imagens_rota(instance, filename):
  return 'imagens/rota/{}/{}'.format(
    instance.pk, filename
  )


class DestinoDeRota(models.Model):

  class Meta:
    ordering = ['ordem', ]

  rota = models.ForeignKey('Rota', on_delete=models.SET_NULL, null=True)
  destino = models.ForeignKey('Destino', on_delete=models.SET_NULL, null=True)
  ordem = models.PositiveIntegerField(default=1, blank=False, null=False)


class Rota(models.Model):
  proprietario = models.ForeignKey(User, verbose_name='Usuário', on_delete=models.SET_NULL, null=True, related_name='user')
  titulo = models.CharField(verbose_name='Titulo', max_length=250)
  descricao = models.TextField()
  imagens_rota = models.FileField(verbose_name='Imagem de Destaque da Rota', max_length=500,
                                  upload_to=diretorio_imagens_rota)
  destinos = models.ManyToManyField('Destino', verbose_name='',  through='DestinoDeRota', related_name='destinos')

  def __str__(self):
    return self.titulo
