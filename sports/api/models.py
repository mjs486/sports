from __future__ import unicode_literals

from django.db import models

class Sport(models.Model):
	name = models.CharField(max_length=30,blank=True)
	abbr = models.CharField(max_length=10,blank=True)
	sport_id = models.CharField(max_length=30, primary_key=True)
	def __str__(self):
		return self.name

class Team(models.Model):
	city = models.CharField(max_length=30,blank=True)
	name = models.CharField(max_length=30,blank=True)
	logo = models.URLField(max_length=200,blank=True)
	league = models.CharField(max_length=30,blank=True)
	abbr = models.CharField(max_length=30,blank=True)
	sport = models.ForeignKey(Sport,related_name='teams')
	def __str__(self):
		return '%s %s'%(self.city, self.name)

class Athlete(models.Model):
	first_name = models.CharField(max_length=30,blank=True)
	last_name = models.CharField(max_length=30,blank=True)
	number = models.CharField(max_length=10,blank=True)
	team = models.ForeignKey(Team, related_name='athletes')
	position = models.CharField(max_length=30,blank=True)
	age = models.CharField(max_length=10,blank=True)
	headline = models.CharField(max_length=200,blank=True)
	injury = models.CharField(max_length=200,blank=True)
	img = models.URLField(max_length=200,default='https://auth.cbssports.com/images/players/unknown-hat-170x170.png')
	def __str__(self):
		return self.first_name + ' ' + self.last_name

