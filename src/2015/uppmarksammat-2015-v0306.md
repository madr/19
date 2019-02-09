---
title: "Lästips om webbutveckling: vecka 3-6 2015"
date: 2015-02-02
template: post.html
tags: linkbait
layout: single.hbs
collection: articles
---
## Annonser och tredjepartswidgets

[Single-Tag Website - All of this coming from a single LINK tag][72]  
Kanske är det såhär man ska komma undan giffar och flash i annonsbanners? Inkludera en `<link>` och några placeholders (rimligen `<a>` med ett id) så är det klart? Borde vara mindre kostsamt än att rita annonser med flash.

Ser även att detta skulle kunna appliceras på fler widgets, t ex på diagram eller topplistor. Särskilt om dessa ska ta en ifrån sajten vid klick.


## CSS-effekter, showcases

[Hover.css - A collection of CSS3 powered hover effects][16]  
En samling över hover-effekter. Används LESS- eller Sassbiblioteket kan dessa enkelt inkluderas som mixins.


[Magic Animations CSS3][17]  
En annan samling, men med animationer. Med litet fantasi kan en sån här animation göra stor förbättring i interaktiva gränssnitt.


[CSS Shake][18]  
Satt och fnissade litet när jag kollade på det här. :)


[Some Ideas for Checkout Effects][36]  
Skulle också kunna fungera för bokmärken i en webapp eller till och med menyer.


[CSS Vertical Center with Flexbox][10]  
Vertikal centrering, gamle vän. Flexbox gör det enklare än `display: table-cell` åtminstone.


[Fun with line-height!][46]  
Många inte helt uppenbara knep finns här.


[Simple CSS-Only Row and Column Highlighting][66]  
Gillar särskilt JavaScript-godiset som får det där att fungera på pekskärmar också. Det är en snippet som går att använda till mycket annat.


## Bra CSS

[Strategies for Keeping CSS Specificity Low][4]  
Mycket bra tips här! Mitt eget bidrag är att **undvika** element-selektorer (för klena) och id-selektorer (för starka): använd istället klasser. Då jag är ett stort fan av SMACSS föredrar jag dessutom `.news-header` framför `.news .header`. Jag har också vanans edan många år att värdera min CSS mellan **återkommande/grundläggande CSS** (hamnar längst upp i Cascade) och **utökande/unik CSS** (hamnar längst ner i Cascade).


[Abusing CSS3’s nth-child selector to invent new ones][6]  
Med följande länk i åtanke skadar det inte att dela en länk lik denna! Det här är riktigt fiffigt, fantasifullt och innovativt.


[A Vision for Our Sass][28]  
Lika relevant för LESS. Jag har själv nyligen bråkat mycket med Sass-kod jag skrev för flera år sedan av den enkla orsaken att jag gick "för långt".


## Webbstandarder

[CSS Level 4 Selectors to Watch Out For][47]  
Kommer CSS bli en fara för batteriet på våra telefoner i framtiden? Eller kommer det bli en förbättring, eftersom JavaScript annars används? Återstår att se.


