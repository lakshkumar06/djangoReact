from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def index(request):
    return render(request, 'index.html')

@csrf_exempt
def get_message(request):
    if request.method == "POST":
        data = json.loads(request.body)
        message = data.get("message", "Hello from Django!")
    else:
        message = "Hello from Django!"
    return JsonResponse({"message": message})