from django.urls import path
from . import views

urlpatterns = [
    path('get-projects/', views.get_projects, name='get-projects'),
]