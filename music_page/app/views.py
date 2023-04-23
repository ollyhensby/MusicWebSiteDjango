from django.shortcuts import render
from django.views.generic import TemplateView
from .models import SongPost, VideoPost, BioPost


class HomePageView(TemplateView):
    template_name = "home.html"

    def get_context_data(self, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        context["songs"] = SongPost.objects.all()
        context["videos"] = VideoPost.objects.all()
        context["biography"] = BioPost.objects.all()
        return context
