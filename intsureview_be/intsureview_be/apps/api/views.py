from django.contrib.auth.models import User, Group
from django.http import HttpResponse
from .models import Form
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer, FormSerializer


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


class FormViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Form.objects.all()
    serializer_class = FormSerializer
    permission_classes = [permissions.IsAuthenticated]

def index(response, id):
    fr = Form.objects.get(id=id)
    return HttpResponse("<h1>%s</h1>" %fr.name)


class FormAPIView(APIView):
    http_method_names = ['post']

    def post(self, request):
        # Create a form entry
        serializer = FormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)