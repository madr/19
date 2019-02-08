---
title: En lista över magiska enradare i Python
date: 2013-03-01
template: post.html
layout: single.hbs
collection: articles
---
Att jag är nyförälskad i Python är ingen hemlighet. Jag sprider därför sådana här länkar utan att blinka.
[Vurt.ru](http://www.vurt.ru/2013/02/python-command-line-oneliners/):

> There is list of pretty useful python small command line oneliners available out of the box. That means if you already have installed python on your system (most Linux, *BSD, including OSX) then you can use it even if you are not python developer.

Jag gillar särskilt JSON-snyggaren.

    echo '{"foo": "lorem", "bar": "ipsum"}' | python -mjson.tool

Även fake-servern för mail.

    $ python -m smtpd -n -c DebuggingServer localhost:25

För att inte tala om den snabba HTTP-servern på lokal katalog.

    python -m SimpleHTTPServer