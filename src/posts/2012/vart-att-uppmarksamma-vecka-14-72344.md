---
title: Värt att uppmärksamma, vecka 15
date: 2012-04-15
layout: single.hbs
collection: articles
archived: true
---
-   [A Baseline for Front-End Developers - Adventures in JavaScript
    Development](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)\
    Inte så dumt, även om många av de Node.js-baserade verktygen rinner
    av mig som vatten. Det allmänna talesättet är dock att \"god kod är
    inget man lär sig, det är en produkt av goda vanor\". Läs därför och
    reflektera om det är något som fattas.
-   [What's the Deal With :Target in CSS? \| Design
    Shack](http://designshack.net/articles/css/targetcss/)\
    Den här pseudoklassen är kraftfull men de flesta av oss har låtit
    den sjuda eftersom vi inte haft webbläsar-stöd på vår sida under
    lång tid. Idag är det dock safe att börja labba med detta med
    försiktighet.
-   [Olov Lassus: Meteor meets
    NoGPL](http://blog.lassus.se/2012/04/meteor-meets-nogpl.html)\
    En påminnelse om det här med licenser. För egen del undviker jag GPL
    i klientjobb då den koden sällan eller aldrig får
    vidaredistribueras. Då Wordpress är i GPL är det inte heller så
    konstigt att många är \"givmilda\" och delar med sig av sina pluggar
    och lösningar - enligt licensen är de i de flesta fall TVUNGNA att
    göra det.
-   [Mobile Site vs. Full Site (Jakob Nielsen\'s
    Alertbox)](http://www.useit.com/alertbox/mobile-vs-full-sites.html)\
    Veckans snackis. Jag tror inte på det här. Jag inhyser istället
    stort förtroende för Luke Wroblewskis Mobile First: låt
    innehålls-strategen bestämma vad som är viktigast, fortsätt därefter
    att (eventuellt) fylla på med innehåll med lazy-loading.
-   [Media Query & Asset Downloading Results \|
    TimKadlec.com](http://timkadlec.com/2012/04/media-query-asset-downloading-results/)\
    Att köra display: none i naiv tro att innehållet som dolts inte
    laddas ner funkade inte innan responsive design och gör det inte med
    CSS media queries heller. Rådet: don\'t do it! För CSS-bilder finns
    visst hopp, men även där får jag intrycket av att det inte bör
    \"snabblösas\" med CSS. Gör det ordentligt med Lazy loading
    istället.
-   [Testing like the TSA -
    (37signals)](http://37signals.com/svn/posts/3159-testing-like-the-tsa)\
    Uppkäftigt men som en del kommentarer nämner: det behöver troligen
    sägas. Jag har för vana att välja testmetod beroende på
    förutsättningarna jag har mellan projekt. För att testa JavaScript
    kan ett penetrerande manus med Selenium eller Fake ibland vara fullt
    tillräckligt, i ett annat kan ett avancerat QUnit-schema vara
    minimum. Var pragmatisk och välj nivå så att en trygg känsla i magen
    är infunnen.
-   [Responsive web design: a project-management perspective -
    Dev.Opera](http://dev.opera.com/articles/view/responsive-web-design-a-project-management-perspective/)\
    Huvudet på spiken. För gränssnittsutvecklare och CSS-författare är
    Responsive Deisgn inte särskilt märkvärdigt, då det för oss faktiskt
    bara handlar om några rader CSS. För projektledare och säljare
    däremot är det en rätt stor fråga då det berör innehålls-strategier
    och annat på ett större plan.
-   [Don't docwrite scripts \| High Performance Web
    Sites](http://www.stevesouders.com/blog/2012/04/10/dont-docwrite-scripts/)\
    Tål att upprepas hur många gånger som helst. Document.write tillhör
    dåtiden och vi ska inte använda det.
-   [Thinking Async \|
    CSS-Tricks](http://css-tricks.com/thinking-async/)\
    Snygg writeup! Bör bokmärkas av alla som använder mycket
    tredjeparts-widget på sina sajter.