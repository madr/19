---
title: Vala - ett språk värt att lära sig?
date: 2014-11-11
template: post.html
layout: single.hbs
collection: articles
---
Den här texten skriver jag i appen [Mou][1]. Den har många egenskaper  som alla långvariga Macanvändare tar för givet:

 * Gränssnittet är kliniskt rent och fokuserar produktivitet.
 * Kan göra ett fåtal saker med bravur istället för en massa saker mediokert.
 * Kostar en symbolisk slant.
 * Integrerar snyggt med operativsystemet (OS X).

Mou är såpass rätt för sin uppgift - att skriva och redigera text med Markdown. Så rätt att jag blir ledsen i ögat av de program som påstår sig erbjuda samma sak till min dator hemma som kör [Arch Linux][2] med [GNOME 3][3]. 

Dessa brukar istället uppvisa följande egenskaper:

 * Gränssnittet ser rörigt ut.
 * Rörigt och plottrigt då flera behov försöker lösas istället för ett.
 * Gratis eller ej värda pengarna.
 * Knappar och layout på programmet samexisterar dåligt med operativsystemet (eller snarare, [DE][5]:n).
 * Ej skrivet särskilt för aktuell DE utan med något mer generellt verktyg.
   * Ofta tillgänglig på Windows och ibland OS X (inte nödvändigtvis dåligt).
   * **Ser skit ut oavsett OS/DE.**

[Remarkable][4], första sökträffen på Google, är ett typexempel.

## Mou särskilt för GNOME

Jag använder GNOME 3 och kommer inte att byta än på ett tag. Jag skriver uteslutande i Markdown.

Jag är betalande användare av [Sublime Text][6] och [IntelliJ IDEA][7]. Dessa finns för GNOME och fungerar helt perfekt: gränssnitten i dessa program smälter in bra i GNOME. Det är sålunda görbart att få till ett program såpass bra att det är värt att betala för.

Jag föreställer mig att ett program som plockar russinen ur den kakan på Mou är rätt simpel att skapa. 

## Varför Vala?

Den största frågan är egentligen vilket programmeringsspråk som gäller. [PyGObject][8] låter mig koda Python, min favorit av alla programmeringsspråk när det kommer till webbutveckling. [Pantheon i ElementaryOS][9] är däremot skrivet nästan helt i **Vala**.

[Vala][11] är ett programmeringsspråk som ska likna C# en del, skapat av GNOME själva:

> Vala is a new programming language that aims to bring modern programming language features to GNOME developers without imposing any additional runtime requirements and without using a different ABI compared to applications and libraries written in C. 

Syftet är tydligen att bli det "nya" sättet att utveckla program för GNOME:

> Many developers want to write GNOME applications and libraries in high-level programming languages but can't or don't want to use C# or Java for various reasons, so they are stuck with C without syntax support for the GObject type system. The Vala compiler allows developers to write complex object-oriented code rapidly while maintaining a standard C API and ABI and keeping the memory requirements low. 

Låter bra ur mitt perspektiv. Men hur är det i praktiken?

[David Gomes från teamet bakom ElementaryOS][10] bekräftar att det fungerar väl:

> Since Vala compiles to C (and then into binary), we gain access to a large number of bindings for libraries written in C. This is extremely important given the number of C libraries available for the Linux desktop. All of our desktop applications are written using the GTK+ toolkit, and many rely heavily on related GObject-based libraries, including Gee, WebKitGTK, VTE, and GStreamer. Bindings for dozens of popular GObject C libraries exist, and writing new ones is easy.

Vidare omnämns valet att göra i Vala istället för Python, som jag annars hade eftersträvat att använda:

> Before we adopted Vala, we wrote our desktop applications in Python. As both a language and a platform, Python made developing apps quick and easy. However, this ease of development came at a serious cost — performance, binding support, and maintainability became major pain points for us with Python. Worse, the slow and fragmented adoption of Python 3 over Python 2, particularly across Linux distributions, made packaging our apps and developer tools for different environments tedious and challenging. Vala's native binaries have proven to be a better fit for us.

Min slutsats: **Ja, Vala är värt att lära sig**. Jag har ett nytt kvällsprojekt således - en [MVP][12] av Mou, skrivet i Vala, i första hand för GNOME. 

Om inte annat får jag lära mig en del om hur program utvecklas på Linux, vilket gör att jag kan börja läsa kod och bidra i projekt med öppen källkod.

[1]: http://25.io/mou/
[2]: http://archlinux.org
[3]: http://gnome.org
[4]: http://remarkableapp.net
[5]: http://en.wikipedia.org/wiki/Desktop_environment
[6]: http://www.sublimetext.com/
[7]: https://www.jetbrains.com/idea/
[8]: https://wiki.gnome.org/action/show/Projects/PyGObject?action=show&redirect=PyGObject
[9]: http://elementaryos.org/
[10]: http://elementaryos.org/journal/why-we-write-elementary-apps-in-vala
[11]: http://en.wikipedia.org/wiki/Vala_%28programming_language%29
[12]: http://en.wikipedia.org/wiki/Minimum_viable_product