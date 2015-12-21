from django.forms import ModelForm
from .models import Team, Athlete

class AthleteForm(ModelForm):
    class Meta:
        model = Athlete
        fields = ['first_name', 'last_name', 'position', 'number', 'team']

class TeamForm(ModelForm):
    class Meta:
        model = Team
        fields = ['city','name','league','sport']
