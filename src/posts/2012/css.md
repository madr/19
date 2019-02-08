---
title: Hur jag slutade kämpa emot och började skriva bättre CSS
date: 2012-06-28
template: post.html
layout: single.hbs
collection: articles
---
Jag har sedan sju år tillbaka varit närmast militant vad gäller POSH. Att skriva semantisk HTML inom ramar sällan angivna av enbart mig själv har varit en ständig utmaning om jag gladerligen axlat. 

Jag tillhör gamla skolans webbstandardistor, som länge förespråkat klinisk ren HTML-kod, i andan som Roger Johansson sammanfattar i [Vanliga misstag inom webbuteckling](http://www.456bereastreet.com/lab/web_development_mistakes/sv/).

 * Klasser och ID ska inte agera CSS-krokar.
 * De klasser och ID som finns ska tillföra dokumentet och innehållet något.
 * Där CSS kan appliceras utan klasser eller ID, ska ingen klass eller ID förekomma (för CSS-författandets skull).

På Jaiku har jag till exempel diskuterat detta i tråden [Objektorienterad CSS? Låter såväl spännande som absurt.](http://madr.jaikuarchive.com/presence/444e307bdee841e7a71de13b76e5ade6) där jag sammanfattar den syn jag länge haft.

## Det där med rit-prestandan

Jag är dock inte längre inte längre samma övertygelse. Det som framförallt fick mig att grundligt omvärdera min bild är främst två omständigheter.

 * En av de projekt jag deltog i fick allvarliga problem med [reflows och repaints](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/). Jag följde alla best-practices som jag själv så religiöst predikat och märkte att sajten - [en interaktiv historia med såväl flash som Ajax](http://snorapporten.se) - kändes slö i responsen. Till råga på allt blev även CSS-filen bara större och större.
 * Mitt deltagande i ett samordningsprojekt där [40 sajter delade HTML-kod](http://mktmedia.se/om-mktmedia/gemensamma-plattformar/) men ägde sin egen CSS och JavaScript. Mitt arbetslag hade som ambition att överträffa all tidigare HTML-kod vi författat - utifrån samma värdegrunder som nämns ovan - med så få kompromisser som möjligt till förmån för flexibelt designarbete och bra stöd för webbläsare (på den här tiden var IE6 enskilt störst). Projektet led i slutskedet av mycket allvarliga prestandaproblem; inte med svarstider, utan med reflows och repaints.

Jag insåg att det måste finnas något annat sätt. Ett bättre sätt. *Rätt sätt*.

## CSS som ett eget, självsammanhängande lager

Det är ofta de tre lagren struktur, presentation och beteende omnämns när webbstandarder diskuteras. Likväl har de främst alltid låtit presentationslagret (CSS) speglas och bli hårt knuten till strukturen (HTML). Jag är numera av åsikten att det är här är roten till dåligt skriven CSS.

Vi lägger stor möda på att skriva validerande, semantisk och hjälpsam HTML. Vi avlusar och skruvar på våra script för att inte skapa sajter som är tröga och få Steve Souders att sova bättre om nätterna. CSS däremot har varit en eller flera filer dit kod skyfflats in för att uppnå de krav sajtens presentation har på sig. Det är en aning snedfördelat, har jag kommit fram till.

Jag är numera av den bestämda åsikten att CSS ska organiseras och refaktoriseras med samma omsorg som vi hittills lagt på scripts och uppmärkning. Även Fleecelabs har varit inne på samma sak i bloggposterna [Dags att omvärdera semantisk HTML?](http://f.fleecelabs.se/post/16017015153/dags-att-omvardera-semantisk-html) och [Därför måste vi diskutera hur vi bygger CSS](http://f.fleecelabs.se/post/17428569299/darfor-maste-vi-diskutera-hur-vi-bygger-css). 

Fler än en smartskalle har tänkt på detta och angripit det olika.

 * [Nicole Sullivan](http://twitter.com/stubbornella) har tagit fram den kontroversiella filosofin [Objectorienterad CSS](http://oocss.org) som [även gett namn åt ett CSS-bibliotek](https://github.com/stubbornella/oocss).
 * [Jonathan Snook](http://twitter.com/snookca) hade mycket tankar i huvudet en regnig dag och började skriva det som idag är e-boken och workshoparna [Scalable, Modular Architecture for CSS (SMACSS)](http://smacss.com).
 * Sullivan/[Zakas](http://nczonline.net) tar CSS på stort allvar och skapade det första verktyget som sårar CSS-utvecklares känslor: [CSSlint](http://csslint.net).
 * Kyle Neath tröttnade på att ingen annan smartskalle pratade om dokumentation och skapade därför [Knyle Style Sheets](http://warpspire.com/posts/kss/), som är ett fenomenalt försök att skapa regler för CSS-dokumentation som *gör nytta*.

Just klasser eller ej är det som skapat mest upprörda känslor, då många är ypperligt fästa vid att skriva ID-selektorer i sin CSS-kod.

Som sagt, även jag var den personen. Tills jag insåg att class-attributet redan förlorat sin glans.

## WAI-ARIA landmark roles, HTML5, Microdata

Class-besattheten uppkom i en tid där vi märkte upp vårt innehåll med XHTML 1.0 Strict och HTML4. En tid där vi slet hårt med listor, `DIV` och nitiskt kedjade rubriker. Vår enda utväg för att skapa ytterligare semantik då var klasser. Detta understryktes ytterligare när vi började försöka enas om konventioner för klassernas namn i form av [Mikroformat](http://microformats.org).

Det var då. Nu har vi andra förutsättningar.

* **HTML5**. Nya, semantiska element som faktiskt tillför riktig nytta. `nav` behöver ingen beskrivande klass, det är en huvudmeny. Detsamma gäller `header` och `footer`. `article` är av särskilt intresse för såväl parsers som skärmläsare då detta är viktigt och ensamstående innehåll. `section` skapar en roburst, trevlig indelning på vårt dokument (även om det råder viss förvirring fortfarande). HTML5 gör helt enkelt att vi inte behöver klasser för att semantiskt beskriva delar av dokument.
* **WAI-ARIA landmark roles**. WAI-ARIA är ett stort område som enbart sanna experter bemästrar, men landmark roles är lågt hängande frukter som vi inte har någon ursäkt att inte plocka. Här kan vi säga vad som är huvudinnehåll, vad som är kompletterande innehåll och vad som bara är puffande för annat innehåll. Bland mycket annat. Det är också något som aktivt *finns eller arbetas på* i skärmläsare och hjälpmedel, till skillnad från det luftslott vi försökte bygga med klasser.
* **MicroData enligt schema.org**. Mikroformat som det borde sett ut från början. Google stödjer båda i listning av sökresultat men uppmuntrar Microdata, vilket troligen också sätter måttet för Bing och andra sökmotorer. Microdata tillför omedelbar nytta och använder inte klasser överhuvudtaget.

Med detta sagt vill jag säga att class-attributet numera inte är något jag behöver för att ge mina HTMLdokument mening. Jag använder istället class-attributet för att skriva förvaltningsbar, förutsägbar och smart CSS. Jag skriver numera nästan all CSS med enbart klasser, max två led i selektorerna. Inte ens under pistolhot skulle jag vända mig om och gå tillbaka till mina gamla riktlinjer; den skillnaden jag upplever är helt fantastisk.

Även [@csswizardry](https://twitter.com/csswizardry/) har tänkt på det här. På Front-Trends 2012 höll han presentationen [Breaking Good Habits](https://speakerdeck.com/u/csswizardry/p/breaking-good-habits-1) som berör mycket av det jag skrivit här, men på ett mer objektivt sett. Rekommenderas.

**Uppdatering**: Nu finns en video uppe.

<iframe src="http://player.vimeo.com/video/44773888" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p><a href="http://vimeo.com/44773888">Breaking Good Habits - Harry Roberts</a> from <a href="http://vimeo.com/user9986068">Front-Trends</a> on <a href="http://vimeo.com">Vimeo</a>.</p>