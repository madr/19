---
title: Atomic design - äntligen litet klarhet kring god CSS-struktur
date: 2013-10-19
template: post.html
layout: single.hbs
collection: articles
---
Känns någon av följande frågor bekanta, fortsätt läsa:

 * Verkar [Objektorienterad CSS](http://oocss.org) konstigt och "Använd inte id" befängt? 
 * Verkar [SMACSS](http://smacss.com) diffust?
 * Vad är egentligen problemet med att använda Adobe Photoshop för underlag till CSS?

När den här versionen av bloggen lades upp hade jag ett dragplåster med titeln [Hur jag slutade kämpa emot och började skriva bättre CSS](http://www.madr.se/b/css), där jag utvecklade varför jag börjat tänka på CSS på ett annat sätt.

Detta andra sätt har flera försökt sätta ord på, särskilt när det gäller vad god CSS består av. Allt ifrån det mer visuella *LEGO-bitar* till mer akademiska *moduler*.

Brad Frost har nyligen lagt fram ännu ett koncept för att förklara och han kallar det [Atomic Design](http://bradfrostweb.com/blog/post/atomic-web-design/). I hans koncept fungerar det såhär:

 1. **Atomerna** är våra normaliserade HTML-element och grundläggande grafiska komponenter, exempel: knappar, inmatningsfält, länkar och formuläretiketter.
 2. **Molekyler** består av en eller flera atomer, exempel: Ett inmatningsfält, en formuläretikett och en knapp (ett typiskt snabbsök).
 3. **Organismer** består av en eller flera molekyler som tillsammans bildar en särskild del av en helhet, exempel: snabbsök, navigering, logotyp (ett funktionellt sidhuvud).
 4. **Mallar** består av organismer som arrangerats till någon sorts helhet, något som har en början och ett slut, exempel: en startsida, en kontaktsida.
 5. **Sidor** är mallar där riktigt innehåll har fyllts på och därmed blivit affärskritiskt.

## Atomic Design i SMACSS

 * *base* några av atomerna, där andra atomer är *modules* (klasser, då de inte kan knytas till enbart HTML-elementets taggnamn) eller *submodules* (om de "tillhör" en särskild molekyl). 
 * Såväl molekylerna som organismerna är *modules*.
 * Layout definieras som en *mall* och i slutändan en *sida*.

## Atomic Design i OOCSS

 * *Structure* är atomer och molekyler, *Skin* likaså.
 * *Content* är atomer och molekyler, *Container* är organimser och i vissa fall även mallar.
 * *Template* definierar mallar och organismer.
 * *Core* är molekyler och atomer.
 * *Boxes/mod* är organismer.
 * *Plugins* är en eller flera molekyler som paketeras ihop och hanteras som ett paket, i sällsynta fall kan även en organism vara del i en Plugin.

## Kodexempel

    /*
    Nyhetslista, bestående av en rubrik följt av en eller flera rubriker
    (länkar). 

    .newslist-culture - Andra färger för att passa kulturavdelningen

    Styleguide 1.1 Nyhetslistor 
    */

    .newslist-wrapper {}    // organism
    .newslist {}            // molekyl
    .newslist-culture {}    // annan molekyl
    .newslist-item {}       // atom
    .newslist-heading {}    // atom

Jag tycker att det känns logiskt och förnuftigt. Det beskriver dessutom processen jag själv använder för att konstrurera färdiga sidor bottom-up genom att starta med enskilda komponenter (atomer) som sedan kombineras och balanseras till större komponentsammansättningar (först molekyler, därefter atomer) för att till sist bli en komplett sida.