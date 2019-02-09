---
title: "Purple och Primer: två exempel på stilguider →"
date: 2015-03-25
template: post.html
layout: single.hbs
collection: articles
---
Jag är sedan länge en förespråkare för **Stilguider** och **CSS dokumentation**. Det är inte alltid uppenbart varför det är värt att dokumentera HTML+CSS, så när två stora internet-kändisar gör sin designdokumentation publik känner jag mig tvungen att länka till dem.

Först ut är [Purple: A UI kit for Heroku's web interfaces](http://purple.herokuapp.com). Denna dokumentation innehåller grafiska komponenter för Herokus tjänster, och vanliga kombinationer av dem. De kallar det **Ui kits** vilket låter litet roligare än att kalla det stilguide.

Därefter [Primer: The CSS toolkit and guidelines that power GitHub](http://primercss.io), som förutom Herokus variant också släppt rubbet som öppen källkod.

Hade mina projekt den här typen av dokumentation föreställer jag mig att det skulle vara busenkelt att få en överblick som ny medlem i design-teamet. Jag vet i alla fall att jag skulle uppskattat det i en sådan sits.

För att göra den här typen av dokumentation krävs såklart litet engagemang och att man är överens om dess syfte och vinst, men när det väl är bestämt gör verktyg som [StyleDocco](https://jacobrask.github.io/styledocco/) och [KSS](http://warpspire.com/kss/) det möjligt att automatisera bort det mesta som är tråkigt.

En stilguide ska enligt mig vara en del av byggen och deploy av assets, sådant som vi redan använder NPM, [Grunt](http://gruntjs.com) eller [Gulp](http://gulpjs.com) till.