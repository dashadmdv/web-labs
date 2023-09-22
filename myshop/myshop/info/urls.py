from django.urls import path

from .views import (
    MainPageTemplateView,
    PrivacyPolicyTemplateView,
    AboutCompanyTemplateView,
    FAQTemplateView,
    ContactsTemplateView,
    JobsTemplateView,
    CouponsTemplateView,
    ExamplesTemplateView,
)

urlpatterns = [
    path("", MainPageTemplateView.as_view(), name="main-page"),
    path("privacy-policy", PrivacyPolicyTemplateView.as_view(), name="privacy-policy"),
    path("about", AboutCompanyTemplateView.as_view(), name="about"),
    path("faq", FAQTemplateView.as_view(), name="faq"),
    path("contacts", ContactsTemplateView.as_view(), name="contacts"),
    path("jobs", JobsTemplateView.as_view(), name="jobs"),
    path("coupons", CouponsTemplateView.as_view(), name="coupons"),
    path("examples", ExamplesTemplateView.as_view(), name="examples"),
]