[Why we can’t do real responsive images with CSS or JavaScript][32]  
Jag har medvetet undvikit allt vad responsive images heter. Det är ett koncept somb ehöver mogna och bottna ner i en konkret teknik som är pålitlig. Jag rekommenderar istället [boken Retinafy.me](http://retinafy.me).


[Why AJAX Isn’t Enough][9]  
Spekulerar litet hur WebSockets kan ta oss dit Ajax inte riktigt når.


[5 Ways that CSS and JavaScript Interact That You May Not Know About][55]  
Pointer-events är grymt användbart, jag glömmer mellan varven bort att dessa finns.


[Little, Big: Using CSS fit-content](http://demosthenes.info/blog/975/Little-Big-Using-CSS-fit-content)  
`fit-content`, det bättre alternativet till `display: inline-block` att bråka med floats.


[JavaScript Fetch API in action ](http://blog.gospodarets.com/fetch_in_action/)  
Hur Ajax kommer skötas när Promises blir en hit.


## Prestanda

[Weighing SVG Animation Techniques (with Benchmarks)][59]  
Prestandan verkar vara en issue för SVG. Jag gillar att det får fokus.


[GreenSock | CSS animations performance: the untold story][62]  
CSS-animeringar är fortfarande sämre på att utnyttja hårdvaran än att animera med JavaScript. Detta är dock ett bekymmer för webbläsarna, inte oss utvecklare, så jag tänker påbjuda förbättring genom att fortsätta animera med CSS.


[At the end of my tether…][7]  
Krigshistoria om att försöka få jobbet gjort med enbart Internet från telefonen. Stämmer bra för svenska förutsättningarna också.


## Biz

[Overcast’s 2014 sales numbers][21]  
Wow! Det går bevisligen att få till hit-appar fortfarande. Stort tack till Arment som delar med sig.


[Do you have to love what you do?][26]  
Så jäkla bra! Riktig ögonöppnare, faktiskt. Motivationen och att kämpa mot ett mål man själv förstår är viktigare än att älska det man gör. Det går att vända på det också - det räcker inte att älska det man gör för att få ett jobb att funka. Jag själv har ibland svårt att hitta motivation i uppdrag vars leverans inte är något jag själv förstår nyttan med.


## Design

[typebase.css: The starting point for good typography on the web][14]  
Det här har jag letat efter! Helt fantastiskt initiativ som jag personligen ska använda här på bloggen vid nästa redesign.


[Tour of a Performant and Responsive CSS Only Site][42]  
Till och med jag blev grymt överraskad över vad **enbart CSS** kan åstadkomma som visat här.


[Refreshing Search: Testing Search Box Variations][11]  
Tydligen så är det *en bred enrads-textruta* som folk söker efter först, inte ett förstoringsglas, när de vill söka. Intressant. 


## Verktyg för design

[Tint UI](http://tintui.com/)  
Färger från iOS, Flat UI, Windows, Pantone 2015 och Googles Material Design. Ett klick på en färg kopierar HEX-värdet till utklipp.


[PicSvg: Convert Picture to Svg](http://picsvg.com/)  
Ett verktyg för att ta en bild och skapa en Stencilbild i SVG-format. Tackar, tackar!


[Font Pair](http://fontpair.co/)  
Interaktiv demo av olika kombinationer från Google Fonts.


## För Prototypdriven utveckling

[Documentation - Materialize][15]  
Ännu ett ramverk vars riktiga styrka troligtvis kommer fram vid prototyp-driven utveckling. Baserat på [Googles Material Design](http://www.google.com/design/spec/material-design/introduction.html#).


[LumX][51]  
Angular var från början tänkt att användas för just prototyper. Här är ett komplett kit för ändamålet.


[Why I Ditched Angular for React][22]  
Den här artikeln, i kombination med det här jämförande [prestandatestet där React sopar mattan med Angular och Knockout](http://dapperdeveloper.com/2015/01/26/performance-of-angularjs-reactjs-and-knockoutjs-compared/), gör att jag kan tänka mig att bygga något med React i ett läge där jag måste ta till ett ramverk baserat på reellt kundbehov.


## Photoshop? nej, tack!

[11 tips for prototyping with Sketch][23]  
Sketch verkar smidigt. Jag är beredd att testa det för att definitivt stänga av kodaren i mig när jag behöver fundera en stund på design.


[Export an Image from Layered Photoshop PSD from Command Line][25]  
ImageMagick kan tydligen göra en PNG-export av Photoshopfiler. Ingen mer Spara för webb.


## JavaScript

[Creating Well-Behaved Sites With The Page Visibility API][30]  
Det här är **bra** användningsområden för JavaScript! Sitter själv och klurar på vad jag kan göra för att få hemsidor att må bättre när de ligger i en dold flik.


[Strange JavaScript Errors and How to Fix Them][34]  
Fusklapp för vanliga fel i JavaScript.


[HTML5 Form novalidate][60]  
Använder du JavaScript för att validera formulärfält i "specialfall", och funderar på att ta hjälp av HTML5-valideringen? `novalidate` är i så fall bra att känna till.


## Gratis-saker

 * [SVG Icons - Ready to use SVG Icons for the web.][49]
 * [Freebie: “Boxify” One Page Website Template][53]
 * [Slash: Bad Ass Display Font](http://pixelbuddha.net/freebie/free-font-slash)
 * [Refuge (Free Font)](http://www.grantbeaudry.com/refuge)
 * [D Hanna Soft (Free font)](http://www.myfonts.com/fonts/diego-aravena/d-hanna-soft/)
 * [Kontanter | FREE FONT](https://www.behance.net/gallery/17725611/Kontanter-FREE-FONT)


## I backspegeln

[No, the Prediction Was Crazy][64]  
Åt helvete xD En artikel från 2011 som förutspår att Microsoft med hjälp av Nokia ska "slå" iPhone under 2015.








[1]: http://www.gamingonlinux.com/articles/c4-engine-drops-linux-support-developer-says-linux-is-inferior.4821/
[2]: http://www.omgubuntu.co.uk/2015/01/meizu-announce-triple-boot-ubuntu-phone-month
[3]: http://code.tutsplus.com/tutorials/the-ins-and-outs-of-gradle--cms-22978
[4]: http://css-tricks.com/strategies-keeping-css-specificity-low/
[5]: http://www.gamingonlinux.com/articles/the-dark-inside-me-a-25d-unique-3rd-person-point-click-psychological-horror.4819/
[6]: http://grack.com/blog/2015/01/09/abusing-css3-selectors/
[7]: http://christianheilmann.com/2015/01/12/at-the-end-of-my-tether/
[8]: http://designshack.net/articles/design-dilemma-articles/design-dilemma-the-wrong-way-to-force-a-client-to-pay/
[9]: http://www.smashingmagazine.com/2015/01/13/why-ajax-isnt-enough/
[10]: http://davidwalsh.name/css-vertical-center-flexbox
[11]: http://viget.com/inspire/refreshing-search-testing-search-box-variations#When:15:20
[12]: http://www.quirksmode.org/blog/archives/2015/01/the_problem_wit.html
[13]: https://www.djangoproject.com/weblog/2015/jan/13/security/
[14]: http://devinhunt.github.io/typebase.css/
[15]: http://materializecss.com/
[16]: http://ianlunn.github.io/Hover/
[17]: http://www.minimamente.com/example/magic_animations/
[18]: http://elrumordelaluz.github.io/csshake/
[19]: http://davidwalsh.name/website-builders-dont-suck
[20]: http://www.quirksmode.org/blog/archives/2015/01/angular_and_tem.html
[21]: http://www.marco.org/2015/01/15/overcast-sales-numbers
[22]: http://sixrevisions.com/javascript/why-i-ditched-angular-for-react/
[23]: http://blog.invisionapp.com/11-tips-for-prototyping-with-sketch/
[24]: http://tympanus.net/codrops/collective/collective-151/
[25]: http://davidwalsh.name/export-photoshop-file-image
[26]: http://signalvnoise.com/posts/3843-do-you-have-to-love-what-you-do
[27]: http://www.quirksmode.org/blog/archives/2015/01/front_end_and_b.html
[28]: http://alistapart.com/article/a-vision-for-our-sass
[29]: http://alistapart.com/article/live-font-interpolation-on-the-web
[30]: http://www.smashingmagazine.com/2015/01/20/creating-sites-with-the-page-visibility-api/
[31]: http://mattgemmell.com/a-farewell-to-files/
[32]: http://www.brucelawson.co.uk/2015/why-we-cant-do-real-responsive-images-with-css-or-javascript/
[33]: http://mattgemmell.com/referrers-script/
[34]: http://davidwalsh.name/fix-javascript-errors
[35]: http://alistapart.com/column/the-people-are-the-work
[36]: http://tympanus.net/codrops/2015/01/22/ideas-checkout-effects/
[37]: http://christianheilmann.com/2015/01/22/browsers-services-and-the-os-oh-my/
[38]: https://adactio.com/journal/8245
[39]: https://adactio.com/journal/8245
[40]: http://alistapart.com/blog/post/variable-fonts-for-responsive-design
[41]: http://signalvnoise.com/posts/3845-effort-in-the-application-sites-that-got-our-attention-and-got-basecampers-their-jobs
[42]: http://css-tricks.com/tour-performant-responsive-css-site/
[43]: http://sixrevisions.com/elsewhere-on-the-web/myth-tutorial-sitepoint/
[44]: http://www.brucelawson.co.uk/2015/reading-list-102/
[45]: http://www.smashingmagazine.com/2015/01/23/how-why-make-side-projects-work-digital-agency/
[46]: http://css-tricks.com/fun-line-height/
[47]: http://webdesign.tutsplus.com/articles/css-level-4-selectors-to-watch-out-for--cms-23117
[48]: http://www.mashup.se/nyheter/apimandag-2015-01-26
[49]: http://svgicons.sparkk.fr/
[50]: http://tympanus.net/codrops/collective/collective-152/
[51]: http://ui.lumapps.com/
[52]: http://signalvnoise.com/posts/3847-asking-why
[53]: http://tympanus.net/codrops/2015/01/27/freebie-boxify-one-page-website-template/
[54]: http://www.gamingonlinux.com/articles/outlast-that-really-scary-game-looks-like-its-still-heading-to-linux.4896/
[55]: http://davidwalsh.name/ways-css-javascript-interact
[56]: http://www.omgubuntu.co.uk/2015/01/vivaldi-web-browser-linux-download-power-users
[57]: https://adactio.com/journal/8252
[58]: https://www.djangoproject.com/weblog/2015/jan/27/bugfix-releases-issued/
[59]: http://css-tricks.com/weighing-svg-animation-techniques-benchmarks/
[60]: http://davidwalsh.name/novalidate
[61]: http://www.omgubuntu.co.uk/2015/01/libreoffice-4-4-released-ui-revamp
[62]: http://greensock.com/css-performance
[63]: http://hacks.mozilla.org/2015/01/from-mapreduce-to-javascript-functional-programming/
[64]: http://venturebeat.com/2011/04/07/windows-phone-beat-iphon/#
[65]: http://time.com/3687475/apple-beating-samsung/
[66]: http://css-tricks.com/simple-css-row-column-highlighting/
[67]: https://joacim.net/fyra-ideer-apple-borde-fundera-pa/
[68]: https://joacim.net/bill-gates-om-tiden-fram-till-ar-2030/
[69]: https://www.djangoproject.com/weblog/2015/jan/31/dsf-calls-volunteers/
[70]: http://www.uxcheck.co/
[71]: http://xkcd.com/1481/
[72]: http://cj-johnson.github.io/Single-Tag_Website/