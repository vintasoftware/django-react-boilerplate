web: gunicorn {{project_name}}.wsgi --limit-request-line 8188 --log-file -
worker: celery worker --app={{project_name}} --loglevel=info
