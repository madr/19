---
title: Hur jag döper kod efter Forsakens i Wheel of Time
date: 2015-01-26
template: post.html
layout: single.hbs
collection: articles
---
Då och då låter jag mig inspireras av personer som förutom [att utveckla grym mjukvara][1] också lägger tid på att skriva ner meta och tankar, t ex om [resonemang kring appens namn][2]. 

Att döpa saker korrekt är bland det svåraste som finns när det kommer till utveckling av mjukvara (må det vara appar, program eller webbplatser). Jag ska därför skriva litet om hur jag döper saker (servrar, bakgrundsprocesser, backends, designoriginal) i [mitt kvällsprojekt][3].

Det huvudsakliga temat är enkelt: Att döpa saker efter **de 13 förlorade** (*Forsakens*) i *Sagan om Drakens återkomst* (på orginalspråk: *Wheel of Time*). Det finns flera anledningar till detta:

 * När kvällsprojektet tog fart läste jag om hela serien.
 * Antalet är bra: 13, varav fem är kvinnliga och åtta är manliga. 
 * Alla av de 13 har unik bakgrund och markanta särdrag.


## Backend och Frontend

De första två kodbaserna var ett backend skrivet i Django, och ett frontend (HTML-prototyper, CSS och JavaScript) som var utbrutet ur backend. Dessa fick namnen **tajmme** och **tajmme-frontend**.

Stela och tråkiga namn. Inte inspirerande alls. Jag började efter ett tag fundera över det.

Om en webborienterad mjukvara översätts till ett drama, så är backend i högsta grad protagonisten. Med detta bestämt blir frontend-koden någon sorts hjälte eller kontrastroll. Ett namn som tidigt dök upp var **Lanfear**: dels har namnet en skön klang, dels är Lanfear känd som oerhört vacker (bland de vackraste som levt i serien). Då kodbasen innehåller och endast fokuserar design och form kändes det som ett bra namn.

Det var därför naturligt att döpa backend till **Rand al'Thor**, då Lanfear tidigt snärjer (eller försöker snärja) honom. Han är också huvudprotagonisten i serien.


## Bakgrundjobb och användardokumentation

Med tiden uppstod ett behov av en kodbas till: generering och handhavande för användardokumentation. Främst text med litet scripts, t ex för att automatiskt generera skärmdumpar. Jag valde här att köra flat-file, dvs skriva i Markdown-filer för att därefter transformera dessa till HTML och därmed slippa beroende till en databas.

Det var här jag kom på att systemet borde ha ett namn från någon av Forsakens, då jag redan hade detta påbörjat. Magkänslan sade att det borde vara ett kvinnonamn, då Lanfear redan gett namn åt en kodbas.

Mitt val var spontant och blev **Moghedien**, som förekommer mycket i serien.

Långt senare fann jag ett behov av att flytta projektet från [Heroku](http://heroku.com) till en egen server som jag själv fick installera, och med detta initierade jag ytterligare en kodbas: den samling script som krävs för schemalagda bakgrundsjobb* och scripts för att hantera backend (skapa backups, redeploy, omstart etc).

Även denna gång blev namnet spontant, och kom att bli **Mesaana**. Ännu längre senare fick jag en plötslig insikt: **Mesaana och Moghedien är feldöpta**. 

Jag satt vid tillfället och läste på [WoT Wiki][4] för att döpa ytterligare en kodbas, varvid jag började reflektera över vad **Lanfear**, **Moghedien** och **Mesaana** egentligen hade för egenskaper och roller i serien.

 * **Moghediens** andra namn för Spindeln. Hon agerar i det dolda, gärna i Drömvärlden, med dödlig precision.
 * **Mesaana** var lärare innan hon blev ond. Sadistiskt lagd och mästarinna på manipulation, särskilt på barn.
 
*Alla är barn i början*, innan de läser **användardokumentationen**! Denna borde således heta **Mesaana**, inte **Moghedien**. Dessutom: en kodbas med kod som **bara kör i bakgrunden** - det finns ett klockrent namn, och det är inte **Mesaana**.

Med detta bytte dessa två kodbaser namn med varandra.


## API-dokumentation

När jag sjösatte API:et för att hämta, skapa, ändra och ta bort innehåll ur backend med HTTP i JSON eller XML var det plötsligt litet lättare att döpa saker.

Jag hade redan en trend med kvinnonamn ur de 13. **Graendal** var en närmast perfekt matchning, då hon med magi förslavade de ädlaste och mest välbärgade personerna i serien för att använda till sitt egna nöje. Det är en sorts vulgär tolkning av tredjepartsutvecklares relation till ett RESTFul API: de är i API:ets vård, på API:ets villkor.


## Backend behöver nytt namn

Så, all kod jag skrivit ligger samlade i kodbaser döpta efter kvinnliga Forsakens. Alla utom ett: mitt backend.

En lyckad slump är att det bara fanns en kvinnlig Forsaken kvar, vars namn dessutom passar: **Semirhage**.

Semirhage är totalt svart i såväl kläder som hy - i det allmänna medvetandet är det för att **Lanfear** är helt vit. Varandras motsatser, såväl i symbios som i konflikt. Perfekt namn för backend! Som bonus är **Semirhage** också mycket respektingivande och hade stark färdighet i att hela och återställa, för att samtidigt sadistiskt plåga.


## Hårdvaran då?

Jag har hittills berättat hur mjukvaran är döpt. Det finns dock hårdvara inblandad också:

 * Min **laptop**, där det mesta av koden skrivs. En 13" Macbook Air.
 * Den tidigare nämnda virtuellt privata servern.
 
Gällande servern var valet enkelt - **Demandred**. Den ständiga tvåan som hade blivit den mäktigaste mannen i serien om det inte vore för Lews Therin Telamon (Draken). Han är militäriskt geni, en enormt mäktig magiker, ser mycket bra ut **och ler aldrig**. Det kallar jag server! (**Ishamael** hade också funkat.)

Min Mac var litet svårare, men jag landade till slut på **Rahvin** - kvinnotjusaren som ansågs fåfäng och väl medveten om sitt utseende. Då mjukvaran är döpt efter kvinnor, samt att datorn är en Mac - en överdesignad dator - kändes detta namn bra.

## Så, för att summera

 * **Semirhage** - backend, skrivet i Django
 * **Lanfear** - frontend och designprototyper (HTML, CSS, JavaScript)
 * **Moghedien** - Bakgrundsjobb och DevOp-scripts
 * **Mesaana** - Användardokumentation och hjälpsidor
 * **Graendal** - API- och utvecklardokumentation
 * **Rahvin** - Utvecklardator (Macbook Air 13")
 * **Demandred** - Produktionsserver (Debian Wheezy)

Lediga namn: Asmodean, Aginor, Be'lal, Balthamel, Ishamael och Samael. **Inga kvinnor kvar** - om man inte räknar med **Balthamel** som återuppstod som kvinna.

[1]: http://overcast.fm
[2]: http://www.marco.org/2013/09/24/naming-overcast
[3]: http://tidrapporteringsuger.se
[4]: http://wot.wikia.com/wiki/

*: Dessa låg tidigare i backend, dåvarande **Rand al'Thor** - det var bara vettigt att flytta ut dem så att fick egen versionshantering och anpassning till servern, snarare än backend.