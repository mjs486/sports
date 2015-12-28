from rest_framework import serializers
from .models import Sport, Team, Athlete

class AthleteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Athlete
		fields = ('id', 'first_name', 'last_name', 'number', 'team', 'position', 'age', 'headline', 'injury', 'img')

class TeamSerializer(serializers.ModelSerializer):
	class Meta:
		model = Team
		fields = ('id', 'city', 'name', 'logo', 'league', 'abbr', 'sport')

class TeamAndAthleteSerializer(serializers.ModelSerializer):
	athletes = AthleteSerializer(many=True,read_only=True)

	class Meta:
		model = Team
		fields = ('id', 'city', 'name', 'logo', 'league', 'abbr', 'sport', 'athletes')


class SportsTeamsSerializer(serializers.ModelSerializer):
	teams= TeamSerializer(many=True,read_only=True)
	class Meta:
		model = Sport
		fields = ('sport_id', 'name', 'abbr','teams')

class SportSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sport
		fields = ('sport_id', 'name', 'abbr')

class AthleteSportSerializer(serializers.ModelSerializer):
	sport = serializers.PrimaryKeyRelatedField(read_only=True, source='team.sport.sport_id')
	team_id = serializers.PrimaryKeyRelatedField(queryset=Team.objects.all())
	class Meta:
		model = Athlete
		fields = ('id', 'first_name', 'last_name', 'number', 'team_id','team', 'position', 'age', 'headline', 'injury', 'img','sport')
		depth=1