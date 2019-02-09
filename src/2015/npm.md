---
title: Node som byggsystem för frontend
date: 2015-05-01
draft: true
layout: single.hbs
collection: articles
---
Ett av mina starkaste mantran är att **allt som kan automatiseras ska automatiseras**. 

Att arbeta med gränssnittsutveckling i webbprojekt har mycket som kan automatiseras. Dagens gränssnittsutvecklare pangar inte bara ut sin kod as-is i produktion längre. Istället tillämpas en hel del abstraktion för såväl CSS som JavaScript.

Jag har labbat en del med olika varianter[^2] för att öka produktiviteten och har landat i en lösning jag gillar skarpt. Lösningen är baserad på Node.js och är framtagen för att passa alla typer av webbprojekt, oavsett om de är i Rails, Django, Laravel, Drupal eller Wordpress.

## package.json

* Här startar allt
* i `scripts` finns fyra definierade tasks: `build`, `release`, `serve`, `test` och `watch`.
* Använder **browserify** för att bundla bibliotek och ramverk

## serve: Underlättande i det lokala kodandet

    npm run serve

* Kör lokal webbserver
* watchar några kataloger och triggar ett subset av `npm run build` vid ändring


## build: Förbereda inför att skeppa till produktion

    npm run build

* Optimera bilder (JPEG och PNG)
* autoprefixa CSS
* kompilera till CSS (less, sass)
* kompilera JavaScript (JSX, Hyperscript, CoffeeScript)
* Minifiera CSS och JavaScript
* Slå ihop CSS och JavaScript (browserify)
* Zippa CSS och JavaScript
* Generera stilguide


## test: Testa JavaScript och CSS

    npm run test

Körs manuellt lokalt, används av CI-systemet. Även brukligt för att ha som en [git pre-commit hook][^1].

* JSLint
* CSSLint
* Enhetstestning av JavaScript (jasmine, Mocha)
* Integrationstestning (PhantomJS, Karma, Selenium)


## release: Skeppa kod!

    npm run release

* Uppladdning till Amazon S3 (spara INTE credentials i koden!)
* Uppladdning till Surge.sh
* Uppladdning med (S)FTP


[^2]: Apache Ant, Make, Rake och Fabric för att nämna några, exkluderat anpassade scripts i ruby, python och bash. Jag rekommenderar inte någon av dem lättvindligt.

[^1]: [Git hooks](http://githooks.com). För ensamma utvecklare eller personer på språng är detta troligtvis mer effektivt än CI. Också givet val för pedanter som likt mig gillar tanken på personlig nolltolerans mot hastiga commits.