# filepath: /Users/lakshkumar/Desktop/djangoReact/backend/backend/views.py
from django.shortcuts import render
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')

def get_message(request):
    message = "Hello from Django!"
    return JsonResponse({"message": message})