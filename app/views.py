from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
from django.shortcuts import render

import os


class ReactAppView(View):
    def get(self, request):
        try:
            with open(os.path.join(str(settings.ROOT_DIR), 'webv2_front', 'build', 'index.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                status=501,
            )

def program(request):
    return render(request, '../templates/Program.js')

def member(request):
    return render(request, '../templates/Member.js')

def activity(request):
    return render(request, '../templates/Activity.js')

def recruitment(request):
    return render(request, '../templates/Recruitment.js')
