---
title: Låt din server göra jobbet istället för klientens JavaScript
date: 2013-03-14
template: post.html
layout: single.hbs
collection: articles
---
[Thomas Fuchs](http://mir.aculo.us/2013/02/26/client-side-mvc-is-not-a-silver-bullet) om så kallad Clientside MVC, dvs att hantera affärslogik på klienten med JavaScript istället för att använda backend:

> I’ve come to the realization that this much client-side processing and decoupling is detrimental to both the speed of development, and application performance (a ton of JavaScript has to be loaded and evaluated each time you fire up the app). It’s better to let the server handle HTML rendering and minimize the use of JavaScript on the client. You can still have fast and highly interactive applications, as the new Basecamp shows—letting the server handle most stuff doesn’t mean that you have to cut back on cool front-end features and user friendliness.

Han sade detta som en del av varför Charm, en tjänst Thomas utvecklat lades ner. Vidare:

> I argue that all these newfangled libraries are actually detrimental to the user experience in some ways, as they lock you into certain patterns (it’s hard do to things the authors didn’t anticipate) and if you use something like Ember (which we didn’t), it’s even worse as all applications using it practically look the same (many people choose using Twitter’s Bootstrap library, for example).

Jag har hela tiden känt mig skeptisk inför den här trenden, och att se någon så inflytelserik som Thomas Fuchs tar till den här tonen känner jag mig trygg.

Keep it simple, stupid.