---
title: Cargo cult css →
date: 2014-01-09
template: post.html
layout: single.hbs
collection: articles
---
Ett offensivt inlägg om hur CSS bör skrivas, [Cargo Cult CSS](http://www.kapowaz.net/articles/cargo-cult-css) som visar litet av motsträvigheten för exempelvis SMACSS eller OOCSS:

> One example of this is Microformats. The only reason these came into being is because document authors had used semantic class names to describe common structures such as addresses or calendar appointments. By codifying certain conventions used to describe data in this way, the markup became useful not only to website visitors, but also to software capable of understanding and using it in new and unimagined ways. Microformats demonstrate the usefulness of semantic class names, so it’s disappointing to see them being dismissed.

Jag håller inte med.

Microformat kom till i en ålder då XHTML Strict ansågs vara det bästa och rätta, och där bl a IE konsekvent vägrade att visa ut uppmärkning den inte kände till. Det var `ul`, `div` och `p` som gällde för att skapa semantiskt värde. För att kunna separera och särskilja saker användes class-attribut med militärisk precision.

Anledningen till att Microformat kom till var för att **inget** annat sätt eller någon standard att **skapa mening till innehåll* fanns. Det kom senare i form av [Microdata](http://en.wikipedia.org/wiki/Microdata_%28HTML%29) som exempelvis Google och Bing uppmuntrar utvecklare att använda istället sedan flera år.

Det var rent ut sagt ett **elände** att skriva CSS på den här tiden.

Det är bättre idag. Jag skrev om detta tidigare i [Hur jag slutade kämpa emot och började skriva bättre CSS](http://www.madr.se/b/css).