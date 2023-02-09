import django.views.generic
from django.urls import path
from . import views



urlpatterns = [
    path('', django.views.generic.TemplateView.as_view(template_name='index.html'), name='index'),
    #Program
    path('program/', views.program, name='program'),
    #Member
    path('member/', views.member, name='member'),
    #Activity
    path('member/', views.activity, name='activity'),
    #Recruitment
    path('recruitment/', views.recruitment, name='recruitment'),
]