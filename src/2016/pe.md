---
title: Rants om Progressive Enhancement
date: 2016-12-15
template: post.html
layout: single.hbs
collection: articles
---
I [The Case Against Progressive Enhancement's Flimsy Moral Foundation](https://www.viget.com/articles/the-case-against-progressive-enhancements-flimsy-moral-foundation) ifrågasätts den praktiska och faktiska nyttan med [Progressive Enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement), en av de principer jag krampaktigt hållit fast vid sedan långt innan jag blev professionell webbutvecklare.

Jag hittade den via en rant, [Yes, progressive enhancement is a fucking moral argument](https://sonniesedge.co.uk/blog/progressive-enhancement) vars ton är snarlik den ton jag hade haft om jag tagit mig tid att skriva något:

> Fundamentally, the article is a shitty strawman argument against PE. It erroneously states that PE proponents want the latest canvas-based in-browser game to work with JS turned off. Which is bollocks, because the argument for PE is developing useful apps and sites that achieve core functionality for everyone, no matter their browser, OS, hardware and user ableness, offering nice-to-haves as the abilities of those things increase. But no, the author has reduced it down to “PE hardliners want everything to work without JS”.

De är läsvärda i sin helhet. Det jag personligen kommer att tänka på är att tänket inte är nytt. 

 * När CSS började ta fart fanns det folk som försvarade fortsatt användning av tabeller för layout, samt personer som använde `divs and spans for layout`.
 * När IE var den enda webbläsaren fanns det personer som ansåg att alla andra webbläsare inte räknades, samt folk som tyckte att det var ok att stänga folk med IE ute.
 * När CSS3 började ta fart fanns personer som bara inkludera `-webkit-` prefix, inte `-moz-`, `-o-` och `-ms-`.

Mentaliteten där verktygen är viktigare än affärsnytta är inget nytt. Det är lätt att avfärda Progressive Enhancement då det trycker på en öm punkt: att det finns ett gäng enheter och scenarion som förvandlar strålande vacker kod i Det Älskade JavaScript-ramverket(tm) till en oläslig klump sörja. Ignorance is bliss.

Med detta sagt har även jag lärt mig att kompromissa för affärs- och kundnytta åt båda håll.

Under mina 10 år som konsult har inte en enda kund hört av sig gällande problem relaterat till att JavaScript och CSS är avslaget. Inte heller har någon hört av sig om att HTML-dokument inte är tillgängliga eller semantiskt uppmärkta.

I de Google Analytics-rapporter jag baserar en månadsrapport på för kunds räkning används sajten enbart av Google Chrome och Safari för iOS, med mindre än en halv procents användning för någon annan enhet eller webbläsare.

Med det sagt så bygger jag alltid saker med Progressive Enhancement eftersom det var så jag lärde mig, men det är inte längre något jag tar för givet att se som ekvivalent till kund- och affärsnytta.