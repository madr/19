---
title: TiConf Amsterdam, 28-29 juni 2014
date: 2014-08-11
template: post.html
tags: konferenser
layout: single.hbs
collection: articles
---
## Inledning

Sedan 2010 har vi på jobbet använt [Titanium][1] för att utveckla appar för kunds räkning. [TiConf][2] är en årlig konferens där communityts eldskälar har litet föreläsningar och showcases ämnat för såväl nya som redan etablerade användare av Titanium.

TiConf hålls på flera ställen i världen, i Europas fall i Amsterdam. Jag deltog i denna 28-29 juni, vilket är min första TiConf. Det här är mina bestående intryck baserat på de anteckningar jag gjorde i min [Hipster PDA][4].

## Dag 1

Första dagen innebar registrering och ett mycket omfångsrikt innehåll, där jag lyssnade på följande föreläsningar:

 * *Titanium 3.3.0* av ingen mindre än **Ingo Muschenetz**.  
 Visade litet om Titaniums framtid och större buggrättningar och nyheter i kommande version, samt litet statistik-onani som sig bör. Här nämndes [Alloy][3] för första (och verkligen inte för sista) gången.

 * *Scaling your mobile back-end* av **Marek Jelen**.  
 Presenterade och visade OpenShift via exempel. För mig som är flitig användare av Heroku och ovän med AppFog sedan några månader var det ingen kioskvältare, men det väckte en nyfikenhet inför plattformen. Visar det sig att OpenShift har en EU-region kan jag mycket väl testa plattformen för såväl kunds som eget projekts räkning.

 * *Augmented reality applications with Wikitude* av **Philipp Nagele**  
 Oerhört spännande om **Augmented reality**. Inspirerande och rejält proffsigt som verkligen triggade igång fantasin. På Github finns kod för att börja labba med gadgets (främst glasögon och armband som läser av handrörelser) via en Titanium-modul. 

 * *Titanium Mobile Web &amp; Firefox OS* av **Alessio Ricco**  
 Visade litet av Firefox OS och hur Titanium Mobile Web (ramverk+bibliotek med HTML, CSS och JavaScript) kan användas för att bygga appar. Kan väl sammanfattas som att Firefox OS inte är riktigt moget ännu som plattform, även om det finns potential.

 * *Make the most of your single thread* av **Ronald Treur**  
 Grymt bra föreläsning om apputveckling i allmänhet och JavaScriptprogrammering i synnerlighet. JavaScript är enkeltrådat och det finns bara en exekveringskö. I denna kö behöver prio 1 köras först, och lågprio placeras sist. Bland utvecklare för såväl Titanium som för webbläsare finns en bild av att JavaScript själv fixar detta - detta är **falskt**. Det är **utvecklaren** som äger makten att prioritera och att skylla på att Workers inte finns eller att applicera konstgjort flertrådsmönster är både amatörmässigt och högriskstagande.  
 Flera practices jag själv är skolad att köra "därför-att" visades upp och förklarades effektivt och snyggt. Har en känsla av att detta var höjdpunkten för många av deltagarna på TiConf.

 * *Community toolkit showcase* av **Fokke Zandbergen**  
 Redan under dagen var det tydligt att Titaniumkulten har för vana att släppa bra saker som öppen källkod. Fokke är ett mycket gott exempel och presenterade här de vanligaste repositorierna för communityts moduler och ett axplock av populära och extraordinära moduler. Även några tjänster för att automatisera tråkiga uppgifter visades, t ex TiCons som genererar appikoner och startskärmar för iOS, Android och Windows.

 * *Adventures in Cross-plattform* av **Jason Kneen**  
 Krigshistorier på rad i en av de proffsigast framförda föreläsningarna. T ex Designers som bara är iPhone-orienterade och att appars startikoner förväxlas med "avatars". Litet om hur apputvecklare bör formulera uppdraget, främst för att inte hamna i följande: "Vadå, Titanium ger dig ju både Android och iPhone så då kostar det väl bara hälften så mycket?" Underhållande och intressant! Föreläsningen bjöd även på mycket tips för automatisering och distribuering av tester och deploys.

 * *10 golden rules* av **James Sugrue**  
 Precis vad det låter som! TableViews är dåliga, callbacks spöar globala event listeners som delegerar (i Titanium, inte nödvändigtvis i webbläsaren!) och fonter är bättre än PNGer för ikoner. Ännu mer prisande ord om **Alloy** och **TiShadow**.

 Avslutade med en presentation av [Carma Prize][5], som är ett initiativ för att försöka minska bilismen i I-länderna.

Jag var oerhört mätt efter första dagen som var full av intryck. Tre saker om lokalen och arrangemanget:

 * Kaffet var ok på alla ställen jag beställde från. Mycket pressokaffe i gamla Amsterdam!
 * Maten var lättsam och alldeles lagom.
 * Stolarna i salarna var hemska!

## Dag 2

Sista dagen bjöd på testning, automatisering och Beacons.

 * *Calabash* av **John Doe**  
 Av allt härligt jag såg på TiConf var detta det som verkligen golvade mig. Jag har sett ljuset och kommer aldrig att godta större projekt utan Calabash för testning - att skippa det ska ses som tjänstefel.

 * *Everything Titanium using the CLI* av **Xavier Lacot**  
 Som anhängare till att kunna göra saker via terminal kändes detta mycket trevligt. Titanium har många godbitar att sätta tänderna i för mig.

 * *Native FTW - extending Titanium with native views* av **Oliver Xeer**  
 En av besvikelserna denna andra dag på TiConf. Tråkigt, oengagerat och dåligt utfört. Vilket förvånade, då detta är en rerun från fjolårets TiConf i Valencia. Viktigt ämne dock! Att se hur olika kod ser ut i iOS och Android är en påminnelse om det ursprungliga syftet med Titanium: att korta ner inlärningskurvan för att bygga appar.

 * *Using Beacons with Titanium* av **Martin Hudson**  
 Otroligt intressant! Beacons är kul. Svårt att hitta användningsområden för, men kul! Communityts vana trogen finns det en färdig modul som bara är att klona från GitHub.

 * *Speed up app development with automated tests* av **Emanuelle Rampichini**  
 Den andra besvikelsen på TiConf. Automatisering berördes inte överhuvudtaget - istället visades ett Sublime Text-editor med Jasmine-tester. Gäsp.

 * *Building a team* av **Martin de Keijzer**  
 En historia från verkligheten, där Titanium visade sig vara ett bättre alternativ till Native och diverse hybrid-ramverk. Gillade att höra någon basha Sencha ordentligt då det ramverket inte gillas av mig särskilt mycket.

Andra dagen kändes bra också den, om än litet mindre innehåll än första dagen. Tre saker om Amsterdam, som utforskades på kvällen och dagen därpå:

 * Ölutbudet är trevligt! Mycket Trappistöl från Belgien, men även också en massa lokalt som är smakrikt (pratar inte om Heineken här, för kännedom).
 * Holland gick vidare i den helgens matcher i Fotbolls-VM. Trevlig stämning på stan.
 * Alla kan engelska i gamla Amsterdam. Lättsamt.

[1]: http://appcelerator.com
[2]: http://ticonf.org
[3]: https://github.com/appcelerator/alloy
[4]: http://en.wikipedia.org/wiki/Hipster_PDA
[5]: https://carmacarpool.com/prize/