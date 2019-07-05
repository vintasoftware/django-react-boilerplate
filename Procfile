web: gunicorn test5.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: celery worker --workdir backend --app=test5 --loglevel=info
