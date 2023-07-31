from django.db import models

# This honestly needs to be named something other than "Info" but the last time I tried to change it I broke everything
# and I think I'm going to cry if I have to makemigrations again so it's staying as Info. But please know that I know
# that this is bad naming and that if I had more time to work on this I would absolutely change it, probably to "ParanormalActivity"
# even though that's so long. Maybe "Haunting". I would probably also tighten up the field types, lengths, and requirements.
# But, again. makingmigrations and breaking things. So it's a problem for Hypothetical Future Me.

class Info(models.Model):
    name = models.CharField(max_length=150)
    street_address = models.CharField(max_length=250, default="address")
    email = models.CharField(max_length=150, default="email")
    description = models.TextField()
    investigation_requested = models.BooleanField(default=True)


    def __str__(self):
        return self.name