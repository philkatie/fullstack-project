from django.db import models

class Form(models.Model):
    name = models.CharField(max_length=100)
    phoneNumber = models.CharField(max_length=12)
    address = models.CharField(max_length=300)
    experiencedActivity = models.BooleanField(default=False)
    # probably switch this to a TextField eventually but let's get it all working first
    activityDescription = models.CharField(max_length=500)

    def __str__(self):
        return self.name