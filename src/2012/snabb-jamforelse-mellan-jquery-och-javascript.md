---
title: Snabb jämförelse mellan \"jQuery\" och \"JavaScript\"
date: 2012-02-05
layout: single.hbs
collection: articles
archived: true
---
Se [Vanilla JavaScript FTW](http://sharedfil.es/js-48hIfQE4XK.html)

De mesta går att göra utan jQuery, men med fler tecken, så i en massiv
JavaScript-application kan det mycket väl vara no-win i vikt genom att
skippa jQuery. Jag uppskattar dock att någon sammanställt det här: inget
fluff, bara en hård jämförelse.

Dessvärre är det inte riktigt så enkelt som i exemplet. .nextSibling
returnerar nästa nod, inte nästa element (whitespace och
HTML-kommentarer är även de noder), medans .next alltid returnerar
element.

newDiv.classList finns inte i någon version av IE.

Med ovanstående sagt, överge inte tanken på att jQuery kanske inte
behövs. I detta nu har jag gjort en kundleverans som bestod av ren
JavaScript som dessutom passerar JSLint utan anmärkningar. Jag är tryggt
övertygad om att det faktiskt går att klara sig utan jQuery, särskilt nu
i tider där behovet av legacy-webbläsare minskar i stadig takt.