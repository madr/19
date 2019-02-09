---
title: Döda burgar-ikonen
date: 2015-06-26
tags: ux
template: post.html
layout: single.hbs
collection: articles
---
Gammal artikel som fortfarande är aktuell. Från [Kill The Hamburger Button][1]:

> What you sacrifice is a bit of screen real estate, but it’s probably worth it. An A/B test by mobile app zeebox presented by The Next Web show just how damaging these drawbacks can be to an app’s engagement rate. Six months ago zeebox tried switching from a tab bar to a hamburger, and saw its metrics drop. Recently, it ran a simultaneous A/B test on the two navigation schemes and found the tab bar drove a 55 percent average weekly frequency of use, and an 8.7 percent higher average daily frequency.

Hamburgar-ikonen som fick sådan stor popularitet har aldrig varit en god idé ur ett UX- och designperspektiv. Ett litet och irriterande problem är att innehåll är dolt i en panel som måste klickas eller tryckas fram. Ett stort och som ovan visat allvarligt problem är att Hamburgarikonen inte på ett bra sätt visar landmärken: Hamburgaren visar inte eller hintar inte ens om var i hierarkin den aktuella vyn är.

Jag har en hamburgar-ikon i nuvarande projekt som högst troligtvis skulle kunna göras som en tab-bar istället, då jag har 3-4 högstanivåer i hierarkin. Med CSS är det en lätt sak att utgå från en traditionell "storskärms"-meny och få den att bli en bottenfixerad tab-bar på en mindre skärm.

Det är inte strikt [Mobile First][2], men det är åtminstone görbart i och med att [iOS numera inte käftar så mycket över `position: fixed`][3].


[1]: http://techcrunch.com/2014/05/24/before-the-hamburger-button-kills-you/
[2]: http://bradfrost.com/blog/web/mobile-first-responsive-web-design/
[3]: http://caniuse.com/#feat=css-fixed