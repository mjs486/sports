from .models import Team, Sport, Athlete
from .serializers import TeamSerializer, SportSerializer,AthleteSerializer, SportsTeamsSerializer, TeamAndAthleteSerializer, AthleteSportSerializer
from rest_framework import generics, pagination, filters,permissions


class SmallResultsSetPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10
    permission_classes = [
        permissions.AllowAny
    ]

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

class SportsTeamsList(generics.ListCreateAPIView):
    queryset = Sport.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SportsTeamsSerializer
    # pagination_class = StandardResultsSetPagination
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('sport_id', 'name', 'abbr')


class SportDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class SportsTeamsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportsTeamsSerializer
    permission_classes = [
        permissions.AllowAny
    ]



class AthleteList(generics.ListCreateAPIView):
    queryset = Athlete.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AthleteSerializer
    # pagination_class = StandardResultsSetPagination
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('id', 'first_name', 'last_name', 'number', 'team', 'position', 'age')


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
        if sport:
            return athletes.filter(team__sport__sport_id=sport)
        else:
            return athletes