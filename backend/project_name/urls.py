from django.conf.urls import include, url  # noqa
from django.contrib import admin
from django.views.generic import TemplateView

import django_js_reverse.views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^jsreverse/$', django_js_reverse.views.urls_js, name='js_reverse'),

    url(r'^$', TemplateView.as_view(template_name='itworks.html'), name='home'),
]
