---
title: Varför och hur jag ska fördjupa mig i React 2019
date: 2019-03-25
layout: single.hbs
collection: articles
---

Med över 20 år som webbutvecklare ska jag nu göra en uttalad satsning på en kedja av frontendverktyg. Det här inlägget är skrivet för att jag vill minnas själv, men också för att inspirera andra.

## Motivering till React

Varför vill jag göra en satsning på [React](https://reactjs.org/) och inte exempelvis någon av alla alternativ?

- [Angular2](https://angularjs.org/),
- [Vue](https://vuejs.org/),
- [Elm](https://elm-lang.org/),
- [ReasonML](https://reasonml.github.io/) eller
- [skit](https://github.com/taylorhughes/skit)?

Det finns goda skäl. Jag har kodat React av och till de fyra senaste åren, men bara i andras kod och aldrig utanför jobbet. Nu ska jag satsa på att skriva mycket kod med just detta bibliotek, av följande anledningar.

- React (med allt runtom) är svårt. Det behövs tid och skrivande av kod för att lära sig alla de olika delarna. Det går inte att göra litet sporadiskt fulkodande i React.
- React är fortfarande en av de populäraste biblioteken för sitt område, trots många år under lupp av granskande webbutvecklare.
- Det är vad [Kundo](https://kundo.se) använder (även om vi också sneglar hungrigt på Elm).

## De delar av React som intresserar mig

- [Redux](https://redux.js.org/), för att hantera state på ett bra sätt.
- [Redux-sagas](https://github.com/redux-saga/redux-saga), för att lära mig mer om JavaScript-generatorer och hantering av asynkrona sidoeffekter.

Jag vill också bli litet bättre på mer generella Javascript-verktyg.

- [Babel](https://babeljs.io/), för att skriva modern JavaScript.
- [Parcel](https://parceljs.org/), för att det verkar mer kompetent än Webpack.

## Steg 0 - Bekanta mig med verktygen ✔

Jag jobbar med React och Redux på jobbet, där flera produkter är byggda med React och Redux. Detta var därför en enkel punkt att bocka av.

## Steg 1 - Skriv simpla saker i React ✔

Jag har börjat koda hobbyprojekt i React och har några projekt från 2018 på Github: [Brütal Legend](https://github.com/madr/brutal-legend), och [en påbörjad träningsapp](https://github.com/madr/urban-enigma). Den första är vanilla CSS på webpack, den andra är Sass med Parcel.

## Nästa steg - Utforska olika delar av React + redux-världen

Jag har ett gäng andra idéer på gång som jag inte kommer att nämna här, men jag har en liten todo som jag ska göra under 2019 för att utmana mig själv att lösa och uppleva vanliga problem/mönster inom React och redux.

- Använd **alltid** React, Redux och Babel.
- Utforska gärna fler bundlers än Parcel och Webpack.
- Hantera asynkront state med [Redux-sagas](https://github.com/redux-saga/redux-saga), exempelvis med `fetch()`.
- Spara state med [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage).
- Hantera CRUD av state med [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker): låtsas att det är en server som svarar och hantera där state med localStorage eller [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).
- Uppdatera state med Websockets, förslagsvis [Phoenix Presence](https://hexdocs.pm/phoenix/Phoenix.Presence.html) eller [SocketIO](https://socket.io/).
- **Gå på Meetups**. För att på riktigt få umgås med communityt.

Detta kommer förhoppningsvis att bli en inläggs-serie som jag uppdaterar under året.
