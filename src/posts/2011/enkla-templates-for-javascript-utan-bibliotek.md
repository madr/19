---
title: Enkla templates för JavaScript utan bibliotek
date: 2011-11-08
layout: single.hbs
collection: articles
archived: true
---
> These days, there are some really excellent templating systems that
> work both in the browser and on the server, such as
> [Mustache](http://mustache.github.com/) and
> [Handlebars](http://www.handlebarsjs.com/). Such templating systems
> allow all markup to live in the same template files while enabling
> rendering either on the client or on the server or both. There is a
> little bit of overhead to this in setup and preparation time, but
> ultimately the end result is a more maintainable system.
>
> However, sometimes it's just not possible or worthwhile to change to a
> completely new templating system. In these situations, I like to embed
> the template into the actual HTML itself. How do I do that without
> adding junk markup to the page that may or may not be used? I use a
> familiar but under-appreciated part of HTML: comments.

Från [Simple, maintainable templating with
JavaScript](http://www.nczonline.net/blog/2011/10/11/simple-maintainable-templating-with-javascript/).
Jag läste den här artikeln när den publicerades förra månaden men ville
inte uttala mig förrän jag använt den i produktion. Jag kan summera min
erfarenhet genom att bekräfta att detta verkligen *fungerar*. Jag har
använt flertalet mallsystem, alla baserade på jQuery, och deras kodmängd
är gigantisk i jämförelse med den här utan att för den sakens skull göra
mer nytta.

Det här är ännu ett exempel på att vi går mot nya tider där stora
JavaScript-bibliotek inte kommer att vara nödvändigt för att få saker
gjorda som webbutvecklare.\