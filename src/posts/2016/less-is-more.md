---
title: Less is More - omgörning(ar) av madr.se
date: 2016-11-17
template: post.html
layout: single.hbs
collection: articles
---
För nästan 1,5 år sedan smög jag helt fräckt ut en ny design av den här hemsidan, där jag dessutom kastade ut Django utan minsta förvarning.

Ska jag hitta på en bra ursäkt så var det främst för att [Heroku inte längre kan köras helt gratis][1]. Men helt ärligt så hade tanken på att gå vidare från Django funnits i mitt huvud ett tag redan.

**Less is more**. Jag bloggar på den här hemsidan rätt sporadiskt. Jag använder den inte för något särskilt, annat än att blogga om sånt jag tycker är värt att kunna blicka tillbaka på i retrospektiv, främst för egen del.

Så när jag snubblade över [MetalSmith][2], en modulär och pluginbaserad variant på generatorer för statiska hemsidor, blev jag genast inspirerad. På några kvällar hade jag skrivit några byggscript i Node.js och litet CSS, samt ett export-script i Django. 

Jag placerade de genererade HTML-filerna på min egen VPS, och skjöt upp källkoden på Github för att få litet backup. Någon månad senare skapade jag också ett SSL-certifikat så att sajten numera kör över HTTPS. Detta skedde sommaren 2015.

I och med detta inlägg har jag piffat upp med litet ny CSS och litet uppstädning bland gamla sidor. Återigen, **less os more**: jag städade här bort JavaScript som inte användes, samt några beroenden som inte längre var aktuella i `package.json`.

Madr.se är när allt kommer omkring det mest personliga jag har på Internet. Jag är ingen person som uppskattar verktyg som går i träda. Sånt som inte kommer till användning ska ut. Enkelt.

Detta gjorde jag även med tanke på att madr.se fyller 10 år i slutet av december. Det är utan tävlan det längsta jag givit en och samma sajt.

Jag kommer troligtvis att tillåta mig att bli litet nostalgisk genom att skriva några rader om de sajter jag drev innan när det så är dags att fira 10 år med samma blogg. Måhända kikar jag tillbaka på vem jag var då, i december 2006.

[1]: https://blog.heroku.com/new-dyno-types-public-beta 
[2]: http://metalsmith.io