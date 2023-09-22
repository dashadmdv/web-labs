"""
URL configuration for myshop project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

app_name = 'shop'
urlpatterns = [
    path("articles/", include("articles.urls")),
    path("feedbacks/", include("feedbacks.urls")),
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('home/', include('users.urls')),
    path('orders/', include(('orders.urls', 'orders'), namespace='orders')),
    path('cart/', include(('cart.urls', 'cart'), namespace='cart')),
    path('', include('shop.urls')),
    path('', include('info.urls')),
    path('doctors/', include('shop.urls')),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
