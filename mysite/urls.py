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
#import django
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

import app.views
from app import views

#게시판
from board import views as bd
#게시판-이미지
from django.conf.urls.static import static
from django.conf import settings

from app import views as ap


urlpatterns = [
    path('admin/', admin.site.urls),
    #메인 화면 - React 연결
    path('',include('app.urls')),




    #게시판
    path('board/', include('board.urls', namespace='board')),
    path('postmain/', bd.index, name='postmain'),
    path('<int:board_id>/', bd.detail, name='detail'),
    path('write/', bd.write, name='write'),
    path('write/write_board', bd.write_board, name='write_board'),
    path('<int:board_id>/create_reply', bd.create_reply, name='create_reply'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)