from django.views.generic import TemplateView
from django.urls import path

import app.views

urlpatterns = [
    #main page
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    #path('',app.views.notion, name='notion'),

    #Program
    path('program/', TemplateView.as_view(template_name='index.html'), name='program'),

    #Member
    path('member/', TemplateView.as_view(template_name='index.html'), name='member'),

    #Activity
    path('activity/', TemplateView.as_view(template_name='index.html'), name='activity'),

    #Recruitment
    path('recruitment/', TemplateView.as_view(template_name='index.html'), name='recruitment'),
]