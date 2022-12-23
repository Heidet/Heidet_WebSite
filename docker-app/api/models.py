from django.db import models
# Create your models here.
from django.utils import timezone
import datetime

class CertifCardsModel(models.Model):
    title = models.CharField(max_length=120)
    identifiant = models.TextField()
    etablissement = models.CharField(max_length=120)
    urlcertif = models.CharField(max_length=250)
    datefield = models.DateField()
    
    def _str_(self):
        return self.title
    
    

class MessagesBannetteModel(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=254)
    message = models.TextField()
    
    def _str_(self):
        return self.message