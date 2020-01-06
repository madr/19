---
title: Varför och hur jag ska fokusera på att lära mig Elixir 2019
date: 2019-03-16
layout: single.hbs
collection: articles
---

Jag har [tidigare skrivit om min nyfikenhet på Elixir](/2017/2017/). Det är snart 7 år sedan jag satsade på att lära mig ett nytt programmeringsspråk, vilket den gången blev Python. Jag har varit supernöjd med den investeringen, och har tack vare den fått arbeta med mycket spännande uppdrag och hamnat hos en Python-orienterad utvecklingsavdelning på [Kundo](https://kundo.se) i Stockholm.

Med över 20 år som webbutvecklare ska jag nu ta mig ann ett helt nytt programmeringsspråk, ett nytt webbramverk och en ny programmerings-paradigm. Det här inlägget är skrivet för att jag vill minnas själv, men också för att inspirera andra.

## Motivering till Elixir

Varför vill jag kika på [Elixir](https://elixir-lang.org/)? Vad är det som Elixir ger mig som Python inte har?

- Det är ett **funktionellt språk**, som är litet av en fluga just nu och därför något alla seriösa webbutvecklare med yrkesstolthet behöver ta ställning till.
- Dess **syntax** känns bekant, med min bakgrund med JavaScript, Python och Ruby.
- Dess prestanda och pålitlighet på grund av att Elixir exekveras i Erlangs VM.
- **Hex** och **Hex docs** har ett community som imponerar med sin höga kvalitet på paket och dokumentation.
- Och sist men inte minst: **Webbramverket Phoenix**.

Varför är [Phoenix](https://www.phoenixframework.org) så intressant för mig? Vad kan Phoenix som inte redan [Flask](http://flask.pocoo.org/) och [Django](https://www.djangoproject.com/) erbjuder mig?

- **realtids-interaktivitet med WebSockets**. Django och Flask är kungar när det kommer till att bygga saker över HTTP. Verkligheten är dock en annan idag, där samarbetsfunktioner och realtids-uppdatering inte längre är en lyx utan något som tas för givet.
- [Phoenix Live views](https://github.com/phoenixframework/phoenix_live_view), som exekverar kod på servern över websockets istället för att koda saker i JavaScript.
- Det är ett modernt webbramverk för sent 2010-tal, utan nostalgivibbar eller teknisk skuld, designat för dagens utmaningar.

## Steg 0 - läs böcker om Elixir och Phoenix ✔

Under 2017 och 2018 läste jag ett par böcker om Elixir, för att få litet introduktion till det nya i kontrollerad form.

- [Programming Elixir](https://pragprog.com/book/elixir16/programming-elixir-1-6) - Introduktion till Elixir och OTP. _(hösten 2017)_
- [Programming Phoenix](https://pragprog.com/book/phoenix14/programming-phoenix-1-4) - Introduktion till ramverket Phoenix. _(hösten 2017)_
- [Functional Web Development with Elixir, OTP, and Phoenix](https://pragprog.com/book/lhelph/functional-web-development-with-elixir-otp-and-phoenix) - Superpraktisk tillämpning där ett spel byggs i Elixir, OTP och Phoenix. (_våren 2018)_
- [Adopting Elixir](https://pragprog.com/book/tvmelixir/adopting-elixir). Om driftsättning, inlärning, kunskapspridning och mer kring Elixir som inte handlar om kod. _(hösten 2018)_

Efter dessa böcker känner jag att det är dags att sluta studera på avstånd och **börja koda på riktigt**, då det är det som verkligen krävs för att få litet fart.

## Steg 1 - Skriv simpla saker i Elixir ✔

Jag har börjat koda i Elixir och har några projekt från 2018 på Github: [En simulator för RISK-slag](https://github.com/madr/refactored-octo-succotash), och [Några lösningar i Advent of Code 2018](https://github.com/madr/super-octo-train). Gemensamt för dessa är att jag använt tester rikligt, och försökt skriva saker "som man ska".

## Nästa steg - koda enklare webbsaker i Phoenix!

Jag har ett gäng andra idéer på gång som jag inte kommer att nämna här, men jag har en liten todo som jag ska göra under 2019.

- **Skriv något enkelt i Phoenix**. Förmodligen blir det ett webbgränssnitt för RISK-simulatorn.
- **Skriv ett REST-API i Phoenix**. För `GET`, `POST`, `PATCH` och `DELETE`. För att kika på Phoenix HTTP endpoints, och att bekanta mig med [Ecto](https://hexdocs.pm/ecto/Ecto.html).
- **Gör något realtids-känsligt med Phoenix**. Exempelvis en Dashboard eller en chatt. För att bekanta mig med [Channels](https://hexdocs.pm/phoenix/channels.html#content) och [Presence](https://hexdocs.pm/phoenix/presence.html).
- **Skriv något enkelt i Phoenix Live views**. Exempelvis något som validerar data eller filtrerar en lista. För att bekanta mig med Live Views.
- **Deploya något i Phoenix till Heroku**. För att det ska vara enkelt som möjligt.
- **Deploya något i Phoenix till Docker**. För att samtidigt få litet kunskap om Docker.
- **Genomför Advent of Code 2019 i Elixir**. För att koda ännu mer.
- **Åk på ElixirConf under 2020**. För att på riktigt få umgås med communityt.

Detta kommer förhoppningsvis att bli en inläggs-serie som jag uppdaterar under året.
