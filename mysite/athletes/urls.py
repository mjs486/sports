from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^athlete/(?P<athlete_id>[0-9]+)/$', views.athlete_detail, name='athlete_detail'),
    url(r'^team/(?P<team_id>[0-9]+)/$', views.team_detail, name='team_detail'),
    url(r'^athlete/new/$', views.create_athlete, name='create_athlete'),
    url(r'^team/new/$', views.create_team, name='create_team'),
]
