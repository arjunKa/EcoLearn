# Generated by Django 5.0.2 on 2024-04-26 01:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecoLearning', '0011_recycle'),
    ]

    operations = [
        migrations.CreateModel(
            name='Province',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('amount_carbon', models.DecimalField(decimal_places=4, max_digits=6)),
            ],
        ),
    ]
