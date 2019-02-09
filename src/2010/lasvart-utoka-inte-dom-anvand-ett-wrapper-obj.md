---
title: Läsvärt: Utöka inte DOM, använd ett wrapper object
date: 2010-12-20
layout: single.hbs
collection: articles
archived: true
---
Saxat från [What's wrong with extending the
DOM](http://perfectionkills.com/whats-wrong-with-extending-the-dom/).

> In some versions of Safari 3.x, there's a bug where navigating to a
> previous page via back button wipes off all host object extensions.
> Unfortunately, the bug is undetectable, so to work around the issue,
> Prototype has to do something horrible. It sniffs browser for that
> version of WebKit, and explicitly disables bfcache by attaching
> "unload" event listener to window. Disabled bfcache means that browser
> has to re-fetch page when navigating via back/forward buttons, instead
> of restoring page from the cached state.

<div>

Härligt, eller vad? Sajter som går tungt bör snarast byta ut Prototype
om de råkar köra det.

</div>