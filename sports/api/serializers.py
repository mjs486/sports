from rest_framework import serializers
from .models import Sport, Team, Athlete

class AthleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Athlete
        fields = ('id', 'first_name', 'last_name', 'number', 'team', 'position', 'age', 'headline', 'injury', 'img')

class TeamSerializer(serializers.ModelSerializer):
	athletes= serializers.PrimaryKeyRelatedField(many=True,read_only=True)
	class Meta:
		model = Team
		fields = ('id', 'city', 'name', 'logo', 'league', 'abbr', 'sport', 'athletes')

class SportSerializer(serializers.ModelSerializer):
	teams= serializers.PrimaryKeyRelatedField(many=True,read_only=True)
	class Meta:
		model = Sport
		fields = ('sport_id', 'name', 'abbr','teams')
