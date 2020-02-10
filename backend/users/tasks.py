from django.core import management

from {{project_name}} import celery_app


@celery_app.task
def clearsessions():
    management.call_command('clearsessions')
