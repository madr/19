---
title: KSS - ett välmenat försök att dokumentera CSS
date: 2012-02-08
layout: single.hbs
collection: articles
archived: true
---
via [github.com](https://github.com/kneath/kss/blob/master/SPEC.md)

Detta gillar jag! Faktum är att jag själv haft tankar kring detta. I en
tid där man pratar om SCSS vs SASS vs LESS, och vikten av rätt semantik
och prestanda, glömmer vi något mycket viktigt: dokumentation.

Dokumentation av CSS har länge varit något som varit obefntligt.
Detsamma gällde JavaScript länge, men där har vissa framsteg funnits.
Flertalet lösningar finns för att enhetstesta våra script, vi har ett
par lints att välja mellan, och med t ex Mozilla Rhino kan vi
automatisera såväl testning som lints.

Men på CSS-fronten intet nytt. Där fyller vi css-filer med kod på kod på
kod, till en början med glädje, mot slutet av behov. Utan att faktiskt
bry oss om att dokumentera vår kod.

Jag tror på den här typen av verktyg. Styleguides och formhandböcker.
CSS är visuellt och ska presenteras visuellt, men vyerna bör vi
automatisera framställningen av. Och automatiseringen ska inte tvinga
oss att ändra redan bra vanor i hur vi strukturerar och formulerar vår
kod.