# Generated by Django 4.0 on 2023-02-17 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_snippet_delete_product'),
    ]

    operations = [
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to='app')),
            ],
        ),
        migrations.DeleteModel(
            name='Snippet',
        ),
    ]
