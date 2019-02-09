---
title: Värt att uppmärksamma, vecka 16
date: 2011-04-24
layout: single.hbs
collection: articles
archived: true
---
-   [CSS Stress Testing and Performance Profiling \| Andy
    Edinborough](http://andy.edinborough.org/CSS-Stress-Testing-and-Performance-Profiling)\
    En bookmarklet för att debugga en sajt vars CSS gör att den skrollar
    segt. Mer sånt här tack!
-   [John Resig -- Pulley: Easy Github Pull Request
    Landing](http://ejohn.org/blog/pulley/)\
    Overkill atm, men det här verktyget är troligen värd sin vikt i guld
    den dagen jag blir insyltad i en tämligen aktivt uppdaterad kodbas.
-   [The Difference Between :nth-child and :nth-of-type \|
    CSS-Tricks](http://css-tricks.com/the-difference-between-nth-child-and-nth-of-type/)\
    Troligen kommer jag inte att använda :nth-of-child något mer nu.
    Rent teoretiskt borde :nth-of-type även ge prestandavinster då den
    är mer primitiv i sitt urval. Detta hoppas jag läsa något test om
    vid tillfälle.
-   [Make links focusable (or use real buttons) \| 456 Berea
    Street](http://www.456bereastreet.com/archive/201104/make_links_focusable_or_use_real_buttons/)\
    Den här typen av beslut stöter jag på flera gånger i veckan under
    javascript-intensiva perioder. Jag är dock litet feg och kör med
    länkar, och alltid med href-attribut. Jag är nämligen osäker på om
    buttons får tabfocus med standardinställningar i Mac OS X, det får
    jag utreda vid tillfälle. Att buttons är löjligt överjävliga att
    skriva CSS som "bara funkar" överallt för vet jag redan.
-   [A new micro clearfix hack -- Nicolas
    Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/)\
    Att använda :after för att fixa clearing är sedan länge känt, men
    dristar mig till att säga att jag är inte ensam om att inte tänkt på
    att Content:'' sparar några rader. Poängen med margins är också
    viktig att uppmärksamma för IE.
-   [39 Ridiculous Things To Do With CSS3 Box Shadows \| Viget
    Inspire](http://www.viget.com/inspire/39-ridiculous-things-to-do-with-css3-box-shadows/)\
    Imponerande samling av css3-godis med box-shadow. Funkar dock bara i
    Chrome och eventuellt Safari. Firefox, Opera och mobila varianter av
    Webkit lär få stöd för det inom ett par år iaf, och med litet tur
    kan vi säga samma sak om IE -- iaf för de som varken kör Vista eller
    XP (jadu Microsoft, tack så mycket). Det är mao ytterst
    experimentiellt.
-   [Designing Scannable
    Headlines](http://webstandardssherpa.com/reviews/designing-scannable-headlines/)\
    obligatorisk läsning om rubriksättning, såväl i design generellt men
    kanske webben i synnerlighet.
-   [CSS3 vs. CSS: A Speed
    Benchmark](http://www.smashingmagazine.com/2011/04/21/css3-vs-css-a-speed-benchmark/)\
    vad som inte nämns är att repaints och reflows är rätt kostsamt med
    css3-selektorer. tjänad tid i vikt kan alltså gå förlorad. Och när
    vendorprefixen försvinner kommer css3bli tufft på riktigt.
-   [What's New in jQuery UI
    1.8](http://blogs.sitepoint.com/whats-new-in-jquery-ui-1-8/)\
    71% mindre, hatten av för det! Den nya Button-widgeten kommer lösa
    många problem för mig i framtiden.
-   [Getting CORS
    Working](http://feedproxy.google.com/~r/remysharp/~3/b5_CQ7MoWNU/)\
    intressant läsning om crossite ajax utan proxies. Tydligen ska det
    räcka med en HTTP responsheader. Känns rätt bizarrt att man traglat
    på med proxies.
-   [How I achieved cross site
    scripting](http://remysharp.com/2007/01/18/how-i-achieved-cross-site-scripting/)\
    Genialt! I typiska fall av write-onlys, t ex ett loggningsverktyg,
    är det här nästan fånigt rätt. Enkelheten har återigen vunnit.
-   [Using the mailto
    link](http://www.outfront.net/tutorials_02/adv_tech/mailto.htm)\
    Gamla knep som aldrig rostar. Underskatta aldrig inbyggd
    funktionalitet i webbläsarna. Ett kontaktformulär är såklart det
    optimala, men i lägen där tid och pengar spelar roll är det här en
    kompromiss att överväga.