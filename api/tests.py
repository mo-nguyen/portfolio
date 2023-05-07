from django.test import TestCase
from api.models import Tag, Project
# Create your tests here.

class TagTestCase(TestCase):
    def test_tag(self):
        tag = Tag(name="Test")
        self.assertEqual(tag.name, "Test")


class ProjectTestCase(TestCase):
    def test_project(self):
        project = Project(title="Test", url="http://localhost", description="description")
        self.assertEqual(project.title, "Test")
        self.assertEqual(project.url, "http://localhost")
        self.assertEqual(project.description, "description")
