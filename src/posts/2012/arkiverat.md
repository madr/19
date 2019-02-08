---
title: Äldre inlägg på madr.se finns nu arkiverade
date: 2012-07-25
template: post.html
layout: single.hbs
collection: articles
---
Under tiden jag lade ut [nya madr.se](http://www.madr.se/hur-webbplatsen-byggdes) skarpt hade Posterous tekniska problem som hindrade mig från att skriva något eller ändra något med gamla sajten. Nu när läget tycks vara stabilt igen har jag gjort det som jag väljer att kalla *arkivering* av äldre inlägg.

Efter nästan sex års bloggande och tre migrationer av innehåll (se fotnot) känner jag att det är dags att börja på ett blankt blad. Jag beslutade därför att innehållet inte migreras, utan istället ligger kvar på  posterous, men under en annan adress: [http://madrse.posterous.com](http://madrse.posterous.com).

För att inte bryta länkar har jag med hjälp av Posterous API tagit ut alla permalänkar till de 228 inläggen och lagt in dessa som HTTP 301:or i den här sajtens [URL dispatcher](https://docs.djangoproject.com/en/dev/topics/http/urls/) (har jag nämnt att jag gillar Django?).

Det som händer för en klient som efterfrågar ett arkiverat inlägg i följade, grovt förklarat:

 1. **madr.se/XYZ** efterfrågas.
 2. En permanent redirect ([HTTP status 301](http://en.wikipedia.org/wiki/HTTP_301)) skickas tillbaka.
 3. Klienten vidarebefodras automatiskt till **madrse.posterous.com/XYZ**

På det viset bör jag inte rycka undan mattan för någon i och med mitt val att inte migrera innehållet.

**Fotnot: ** Bloggen gick live januari 2007 ur ett experiment med syfte att lära mig PHP. Den egenutvecklade kodbasen (version 1.0 och version 1.5) underhölls fram tills april 2009 och övergavs för Wordpress i juni 2010. I november 2010 migrerades bloggen slutligen till Posterous där den låg fram tills juli 2012.