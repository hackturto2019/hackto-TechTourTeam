from django.db import models

class Rotas(models.Model):

	titulo = models.CharField(verbose_name='Titulo', max_length=250)
	descricao = models.TextField()
	imagem_destaque = models.CharField(verbose_name='URL da Imagem de Destaque da rota', max_length=500)
	
	def __str__(self):
		return self.titulo
