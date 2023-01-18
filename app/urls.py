from django.contrib import admin
from django.urls import path, include, re_path
from . import views
from django.views.generic import TemplateView
from rest_framework import routers


urlpatterns = [
    path("",views.ReactAPPView.as_view()),
]