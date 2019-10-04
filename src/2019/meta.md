---
title: Tuffa saker i nya designen för madr.se
date: 2019-09-26
layout: single.hbs
---

Här går det att infoga valfri fyndighet om skomakarens barn. Istället tänker jag dock 
ägna ett inlägg åt att kommentera på häftiga saker jag gjorde sist jag ändrade mallarna 
för den här hemsidan. Det är främst CSS-relaterat.

Källkoden finns tillgänglig utan minifiering om man vill se helheten genom att läsa i 
[min CSS-fil](/madrse.css). Jag kommer även att länka till källkoden på Github, då det ger mig möjlighet att lyfta fram särskilda rader.

## Startläget

madr.se är min egen hemsida. Jag vill med den här hemsidans utformning ge en bild av mina 
värderingar som webbutvecklare och skribent på Internet. Jag har därför tagit ställning 
om några saker.

* Fortsatt inget CMS: [Less is more][2]. Istället skriver jag innehåll i markdown-filer. 
  Dessa körs i en [Metalsmith][1]-pipeline som omvandlar dem till HTML-dokument.
* Ingen JavaScript. Detta är en enkel blogg: text, länkar och enstaka media-objekt. 
  Behov av JavaScript finns inte.
* Ingen CSS-förprocessning (exempelvis Sass, SCSS, Less eller Stylus). Jag 
  kvalitetssäkrar kod enligt min Stylelint-konfiguration, och använder rikligt med 
  kommentarer för att få struktur i hemsidans enda CSS-fil.
* CSS ska vara enkel att läsa för människor. Jag vill att det ska vara enkelt att läsa   
  CSS-kod för andra, för att ge inspiration och förståelse.
* HTML ska vara enkel att tolka för maskiner. Kod ska vara semantisk, validera och vara så rik som möjligt för bots, sökmotorer, webbläsare och assistans-teknologier.

## Microdata på evenemang

Jag har introducerat Mikrodata igen, i det som jag känner har mest värde av det: mina 
kommande evenemang.


[1]: https://metalsmith.io/
[2]: /2016/less-is-more/