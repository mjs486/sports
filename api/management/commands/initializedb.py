import requests
from api.models import Sport, Athlete, Team
from django.core.management.base import BaseCommand
from django.core.exceptions import ObjectDoesNotExist

def get_team_or_none(sport,abbr):
		try:
			return Team.objects.get(sport_id=sport,abbr=abbr)
		except ObjectDoesNotExist:
			return None

class Command(BaseCommand):
    args = ''
    help = 'Populating DB'

    def handle(self, *args, **options):
		self._populate_athletes()


    def _populate_athletes(self):
        sportnames = ['baseball','basketball','football', 'hockey']
        for sport in sportnames:
			players =requests.get('http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=%s&response_format=JSON'%(sport)).json()['body']['players']
			for player in players:
				try:
					firstname = player['firstname']
					lastname = player['lastname']
					position = player['position']
					if 'jersey' in player:
						number = player['jersey']
					else:
						number = ''
					if 'photo' in player:
						img = player['photo']
					else:
						img = ''
					if 'age' in player:
						age = player['age']
					else:
						age = ''
					if 'icons' in player:
						if 'injury' in player['icons']:
							injury = player['icons']['injury']
						else:
							injury = ''
						if 'headline' in player['icons']:
							headline = player['icons']['headline']
						else:
							headline = ''
					else:
						injury = ''
						headline = ''
					
					team = get_team_or_none(sport,player['pro_team'])

					if team:
						p = Athlete(first_name=firstname,last_name=lastname,position=position,number=number,img=img,age=age,headline=headline,injury=injury,team=team)
						p.save()

				except ObjectDoesNotExist:
					print(player)

				
	
