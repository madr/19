---
title: Notiser med CSS3 animationer och litet JavaScript
date: 2011-08-05
layout: single.hbs
collection: articles
archived: true
---
Notiser ett av många sätt att återkoppla till en användare i webappar.
Historiskt sett har detta hanterats med JavaScript, t ex jQuery-plugins:
[6 jQuery growl-like notification
systems](http://webtoolkit4.me/2009/08/13/jquery-growl-likenotification-systems/).

Som en övning för att lära mig det urmärkta verktyget
[CSSDesk](http://cssdesk.com) tog jag mig ann uppgiften att skapa
notiser. Jag ville testa lyckan med enbart [css3
Animationer](http://dev.w3.org/csswg/css3-animations/) för att hantera
presentationen. Då jag är av åsikten att CSS inte ska hantera för mycket
beteende (läsvärt: [Behavioral
Separation](http://www.alistapart.com/articles/behavioralseparation)),
och för att kunna köra en vettig demo, insåg jag att det behövdes litet
JavaScript.

Resultatet presenteras som en [JSFiddle](http://jsfiddle.net/NRsJ7/1/),
ett annat utmärkt verktyg för övrigt.

Jag är på det stora hela nöjd. Det är i CSS-filen animationen
konfigureras, och detta är förstås öppet för diskussion. Jag tycker dock
att det är en separation av presentation och beteende som jag kan leva
med.

Tråkigheter finns dock i min lösning. Den främsta är att min lösning kör
en `replaceChild` för varje ny tooltip. Jag hade föredragit att kunna
köra en "rewind" av animationen.

*Jag hade även gärna lagt in kod direkt i inlägget, eller till och med
bäddat in JSFiddle här, men Posterous ogillar tydligen JSFiddles
inbäddningskod dessvärre.*