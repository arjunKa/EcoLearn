# Generated by Django 5.0.2 on 2024-03-22 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecoLearning', '0002_rename_type_tree_tree_type_remove_tree_age_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tree',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
