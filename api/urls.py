from django.urls import path
from .views import tags, ProjectAPIView, GetCSRFToken

urlpatterns = [
    path('projects/', ProjectAPIView.as_view(), name='projects'),
    path('tags/', tags, name="tags"),
    path('project/<int:id>', ProjectAPIView.as_view(), name="project"),
    path('project/', ProjectAPIView.as_view(), name="add-project"),
    path('csrf-token', GetCSRFToken.as_view(), name="csrf-token"),
]