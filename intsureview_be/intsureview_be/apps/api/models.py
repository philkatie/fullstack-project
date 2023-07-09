from django.db import models

class Info(models.Model):
    name = models.CharField(max_length=150)
    street_address = models.CharField(max_length=250, default="address")
    email = models.CharField(max_length=150, default="email")
    description = models.TextField()
    investigation_requested = models.BooleanField(default=True)


    def __str__(self):
        return self.name