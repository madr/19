---
title: Uppgraderat till Gnome 3.10 och fått problem? 
date: 2013-10-17
template: post.html
layout: single.hbs
collection: articles
---
Jag körde en `pacman -Syu` igår och fick det efterlängtade Gnome 3.10. Glädjen gick dock över fort:

<iframe width="420" height="315" src="//www.youtube.com/embed/XcIizOlZfaY" frameborder="0" allowfullscreen></iframe>

Litet googlande visade att [fler som kör Arch har problemet](https://bbs.archlinux.org/viewtopic.php?id=170962), men också att en [buggrapport finns hos Gnomes Bugzilla](https://bugzilla.gnome.org/show_bug.cgi?id=709313). Där tipsar en Gnome-utvecklare om följande: 

> It will prevent the rendering issues, but the background will be gray, not your wallpaper. We're looking into why the background isn't loading, but if you just want to prevent the headache-inducing flicker for now, hit Alt-F2, type "lg", then type "global.stage.no_clear_hint = false;" into the prompt that comes up, then hit Escape.

Detta funkade för mig iaf.

De skriver även följande vid frågan om buggen är en del av Gnome 3:

> Yes, this is our bug. I'm looking into fixing it.

Arch-snubbarna lär vara snabba att få ut patchen hoppas jag. Då jag brukar ha datorn igång 2-3 veckor åt gången stör inte detta mig avsevärt, men jag ogillar att saker kan gå sönder såhär.

Det är inte alltid lätt att köra [Rolling Release](http://en.wikipedia.org/wiki/Rolling_release).

**UPPDATERING 2013-10-19:** Vi som använder Arch kan köra en ominstallation av Gnome för att få det löst, plus litet annat:

    pacman -S gnome
    pacman -S gtk3
    pacman -S libtxc_dxtn

Källa: [tråd på bbs.archlinux.org](https://bbs.archlinux.org/viewtopic.php?pid=1338541#p1338541)