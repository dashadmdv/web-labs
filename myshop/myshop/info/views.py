from django.shortcuts import render
from django.views.generic import TemplateView
from articles.models import Article
from .services import get_random_joke, get_weather
# Create your views here.


class MainPageTemplateView(TemplateView):
    template_name = "main-page.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["last_article"] = Article.objects.order_by("-created_at").first()
        # context["weather"] = get_weather()
        # context["random_joke"] = get_random_joke()
        return context


class PrivacyPolicyTemplateView(TemplateView):
    template_name = "privacy-policy.html"


class AboutCompanyTemplateView(TemplateView):
    template_name = "about.html"


class FAQTemplateView(TemplateView):
    template_name = "faq.html"


class ContactsTemplateView(TemplateView):
    template_name = "contacts.html"


class JobsTemplateView(TemplateView):
    template_name = "jobs.html"


class CouponsTemplateView(TemplateView):
    template_name = "coupons.html"


class ExamplesTemplateView(TemplateView):
    template_name = "examples.html"
