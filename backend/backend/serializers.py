from rest_framework import serializers
from .models import User_auth

class User_authSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_auth  # Links to the model
        fields = ['name', 'username', 'email', 'phone_number']  # Selects which fields to expose
