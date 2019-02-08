---
title: Evolution of a Python Programmer
date: 2012-03-09
layout: single.hbs
collection: articles
archived: true
---
> ::: {.line}
> [\#Web designer]{.c}
> :::
>
> ::: {.line}
> [def]{.k} [factorial]{.nf}[(]{.p}[x]{.n}[):]{.p}
> :::
>
> ::: {.line}
>     [\#\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--]{.c}
> :::
>
> ::: {.line}
>     [\#\-\-- Code snippet from The Math Vault \-\--]{.c}
> :::
>
> ::: {.line}
>     [\#\-\-- Calculate factorial (C) Arthur Smith 1999 \-\--]{.c}
> :::
>
> ::: {.line}
>     [\#\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--]{.c}
> :::
>
> ::: {.line}
>     [result]{.n} [=]{.o} [str]{.nb}[(]{.p}[1]{.mi}[)]{.p}
> :::
>
> ::: {.line}
>     [i]{.n} [=]{.o} [1]{.mi} [\#Thanks Adam]{.c}
> :::
>
> ::: {.line}
>     [while]{.k} [i]{.n} [\<=]{.o} [x]{.n}[:]{.p}
> :::
>
> ::: {.line}
>         [\#result = result \* i \#It\'s faster to use \*=]{.c}
> :::
>
> ::: {.line}
>         [\#result = str(result \* result + i)]{.c}
> :::
>
> ::: {.line}
>            [\#result = int(result \*= i) \#??????]{.c}
> :::
>
> ::: {.line}
>         [result]{.n}
> [str]{.nb}[(]{.p}[int]{.nb}[(]{.p}[result]{.n}[)]{.p} [\*]{.o}
> [i]{.n}[)]{.p}
> :::
>
> ::: {.line}
>         [\#result = int(str(result) \* i)]{.c}
> :::
>
> ::: {.line}
>         [i]{.n} [=]{.o} [i]{.n} [+]{.o} [1]{.mi}
> :::
>
> ::: {.line}
>     [return]{.k} [result]{.n}
> :::
>
> ::: {.line}
> [print]{.k} [factorial]{.n}[(]{.p}[6]{.mi}[)]{.p}
> :::

via [gist.github.com](https://gist.github.com/289467)

Mycket underhållande! Webbdesignerns variant är något som är rätt
vanligt, särskilt i JavaScript-världen.

Windows- och Enterprise-varianterna är direkt brutala i sin ärlighet.

För egen del är jag en lat försa-års-programmerare, om jag får gissa.