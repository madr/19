---
title: Automatisera JSLint med Git hooks och Node.js
date: 2012-09-11
template: post.html
layout: single.hbs
collection: articles
---
Jag har för vana att kvalitetsäkra JavaScript med [JSLint](http://jslint.com). Fram tills nyligen har jag gjort detta i och med att jag även validerar min HTML och CSS, vilket härlett till att jag automatiserat denna gemensamma aktivitet med [några återanvändningsbara Ant-targets](https://github.com/madr/uidev-checklist) som flyttat mellan mina projekt hemma och på jobbet.

Jag är rätt nöjd med att kunna göra dessa med en kommandorad i en terminal, men det finns alltid utrymme för förbättringar. En brist med dåvarande setup är att JSLint inte körs förrän jag själv väljer det, varvid några dåliga rader kod faktiskt kan smyga ut i produktion om jag är slarvig med att köra ant.

Då det mesta jag kodar versionshanteras med Git, finns det förbättringar att skapa utifrån [Git hooks](http://git-scm.com/book/en/Customizing-Git-Git-Hooks). Med en `pre-commit` är det omöjligt att checka in dålig kod eftersom JSlint kan neka incheckningen.

Jag tänker inte förklara konceptet med git-hooks i detalj (länken ovan gör det bättre än mig); jag ger istället iväg koden jag använder.

    #!/bin/sh
    #
    ROOT_DIR=$(git rev-parse --show-toplevel)
    JSLINT="${ROOT_DIR}/node_modules/.bin/jslint"
    for file in $(git diff --cached --name-only | grep '\.js$'); do
      line=$(node $JSLINT $file | grep 'OK')
        if [ x"$line" = x ]; then
            node $JSLINT $file
            exit 1
        else
            echo "jslint passed\n"
        fi
    done
    exit 0

Värt att notera i ovanstående är att jag använder [Node.js](http://nodejs.org) för att köra JSLint. Detta gör jag för att den är överlägset snabbast av alla implementationer av JSLint jag testat. Det går såklart att köra Rhino eller något annat också.

För att lägga till den här git hooken i ett av dina projekt, gör så här:

 # Kopiera texten ovan.
 # Öppna filen `.git/hooks/pre-commit.sample`.
 # Klistra in texten och spara.
 # Döp om filen till `.git/hooks/pre-commit`.
 # Gör den nya filen körbar: `chmod +x .git/hooks/pre-commit`.

För att installera Node.js:

 1. Installera enligt instruktionerna på [Nodejs.org](http://nodejs.org).  
     a. Macanvändare kan installera via brew: `brew install node`
     b. Arch-användare kan installera via pacman: `pacman -S node`
 2. i en terminal, gå till projektets rot.
 3. installera jslint: `npm install jslint`

Jag använder själv den här hooken i alla mina projekt sedan en vecka tillbaka och det är genast litet tryggare att koda JavaScript när det i princip är omöjligt att driftsätta ej kvalitetssäkrad kod. 

Då [CSSLint](http://csslint.net) också ligger i Node.js skulle även den bli en kandidat för version 2. Efter det kvarstår bara HTML-valideringen, vilket jag dock ser liten poäng med att validera så strikt: där räcker troligen mina ant-targets tillsammans med ett CI-system.