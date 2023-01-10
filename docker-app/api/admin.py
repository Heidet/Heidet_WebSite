from django.contrib import admin
from .models import * 


class CertifCardsAdmin(admin.ModelAdmin):
    list_display = ('title', 'identifiant', 'etablissement', 'urlcertif', 'datefield')

class MessagesBannetteAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')
    
    
# Register your models here.
class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
    
    
admin.site.register(Todo, TodoAdmin)
admin.site.register(CertifCardsModel, CertifCardsAdmin)
admin.site.register(MessagesBannetteModel, MessagesBannetteAdmin)
