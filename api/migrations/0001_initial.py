# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-22 16:48
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Athlete',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('number', models.PositiveSmallIntegerField()),
                ('position', models.CharField(max_length=30)),
                ('salary', models.PositiveIntegerField()),
                ('headline', models.CharField(max_length=200)),
                ('injury', models.CharField(max_length=200)),
                ('img', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(max_length=30)),
                ('name', models.CharField(max_length=30)),
                ('logo', models.URLField()),
            ],
        ),
        migrations.AddField(
            model_name='athlete',
            name='team',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Team'),
        ),
    ]
