from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.utils import timezone
from django.urls import reverse
from django.core.paginator import Paginator

from .models import Board

def index(request):
    all_boards = Board.objects.all().order_by("-pub_date") # 모든 데이터 조회, 내림차순(-표시) 조회
    paginator = Paginator(all_boards,5)
    page = int(request.GET.get('page',1))
    board_list = paginator.get_page(page)

    return render(request, 'board/index.html', {'title':'Board List', 'board_list':board_list})

def detail(request, board_id):
    board = Board.objects.get(id=board_id)
    return render(request, 'board/detail.html', {'board': board})

def write(request):
    return render(request, 'board/write.html')

def write_board(request):
    b = Board(title=request.POST['title'], content=request.POST['detail'], author="choi", pub_date=timezone.now())
    b.save()
    return HttpResponseRedirect(reverse('board:index'))

def create_reply(request, board_id):
    b = Board.objects.get(id = board_id)
    b.reply_set.create(comment=request.POST['comment'], rep_date=timezone.now())
    return HttpResponseRedirect(reverse('board:detail', args=(board_id,)))

