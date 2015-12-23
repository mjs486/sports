# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.urlresolvers import reverse
from django.core.handlers import wsgi


class WSGIHandler(wsgi.WSGIHandler):
    """
    If the request path is <ANGULAR_REVERSE> it should be resolved to actual view, otherwise
    continue as usual.
    """
    ANGULAR_REVERSE = '/angular/reverse/'
    urlconf = None

    def get_response(self, request):
        if request.path == self.ANGULAR_REVERSE:
            url_name = request.GET.get('djng_url_name')
            url_args = request.GET.getlist('djng_url_args', None)
            url_kwargs = {}

            # Read kwargs
            for param in request.GET:
                if param.startswith('djng_url_kwarg_'):
                    url_kwargs[param[15:]] = request.GET[param]  # [15:] to remove 'djng_url_kwarg' prefix

            url = reverse(url_name, args=url_args, kwargs=url_kwargs, urlconf=self.urlconf)
            request.META['PATH_INFO'] = url
            request.META['QUERY_STRING'] = ''
            request = wsgi.WSGIRequest(request.META)
        return super(WSGIHandler, self).get_response(request)

_django_app = WSGIHandler()


def application(environ, start_response):
    return _django_app(environ, start_response)
