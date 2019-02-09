---
title: Använd inte Gunicorn för Django och Flask på Heroku →
date: 2014-04-24
template: post.html
layout: single.hbs
collection: articles
---
[Dave Hall](http://blog.etianen.com/blog/2014/01/19/gunicorn-heroku-django/) skriver litet om varför man inte ska använda [Gunicorn](http://gunicorn.org/) om ens Django-projekt ligger på Heroku.

Främsta orsaken är att Gunicorn är designat för att ligga bakom nginx, vilket inte är fallet på Heroku.

Jag kan också tipsa om [django-herokuapp](https://github.com/etianen/django-herokuapp) som innehåller en bootstrap i best practices. Jag kopierade mycket guldklimpar därifrån i mina aktiva Django-projekt.

Flask har samma bekymmer, dessvärre.