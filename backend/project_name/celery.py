import os

from django.apps import apps

from celery import Celery

from .celerybeat_schedule import CELERYBEAT_SCHEDULE


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "{{project_name}}.settings.local")

app = Celery("{{project_name}}_tasks")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks(lambda: [n.name for n in apps.get_app_configs()])
app.conf.update(CELERYBEAT_SCHEDULE=CELERYBEAT_SCHEDULE)
