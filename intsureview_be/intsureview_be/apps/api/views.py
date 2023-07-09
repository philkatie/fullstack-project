from django.contrib.auth.models import User, Group
from django.http import HttpResponse
from .models import ParanormalActivity
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer, ParanormalActivitySerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class ParanormalActivityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = ParanormalActivity.objects.all()
    serializer_class = ParanormalActivitySerializer
    permission_classes = [permissions.IsAuthenticated]