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

class SportSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sport
		fields = ('sport_id', 'name', 'abbr')
