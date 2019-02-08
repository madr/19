---
title: Byt plats på två HTML-element i vertikal riktning med CSS
date: 2011-08-17
layout: single.hbs
collection: articles
archived: true
---
Förra veckan publicerades
[Re-tabulate](http://adactio.com/journal/4780/) som visar hur två
HTML-element kan byta plats i designen utan att dess HTML-ordning
berörs, ett kärt problem sedan många år för oss webbutvecklare.

Detta är dock inte med någon trendig CSS3-lösning som presenterades i
[reflew](http://adactio.com/journal/4778/), utan handlar snarare om CSS2
vilket alltså också innefattar IE8.

Jag har själv löst sådana problem med absolut och relativ positionering
men känt att det inte riktigt håller då resultatet är svårt att hålla
flexibelt. Denna lösning är dock mycket gedigen och värd att sprida ut
till så många som möjligt. IE7 och IE6 berörs inte, men gäller det
exemplen som berörs i artiklarna är detta något som skipplänkar kan
agera god fallback för.

För att se detta i aktion, ta en titt på [Exemplet i
JSBin](http://jsbin.com/axobun/edit#html,live).