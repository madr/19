---
title: Tuffa saker i senaste iterationen av madr.se
date: 2019-10-26
layout: single.hbs
---

Här går det att infoga valfri fyndighet om skomakarens barn. Istället tänker jag dock
ägna ett inlägg åt att kommentera på häftiga saker jag gjorde sist jag ändrade mallarna
för den här hemsidan. Det är främst CSS-relaterat.

Källkoden finns tillgänglig utan minifiering om man vill se helheten genom att läsa i
[min CSS-fil](../../madrse.css).

## Startläget

madr.se är min egen hemsida. Jag vill med den här hemsidans utformning ge en bild av mina
värderingar som webbutvecklare och skribent på Internet. Jag har därför några färgstarka
ställningstaganden med den här webbplatsen.

- Fortsatt inget CMS: [Less is more][2]. Istället skriver jag innehåll i markdown-filer.
  Dessa körs i en [Metalsmith][1]-pipeline som omvandlar dem till HTML-dokument.
- Ingen JavaScript. Detta är en enkel blogg: text, länkar och enstaka media-objekt.
  Behov av JavaScript finns inte, och därför undviker jag det helt för att slippa krångla
  med Cookie-direktiv.
- Ingen CSS-förprocessning (exempelvis Sass, SCSS, Less eller Stylus). Jag
  kvalitetssäkrar kod enligt [min Stylelint-konfiguration][3], och använder rikligt med
  kommentarer för att få struktur i hemsidans enda CSS-fil.
- CSS ska vara enkel att läsa för människor. Jag vill uppmuntra andra att läsa min
  CSS-kod för att ge inspiration och förståelse.
- HTML ska vara enkel att tolka för maskiner. Kod ska validera samt vara semantisk så rik som möjligt för bots, sökmotorer, webbläsare och assistans-teknologier.

## Microdata på evenemang

Jag har introducerat _Mikrodata_ igen, i det som jag känner har mest värde av det: mina
kommande evenemang.

## Adaptiv layout

Baserat på vilket operativsystem besökaren har, så kommer operativsystemets system-teckensnitt att användas. Detta för att texten ska vara så adaptiv som möjligt.

```css
html {
  font: normal medium/1.4 apple-system, system-ui, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
}
```

I samband med att _Dark Mode_ börjar bli en grej som allt fler använder i Windows, MacOS och linuxdistar, så anpassar sig färgerna beroende på vald preferens. Detta görs med _media queries_.

```css
@media (prefers-color-scheme: light) {
  /* css för att ändra färger. */
}
```

## CSS Grid areas

CSS grids är något som funnits ett tag och som har acceptabelt webbläsarstöd. En del jag verkligen gillar i sammanhanget är _grid areas_.

```css
body {
  display: grid;
  grid-template-areas:
    "header main"
    "aside main"
    "footer footer";
}

footer {
  grid-area: footer; /* istället för grid-row: 3 / 5; grid-column: 1 / 4 */
}

main {
  grid-area: main; /* istället för grid-row: 1 / 3; grid-column: 2 / 4 */
}
```

Det är riktigt trevligt att arbeta med, då `grid-area` känns mer intuitivt än att använda
`grid-row` och `grid-column`.

Denna lista kommer troligtvis att fyllas på.

[1]: https://metalsmith.io/
[2]: ../../2016/less-is-more/
[3]: https://github.com/madr/19/.stylelintrc.json
