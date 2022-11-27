from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Project
from rest_framework.response import Response
from .serializers import ProjectSerializer
# Create your views here.

@api_view(['GET'])
def get_projects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

