from django.urls import path
from .views import RegisterView, LoginView, JobListCreateView, JobDetailView, ApplyJobView, JobApplicationsView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('jobs/', JobListCreateView.as_view(), name='job-list'),
    path('jobs/<int:pk>/', JobDetailView.as_view(), name='job-detail'),
    path('jobs/<int:job_id>/apply/', ApplyJobView.as_view(), name='apply-job'),
    path('jobs/<int:job_id>/applications/', JobApplicationsView.as_view(), name='job-applications'),
]
