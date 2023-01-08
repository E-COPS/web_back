from django.shortcuts import render
from django.shortcuts import HttpResponse
# Create your views here.

def index(requests):
    return HttpResponse("hi")
def test01(requests):
    return render(requests, 'testhtml01.html', {})