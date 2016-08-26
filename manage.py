#!/usr/bin/env python

import os
import sys
from decouple import config

if __name__ == "__main__":
    settings_module = config('DJANGO_SETTINGS_MODULE', default=None)

    if sys.argv[1] == 'test':
        if settings_module:
            print("Ignoring config('DJANGO_SETTINGS_MODULE') because it's test. "
                  "Using '{{project_name}}.settings.test'")
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "{{project_name}}.settings.test")
    else:
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", settings_module)

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
