---
template: post.html
tags: linux
date: 2016-02-02
title: Arch linux med Cinnamon, Arc theme och Futura
layout: single.hbs
collection: articles
---
När jag hittade [temat Arc][4] visste jag genast att det var dags att ersätta standardtemat i [Cinnamon][5], den DE jag i dagsläget föredrar. Jag har nu ett utseende jag skarpt gillar.

![förminskad skärmdump](/i/2016-02-02_thumb.png)

[Hela skrivbordet, 4K](/i/2016-02-02.png) (3840 * 2160)

## Installera Arc

Detta steg skiljer mellan distributioner. För [Arch](https://archlinux.org) så är det ett paket från AUR och ett från community.

```bash
sudo pacman -S gtk-engine-murrine
aurget -S gtk-theme-arc
```

Jag föredrar **Arc Darker**, då den har en härlig kontrast.


## Installera Elementarys ikontema

Jag är inte så förtjust i de avföringsfärgade ikonerna GNOME och Cinnamon har som standard, så jag är alltid snabb att byta dessa. Min favorit sedan ett par år är ikontemat från [ElementaryOS][2].

```bash
pacman -S elementary-icon-theme
```


## Installera teckensnitt

Arcs skärmdumpar kör **Futura Bk bt**. Jag labbade dock med litet andra fonts, och landade till slut på **Futura LT Book**. En annan font som fungerar helt ok är **TeX Gyre Adventor**. 

För att labba med samtliga, installera teckensnitten från AUR:

```bash
aurget -S ephifonts-no-helvetica
aurget -S otf-texgyre
```

Font-cachen laddas om automatiskt.


## Ställ in temat

Jag vet, jag borde här skriva CLI-sättet för att sätta teckensnitt. Det är dock bra mycket mer effektivt att göra detta WYSIWYG.

Detta görs via *Systeminställningar / Teckensnitt* och *Systeminställningar / Teman* i såväl Cinnamon som GNOME. För en skärm med 4K, som i mitt fall, kan det ibland vara bättre att öka på skalningen snarare än att justera varje enskild teckenstorlek.

![Skärmdump: Teckensnittsinställningar (Futura LT Book 9px, Meslo 9px)](/i/2016-02-02_fontsettings.png)

![Skärmdump: Temainställningar (Arc Darker, Elementary ikoner och muspekare)](/i/2016-02-02_themesettings.png)


## Modda temat

Nedanstående är specifikt för Cinnamon, då dessa paneler inte berörs av Teckensnittsinställningar. `sed` kan användas för att ändra alla fonter, i exemplet nedan till **Futura LT**.

```bash
sudo sed -i -e 's/Futura Bk bt/Futura LT/' /usr/share/themes/Arc-Dark/cinnamon/cinnamon.css
```

Personligen föredrar jag att inte ha panelens programtitlar i fetstil. Nedanstående CSS-justeringar i temat löser det.

```css
/* nano /usr/share/themes/Arc-Dark/cinnamon/cinnamon.css, raderna  */
.window-list-item-label {
  font-weight: normal;
  /* ... */ }                             

.window-list-item-box {
  font-weight: normal;
  /* ... */
```

Om **alla** fetstilta texter ska tas bort kan nedanstående köras.

```bash
sudo sed -i -e 's/font-weight: bold/font-weight: normal/' /usr/share/themes/Arc-Dark/cinnamon/cinnamon.css
```

Det kan vara nödvändigt att starta om Cinnamon när allt är klart, detta görs med `^ + alt + esc`.


## Annat bra

Det rekommenderade [Firefox-temat][1] höjer litet ytterligare. Den varnar för att GNU/Linux inte stöds, men kan som tur är installeras ändå.

Snygga och högupplösta bakgrundsbilder är såklart ett måste. Jag hämtar mina från [Unsplash][3].

För diverse Arch-ikoner, t ex vid "startknappen", finns ett paket i AUR.

```bash
aurget -S archlinux-artwork
nemo /usr/share/archlinux/icons
```

Med detta skrivet så rundar jag av med att starkt rekommendera Arc theme. Det är snyggt och rent, vilket talar för att jag behåller det riktigt länge.

Det stödjer alla större DE:er och finns i ett helt mörkt tema, eller ett ljust. 


[1]: https://addons.mozilla.org/en-US/firefox/collections/horst3180/a/
[2]: https://elementary.io
[3]: https://unsplash.com
[4]: https://github.com/horst3180/Arc-theme
[5]: https://en.wikipedia.org/wiki/Cinnamon_%28software%29