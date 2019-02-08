---
title: Färdiga avbilder till Cubieboard 512MB, redo att installeras till microSD-kort
date: 2012-12-15
template: post.html
layout: single.hbs
collection: articles
---
TL;DR

Färdiga avbilder att använda för [UNetBootin](http://unetbootin.sourceforge.net/) eller `dd` på ett 4GB+ stort MicroSD:

 * Linaro ALIP: nedbantad Linuxdist med XFCE och APT. [linaro-precise-alip-20121124-519.img.gz](https://dl.dropbox.com/u/16155341/cubieboard_512/linaro-precise-alip-20121124-519.img.gz)
 * Linaro Nano: nedbantad Linuxdist utan Xorg, med APT. [linaro-precise-nano-20121124-538.img.gz](https://dl.dropbox.com/u/16155341/cubieboard_512/linaro-precise-nano-20121124-538.img.gz)

Det var inte många som hann köpa någon av prototyperna till [Cubieboard](http://cubieboard.org), men jag var en av dem. Jag läste nyheterna om det, och även idag, två månader senare, är en [googling på Cubieboard](https://www.google.com/?q=cubieboard#hl=sv&safe=off&tbo=d&output=search&sclient=psy-ab&q=cubieboard&oq=cubieboard&gs_l=hp.12...0.0.0.4513.0.0.0.0.0.0.0.0..0.0...0.0...1c.uvNJ7FWw4Rw&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.&bvm=bv.1355325884,d.Yms&fp=48b48f34c7e7d057&bpcl=39967673&biw=927&bih=1050) en hint om något mycket lovande eftersom den ska vara så oerhört mycket bättre än [Raspberry Pi](http://www.raspberrypi.org/).

Jag äger även en Raspberry Pi. Jag fick vänta 16 veckor på den, men när jag väl fått hem mitt exemplar hade jag den igång på mindre än en timme tack vare en utmärkt kom-igång-guide som sade ungefär såhär:

1. Gå till hemsidan och välj vilket OS du vill ha (ett antal linuxdistar som urval).
1. Från samma sida, ladda ner en fil (en `.img`) för det OS du valt och leta under tiden fram ett SD-kort.
1. Skriv filen till SD-kortet genom att använda [UNetBootin](http://unetbootin.sourceforge.net/) (Windows, Mac, Linux) eller `dd` (Mac, Linux).
1. Vänta, och koppla under tiden skärm, tangentbord och mus till din Raspberry Pi.
1. Stoppa i SD-kortet i din Pi, starta och sätt igång!

Känslan av att inneha Superman-effekter var fullkomlig. 

Naiv som jag var trodde jag att Cubieboard också skulle ge mig samma känsla. Tyvärr hade jag fel.

Cubieboarden ser bättre ut på papper. Den har SATA-port, mer minne, piggare prolle. 

Det finns dock inga färdiga avbilder att installera, eller ens hänvisningar till guider eller instruktioner. Hemsidan har bara nedladdningar till Androidversioner och BuildRoot, vilket knappast är vad jag (och troligtvis fler) letar efter. Litet sökande och problemlösning visar [FirstSteps](http://linux-sunxi.org/FirstSteps), en guide som 

 * ger alldeles för mycket lågnivå-information,
 * antar att den som läser heter [Linus Torvalds](http://sv.wikipedia.org/wiki/Linus_Torvalds),
 * helt utesluter Windows- och Macanvändare, samt
 * bygger en linux-OS från skratch, inkluderat u-boot, en kärna och ett rootfs (whatever that is).

Fullkomligt gräsligt. Jag har använt unixliknande system sedan 2005 och hängde nätt och jämt med, och kan bara med fasa föreställa mig hur personer med mindre erfarenhet måste känna sig.

Guiden är också generell för Cubieboards arkitektur (som heter Allwinner A7, alternativt sun4i/sunxi, om du mot all förmodan undrade): den nämner aldrig Cubieboard vid namn.

För min egen sinneros skull tog jag därför på mig att försöka skapa sådana avbilder utifrån de alternativ som idag finns. Länkarna finns i början på det här inlägget. Använd dem för att få superman-effekten även för Cubieboard.

Ladda hem avbilden. Kör UNetBootin eller `dd` för att få få avbilden till ett microSD-kort. Stoppa microSD-kortet i Cubieboarden och ge den ström. Klart!

Avbilderna är till Cubieboard med 512MB minne. För den slutliga versionen med 1GB minne funkar de troligtvis inte, men då finns förhoppningsvis även några officiella avbilder att aldda hem från hemsidan.

Avslutningsvis, min Raspberry Pi fungerar utmärkt än idag för det jag önskade ha den till: [en stor röd knapp](http://www.youtube.com/watch?v=wapJ0p1O_9U&feature=share) för att göra deploy, driftsättning och automatisering litet roligare, såväl för mig själv som för projektledare, produktägare och till och med kunderna själva.