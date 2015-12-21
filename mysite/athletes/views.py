from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from .models import Team, Athlete
from .forms import AthleteForm, TeamForm


# Create your views here.
def index(request):
    team_list = Team.objects.all()
    athlete_list = Athlete.objects.all()
    context = {'team_list' : team_list,
               'athlete_list' : athlete_list,
              }
    return render(request, 'athletes/index.html', context)

def athlete_detail(request, athlete_id):
    if request.method == 'POST':
        athlete = Athlete.objects.get(pk=athlete_id)
        form = AthleteForm(request.POST, instance=athlete)
        if request.POST.get('delete'):
           athlete.delete()
        elif form.is_valid():
           instance = form.save(commit=False)
           instance.save()
        return HttpResponseRedirect('athletes/index.html')
    else:
        athlete = get_object_or_404(Athlete,pk=athlete_id)
        athlete_form = AthleteForm(instance=athlete)
        context = {'athlete' : athlete, 'athlete_form' : athlete_form}
        return render(request, 'athletes/athlete_detail.html', context)

def create_athlete(request):
    if request.method == 'POST':
        athlete_form = AthleteForm(request.POST)
        if athlete_form.is_valid():
            instance = athlete_form.save(commit=False)
            print(instance)
            instance.save()
        return HttpResponseRedirect('/thanks/')
    else:
        athlete_form = AthleteForm()
        context = {'athlete_form' : athlete_form}
        return render(request, 'athletes/create_athlete.html', context)

def team_detail(request, team_id):
    team = get_object_or_404(Team,pk=team_id)
    athletes_list = Athlete.objects.filter(team_id=team.id)
    context = {'team' : team, 'athletes_list' : athletes_list}
    return render(request, 'athletes/team_detail.html', context)


def create_team(request):
    if request.method == 'POST':
        team_form = TeamForm(request.POST)
        if team_form.is_valid():
            instance = team_form.save(commit=False)
            instance.save()
        return HttpResponseRedirect('/thanks/')
    else:
        team_form = TeamForm()
        context = {'team_form' : team_form}
        return render(request, 'athletes/create_team.html', context)

