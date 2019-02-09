---
title: Enklare hantering av webbadresser med URI.js
date: 2012-01-02
layout: single.hbs
collection: articles
archived: true
---
> I still can\'t believe javascript - the f\*\*ing backbone-language of
> the web - doesn\'t offer an API for mutating URLs. Browsers (Firefox)
> don\'t expose the `Location` object (the structure behind
> window.location). Yes, one could think of [decomposed IDL
> attributes](http://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#url-decomposition-idl-attributes)
> as a native URL management library. But it relies on the DOM element
> \<a\>, it\'s slow and doesn\'t offer any convenienve at all.
>
> How about a nice, clean and simple API for mutating URIs:
>
> ::: {.highlight}
> ::: {.CodeRay}
> ::: {.code}
> ::: {.CodeRay}
> ::: {.code}
>     var url = new URL("http://example.org/foo?bar=baz");
>     url.addQuery("foo", "bar");
> :::
> :::
> :::
> :::
> :::
>
> URI.js is here to help with that.

via [github.com](https://github.com/medialize/URI.js)

Klockrent bibliotek som kan bli nog så användbart i en webapp som
arbetar mycket mot URIs.