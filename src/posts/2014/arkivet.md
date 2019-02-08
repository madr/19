---
title: Några guldkorn ur de arkiverade Posterous-inläggen på madr.se
date: 2014-11-12
template: post.html
layout: single.hbs
collection: articles
---
När jag sommaren 2012 [började blogga med Django][2] valde jag att låta min [Posterous][3]-blogg ligga kvar. Tanken var att ha ett arkiv över gamla inlägg skrivna 2007-2012 då flera av inläggen migrerats alldeles får många gånger mellan alldeles för många CMS. 

För att göra det extra smidigt använde jag API:et för att få ut lista på alla permalänkar. Dessa lade jag in i mina urls i Django för att göra 302-redirects till arkivet.

Vad jag inte räknade med var dock att Posterous skulle stängas ner komplett. Naiv som jag var trodde jag att innehåll levde för evigt på Internet. Posterous erbjöd mig däremot att ladda ner innehållet först, vilket jag givetvis gjorde. 

Mitt bloggarkiv blev därmed offline, i form av en zip-fil på mitt Dropboxkonto.

I dagarna blev jag litet nostalgisk och slängde upp Zip-filens innehåll på Amazon S3, varvid arkivet nu är online igen på [http://madrse.s3.amazonaws.com/old/index.html][1].

Här är några av mina favoriter:

## Teknik

 * [Därför använder jag Mac istället för en PC med Windows eller Linux][21] (19 augusti 2009)  
   Varför jag (och så många andra kreatörer) använde Mac utan att sakna Windows och Linuxbaserade OS. Detta var på tiden **innan** iOS kom och krävde Macs för att koda appar.
 * [Jag skulle ha nytta av en iPad][5] (28 januari 2010)  
   Apple iPad var nyintroducerad och teknikcommunityts habegär var gränslöst. Jag resonerade här med mig själv om jag verkligen skulle ha nytta av en padda eller inte. Jag skaffade en padda samma vår och detta ledde så småningom till att jag slutade med laptop hemma.
   
## Sociala nätverk och trender

 * [Apparna, webbläsaren och det stora innehållet][4] (4 maj 2010)  
   Mitt i apphajpen var utvecklare bittra på webbläsarna. Min åsikt: innehållet vinner alltid.
 * [Facebook hämmar relationer (eller: nätidentitet och det egna jaget)][6] (26 april 2010)  
   Rant om min frustration över sociala nätverks negativa inverkan på traditionella relationer. Fortfarande aktuell.
 * [Hur jag började med webben][7] (20 mars 2011)  
   Kort sammanfattning om hur jag började göra hemsidor som tolvåring. Mer flummigt inlägg finns också med titeln [Min historia][14].

## CSS

 * [Stop Forking with CSS3, min åsikt][22] (22 juni 2010)  
   Min protest mot [eCSStender][23], som med hjälp av JavaScript injicerar [vendor prefix][24] på sajter så att utvecklare slipper hantera dem. Jag förespråkade då att förkompilerare skulle användas istället.
 * [Ytterst relevant prestandatestning av CSS][10] (9 september 2011)  
   En gång i tiden var det möjligt att slöa ner en sajt med "dåliga" CSS-selektorer eller missbruk av precompilers som Sass eller Less. Som tur är har webbläsarna sedan länge löst problemet, se [CSS Selector Performance has changed! (For the better)][11].
 * [Dags att omvärdera semantisk HTML?][9] (8 januari 2012)  
   Sedan fyra år tillbaka fäster jag föga vikt på `class`-attributet. Här är en halvvägsrapport, med litet länkar.
 * [KSS - ett välmenat försök att dokumentera CSS][8] (8 februari 2012)  
   Jag trodde på stilguider innan det blev coolt! :)
 
## JavaScript

 * [Använd inte jQuery eller andra bibliotek för utveckling mot iPad, iPhone och Android][25] (17 september 2010)  
   Fortfarande aktuell!

