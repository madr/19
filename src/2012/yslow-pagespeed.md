---
title: Fullständigt onödigt men skojigt - förbättrad prestanda
date: 2012-08-06
template: post.html
layout: single.hbs
collection: articles
---
Django är ett ramverk som jag verkligen vill satsa på. En utmaning värdig den bäste är att skapa förutsättningar för riktigt, riktigt bra prestanda för en sajt.

Nu talar jag inte om svarstider och annat, utan snarare om [Steve Souders golden rule](http://www.stevesouders.com/blog/2012/02/10/the-performance-golden-rule/):

> 80-90% of the end-user response time is spent on the frontend. Start there.

När [nya madr.se gick live](/b/hur-webbplatsen-byggdes) hade jag redan plockat följande lågt hängande frukter:

 * CSS och JavaScript ligger på en bucket på Amazon S3, dels för att vara cookie-free men också för att spara CPU till Django och Python.
 * Minifiering av CSS och JavaScript. Här använder jag sedan många år tillbaka [YUI compressor](http://developer.yahoo.com/yui/compressor/) då den är tillräckligt bra samt mycket portabel.
 * Far-future Expires, satt till 666 dygn, för CSS och JavaScript. Detta sätts vid uppladdningen till Amazon S3 (se kod längre ner).

Nu har jag alltså gjort litet mer tweaks.

##Ikoner är inte längre bilder

Ikoner har historiskt sett hanterats via CSS Sprites när man talar om optimering av webbprestanda, men på sistone har en trend där man istället bakar in ikoner som en font uppstått. Mer om detta finns t ex på [Icon Fonts are Awesome](http://css-tricks.com/examples/IconFont/).

Jag såg chansen att testa [Icomoon](http://keyamoon.com/icomoon/app/) där jag skapade en anpassad font, en delmängd bestående av 5-6 ikoner anpassad för 16px storlek. Verktyget är  **helt fantastiskt** och bör ses av alla!

## CSS, JavaScript och fonter är zippade

För att förlora ytterligare litet vikt detta anpassade jag det python-script jag använder för att rekursivt ladda upp en katalog till Amazon S3. Scriptet zippar nu alla filer som syns på utsidan (därmed är Django-admins filer undantagna). Ser ut såhär:

    future = 60*60*24*666
    future_date = datetime.now() + timedelta(seconds=future)
    future_date = future_date.strftime("%a, %d %b %Y %H:%M:%S GMT")
    
    def upload_file(src):
        print "- uploading %s" % src
        f = open(src)
        n = src.replace("./", "")
        h = { "Cache-Control": "max-age=%d" % future, 
                 "Expires": future_date }
        
        if "zipped" in n or n == "js/iosorientationchange.min.js":
            h["Content-Encoding"] = "gzip"

        if n.find("admin") != -1:
            s3.put(n, f.read()) 
        else:
            s3.put(n, f.read(), headers=h)

## HTML-sidor är minifierade och zippade

Även HTML-dokumenten är zippade och slimmande från onödiga white-spaces (enbart i produktion, tack och lov). Detta är tämligen trivialt att åstadkomma tack vare [django-htmlmin](http://pypi.python.org/pypi/django-htmlmin). Bara att installera:

    pip install django-htmlmin

och därefter lägga till två rader i `settings.py`.

    MIDDLEWARE_CLASSES = (
        'django.middleware.gzip.GZipMiddleware',
        'htmlmin.middleware.HtmlMinifyMiddleware',
        # ...
    )

## Resultatet: riktigt bra

Detta gav mig poängen *95 av 100* enligt [YSlow](http://developer.yahoo.com/yslow/) och **92 av 100** enligt [Google Page Speed](https://developers.google.com/speed/pagespeed/insights). Det är ungefär så bra som man kan få genom att plocka lågt hängande frukter i optimering av webbprestanda.

Jag drar även slutsatsen att Django i kombination med Amazon S3 ger **ypperliga** förutsättningar för bra webbprestanda.