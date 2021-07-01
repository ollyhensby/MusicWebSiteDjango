from django.contrib import admin
from .models import SongPost, VideoPost, BioPost

# Register your models here.

admin.site.register(SongPost)
admin.site.register(VideoPost)
admin.site.register(BioPost)
