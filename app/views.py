from django.views.generic import TemplateView
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
from django.shortcuts import render
from django.views import generic

import os
def notion(request):
    return render(request, "https://www.notion.so/ewhaecops/E-COPS-12th-Recruiting-81f6ece018cd49b68eaa1997996213a8")

import mysite.settings
