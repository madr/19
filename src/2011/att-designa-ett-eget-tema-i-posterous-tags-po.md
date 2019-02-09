---
title: Att designa ett eget tema i Posterous
date: 2011-06-18
layout: single.hbs
collection: articles
archived: true
---
Jag påbörjade för en tid sedan ett eget tema i Posterous. Det är ett
projekt jag tills vidare lagt på is av olika skäl som jag hade tänkt ta
upp här.

Dokumentationen för utvecklare är tunn
--------------------------------------

Jag drar inte eventuella externa resurser över samma kant, men
[Posterous egna dokumentation är inte särskilt
utförlig](http://posterous.com/theming). Det finns en referens, men
mycket litet står om hur den faktiska HTML-koden ser ut när den
genereras. Vidare hade jag uppskattat mer testfall för att garantera
välskriven och heltäckande CSS.

Målet med att utveckla ett tema för Posterous och den typen av tjänster
är för mig att släppa det till allmänheten, och kan jag bara testa mot
min egen sajt i produktion blir det svårt att täcka alla
användningsfall.

Den genererade HTML-koden är undermålig
---------------------------------------

Även om mitt tema vid uppladdning validerar i XHTML 1.0 Strict eller
HTML5 lägger Posterous in rätt mycket extra kod. Valideringen behöver
nödvändigtvis inte äventyras, men i standardtemat för Posterous ser det
ut såhär:

> 40 Errors, 13 warning(s)

Den extra koden laddar även in JavaScript, vilket imponerar föga.

-   *Minst två JavaScript-bibliotek laddas*, varav den ena är [Prototype
    JS som jag starkt avråder
    från](http://madr.se/lasvart-utoka-inte-dom-anvand-ett-wrapper-obj).
-   *38 SCRIPT element*, varav 19 saknar `src` och därmed är inline.
    Dessa laddas såväl i huvud som i fot. \*

Hur vet jag då att dessa är inlagda av Posterous och inte mig? Jo, för
att jag som skapar temat inte får använda JavaScript.

> Javascript is not enabled on Posterous pages for security reasons.
> We'll be introducing ways you can add your own javascript widgets
> soon.

CSS uppmuntras att bädda in snarare än hålla externt
----------------------------------------------------

Posterous erbjuder ingen uppladdning av CSS-filer. Det ger två val: att
lägga filen någonannanstans själv, förslagsvis
[Dropbox](http://dropbox.com) eller att lägga CSS i ett STYLE element.

Posterous dokumentation utgår ifrån det senare fallet, dessvärre.

Sammanfattningsvis
------------------

Jag har temat kvar och har litet design kvar till en regnig dag, men det
är högst troligt att det inte hamnar i ett tema på Posterous. Måhända
blir det ett Wordpress-tema istället, där jag får litet mer kontroll
över slutresultatet.