from __future__ import unicode_literals

from django.db import models

class Sport(models.Model):
	name = models.CharField(max_length=30)
	abbr = models.CharField(max_length=10)
	sport_id = models.CharField(max_length=30, primary_key=True)
	def __str__(self):
		return self.name

class Team(models.Model):
	city = models.CharField(max_length=30)
	name = models.CharField(max_length=30)
	logo = models.URLField(max_length=200)
	league = models.CharField(max_length=30)
	abbr = models.CharField(max_length=30)
	sport = models.ForeignKey(Sport,related_name='teams')
	def __str__(self):
		return '%s %s'%(self.city, self.name)

class Athlete(models.Model):
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=30)
	number = models.CharField(max_length=10)
	team = models.ForeignKey(Team, related_name='athletes')
	position = models.CharField(max_length=30)
	age = models.CharField(max_length=10)
	headline = models.CharField(max_length=200)
	injury = models.CharField(max_length=200)
	img = models.URLField(max_length=200)
	def __str__(self):
		return self.first_name + ' ' + self.last_name

