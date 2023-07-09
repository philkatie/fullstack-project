from django.contrib.auth.models import User, Group
from .models import Info
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]

class InfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Info
        fields = "__all__"

    # considered adding additional validation here but it feels like
    # a hat on a hat on a hat since I have it on the FE and the Bootstrap
    # Forms include validation.