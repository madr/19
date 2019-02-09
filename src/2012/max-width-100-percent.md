---
title: Undvik onödiga reflows i följsam design (responsive web design)
date: 2012-10-15
template: post.html
layout: single.hbs
collection: articles
---
[Anders M. Andersen](http://andmag.se/2012/10/responsive-images-how-to-prevent-reflow/) dissar `max-width: 100%` i följsam design (responsive web design):

> Yes, that is correct. We are not using one of the most fundamental things in responsive web design. Instead we use the [responsive embeds](http://andmag.se/2011/11/responsive-embeds/) technique. This means that we set a wrapper div around the image and use the “padding-bottom” trick to make a div that keeps a certain aspect ratio:

>     <div class="embed-container ratio-16-9">
         <img src="imgage.jpg"/>
        </div>

En ögonöppnare för min del. Jag tänker från och med nu hålla mig till den här tekniken för bilder, då reflows är något jag aldrig upplevt som något trevligt eller ens acceptabelt.