from .base import *


DEBUG = True

HOST = "http://localhost:8000"

SECRET_KEY = "secret"  # noqa: S105

STATIC_ROOT = base_dir_join("staticfiles")
STATIC_URL = "/static/"

MEDIA_ROOT = base_dir_join("mediafiles")
MEDIA_URL = "/media/"

DEFAULT_FILE_STORAGE = "django.core.files.storage.FileSystemStorage"
STATICFILES_STORAGE = "django.contrib.staticfiles.storage.StaticFilesStorage"

AUTH_PASSWORD_VALIDATORS = []  # allow easy passwords only on local

# Celery
CELERY_TASK_ALWAYS_EAGER = True
CELERY_TASK_EAGER_PROPAGATES = True

# Email settings for mailhog
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "mailhog"
EMAIL_PORT = 1025

# Logging
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "standard": {"format": "%(levelname)-8s [%(asctime)s] %(name)s: %(message)s"},
    },
    "handlers": {
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "standard",
        },
    },
    "loggers": {
        "": {"handlers": ["console"], "level": "INFO"},
        "celery": {"handlers": ["console"], "level": "INFO"},
    },
}

JS_REVERSE_JS_MINIFY = False

# Django-CSP
LOCAL_HOST_URL = "http://localhost:3000"
LOCAL_HOST_WS_URL = "ws://localhost:3000/ws"
CSP_SCRIPT_SRC += [LOCAL_HOST_URL, LOCAL_HOST_WS_URL]
CSP_CONNECT_SRC += [LOCAL_HOST_URL, LOCAL_HOST_WS_URL]
CSP_FONT_SRC += [LOCAL_HOST_URL]
CSP_IMG_SRC += [LOCAL_HOST_URL]
