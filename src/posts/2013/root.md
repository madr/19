---
title: Kör din linuxdist som root!
date: 2013-08-23
template: post.html
layout: single.hbs
collection: articles
---
Träffsäkert och bara en smula elakt av [Gary's Hood](http://www.garyshood.com/root/):

> If you are so incompetent that you can't even handle using bash without typing rm -rf / every few commands, just stop reading here. Go back to the Ubuntu forums where all of your problems are packaged away for you in nice binaries because you can't even handle installing a program from source. 

På tiden jag hade en egen webbserver mellan bäddsoffan och kokvrån i mitt studentrum körde jag alltid root. Endast en gång på tre år gjorde jag något riktigt klantigt, och det var ironiskt nog `rm -rf /*`. Det här är dock att ta det ett steg längre. 

> Your first thoughts when moving all of your stuff from your home directory to root will be pleasant. Did you notice how everything was read fine, that you don't see anymore locks around your desktop, and that you suddenly have a full beard? 

Jag har redan skägg tack vare min tid spenderad i Python. Jag trivs bra med att ha en user och en root. `sudo` har jag enbart för de (dåligt skrivna) verktyg som antar `sudo`. Då jag är för bekväm med att forka och ändra allt på min dator är det ett billigt prestige-poäng att offra.

Jag kommer därför inte bli som någon av de storheter som alltid körde som root:

> * Han Solo
* Martin Luther King Jr.
* James Bond
* Abraham Lincoln
* The Terminator