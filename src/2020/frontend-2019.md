---
title: En sammanfattning av Frontend-utveckling för 2019
original: A Recap of Frontend Development in 2019
source: https://levelup.gitconnected.com/a-recap-of-frontend-development-in-2019-1e7d07966d6c
date: 2020-01-07
collection: links
layout: single.hbs
---

> After a rather quiet year, WebAssembly received some huge news early December — it is officially recommended as a language of the web by the W3C Consortium.

> In the StackOverflow Survey released early in 2019, TypeScript was tied for 2nd with Python as the most loved language, falling only behind Rust.

> Two of the biggest changes for HTML are native lazy loading and no-jank fluid image loading. Large images have been a pain for web performance, and we have hacked around it to better handle how we load them. With native support for lazy loading and aspect ratio recognition, we can get seamless images without needing to implement any additional functionality in JS.

En länk med en välskriven sammanfattning av 2019 års trender i Webbutveckling. Jag tar med mig tre saker från denna.

- Jag hejar på Wasm, då jag sedan länge trott att webben skulle må bra av att inte bli fastlåst till enbart JavaScript. Exempelvis [Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-3.1) kompilerar C# till Wasm.
- TypeScript är här för att stanna, vad det verkar. Jag välkomnar det, då jag föredrar det framför alternativen Flow, PropTypes och Reason. Det _är_ trevligt att minimiera risken för runtime exceptions när så mycket görs med JavaScript som idag.
- Lazy loading på bilder är så bra. Det är verkligen aldrig försent för att innovera HTML och CSS. Dessa attribut är **måsten** från och med nu, skulle jag säga.
