from .models import Team, Sport, Athlete
from .serializers import TeamSerializer, SportSerializer,AthleteSerializer, SportsTeamsSerializer, TeamAndAthleteSerializer, AthleteSportSerializer
from rest_framework import generics, pagination, filters,permissions

class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 50
    permission_classes = [
        permissions.AllowAny
    ]

class TeamList(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    # pagination_class = StandardResultsSetPagination
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('id', 'city', 'name', 'logo', 'league', 'abbr', 'sport')
    permission_classes = [
        permissions.AllowAny
    ]

class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamAndAthleteSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class SportList(generics.ListCreateAPIView):
    queryset = Sport.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SportSerializer
    # pagination_class = StandardResultsSetPagination
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('sport_id', 'name', 'abbr')


class SportsTeamsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportsTeamsSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class AthleteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Athlete.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AthleteSerializer

class HeadlineAthleteList(generics.ListCreateAPIView):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AthleteSportSerializer
    
    def get_queryset(self):
        
        sport = self.request.query_params.get('sport')
        print(sport)
        athletes = Athlete.objects.exclude(headline='')
        if sport:
            return athletes.filter(team__sport__sport_id=sport)
        else:
            return athletes
class DeepAthleteList(generics.ListCreateAPIView):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AthleteSportSerializer
    
    def get_queryset(self):
        athletes = Athlete.objects.all()
        sport = self.request.query_params.get('sport')
        headline = self.request.query_params.get('headline')
        print(sport,headline)
        if headline=='true':
            athletes = Athlete.objects.exclude(headline='')
        else:
            athletes = Athlete.objects.all()
        if sport:
            return athletes.filter(team__sport__sport_id=sport)
        else:
            return athletes