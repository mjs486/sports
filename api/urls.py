from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [

    url(r'^athlete/$',views.DeepAthleteList.as_view()),
    url(r'^team/$', views.TeamList.as_view()),
    url(r'^sport/$', views.SportList.as_view()),
    url(r'^athlete/(?P<pk>[0-9]+)/$', views.AthleteDetail.as_view()),
    url(r'^team/(?P<pk>[0-9]+)/$', views.TeamDetail.as_view()),
    url(r'^sportsteams/(?P<pk>[a-z]+)/$', views.SportsTeamsDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)