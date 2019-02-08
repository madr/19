---
tags: tech, 2015, ttl
date: 2015-07-19
template: post.html
title: Nya mjukvaror jag vill lära mig hösten 2015
layout: single.hbs
collection: articles
---
Förutom att [jag vill kika på React.js](/b/ttl-2015-web/) och [lära mig nya programmeringsspråk](/b/ttl-2015-langs/) finns det också litet annat jag känner behov av att veta litet om innan det blir år 2016. De kan kallas backendgrejor, daemons, verktyg eller helt enkelt **mjukvaror**.


## Memcached

En synnerligen lågt hängande frukt för min del kan tyckas, men jag har faktiskt aldrig fått äran att konfigurera [Memcached](http://www.memcached.org). Det har antingen varit på plats redan, eller inte varit ett alternativ på grund av den övriga teknikstackens utformning.

Framförallt har jag aldrig riktigt haft behovet. Av mina projekt där Memcached vore vettigt är det inget som har prestandaproblem där jag påtvingats att agera.

Med det sagt kommer jag att tillämpa Memcached ändå, bara för att lära mig. Jag vill förstå hur saker kan snabbas upp, och jag vill kunna bemästra grundläggande principer om backend-cache i webbstackar.

Som metod kommer jag att utgå från [Django’s cache framework](https://docs.djangoproject.com/en/1.8/topics/cache/#memcached) då mina mest aktiva projekt är baserade på Django.


## RabbitMQ

Jag har sedan en tid tillbaka varit mycket intresserad av att separera applikationer till delsystem och låta dem kommunicera med varandra med hjälp av formella meddelanden. Message Queueing känns värdefullt på något vis, även om det med den kunskap jag har i skrivandets stund också känns stort och svårgreppat.

När jag läser på om ämnet stöter jag ofta på hänvisningar till [RabbitMQ](http://Www.rabbitmq.com), som tycks vara en populär [Message broker](https://en.wikipedia.org/wiki/Message_broker).

Som metod väljer jag att skriva en lösning där **en Django-applikation** skickar meddelanden till **en Websocket-server** (troligtvis skriven i Node.js) som broadcastar ut till Websocket-klienter. Här ser jag framför mig att Node.js-delen är **push-orienterad**: den visualiserar data i realtid eller loggar händelser i form av notiser.



## Redis

Jag har uppfattningen att Redis är primitiv men enkel och ska vara rysligt snabb. Att Redis är (ännu) enklare än MongoDB och att främsta användningsområdet är för att cacha saker.

Jag har till mitt förtret lyckats undvika Redis. Med undantag för primitiva exempel på att köa asynkrona bakgrundsjobb har jag ytterst litet koll på vad och hur Redis är bäst lämpat.

Det lär dock inte vara omöjligt att kunna arbeta med Redis, då mjukvaran ofta kommer upp i samma forum som såväl RabbitMQ som Memcached.