## Internet Explorer och Microsoft

 * [Om Internet Explorer var en bil][13] (15 april 2007)  
   Översättning av ett engelskt blogginlägg. Underhållande! Detsamma kan sägas om Safari på Mac.
 * [Hur kommer Internet Explorer 8 att lanseras?][18]  (21 december 2007)  
   Önskemål om IE8, som jag med flera verkligen ville skulle döda IE6 och IE7 så snabbt som möjligt. Verkligheten visade dock att såväl IE6 som IE7 fick vara kvar på övertid.
 * [IE8: webbläsarsniffning 2.0][27] (23 januari 2008)  
 Minns ni `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`? Roliga tider. Särskilt för mig!
 * [IE8 fattas stöd för JavaScript-events: gör din röst hörd!][26] (6 november 2008)  
 Från tien när `addEventListener` inte fanns i alla populära webbläsare.
 * [Snälla Microsoft, släpp IE9 till XP!][12] (18 september 2011)  
 Min initiella reaktion på att Microsoft inte släppte IE9 till Windows XP, som då var den överlägeset populäraste versionen av Windows ute i fält.


## Webbstandarder från förr

 * [Riktig XHTML][15] (11 juli 2007)  
   Jag körde faktiskt mina egna sajter med `application/xhtml+xml` vilket triggade [YSOD][16] om HTML-koden inte validerade. Var inte så populärt på jobbet, dock.
 * [madr.se byter ner sig till html 4.01][17] (5 december 2007)  
   Ingen mer XHTML då det helt saknades anledningar att välja det över vanlig HTML. Webbläsarna i fältet då var inte så samarbetsvilliga, så det gjorde inte så mycket. 
 * [Vad gör du för att slippa Internet Explorer 6?][19] (20 februari 2009)  
   Jag snubblade över den numera utdaterade [IE6nomore-topbaren][20] och spred ordet.

 [3]: http://en.wikipedia.org/wiki/Posterous
 [2]: http://www.madr.se/b/hur-webbplatsen-byggdes
 [1]: http://madrse.s3.amazonaws.com/old/index.html
 [4]: http://madrse.s3.amazonaws.com/old/posts/2010/05/blog/150.html
 [5]: http://madrse.s3.amazonaws.com/old/posts/2010/01/blog/143.html
 [6]: http://madrse.s3.amazonaws.com/old/posts/2010/04/blog/149.html
 [7]: http://madrse.s3.amazonaws.com/old/posts/2011/03/hur-jag-borjade-med-webben.html
 [8]: http://madrse.s3.amazonaws.com/old/posts/2012/02/kss-ett-valmenat-forsok-att-dokumentera-css.html
 [9]: http://madrse.s3.amazonaws.com/old/posts/2012/01/dags-att-omvardera-semantisk-html.html
[10]: http://madrse.s3.amazonaws.com/old/posts/2011/09/ytterst-relevant-prestandatestning-av-css.html
[11]: http://calendar.perfplanet.com/2011/css-selector-performance-has-changed-for-the-better/
[12]: http://madrse.s3.amazonaws.com/old/posts/2010/09/blog/1000039.html
[13]: http://madrse.s3.amazonaws.com/old/posts/2007/04/blog/20.html
[14]: http://madrse.s3.amazonaws.com/old/posts/2007/06/blog/34.html
[15]: http://madrse.s3.amazonaws.com/old/posts/2007/07/blog/35.html
[16]: http://codecino.com/2008/10/dont-fear-the-yellow-screen-of-death/
[17]: http://madrse.s3.amazonaws.com/old/posts/2007/12/blog/57.html
[18]: http://madrse.s3.amazonaws.com/old/posts/2007/12/blog/61.html
[19]: http://madrse.s3.amazonaws.com/old/posts/2009/02/blog/112.html
[20]: http://www.ie6nomore.com/
[21]: http://madrse.s3.amazonaws.com/old/posts/2009/08/blog/123.html
[22]: http://madrse.s3.amazonaws.com/old/posts/2010/06/blog/1000007.html
[23]: http://ecsstender.org/
[24]: http://webdesign.about.com/od/css/a/css-vendor-prefixes.htm
[25]: http://madrse.s3.amazonaws.com/old/posts/2010/09/blog/1000037.html
[26]: http://madrse.s3.amazonaws.com/old/posts/2008/11/blog/98.html
[27]: http://madrse.s3.amazonaws.com/old/posts/2008/01/blog/67.html