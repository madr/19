---
title: Olika sätt att undvika repaints och reflows vid scroll med hjälp av CSS
date: 2013-12-01
template: post.html
layout: single.hbs
collection: articles
---
Scenariot: för att få så litet lagg som möjligt på våra sajter (kan även beskrivas "så hög FPS som möjligt") behöver vi reducera antalet omritningar och omskalningar. 

Att scrolla i en webbläsarflik skapar i sig en sådan omritning. Om muspekaren passerar ett element med `hover`-stilar på sig kommer ännu en omritning att skapas. Passeras ännu ett sådant element skapas ytterligare ett ... et cetera.

För minimalt lagg bör dessa `hover`-effekter undvikas vid scroll, är den allmänna uppfattningen.

Bara titeln på lösningen är nördig i sig: [60fps scrolling using pointer-events: none](http://www.thecssninja.com/javascript/pointer-events-60fps)

`pointer-events: none` är från början hämtat från SVG-standarden, men kan användas på HTML-element också. Dessa reducerar all form av interaktivitet mellan muspekare och elementet och dess barnelement.

Förslaget är därför att lägga på denna föträffliga snippet. Först, en CSS-klass:

    .disable-hover {
        pointer-events: none;
    }

och på det, litet JavaScript:

    var body = document.body,
        timer;
    
    window.addEventListener('scroll', function() {
        clearTimeout(timer);
        if(!body.classList.contains('disable-hover')) {
            body.classList.add('disable-hover')
        }
    
        timer = setTimeout(function(){
            body.classList.remove('disable-hover')
        }, 500);
    }, false);

[Malte Ubl via Google Plus](https://plus.google.com/+MalteUbl/posts/NsyYKenqYNP) skriver däremot att detta medför en viss fördröjning på klick:

> Unfortunately it is even more broken, since it will block all clicks on your site within half a second after you stop scrolling. That might be quiet a few clicks.

Han presenterar dock en lösning som går runt detta, förutsatt att en sida inte innehåller iframes.

En av kommentarerna hade dock en ännu bättre lösning för hög FPS: **skippa hover helt, eftersom pekskärmar ändå inte bryr sig om dem**. Det är pragmatiskt värre och jag kör nog med den linjen så ofta jag kan.