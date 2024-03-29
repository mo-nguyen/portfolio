from rest_framework import serializers
from .models import Project, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Tag
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    tag = TagSerializer(read_only=True, many=True)
    class Meta:
        model = Project
        fields = '__all__'
