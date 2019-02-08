---
title: Ändra storlek på AddThis
date: 2011-06-20
layout: single.hbs
collection: articles
archived: true
---
Jag fick nyligen uppgiften att ändra storleken på delalänkar, som
implementerats med [AddThis](http://addthis.com). Dessvärre hade
inlogget på kontrollpanelen gått förlorat under lanseringen, så jag satt
i ett läge där jag kunde bli tvungen att återställa all insamlad data
som hittills kommit in via folk som delat sajten.

Lyckligtvis har AddThis löst storleksdirektiven mycket flexibelt. I
koden för delalänkarna, ändra följande:

    <div class="addthis_toolbox addthis_default_style">

Till följande:

    <div class="addthis_toolbox addthis_default_style 
    addthis_32x32_style">

Genom att lägga till en klass kommer delalänkarna bli större. Inte
nödvändigt att kasta bort gammal statistik, alltså. En helt okej lösning
på ett i övrigt mycket välgenomfört verktyg.