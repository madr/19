---
title: jQuery 2 kommer inte att stödja IE 6-8 out-of-the-box
date: 2012-06-29
layout: single.hbs
collection: articles
archived: true
---
> **jQuery 2.0 (early 2013, not long after 1.9):** This version will
> support the same APIs as jQuery 1.9 does, but removes support for IE
> 6/7/8 oddities such as borked event model, IE7 "attroperties", HTML5
> shims, etc.

via
[blog.jquery.com](http://blog.jquery.com/2012/06/28/jquery-core-version-1-9-and-beyond/)

jQuery slänger alltså ut det starkaste argumentet för att motivera
jQuery i projekt. Det är helt rätt i tiden att göra detta. Det är
modigt, nästan på gränsen till dumdristigt.

IE9 och uppåt har stöd för såväl document.querySelectorAll(),
css-transitions, css-transforms som document.addEventListener(),
tillsammans med alla andra webbläsare. Det är en modern och trevlig
webbläsare som inte längre behöver skämmas.

I den verkligheten, där mobilens krav på lätta sajter för surf utanför
stan är hårt dragna, ser jag verkligen ingen vinst med att inkludera
jQuery då det inte längre löser \"allt\".

Syntaxen är trevlig, det köper jag. Men det är ren lyx för mig som
utvecklare. Utan hantering av IE6-8 out-of-the-box kommer jQuery inte ge
någon kundnytta och affärsnytta för klienter och klienters kunder.

Och för mig, som inte har det minsta bekymmer med att skriva vanilla
JavaScript och använda The Good Parts (prototyp-arv, modules, functional
scopes) med stöd av JSHint eller JSLint, är det redan svårt nog att
motivera jQuery.

Jag är orolig för att jQuery skyndar på sin egen användarminskning genom
den här förändringen. Det är ett korrekt och tidsenligt beslut, men till
vilket pris?