# Generated by Django 4.1.3 on 2022-11-26 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='tag',
            field=models.ManyToManyField(to='api.tag'),
        ),
    ]