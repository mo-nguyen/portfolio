from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from .models import Project, Tag
from rest_framework.response import Response
from .serializers import ProjectSerializer, TagSerializer
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_400_BAD_REQUEST, HTTP_201_CREATED
# Create your views here.

@api_view(['GET'])
def tags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)
    
class ProjectAPIView(APIView):
    
    def get(self, request, id=None):
        if not id:
            return Response(ProjectSerializer(Project.objects.all(), many=True).data)
        try:
            project = Project.objects.get(pk=id)
            serializer = ProjectSerializer(project)
            return Response(serializer.data)
        except Exception:
            return Response({"message": "Project not found"}, status=HTTP_404_NOT_FOUND)
    

    def put(self, request, id):
        try:
            project = get_object_or_404(Project, pk=id)
            project.tag.clear()
            tag = request.data.get("tag")
            for item in tag:
                    project.tag.add(Tag.objects.get(pk=item.get("id")))
            title = request.data.get("title")
            description = request.data.get("description")
            url = request.data.get("url")
            project.title = title
            project.url = url
            project.description = description
            project.save()
            return Response({"message": f"{project} was updated successfully"})
        except Exception:
            return Response({"message": "Project can not be updated"}, status=HTTP_400_BAD_REQUEST)

    def post(self, request):
        try:
            tag = request.data.get("tag")
            serializer = ProjectSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                project = serializer.save()
                for item in tag:
                    project.tag.add(Tag.objects.get(pk=item.get("id")))
            return Response({"message": f"{project} was created successfully"}, status=HTTP_201_CREATED)
        except Exception:
            return Response({"message": Exception}, status=HTTP_400_BAD_REQUEST)
