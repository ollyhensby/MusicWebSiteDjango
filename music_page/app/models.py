from django.db import models


# Create your models here.


class SongPost(models.Model):
    title = models.TextField()
    cover = models.ImageField(upload_to='images/')
    href = models.URLField(max_length=200, null=True)

    def __str__(self):
        return self.title


class VideoPost(models.Model):
    title = models.TextField()
    video_link = models.URLField(max_length=200)

    def __str__(self):
        return self.title


class BioPost(models.Model):
    title = models.TextField()
    bio = models.TextField()

    def __str__(self):
        return self.title
