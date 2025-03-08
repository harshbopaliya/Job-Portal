from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Job, Application

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# Job Serializer
class JobSerializer(serializers.ModelSerializer):
    posted_by = UserSerializer(read_only=True)

    class Meta:
        model = Job
        fields = '__all__'

# Application Serializer
class ApplicationSerializer(serializers.ModelSerializer):
    applicant = UserSerializer(read_only=True)
    job = JobSerializer(read_only=True)

    class Meta:
        model = Application
        fields = '__all__'
