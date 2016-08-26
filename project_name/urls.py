from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^djangojs/', include('djangojs.urls')),

    url(r'^$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='home'),
]
