from django.contrib import admin
from .models import ParanormalActivity

@admin.register(ParanormalActivity)
class ParanormalActivityAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'description', 'investigation_requested')