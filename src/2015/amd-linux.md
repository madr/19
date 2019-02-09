---
title: Den dystra situationen för AMD på Linux
date: 2015-11-13
template: post.html
layout: single.hbs
collection: articles
---
Kvällens äventyr i linux-land[^1] har gett mig massor med upplysning.

Det finns idag tre grenar för att installera drivisar till AMD-grafikkort: Catalyst (AMDs egna), xf86-video-ati (öppen drivis) och xf86-video-amdgpu.

Catalyst har övergetts av de flesta distros idag då AMD förutom att licensera drivisarna proprietärt även håller låg kvalitet.

xf86-video-ati åas är grymt långt gånget - på nivån att de öppet licenserade drivisarna är bättre än catalyst i benchmarks.

xf86-video-ati har dock inte stöd för AMDs allra senaste grafikkort, däribland mitt R9 380.

Det är här xf86-video-amdpgu kommer in - dessa är också öppna, och ska ”unifiera” alla drivisar för AMD-grafikkort.

Problemet med xf86-video-amdgpu är däremot att de är för primitiva ännu - de presterar inte alls bra i benchmarks och är bökiga att installera.

Så jag har nu stoppat in ett nvidia-grafikkort, tills dess att något av följande händer:

 * xf86-video-ati stödjer mitt i dagsläget för nya grafikkort, eller
 * xf86-video-amdgpu blir moget att installera.   

[^1]: Jag har köpt ny dator, där jag innan jag skrev detta inlägg försökte installera Debian och Fedora först, men utan framgång. Ovanstående slutsatser drog jag genom att installera Arch, den linuxdist jag hatar att älska.