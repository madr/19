---
title: Vi suger på HTTP →
date: 2015-01-07
template: post.html
layout: single.hbs
collection: articles
---
[Deane Barker](http://gadgetopia.com/post/9236) i en rant om missbruket av HTTP:

> We have broken HTTP.  We’ve done it for years in fits and starts, but apps have completely broken it.  HTTP was a good specification which we’ve steadily whittled away.

Jag har senaste veckorna förkovrat mig i HTTP då jag utvecklat ett RESTful API. Jag märker själv hur dåligt vi använder all potential i HTTP på webben.

Deane Barker tar upp dåligt använda verb (OPTIONS, PUT) och statuskoder som används för dåligt.

Aningen ostrukturerad men likväl innehåller den här länken mycket bra. 

Ett påskägg i mitt API är att det går att gå svaret [HTTP 418](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol). Hint: krävs en del fel.