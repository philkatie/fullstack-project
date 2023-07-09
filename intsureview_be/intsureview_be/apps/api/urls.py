from django.urls import path
from .views import FormAPIView

app_name = 'jobs'

urlpatterns = [
    path('create/', FormAPIView.as_view(), name='create'),
]