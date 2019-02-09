---
title: "Lästips om webbutveckling: 2015, Vecka 2"
date: 2015-01-12
template: post.html
tags: linkbait
layout: single.hbs
collection: articles
---
## Verktyg

 * [Favicon Generator. For real.][1]  
 Verktyg som utifrån en högupplöst bild genererar alla varianter av favikoner inklusive dess HTML-kod. Bör spara minst en timme per sajtprojekt som kan användas till något roligare.
 * [Introducing HTML Inspector](http://philipwalton.com/articles/introducing-html-inspector/)  
 Kanske är detta det verktyg vi väntat på som hjälper oss författa HTML liknande CSSLint för CSS och JSLint för JavaScript? Det finns som npm-paket iaf, så jag kommer experimentera med **Gulp** för att automatisera.
 
## CSS Flexbox

 * [Normalizing Cross-browser Flexbox Bugs](http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/)
 * [Flexbugs - A community-curated list of flexbox issues and cross-browser workarounds for them.](https://github.com/philipwalton/flexbugs)

Ja, Flexbox är **helt jävla sjukt otäckt**. Jag håller krampartat fast vid floats då de aldrig sviker, samtidigt som jag inser att det snart är slut på argument för att inte börja använda mer moderna och ändamålsenliga ting. 

## JavaScript

 * [Theater.js - Typing effect mimicking human behavior.](http://gabinaureche.com/TheaterJS/)  
 Kan nog ha rätt effekt vid rätt tillfälle. Något för en landningssida kanske?
 * [Cross-tab Communication](http://ponyfoo.com/articles/cross-tab-communication)  
 I väntan på ServiceWorkers går det att komma långt med befintliga tekniker.
 

## Produktivitet

 * [Notifications are killing your productivity. Kill your notifications.][2]  
 Bifalles! I OS X är min DND-inställning på notiser automatiskt påslagen mellan 00:01 och 23:59. Notiser är förhatliga.
 * [My custom video setup][5]  
 Pedagogisk artikel om vad som krävs för att få till en screencast eller webinar.
 
## Design och inspiration

 * [3D Curtain Template](http://codyhouse.co/demo/3d-curtain-template/index.html#0)
 * [Inspiration for Text Input Effects](http://tympanus.net/codrops/2015/01/08/inspiration-text-input-effects/)
 * [Scroll slow, have fun](http://www.scrollslowhavefun.com)
 * [HAND-PICKED TALES from
ÆSOP’S FABLES
with HAND-PICKED TYPE from
GOOGLE FONTS](http://femmebot.github.io/google-type/)
 * [Freebie: Dashel Icon Set (45 Icons, SVG, PSD, PNG)](http://www.smashingmagazine.com/2015/01/05/freebie-dashel-icon-set-svg-psd-png/)
 * [Wild Spaces – Wilderness Font Face](http://wegraphics.net/downloads/wild-spaces-wilderness-font-face/?r=1820&i=b4)
 * [Quick tip: Conditional Form Fields with CSS](http://christianheilmann.com/2015/01/08/quick-tip-conditional-form-fields-with-css/)

## Internet Explorer och IE.next

 * [A new Microsoft browser?][4]  
 Jag gillar det här, då det visar en god vilja från Microsoft. Produktnamnet "Internet Explorer" har ett alldeles för illasmakande arv. Jag ogillar det också, det det kommer bli ytterligare en webbläsare på marknaden att räkna med - dessutom för en traditionellt sett oteknisk användarbas.
 * [IE test VMs on modern.IE get a refresh](http://blogs.msdn.com/b/ie/archive/2015/01/06/ie-test-vms-on-modern-ie-get-a-refresh.aspx)  
 Inte alla vet att Microsoft ger bort **virtuella maskiner med olika versioner av IE gratis**. Dessa är nu uppfräschade - hämta hem de nya omedelbums! Och kör du fortfarande med egna virtuella maskiner bara för att testa i IE? Släng dem!

## Backend-orienterat

 * [New Course: Build a Store With a Payment Gateway in Rails][3]  
 Välj inte bort den här för att den har "Rails" i sin titel! Att implementera en betallösning är rätt snarligt oavsett ramverk - jag lärde mig mycket.

## Wordpress

 * [Using Google Two-Factor Authentication With WordPress](http://code.tutsplus.com/tutorials/using-google-two-factor-authentication-with-wordpress--cms-22263)  
 Som förespråkare av Tvåfaktorsinloggning är det här grymt värt! Inte så aktuellt för mig i skrivandets stund men bokmärkt inför framtida projekt i Wordpress.
 
## Användbarhet och kundnytta

 * [The God Login](http://blog.codinghorror.com/the-god-login/)  
 Hur Discourse designade sin inloggning. Litet Once-and-for-all över den här, täcker upp så gott som all interaktivitet och alla case för en inloggning och/eller en registrering.
 * [Frequently asked questions (FAQs)](http://www.sarahjrichards.com/blog/frequently-asked-questions-faqs)  
 Hepp, ingen idé att börja författa FAQ-plank således. Move on.
 * [Why you should share your dirty work](https://signalvnoise.com/posts/3825-why-you-should-share-your-dirty-work)  
 I ämnet "polera inte sönder saker, releasa det istället". Allt behöver inte vara så välsignat tillrättalagt - det är inte så verkligheten ser ut. Jag tar åt mig!
 * [How we use web fonts responsibly, or, avoiding a @font-face-palm
](http://www.filamentgroup.com/lab/font-loading.html)  
Nyttig läsning om fonter och att ta ansvar som designer.

**Bonus:** [Duet Display][6], som låter en iPad (eller en iPhone) agera som en extra skärm. Typiskt användningsområde: Testa retinagrafik i appar eller på webbplatser. 

[![iPad som extra skärm med Duet Display](http://d15vc5rg9izj0t.cloudfront.net/VideoPreviewMedium.JPG)][6]

[1]: http://realfavicongenerator.net
[2]: http://david.elbe.me//focus/2015/01/05/notifications-are-killing-your-productivity.html
[3]: http://code.tutsplus.com/articles/new-course-build-a-store-with-a-payment-gateway-in-rails--cms-22959
[4]: http://www.quirksmode.org/blog/archives/2014/12/a_new_microsoft.html
[5]: http://snook.ca/archives/other/my-custom-video-setup
[6]: http://www.duetdisplay.com/