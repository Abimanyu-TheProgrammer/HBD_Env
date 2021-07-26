from django.shortcuts import render

# Create your views here.
def page_1_view(request):
    return render(request, "page1/hbd.html")