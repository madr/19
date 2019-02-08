---
title: Ytterst relevant prestandatestning av CSS
date: 2011-09-09
layout: single.hbs
collection: articles
archived: true
---
> I am a big fan of OOCSS, (the library and the concept) but I have been
> using Compass, SASS lately at work. I was feeling that sometimes OOCSS
> and SASS seemed at odds. A friend of mine introduced me to Chris
> Eppstein, (the creator of Compass) and we talked about the \@extend
> method in SASS. So I created a CSS test page, which started out as a
> crude way to figure out if there was a noticeable performance
> difference between SASS's \@extend and OOCSS's method of CSS.

Från [Different CSS techniques and their
performance](http://screwlewse.com/2010/08/different-css-techniques-and-their-performance/).
I testet finns Sass, OOCSS och fulhacks-CSS. Resultatet är helt i min
smak.

-   OOCSS är sanslöst snabbt.
-   ID-selektorer har inget övertag över klasser ur prestandans
    perspektiv.
-   Används SASSy OOCSS (med `@extend`, inte `@include`) försämras
    prestandan ytterst marginellt, med avsevärt mindre klasser i
    HTML-koden som följd.
-   Dålig CSS kan vara en orsak till prestanda-problem.

Jag har i skrivandets stund inte kört dessa tester i IE7 (slö
CSS-rendering) eller på iPhone/Android (slä hårdvara), men där förväntar
jag mig ännu brantare grafer. Det bör alla CSS-utvecklare göra.

Jag kommer med detta aldrig att ha mer än 2-3 klasser på ett enskilt
element i min HTML-kod.