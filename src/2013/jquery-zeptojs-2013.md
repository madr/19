---
title: Varför jag överger jQuery 2013
date: 2013-01-04
template: post.html
layout: single.hbs
collection: articles
---
Nåväl, det kan ändra sig. Men hur som helst. 

[jQuerys uttalande inför 2.0](http://blog.jquery.com/2012/06/28/jquery-core-version-1-9-and-beyond/), en stor snackis förra året:

> * **jQuery 2.0 (early 2013, not long after 1.9)**: This version will support the same APIs as jQuery 1.9 does, but removes support for IE 6/7/8 oddities such as borked event model, IE7 “attroperties”, HTML5 shims, etc.

Åtminstone för mig är **hela poängen med ett JS-bibliotek** att lösa problem som är mellan webbläsare. jQuery 2.0 är därför en mycket kontroversiell trendförändring. 

De skriver vidare om varför gamla versioner av IE skippas:

> Smaller size, better performance, and the lack of problems introduced by the need for oldIE support. We expect that we can improve error handling in the $.Deferred implementation in 2.0, for example, whereas we can’t do that as long as oldIE is supported.

Ska bara nya webbläsare stödjas kommer jQuery att bli ett 32KB stort lyxtillägg och inget mer, eftersom bibliotekets enda syfte i det läget blir en alternativ JavaScript-syntax. Precis som CoffeeScript eller Dart, med undantaget att jQuery måste laddas ner i och läsas in i webbläsaren (dåligt). 

Dess egenskaper kan lösas med ren JavaScript om vi bara ska stödja nya webbläsare:

    // $(".news li:nth(0)")
    var firstItem = document.querySelector(".news li");
    
    // firstItem.addClass("first")
    firstItem.classList.add("first");

Men ren JavaScript skrämmer en majoritet av webbutvecklare som blivit vana och bekväma med jQuery. Jag vill dock hävda att även den här gruppen bör titta på t ex [Zepto.js](http://zeptojs.com). Kolla in Zepto.js webbläsarstöd:

> **Target platforms**

> * Safari 5+ (desktop)
* Chrome 5+ (desktop)
* Mozilla Firefox 4+
* iOS 4+ Safari
* Android 2.2+ Browser
* Other WebKit-based browsers/runtimes
* webOS 1.4.5+ Browser
* BlackBerry Tablet OS 1.0.7+ Browser
* Amazon Silk 1.0+
* Opera 10+

Då är det dessutom värt att nämna att Zepto.js från början var **ämnad för mobila enheter**. [Swipe och touch finns i Zepto.js](http://zeptojs.com/#Touch events).

> The “touch” module adds the following events, which can be used with on and off:

> * `tap` — fires when the element is tapped.
* `singleTap` and `doubleTap` — this pair of events can be used to detect both single and double taps on the same element (if you don’t need double tap detection, use tap instead).
* `longTap` — fires when an element is tapped and the finger is held down for more than 750ms.
* `swipe, swipeLeft, swipeRight, swipeUp, swipeDown` — fires when an element is swiped (optionally in the given direction)

Som om inte ovanstående skulle räcka så finns ännu ett argument: filstorleken.

Zepto.js är 8.7KB för hela paketet gzippat. [jQuery 1.8.3](http://jquery.com) ligger på 32KB gzippat. Även om jQuery påstår att de kan slimma ner 2.0 när de droppar gamla versioner av IE skulle det innebära att de kapar 75% av kodbasen, vilket jag ser som otroligt.

Att byta till Zepto.js är därför tilltalande, särskilt på grund av den korta startsträckan:

> Zepto is a minimalist JavaScript library for modern browsers with a largely jQuery-compatible API. If you use jQuery, you already know how to use Zepto.

Baserat på bättre filstorlek, stöd för touch och jQuerys framtida roadmap kommer jag därför aktivt att jobba för att byta ut eller helt avveckla jQuery under detta år.

Tills dess att jQuery 2.0 har mindre storlek och lika bra, gärna bättre support för swipe och touch än t ex Zepto.js kommer jQuery vara ett föredetta ting för mig, och gör därmed [Prototype](http://prototypejs.org)/[Scriptaculous](http://script.aculo.us) sällskap.