from django.conf import settings


def sentry_dsn(request):
    return {
        'SENTRY_DSN': settings.SENTRY_DSN
    }
