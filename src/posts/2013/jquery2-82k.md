---
title: Att ta bort stöd för IE6-8 påverkar inte jQuerys vikt
date: 2013-05-23
template: post.html
layout: single.hbs
collection: articles
---
Jag skrev tidigare om [Varför jag överger jQuery](http://www.madr.se/b/jquery-zeptojs-2013). Framförallt filstorleken var mig ett betungande problem.

Det jag inte visste i det läget var hur mycket jQuery-teamet lyckas kapa kodbasen till genom att slänga ut bebisen med badvattnet, dvs stöd för IE6-8.

Nu, när jQuery 2 är släppt, kan vi kika:

 * jquery-2.0.0.min.js - 82K
 * jquery-2.0.0.min.js.gz - 29K

82K enbart för en lyxigare syntax i moderna webbläsare. 29K om gzippning finns tillgänglig (vilket den givetvis gör i ditt projekt, eller hur?). 

Jag står därmed fast vid mitt uttalande. *jQuery 2 har ingen plats i min kodbas om jag slipper tänka på IE6-8*. Jag håller mig då till ren JavaScript och låter CSS3 transitions/transforms mjuka upp interaktion.

Jag lär mig hellre CoffeeScript eller Dart än gör ett projekt beroende av jQuery *bara-för-att*. Eller, ännu bättre, använder ett litet och ändamålsenligt bibliotek istället för en 82K tung best.

Dessa 82K kan istället leverera 5-10 bilder på min sajt, eller en riktigt snygg heltäckande bakgrund. Riktig kundnytta, istället för lyxigare syntax för ett språk som inte på något sätt är trasigt och behöver lagas på besökares bekostnad.