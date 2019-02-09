---
template: post.html
date: 2016-01-14
tags: ttl
title: Vad lärde jag mig hösten 2015?
layout: single.hbs
collection: articles
---
Jag ville lära mig massa nytt förra hösten. Förutom [React][2] gällde det såväl [verktyg][1] som [nya programmeringsspråk][3]. 


## Mer, mer! React och RabbitMQ

Jag behöver mer tid i **React**. Jag gillar ramverket och kommer att skriva mer i det, något lagom avancerat. Jag fick massor med tid i [Socket.io][6] under ett projekt i höstas där jag implementerade **PubSubHubbub** för kunds räkning. Jag ser framför mig en oerhört kraftfull kombination av dessa två.

Det är även här jag ser att **RabbitMQ** kommer att kunna användas, då en riktig meddelande-kö är mindre exponerat och mer ändamålsenligt än **web hooks** för att få en applikation att prata med en annan.


## Vägs ände: Vala, C, Redis

**Vala** bestämde jag mig ganska tidigt för att slopa. Istället skrev jag några grundläggande program med [PyGObjects][4]. Jag gillar verkligen att kunna prata direkt med GObjects med python. Detta spår kommer jag att fortsätta på denna vår.

Jag kodade inget mer **C** efter att ha slutfört [Learn C the Hard Way][5]. Jag gillar C men kommer inte att investera något mer i språket förrän jag har ett konkret användningsfall för det.

Jag implementerade **Redis** som ett cache-lager för kunds räkning vid ett tillfälle under hösten. Ett annat tillfälle användes Redis för att spara sessionsdata till ett backend i **Node.js**. Vid ytterligare ett annat tillfälle testade jag att använda Redis som databas, men ersatte snabbt den lösningen med **MongoDB** istället. 

Jag känner här att jag fått en bra grund och beslutsstöd för att använda Redis och är mer bekväm med verktyget nu.


## Restpunkter: Memcached

Memcached har jag fortfarande inte tillämpat. Detta ska jag göra något åt i vår. Jag har fortfarande ett par bra kandidater för att boosta svarstider genom att använda Memcached.


## Bubblare för våren 2015

* [Vue.js][7] behöver jag ta ställning till, även [Ractive][8]. Det är dock inte möjligt förrän jag kodat ordentligt i React.
* [django-oauth2-toolkit][9] och [flask-oauthlib][10] behöver jag skriva något med. Helst något med både en klient och en provider.
* **HTTP APIer** rent allmänt är något jag vill göra ordentligt i år. [django-rest-framework][11] kommer att ges mycket tid för detta.
* [Titanium][12] och andra **ramverk som bygger native** kommer att kikas på för att bygga appar för Android och iPhone. Jag vill börja bygga appar igen, då jag anser att dessa är russinen i Internetkakan idag. **Hybrid-appar** måste dö.


[1]: /b/ttl-2015-tools/
[2]: /b/ttl-2015-web/
[3]: /b/ttl-2015-lang/
[4]: https://wiki.gnome.org/Projects/PyGObject
[5]: http://c.learncodethehardway.org/book/
[6]: http://socket.io
[7]: http://vuejs.org/
[8]: http://www.ractivejs.org/
[9]: https://django-oauth-toolkit.readthedocs.org/en/latest/
[10]: https://flask-oauthlib.readthedocs.org/en/latest/
[11]: http://www.django-rest-framework.org/
[12]: http://appcelerator.org/#titanium