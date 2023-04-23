from django.test import TestCase
from app.models import SongPost, VideoPost, BioPost
import tempfile


class TestModels(TestCase):
    def test_song_post_creation(self):
        image = tempfile.NamedTemporaryFile(suffix=".jpg").name
        song = SongPost.objects.create(
            title="Test", cover=image, href="https://google.com"
        )
        self.assertTrue(isinstance(song, SongPost))
        self.assertEqual(song.__str__(), song.title)

    def test_video_post_creation(self):
        video = VideoPost.objects.create(
            title="Test",
            video_link="https://www.youtube.com/watch?v=F5mRW0jo-U4&ab_channel=freeCodeCamp.org",
        )
        self.assertTrue(isinstance(video, VideoPost))
        self.assertEqual(video.__str__(), video.title)

    def test_bio_post_creation(self):
        bio = BioPost.objects.create(title="Test", bio="Some bio")
        self.assertTrue(isinstance(bio, BioPost))
        self.assertEqual(bio.__str__(), bio.title)
