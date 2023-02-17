from django.db import models

class Program(models.Model):
    image = models.ImageField(upload_to ='app', null=True)
