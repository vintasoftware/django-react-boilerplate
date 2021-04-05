web: gunicorn {{project_name}}.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: celery worker --workdir backend --app={{project_name}} -B --loglevel=info
beat: celery beat --workdir backend --app={{project_name}} -S redbeat.RedBeatScheduler --loglevel=info
