---
date: 2015-07-21
tags: linux, elementaryos, archlinux
template: post.html
title: Jag vill vara kreatör, inte systemadmin
layout: single.hbs
collection: articles
---
Jag gillar Linuxbaserade operativsystem och har sedan länge hejat och stöttat alla initiativ att försöka hitta ett alternativ till Windows och Mac OS.

Detta kommer ifrån att jag gillar UNIX-filosofin, där textkommandon är mer kraftfulla än pek- och klicksekvenser, vilket är en av många anledningar till [varför jag föredrar Mac framför PC][1].

Jag var ett tag inställd på att [använda en laptop med linux istället för en bärbar Mac][2] också, men det övergav jag då Apple helt enkelt inte går att matcha på just laptops, varesig med [batteritider](/b/windows-battery-life/) eller något annat.

Det stora problemet med Mac är dock att Apple bestämmer allt om hårdvaran också, vilket förvisso inte är ett problem för bärbara datorer; det blir däremot tråkigt om man likt mig vill köra stationärt också. 

Jag gillar nämligen att köpa PC i delar och bygga ihop dessa till en billig och prisvärd stationär dator. Till denna kan jag sedan välja vilken kombination jag vill av skärmar, tangentbord och mus.

På den datorn vill jag gärna köra linux, då Windows verkligen inte faller mig i smaken alls och därför bara blir en onödig kostnad för mig.

Gemensamt med alla datorer jag äger är att jag använder dem i rollen som **kreatör**. Programmering, musikinspelning, formgivning och kreativt skrivande. Jag **spelar** såklart också, men det är rätt sekundärt.[^1]

Gemensamt med alla linuxdistar jag kört en längre tid är att de får mig **att känna mig som en systemadmin snarare än en kreatör**. Ingen linuxdist lyckas med konsttycket att få mig att strunta i det som finns under huven och istället bara **använda** datorn för att vara kreativ.

Tydligaste exemplet är Arch linux, där [installationen][3] bara är en live-CD med CLI och ett gäng manuella steg som går ut på att bråka med textfiler:

* Download
* Pre-installation
  * Set the keyboard layout
  * Partition the disks
  * Format the partitions
  * Mount the partitions
  * Connect to the Internet
  * Update the hardware clock
* Installation
  * Select the mirrors
  * Install the base packages
  * Configure the system
  * Install a bootloader
* Reboot
* Post-installation

Lägg till på detta att **inget grafiskt gränssnitt** installeras: där ska du som äger datorn välja mellan [XFCE](http://www.xfce.org), [KDE](https://www.kde.org), [GNOME](https://www.gnome.org), [MATE](http://mate-desktop.org), [Cinnamon](https://wiki.archlinux.org/index.php/Cinnamon) eller [Pantheon](https://wiki.archlinux.org/index.php/Pantheon). Det kräver att du som äger datorn ska ta ett mycket aktivt ägandeskap över hur datorn ska fungera. Som en **systemadmin**. En kreatör, å andra sidan, vill ha något som **bara fungerar** och **bjuder in till omedelbar kreativitet och produktivitet**.

Det finns gott om ambitiösa försök att bygga linuxdistar för kreatörer. [Ubuntu](http://www.ubuntu.com), [Linux Mint](http://www.linuxmint.com) och [ElementaryOS](https://elementary.io) är alla bra exempel.

Dessa når dock inte riktigt fram hela vägen, då dessa i någon mån fortfarande **utgår från att du som äger datorn är intresserad av detaljerna**, samt att samtliga **friskriver sig så snart något inte fungerar som det ska**: litet som att eftersom du själv valt en linuxdist, förväntas du vara förlåtande. 

Exempel på ovanstående är att drivrutiner och program som inte ligger i paketsystemet kräver omvägar och research för att installeras - processer som kan ta timmar eller rentav dagar i anspråk av den tid datorn istället borde **användas**.

Att flytta över underhåll och för mycket makt i form av detaljkännedom är **produktivitetsdödande för kreatörer**.

Jag slutar inte att vänta eller leta efter en linuxdist för mig som kreatör. I dagsläget finns det dock inte och det är trist.

Med detta sagt har jag i dagarna återvänt till [Arch Linux igen](http://www.archlinux.org), efter ett par månader i ElementaryOS Freya. Varför jag bytte tillbaka och vad som fick mig att underkänna Freya är värt att blogga om enskilt.


[1]: http://madrse.s3.amazonaws.com/old/posts/2009/08/blog/123.html
[2]: /b/linux-laptop/
[3]: https://wiki.archlinux.org/index.php/Installation_guide

[^1]: Jag tillbringar i runda slängar fyra gånger så mycket tid som kreatör som jag spelar Dota 2, exempelvis. Dota 2] kan jag inte ens spela bekvämt på alla burkarna jag har hemma.