
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import UserModelViewSet

router = routers.SimpleRouter()

router.register(r'register', UserModelViewSet,
                basename="register")

urlpatterns = [
    path('auth/', include('rest_auth.urls')),
    path('', include(router.urls)),
]
