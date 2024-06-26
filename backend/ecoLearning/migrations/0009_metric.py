# Generated by Django 5.0.2 on 2024-04-23 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecoLearning', '0008_rename_amount_co2_food_amount_carbon'),
    ]

    operations = [
        migrations.CreateModel(
            name='Metric',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100)),
                ('amount_carbon', models.DecimalField(decimal_places=2, max_digits=6)),
                ('description', models.TextField(default='text')),
            ],
        ),
    ]
