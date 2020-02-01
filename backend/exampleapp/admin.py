from django.contrib import admin  # noqa

from .models import Question, Choice

# Register your models here.

admin.site.register(Question)
admin.site.register(Choice)
