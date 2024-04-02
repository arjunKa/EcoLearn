# Generated by Django 5.0.2 on 2024-03-22 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tree',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.IntegerField()),
                ('type_tree', models.CharField(max_length=100)),
                ('amount_carbon', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
    ]
