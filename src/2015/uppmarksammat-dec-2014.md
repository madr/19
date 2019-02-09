---
title: Värt att uppmärksamma - december 2014
date: 2015-01-05
template: post.html
tags: linkbait
layout: single.hbs
collection: articles
---
## Arbetsmiljö

 * [Don’t Push Through the Pain][7]  
 Sitter du bra när du skriver ditt livs bästa kod? Tar du raster för att sträcka på ryggen och mjuka upp axlarna när din app tar världen med storm? Jag är själv dålig på det och tackar för den här artikeln som en påminnelse.

## Design

 * [Designer Blindness][30]  
 Jag lider också av detta. Är stolt över det, rentav. Varför ska jag visa pardon för gränssnitt och design som jag inte omedelbart förstår? **Varför ska någon möta ett gränssnitt eller en design halvvägs?**
 * [Design Principles: Visual Weight And Direction][35]  
 Bästa läsningen jag haft på ett tag! Oerhört svårt för mig personligen, det här med vityta. Särskilt sedan **Responsive Web Design**, när allt behöver vägas om sömlöst.
 * [The Good, The Bad And The Great Examples Of Web Typography][25]  
 Ännu en artikel om webbtypografi.

## CSS

 * [TV4 Tech | Natalie Nordström (TV4): Styleguides – hur vi använder det på TV4 och hur du själv kommer igång med det][6]  
 Inte övertygad om styrkan med stilguider för webb- och approjekt? kika på den här dragningen på svenska, kanske trillar någon polett ner.
 * [OS Specific Fonts in CSS][4]  
 Olika lösningar och knep för att låta webbdesign ärva typsnitt från operativsystemet. Inte helt dumt för t ex intranät där gränssnittet med rätt typsnitt kan ge intranätets besökare mer trygghet.
 * [Automating CSS Regression Testing][17]  
 Att testa CSS ordentligt, samt att kunna automatisera det för att själv fokusera på att designa. Det här är grymt coolt! Overkill för många projekt men inte alls omöjlig att föreställa sig i de projekt som behöver det. Responsive Web Design är svårt.
 * [Understanding CSS Stats: How to Make the Most of the Numbers][19]  
 **CSS Stats** är ingen absolut sanning, men att diagnostisera sin egen CSS på det här viset kan vara ett sätt att förbättra sin egen färdighet och att lära sig något nytt om hur CSS fungerar - eller vara beslutsunderlag till en behövlig refaktorisering.
 * [Responsive Enhancement][22]  
 Artiklar med **Progressive Enhancement** är jag aldrig sen att sprida vidare. Här görs en typisk hamburgarmeny med panes som ligger underordnade. [Ytterligare en menylösning](http://designmodo.com/canvas-sliding-navigation-menu/) för referens.
 * [Positioning Offset Background Images][23]  
 Hur att positionera bakgrundsbilder från höger och botten. Suck, Android ...
 * [Exposing Additional Form Fields via Checked Radio Buttons][24]  
 Visa inte extra formulärfält förrän de behövs med enbart CSS. Ett enkelt och mycket uppskattat sätt att göra formulär mer användarvänliga.
 * [The flag object][27]  
 Omedelbar bokmärkning rekommenderas! Detta är det berömda `.media` med vertikal centrering.
 * [Animated Headlines][36]  
 Det här är en riktigt trevlig addition till en landningssida.

## Designa Wordpress

 * [Back to Basics With WordPress CSS: Understanding the Native Classes][10]  
 En lathund eller cheat sheet för att designa ett Wordpress-tema från skratch eller utifårn befintligt tema. Wordpress har en rätt bestämd uppfattning hur CSS-klasserna ser ut och den här länken är bra att snegla på för ökad förståelse.
 * [SMACSS-Press][32]  
 Hur man ändrar de inbyggda klassnamnen i Wordpress. Ska såklart inte uppmuntras allt för mycket men en artikel med allt på ett ställe är såklart ett bra redskap.
 
 
## Trender

 * [On the accessibility of web components. Again.][14]  
 Det pågår riktigt bra diskussioner om **Web components** just nu som kommer leda till bra saker. Tillgängligheten och användbarheten är en issue som brukar få coola kids att stöna trött men faktum är att **Web components** krånglar till saker mer än nödvändigt ibland genom att laga saker som inte är trasiga. Detta behöver diskuteras.

## SVG, Canvas, sånt

 * [Clipping and Masking in CSS][13]  
 Allt jag personligen kan tänka mig vilja veta om masking (bilder och gradients) och clipping (vektorbanor) i CSS. Hyfsat webbläsarstöd också!
 * [Html5 Canvas vs SVG vs div][26]  
 Det handlar inte om att välja en, utan att välja mellan tre. Min tumregel: så snart det är tal om interaktiva element, överväg SVG före Canvas eller skippa interaktiviteten. **Webbläsarstödet är numera en ickefråga** men har varit det som hållt mig borta från SVG i över tio år.
 * [Icon System with SVG Sprites][28]  
 Kommer 2015 bli SVG:s stora år och det år när användningen av fonts börjar dala? Spännande.
 * [Elastic SVG elements][31]  
 Läckert.
 * [Is WebGL the Technology of the Future? What’s AexolGL?][34]  
 Abstraktionslager för att koda **WebGL**, som numera finns i både Android och iOS. Framtidens visualisering ligger redo i webbläsaren. Se också [three.js](http://threejs.org).
 * [SVG-loaders](http://samherbert.net/svg-loaders/)  
 Meh, min sista ursäkt till att använda animerade giffar! :(
 * [Tips For Optimising SVG Delivery For The Web](http://calendar.perfplanet.com/2014/tips-for-optimising-svg-delivery-for-the-web/)  
 Ber om ursäkt, är såklart tvungen att bli tråkig!

## JavaScript

 * [JavaScript Promises][5]  
 Promises, ett sätt att skriva bättre enkeltrådad kod, finns nu native i JavaScript: det behövs inte längre bibliotek. Jag har ännu inte haft behovet av att tillämpa promises men dess styrka i jämförelse med (egensnickrade) custom events och massor av `.addEventListener()` går inte att förneka. Definitivt något att se fram emot - vi väntar bara på stöd i Safari (inkluderat iOS) och IE. Fram tills dess blir detta min första labb 2015.
 * [JavaScript Modules the ES6 Way][12]  
 DAMN! 2016 kan man alltså med litet tur få använda `import { double, square } from 'mymodule';` för att skriva modulär JavaScript. Jag är förväntansfull.
 * [Introduction to Service Worker][16]  
 Periodisk bakgrundssynkning, kanske rentav "riktiga" push-notiser? Service Workers skulle kunna lägga grunden för det genom att låta webbutvecklare exekvera JavaScript "utanför" webbläsarfönstret. Här finns potential. Litet tidigt än dock. Exempel med Service Workers: [The offline cookbook](http://jakearchibald.com/2014/offline-cookbook/).
 * [Research: Performance Impact of Popular JavaScript MVC Frameworks][29]  
 Om svarstider och snabb sidladdning är superprio är det **ej rekommenderat** att köra något MVC-ramverk. Ingen överraskning där. Finns andra bra anledningar också, t ex förvaltningsbarhet.
 * [Recreating the Firewatch Parallax Effect](https://medium.com/@hamstu/recreating-the-firewatch-parallax-effect-213694d42f4e)  
 Alltid skönt med artiklar som går all-in för att nedmontera komplexa saker. Lärde mig massor.
 
 
## Mikroramverk

 * [Responsive nav][21]  
 litet script som förvandlar en horisontell meny till en hamburgarmeny på pekskärmar. Funkar för både pekskärm och tangentbord/mus. **Kräver inget annat bibliotek!**
 * [Rippler - Effect that spreads like a wave in touch or click.][33]  
 En trevlig klick-effekt! En guldstjärna till den som fixar en POC i detta med enbart CSS.
 
## Produktivitet

 * [Developing Robust Deployment Procedures][9]  
 Hygienfaktorer som ditt arbetsflöde bör uppfylla om du är designer eller programmerare.
 * [What Is Vagrant and Why Should I Care?][8]  
 Rekommenderad läsning till skeptiker likt mig! Jag avfärdade **Vagrant** i över ett år innan jag övervägde det: det som fick mig att till slut prova var att jag ville ha en LAMP-stack med frysta versioner av PHP och Apache och inte var på humör eller hade tiden för att installera en virtuell maskin. Jag fick vad jag behövde på **mindre än 2 minuter** med **Vagrant** och är därmed övertygad.
 * [Dealing with Emergencies in Git][15]  
 Riktigt bra tips för git-användare! `git stash` och `git cherry-pick` använder jag själv en hel del då de är mycket produktivitetshöjande.
 
## Tjänster

 * [Generate Notifications From Your Web App With the Pushover API][18]  
 Hur man skickar notiser till Android och iOS från din sajts backend med en molntjänst. Verkar inte allt för komplicerat eller ens särskilt dyrt.
 * [VATMOSS](https://remysharp.com/2014/12/16/vatmoss)  
 Fan, helvete, fan ... Starta SaaS inom EU låter inte alls kul efter det här. Lider med alla enmans-SaaS.
 * [Input Type Sandbox](http://inputtypes.com)  
 Verktyg för att testa inmatningsflt i HTML 5, och hur de beter sig när man inte fyller i korrekta värden.

## Appar

 * [Transmit iOS 1.1.1 [Updated]][3]  
 Bra funktionalitet som appens användare vill ha och som Apple utåt sett vill uppmuntra - likväl nekades appen i App Store.
 * [How Overcast asks for reviews][11]  
 Bokmärkt för framtida implementationer där jag vill begära betyg. Ingenting kan få mig att så radikalt ändra uppfattning om en app som när den på ett störande sätt ber mig sätta ett betyg.

## Prototyp-driven utveckling

 * [Stuck again][2]  
 Bibehåll fortsatt förtroende genom att hela tiden försöka trycka ut ny funktionalitet och förbättra existerande funktionalitet, då det inte går att förlita sig på gamla meriter, en endagsberömmelse eller en stund i rampljuset.
 * [The PRD is Dead, Long Live the Prototype!][20]  
 Argument för prototyp-driven utveckling framför att författa en mustig kravspec. 

## Säkerhet

 * [The dark side of Apple’s two-factor authentication][1]  
Gäller inte enbart Apple: om du använder tvåstegsverifiering i tjänster, **tappa inte bort återställningsnycklar** eller liknande - du kommer att bli utelåst. Det är ingen annans fel än ditt eget. Jag har blivit utelåst från ett av mina Heroku-konton av samma anledning.

**En sista bonus:** [En viktig milstolpe för MittMedia](http://blogg.mittmedia.se/quidproquo/2014/12/21/en-viktig-milstolpe-for-mittmedia/), en ärlig artikel om MittMedia som nu pensionerat ett stort system som jag var med och byggde 2007-2009. Jag önskar dem lycka till och de har orken att fortsätta vara i framkant. Det här är en av de mest intressant mediakoncernerna att hålla koll på framöver, särskilt ur ett tekniskt perspektiv.

## Gratis 

 * [Stereotesque](http://www.myfonts.com/fonts/stereotypes/stereotesque/) - Gratis font.
 * [Beetle HTML5 template](http://mokaine.com/beetle-free-html/) - Gratis statiskt tema, från premium-teamt i Wordpress med samma namn.
 * [PixelBuddha Free Icons Bundle](http://pixelbuddha.net/freebie/free-flat-icons-bundle) - Färgglada ikoner!
 * [Against](http://pixelbuddha.net/freebie/free-font-againts-typeface) - stor skrikig font.
 * [Freebie: Tourism & Travel Icon Set (100 Icons, PNG, SVG)](http://www.smashingmagazine.com/2014/12/23/freebie-tourism-travel-icon-set-100-icons-png-svg/)

[1]: http://thenextweb.com/apple/2014/12/08/lost-apple-id-learnt-hard-way-careful-two-factor-authentication/
[2]: https://signalvnoise.com/posts/3811-stuck-again
[3]: http://www.panic.com/blog/transmit-ios-1-1-1/
[4]: http://css-tricks.com/os-specific-fonts-css/
[5]: http://www.html5rocks.com/en/tutorials/es6/promises/
[6]: http://http.tv4.se/2014/12/07/tv4-tech-natalie-nordstrom-tv4-styleguides-hur-vi-anvander-det-pa-tv4-och-hur-du-sjalv-kommer-igang-med-det/
[7]: http://24ways.org/2014/dont-push-through-the-pain/
[8]: http://24ways.org/2014/what-is-vagrant-and-why-should-i-care/
[9]: http://24ways.org/2014/developing-robust-deployment-procedures/
[10]: http://css-tricks.com/back-basics-wordpress-css-understanding-native-classes/
[11]: http://www.marco.org/2014/12/05/how-overcast-asks-for-reviews
[12]: http://24ways.org/2014/javascript-modules-the-es6-way/
[13]: http://css-tricks.com/clipping-masking-css/
[14]: http://www.brucelawson.co.uk/2014/on-the-accessibility-of-web-components-again/
[15]: http://24ways.org/2014/dealing-with-emergencies-in-git/
[16]: http://www.html5rocks.com/en/tutorials/service-worker/introduction/
[17]: http://css-tricks.com/automating-css-regression-testing/
[18]: http://code.tutsplus.com/tutorials/generate-notifications-from-your-web-app-with-the-pushover-api--cms-22264
[19]: http://webdesign.tutsplus.com/tutorials/understanding-css-stats-how-to-make-the-most-of-the-numbers--cms-22756
[20]: http://zurb.com/article/1331/the-prd-is-dead-long-live-the-prototype
[21]: http://responsive-nav.com/
[22]: http://24ways.org/2014/responsive-enhancement/
[23]: http://css-tricks.com/positioning-offset-background-images/
[24]: http://css-tricks.com/exposing-form-fields-radio-button-css/
[25]: http://www.smashingmagazine.com/2014/12/22/the-good-the-bad-and-the-great-examples-of-web-typography/
[26]: http://stackoverflow.com/questions/5882716/html5-canvas-vs-svg-vs-div
[27]: http://csswizardry.com/2013/05/the-flag-object/
[28]: http://css-tricks.com/svg-sprites-use-better-icon-fonts/
[29]: http://www.filamentgroup.com/lab/mv-initial-load-times.html
[30]: http://www.zeldman.com/2014/12/27/designer-blindness/
[31]: http://tympanus.net/codrops/2014/12/15/elastic-svg-elements/
[32]: http://css-tricks.com/smacss-press/
[33]: http://git.blivesta.com/rippler/
[34]: http://davidwalsh.name/webgl-aexolgl
[35]: http://www.smashingmagazine.com/2014/12/12/design-principles-visual-weight-direction/
[36]: http://codyhouse.co/gem/css-animated-headlines/