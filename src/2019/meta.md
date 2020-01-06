---
title: Tuffa saker i senaste iterationen av madr.se
date: 2019-10-26
layout: single.hbs
collection: articles
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

Mikrodata är ett sätt för att få sökmotorer och andra parsers att visa mer berikade och relevanta sökresultat.

Genom att kika på [Googles testverktyg för strukturerad data][5] går det att se vad mina sidor
innehåller för evenemang. Det är också ett bra verktyg för att validera saker, ska sägas.

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

Om besökaren också ställt in att [stänga av animeringar på sin enhet][7], inaktiveras alla transitions och animations globalt.

```css
@media (prefers-reduced-motion) {
  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }
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

## Variabler i CSS

Variabler är en av de starkaste argumenten för att introducera precompilers för CSS, då
det gör underhåll av CSS-kod över tid så ofantligt mycket enklare. I mitt fall använder jag
dem för **att spara och därmed snabbt ändra färger** (beroende på _Dark Mode_).

```css
:root {
  --text-color: #ddd;
  --background-color: #222;
}

@media (prefers-color-scheme: light) {
  :root {
    --text-color: #444;
    --background-color: #fff;
  }
}
```

[CSS Variabler][4] har funnits ett tag i specen, men få använder dem då de är begränsade i jämförelse
med deras motsvarigheter i precompilers.

- [CSS variabler stöds ej i media queries breakpoints](https://stackoverflow.com/questions/40722882/css-native-variables-not-working-in-media-queries#40723269), vilket är något av en showstopper.
- Deras syntax är ful och icke-intuitiv, i jämförelse med sina motsvarigheter i precompilers.

En av deras främsta styrkor är dock att de kan nås från JavaScript, vilket har gjort projekt där animationer och transitions tas på stort allvar har börjat pusha för CSS-variabler.

_Denna lista kommer troligtvis att fyllas på._

[1]: https://metalsmith.io/
[2]: ../../2016/less-is-more/
[3]: https://github.com/madr/19/.stylelintrc.json
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
[5]: https://search.google.com/structured-data/testing-tool#url=https%3A%2F%2Fmadr.se%2F1%2F
[7]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#User_Preferences
