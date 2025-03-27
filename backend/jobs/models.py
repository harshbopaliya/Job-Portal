from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50, choices=[("Full Time", "Full Time"), ("Part Time", "Part Time"), ("Freelance", "Freelance")])
    description = models.TextField()

    def __str__(self):
        return self.title
