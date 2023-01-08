from django.urls import path
from app import views

urlpatterns = [
    path('',views.index),
    path('app/test01', views.test01)
]