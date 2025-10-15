# core/admin.py
from django.contrib import admin
from .models import Project

# Register the Project model
admin.site.register(Project)
