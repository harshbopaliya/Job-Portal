from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("jobs.urls")),
]

urlpatterns += [
    path("api/auth/", include("users.urls")),
]
