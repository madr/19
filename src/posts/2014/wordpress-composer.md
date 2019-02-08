---
title: Hantera Wordpress med Composer →
date: 2014-06-09
template: post.html
layout: single.hbs
collection: articles
---
Jag har en mycket komplicerad relation till PHP. 

1. Åh ena sidan är det ett språk jag behärskar och kan göra "allt" med.
2. Åh andra sidan är PHP fult och dess community ännu fulare.

DIY-människor lärde sig att älska PHP tidigt 00-tal och har som regel ingen känsla för något annat än superpragmatism - kod skrivs en gång i sann silvertejps-manér och är "klar" när den väl fungerar. Läsbarhet, testbarhet och logisk separering är långt ifrån självklart som hygienfaktorer i PHP-kulturen.

Särskilt [Wordpress][1] representerar den här typen av utvecklarkultur - allt som är dåligt med PHP används, frodas och verkar i Wordpress.

Det finns dock en rörelse i PHP-communityt som jag känner hopp inför - nämligen [Laravel][3] som pushar stenhårt för [Composer][2]:

> Composer is a tool for dependency management in PHP. It allows you to declare the dependent libraries your project needs and it will install them in your project for you.

Laravel är som Rails och Django, men skrivet i PHP. Där anses tester, automatisering och hållbar utveckling mycket viktigt. För att främja DRY framför DIY kommer Composer in. 

Composer Inte helt olikt `gem`, `maven` och `pip`. 

Jag ska nu försöka använda Composer till alla nya PHP-projekt, inklusive de med Wordpress. En bra startpunkt är artikeln [Using Composer with WordPress][4]:

> By the end of this post we'll be able to use Composer to manage the WordPress core, plugins, and even themes. If you already know what Composer is and how to use it, you can skip straight to the The Working composer.json section below.

PHP känns bra igen. Underbart!

[1]: http://wordpress.org/
[2]: http://getcomposer.org/
[3]: http://laravel.com/
[4]: http://roots.io/using-composer-with-wordpress/