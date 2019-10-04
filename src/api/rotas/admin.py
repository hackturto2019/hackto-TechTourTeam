from django.contrib import admin
from rotas.models import *

admin.site.register(Pessoa)
admin.site.register(Destino)
admin.site.register(ArquivoImagem)
admin.site.register(ImagensDestino)
admin.site.register(Avaliacao)
admin.site.register(AvaliacoesDeDestino)


class DestinosInlineAdmin(admin.TabularInline):
  model = DestinoDeRota
  extra = 1


@admin.register(Rota)
class RotaAdmin(admin.ModelAdmin):
  inlines = (DestinosInlineAdmin,)
