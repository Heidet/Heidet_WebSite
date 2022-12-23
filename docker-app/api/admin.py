from django.contrib import admin
from .models import * 


class CertifCardsAdmin(admin.ModelAdmin):
    list_display = ('title', 'identifiant', 'etablissement', 'urlcertif', 'datefield')

# Register your models here.

admin.site.register(CertifCardsModel, CertifCardsAdmin)