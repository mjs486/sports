from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    league = models.CharField(max_length=30)
    sport = models.CharField(max_length=30)
    def __str__(self):
        return self.city + ' ' + self.name

class Athlete(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    number = models.PositiveSmallIntegerField()
    team = models.ForeignKey(Team)
    postion = models.CharField(max_length=30)
    def __str__(self):
        return self.first_name + ' ' + self.last_name


