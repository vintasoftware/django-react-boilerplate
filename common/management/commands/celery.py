# pylint: skip-file
import shlex
from subprocess import PIPE  # nosec

from django.core.management.base import BaseCommand
from django.utils import autoreload

import psutil


def restart_celery():
    for proc in psutil.process_iter():
        if proc.name() == 'celery':
            proc.kill()
    cmd = "celery worker -A {{project_name}} -l INFO"
    psutil.Popen(shlex.split(cmd), stdout=PIPE)


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        print('Starting celery worker with autoreload')
        autoreload.main(restart_celery)
