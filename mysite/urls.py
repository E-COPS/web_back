"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# import board.views
from board import views as bv
from app import views

from django.conf.urls.static import static
from django.conf import settings

app_name = 'board'
urlpatterns = [
    # path('admin/', admin.site.urls), #기본
    path("",views.ReactAppView.as_view()),

    # path('',views.index ,include('app.urls')),
    # path('<int:board_id>/',views.detail, name='detail'),
    path('write/', bv.write, name='write'),
    # path('write/write_board',views.write_board, name='write_board'),
    # path('<int:board_id>/create_reply',views.create_reply,name='create_reply'),
]

urlpatterns +=static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)