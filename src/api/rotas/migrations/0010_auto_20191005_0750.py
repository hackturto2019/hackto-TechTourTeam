# Generated by Django 2.2.6 on 2019-10-05 10:50

from django.db import migrations, models
import rotas.models


class Migration(migrations.Migration):

    dependencies = [
        ('rotas', '0009_auto_20191005_0724'),
    ]

    operations = [
        migrations.AddField(
            model_name='destino',
            name='imagem',
            field=models.CharField(max_length=250, null=True, verbose_name='Caminho da imagem'),
        ),
        migrations.AlterField(
            model_name='arquivoimagem',
            name='arquivo',
            field=models.FileField(upload_to=rotas.models.diretorio_imagens_destino),
        ),
    ]
