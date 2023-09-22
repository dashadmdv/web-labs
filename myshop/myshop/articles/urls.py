from django.urls import path
from .views import ArticleDetailView, ArticlesListView

urlpatterns = [
    path("<int:pk>/", ArticleDetailView.as_view(), name="article-details"),
    path("", ArticlesListView.as_view(), name="article-list"),
]
