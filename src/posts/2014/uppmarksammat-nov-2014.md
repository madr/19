---
title: Värt att uppmärksamma - november 2014
date: 2014-12-01
template: post.html
tags: linkbait
layout: single.hbs
collection: articles
---
## Trender

[It’s 2014. Is Web Design Dead?][9]  
Relevant ännu, nästan ett år senare. Webbdesign är inte dött, men tiden är förbi när HTML och CSS sågs som mörk magi och vi som mästrade dess alla fulhack och quirks sågs som magiker. Jag kan inte påstå att jag vill tillbaka till dåtiden ...

[Top Website Design Trends to Implement in 2014][6]  
Jag kan kryssa av i princip hela listan. En lyckad prognos, således.

[How to Build an OctoberCMS Theme][14]  
OctoberCMS är en snackis och kommer att ställas på prov 2015. Det som gör mig intresserad är att det är ett CMS spunnet ur den allt starkare "nyfödda" PHP-rörelsen, den som också står bakom Laravel och Composer. 


## Allmänt

[Because Reading is Fundamental][4]  
Teorin: I en (bra) diskussion AFK är det den som lyssnar mest som ger mest insiktsfulla bidrag till diskussionen, särskilt i relation med de som ofiltrerat hoppar mellan diskussionen och icke relevanta sidospår. På Internet är läsa detsamma som att lyssna: den som läser innan de börjar skriva kommer med bättre input.

[Why frameworks don’t have much to do with how easy it is to add a feature][7]  
Jag hejar på Thomas Fuchs, som tappert framhärdar att idéer, tankearbete och omedelbart kundvärde ska driva utvecklingen framåt framför ramverks- och biblioteksorgier.


## SVG och vektorer

[Why and how I ditched icon fonts in favor of inline SVG][8]  
Jag sitter för närvarande och på allvar utvärderar ikon-fonter, via tjänsten [IcoMoon](http://icomoon.io). I aktuellt projekt kommer en font att räcka gott för behoven, men den här var nyttig att läsa inför framtiden.

[SVG Morpheus][17]  
JavaScript-bibliotek för att "morpha" SVG-ikoner. Ett nog så iögonfallande argument för att använda SVG framför Ikonfonter.

[Charted][19]  
Något lättare att komma igång med i jämförelse med t ex [D3.js](http://d3js.org/).


## Prestanda

[The Tablet Turning Point][5]  
iPad Air 2 är riktigt pigg på att exekvera JavaScript i iOS Safari, så pigg att prestandan är jämförbar med Chrome på en kraftfull dator. Därmed är plattorna "ikapp" datorerna prestandamässigt. Android däremot ligger hopplöst efter i samma prestandagrafer i dagsläget.

[Planning for Performance][15]  
Smakprov på *Responsible Responsive Design* som finns att köpa på [A Book Apart](http://www.abookapart.com/products/responsible-responsive-design). Överlag känns det som att hajpen lagt sig och att det är dags att börja förfina hur vi använder följsam design. Jag gillar själv begreppet **Touch First** som är en helt egen diskussion.

## CSS-relaterat

[Keeping CSS short with currentColor][18]  
Wow, det här undrar jag hur det har gått mig förbi! `currentColor` träffar några sweet spots hos LESS och Sass.

[Android gradient screenshot madness][1]  
Tar man en skärmdump på Android så kan webbläsarfönster med CSS gradients se annorlunda ut på den sparade bildfilen. Det är en bugg som gäller enheten, inte Android i sig. Se även uppdateringen i [Gradients (and screenshots) update][2].

[Transition tests][3]  
Alla webbläsare är inte överens om alla fall av CSS transitions. Bra nyheter är dock att endast ett vendorprefix krävs numera (`-webkit-`).

[Write CSS3 without Worrying about Prefixes][12]  
Mitt förslag: försök att undvika prefix helt, då fler och fler webbläsare stödjer prefixlöst på populära CSS3-deklarationer. Se t ex [
Cutting down on vendor prefixes](http://www.456bereastreet.com/archive/201311/cutting_down_on_vendor_prefixes/). Min bild är att det idag är fullt möjligt att skriva CSS utan prefix under intensiv nyutveckling, och att externa tjänster eller automatiseringsverktyg (gulp eller grunt) kan täppa till det värsta. Personligen kör jag utan prefix, och CSS-lint för att fånga de prefix jag behöver göra undantag för.

## Design och workflow

[Writing-first Design][10]  
Det här gillar jag! I [mina egna projekt](http://www.tidrapporteringsuger.se) fäster jag stor vikt vid den skrivna dialogen redan nu. Tanken på att centrera designprocessen ännu mer kring ord och skrift känns lockande.

[What’s So Great About Bower?][13]  
Inte övertygad om Bower? Läs den här, den är bra. Främsta vinsten jag ser är att jag inte själv behöver versionshantera tredjepartskod.

[What It Takes to Build a Website][11]  
God lista över hygienfaktorer, väl formulerat.

## Gratis är gott

[Marske - Free Font][16]  
Stencil-fonter är exotiska.

[1]: http://www.quirksmode.org/blog/archives/2014/11/android_gradien.html
[2]: http://www.quirksmode.org/blog/archives/2014/11/gradients_and_s.html
[3]: http://www.quirksmode.org/blog/archives/2014/11/transition_test.html
[4]: http://blog.codinghorror.com/because-reading-is-fundamental-2/
[5]: http://blog.codinghorror.com/the-tablet-turning-point/
[6]: http://www.sitepoint.com/top-website-design-trends-implement-2014/
[7]: http://mir.aculo.us/2013/11/18/why-frameworks-dont-have-much-to-do-with-how-easy-it-is-to-add-a-feature/
[8]: http://mir.aculo.us/2014/10/31/icon-fonts-vs-inline-svg/
[9]: http://www.zeldman.com/2014/01/06/its-2014-is-web-design-dead/
[10]: https://signalvnoise.com/posts/3801-writing-first-design
[11]: http://24ways.org/2014/what-it-takes-to-build-a-website/
[12]: http://www.sitepoint.com/write-css3-without-worrying-prefixes/
[13]: http://css-tricks.com/whats-great-bower/
[14]: http://www.sitepoint.com/build-octobercms-theme/
[15]: http://alistapart.com/article/planning-for-performance
[16]: https://www.behance.net/gallery/21677209/Marske-Free-Font
[17]: http://alexk111.github.io/SVG-Morpheus/
[18]: http://osvaldas.info/keeping-css-short-with-currentcolor
[19]: http://www.charted.co/