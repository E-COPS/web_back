from django.contrib import admin
from django.urls import path, include, re_path
from . import views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.ReactAppView.as_view()),

]