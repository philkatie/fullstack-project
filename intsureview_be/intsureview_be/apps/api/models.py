from django.db import models

class ParanormalActivity(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    description = models.TextField()
    investigation_requested = models.BooleanField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"