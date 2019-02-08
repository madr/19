---
title: Mitt projekt med Raspberry Pi, och yttterligare 10 tips för inspiration
date: 2013-05-03
template: post.html
layout: single.hbs
collection: articles
---
Ett av de roligaste projekten jag gjorde i höstas var denna:

<iframe width="420" height="315" src="http://www.youtube.com/embed/wapJ0p1O_9U" frameborder="0" allowfullscreen></iframe>

Raspberry Pi är för den obildade en enkortsdator med 800MHz prolle och 256MB minne. Linux är enda alternativet som OS, som installeras genom att DD:a en förberedd IMG till ett SD-kort. Den har förutom ingångar för nätverk, USB och bild även [GPIO](http://en.wikipedia.org/wiki/General_Purpose_Input/Output) som kan användas till allt möjligt skojigt. 

![Raspberry pi, från wikipedia](http://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/RaspberryPi.jpg/300px-RaspberryPi.jpg)

Min stora röda knapp är ett sådant exempel. Den är kopplad till GPIO och hanteras av en daemon skriven i Python. Python-scriptet lyssnar efter knapptryck och utför you-name-it, samt hanterar knappens inbyggda LED-belysning.

Jag har använt knappen för att bygga kod, för deploys av byggen och för releaser av nya versioner till produktion. Någon projektledare har också fått äran nu när de får möjlighet att bokstavligen "trycka på knappen".

Kika även på [Top 10 Things to Connect to Your Raspberry Pi](http://www.raspberrypi-spy.co.uk/2013/03/top-10-things-to-connect-to-your-raspberry-pi/) som visar hur avståndsmätare, Wii controllers, rörelsesensorer, 16x2 displayer med flera kan kopplas till en Raspberry pi och styras med python.

Python är inte enda alternativet. Även Bash, C, ruby och annat är aktuellt. [Tutorial: How to use your Raspberry Pi like an Arduino](http://log.liminastudio.com/writing/tutorials/tutorial-how-to-use-your-raspberry-pi-like-an-arduino) är en bra genomgång.

För min knapp har jag följande i åtanke:

 * Inbyggd display (2x16 tecken) som berättar hur bygget går.
 * Mer status-LEDS för att visa exit code (grön för 0, röd för !0).
 * Switch för att kunna välja mellan knapphändelser.
 * Snyggare housing (LEGO funkar sisodär ...)