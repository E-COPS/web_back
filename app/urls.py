import django.views.generic
from django.urls import path
from . import views

# #rest_framwork
# from django.urls import include, path
# from rest_framework import routers
# from app import views
#
# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

#여기까지_rest_framework

urlpatterns = [
    #main page
    path('', django.views.generic.TemplateView.as_view(template_name='index.html'), name='index'),
    #path('', views.ReactAppView.as_view(template_name='index.html')),
    #Program
    path('program/', views.program, name='program'),
    #Member
    path('member/', views.member, name='member'),
    #Activity는 board/urls.py에 따로
    #path('activity/', include('board.urls', namespace='board')),
    #path('/activity', django.views.generic.TemplateView.as_view(template_name='Activity.js'), name='activity'),
    #path('activity/', views.activity, name='activity'),
    path('activity/', views.ActivityView.as_view(template_name='Activity.js'), name='activity'),

    #Recruitment
    path('recruitment/', views.recruitment, name='recruitment'),
]