from django.conf import settings


def sentry_dsn(request):
    return {
        'SENTRY_DSN': settings.SENTRY_DSN
    }


def commit_sha(request):
    return {
        'COMMIT_SHA': settings.COMMIT_SHA
    }
