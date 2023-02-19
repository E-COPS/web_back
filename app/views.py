from django.views.generic import TemplateView
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
from django.shortcuts import render
from django.views import generic

import os

import mysite.settings


#react
# class ReactAppView(View):
#     def get(self, request):
#         try:
#             with open(os.path.join(str(settings.ROOT_DIR), 'webv2_front', 'build', 'index.html')) as file:
#                 return HttpResponse(file.read())
#         except:
#             return HttpResponse(
#                 status=501,
#             )
def Home(request):
    return render(request, 'home.html')
def program(request):
    return render(request,'Program.html')

def member(request):
    return render(request, '../static/Member.js')

def activity(request):
    return render(request, '../static/Activity.js')
#
def recruitment(request):
    return render(request, '../static/Recruitment.js')

class ActivityView(TemplateView):
    template_name = 'Activity.js'

    def get_context_data(self, **kwargs):
        return {'context_variable':'value'}

    def my_view(request, path=''):
        return render('Activity.js', context={'context_variable':'value'})