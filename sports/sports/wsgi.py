"""
WSGI config for sports project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

import django.core.handlers.wsgi

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sports.settings")

application = django.core.handlers.wsgi.WSGIHandler()