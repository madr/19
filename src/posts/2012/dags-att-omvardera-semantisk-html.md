---
title: Dags att omvärdera semantisk HTML?
date: 2012-01-18
layout: single.hbs
collection: articles
archived: true
---
> <div>
>
> Jag har börjat ifrågasätta idén med semantisk HTML. Inte själva
> markupen utan grejen med semantiska CSS-klasser.
>
> </div>

via
[f.fleecelabs.se](http://f.fleecelabs.se/post/16017015153/dags-att-omvardera-semantisk-html)

Jag kan säga detsamma sedan ungefär 2 år tillbaka. Semantisk uppmärkning
som i validerande och microformats-berikad kod ligger mig fortfarande
varmt om hjärtat, men attributet *class* har jag sedan länge slutat
fästa vikt vid (med undantag för microformaten).

Nicole Sullivan för ett liknande resonemang i [Our best practices are
killing
us](http://www.stubbornella.org/content/2011/04/28/our-best-practices-are-killing-us/)\]
där hon säger detsamma som Peter: semantiken vi praktiserat i rätt många
ur nu är en produkt av en tid då vi inte visste bättre. Det gör vi
däremot idag.

Med HTML5, Microformat och WAI-ARIA-roller blir vår uppmärkning
semantisk och välformulerad. HTML-dokumentet försäkrar att såväl
sökmotorer och skärmläsare som vanliga användare tar del av innehållet.
Med *class*=\"\" hookar vi sedan på CSS.

CSS-koden bör, enligt min högst personliga åsikt, ha sin egen struktur.
CSS-koden är helt fri från HTML-dokumentets kontext: att applicera en
klass ska innebära ett konsekvent och statiskt resultat, oavsett vilket
HTML-element som får det och var detta HTML-element finns i dokumentet.

Jag håller med Peter om att CSS-dokumentets struktur bör vara centrerad
kring det visuella uttrycket. Finns det en skiss, mockup eller grafisk
manual bör sidans CSS återspegla detta.

Jag skriver inte mer nu, men detta är också något som även jag tänker
på.