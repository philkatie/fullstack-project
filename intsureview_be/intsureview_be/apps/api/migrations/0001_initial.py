# Generated by Django 4.1.9 on 2023-07-08 04:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Form',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phoneNumber', models.CharField(max_length=12)),
                ('address', models.CharField(max_length=300)),
                ('interactions', models.CharField(max_length=300)),
                ('experiencedActivity', models.BooleanField(default=False)),
                ('activityDescription', models.CharField(max_length=500)),
            ],
        ),
    ]