from django.conf.urls import include, url  # noqa
from django.urls import path
from django.contrib import admin
from django.shortcuts import redirect

import django_js_reverse.views
from rest_framework.routers import DefaultRouter

from exampleapp.routes import routes as exampleapp_routes

router = DefaultRouter()

routes = exampleapp_routes
for route in routes:
    router.register(route['regex'], route['viewset'], basename=route['basename'])

urlpatterns = [
    path("", lambda request : redirect("/exampleapp/")),
    path("admin/", admin.site.urls, name="admin"),
    path("jsreverse/", django_js_reverse.views.urls_js, name="js_reverse"),
    path("exampleapp/", include("exampleapp.urls"), name="exampleapp"),

    path("api/", include(router.urls), name="api"),
]
