from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Article

# Create your views here.


class ArticlesListView(ListView):
    model = Article
    template_name = "article-list.html"


class ArticleDetailView(DetailView):
    model = Article
    template_name = "article-details.html"
