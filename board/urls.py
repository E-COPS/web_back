import django.views.generic
from django.urls import path

from . import views

app_name = 'board'
urlpatterns = [

    #beginner
    path('beginner_main/', views.index, name='index'),
    path('beginner_<int:board_id>/', views.detail, name='detail'),
    path('beginner_write/', views.write, name='write'),
    path('beginner_write/write_board', views.write_board, name='write_board'),
    path('beginner_<int:board_id>/create_reply', views.create_reply, name='create_reply'),

    #challenger
    path('challenger_main/', views.index, name='index'),
    path('challenger_<int:board_id>/', views.detail, name='detail'),
    path('challenger_write/', views.write, name='write'),
    path('challenger_write/write_board', views.write_board, name='write_board'),
    path('challenger_<int:board_id>/create_reply', views.create_reply, name='create_reply'),


]