---
title: Fortfarande sysadmin - jag ger upp linux tills vidare
date: 2019-12-15
layout: single.hbs
collection: articles
---

Jag har de senaste fem åren arbetat primärt med en linuxdistribution som
operativsystem, där jag har skiftat mellan Arch och Ubuntu i omgångar.

Jag har sedan 2015 varit i exil från Mac, då jag inte gillar Apples vägval för
Macbook pro. Måttet var rågat när [Butterfly switches][1] och [TouchBar][2]
introducerades, men de tappade mig redan när de började limma och löda fast
alla förslitningsdelar såsom batteri, hårddisk och RAM - något som
konkurrenterna tyvärr tog efter också.

Det gäller fortfarande att [jag vill vara kreatör, inte sysadmin][3]: jag må
vara intresserad av operativsystem och teknik, men jag ser primärt på
datorer som ett **arbetsredskap för att vara kreatör**. Alltså ungefär som en
målare ser penslar och färg, eller en musikant ser på sitt instrument
och dess förstärkningsmetoder.

## Att skriva, köra och debugga kod fungerar

Det är inte någon brist på **utvecklarverktyg för linux** idag.

- Git används via CLI.
- Tmux har igång "allt" i bakgrunden och gör det möjligt att snabbt skifta kontext.
- Docker gör det enkelt att matcha versioner av MySQL, RabbitMQ, ElasticSearch, Poxa, Redis, Memcached och liknande.
- Jag kan dra tunga lass och göra riktigt seriös debug med JetBrains produkter.
- Vim och SpaceMacs räcker gott för snabba insatser.
- VSCode hamnar i någon sorts mellanläge mellan JetBrains styrka och Vims kvickhet.
- Alla webbläsare finns på Linux, och övriga går att snabbt komma åt via Virtualbox och virtuella maskiner som Microsoft tillhandahåller gratis.

## Den alldagliga kontorslunken fungerar ej

Det vardagliga livet på kontor, däremot, är en större utmaning.

- Jag skiftar mellan att arbeta med enbart bärbar dator till att docka den till
  skärm, tangentbord och mus.
- Jag vill kunna skala upp gränssnittet då min syn inte är den bästa, eller
  personen bredvid gärna vill se vad som händer på den lilla skärmen.
- Jag har presentationer och mobbprogrammerar, vilket kräver att datorn kopplas
  in till presentationsskärmar.

Det är inte någon direkt konstig bild att måla upp: bilden summerar en rätt så
vanlig bild av att arbeta på kontor med kollegor.

- Interna skärmen fryser rätt ofta. Är en extern skärm inkopplad fortsätter
  bilden att visas där, och mus- och tangentbordsinmatningar fortsätter att
  fungera. Förmodligen drivrutinsproblem.
- DisplayPort går inte att återansluta till, då DP-skärmar antingen byter
  intern adress, tappas bort av Wayland/Xorg eller en kombination av båda. HDMI
  fungerar alltid. Förmodligen protokollsproblem.
- Det är överjävligt svårt att skala grafiska användargränssnitt: varken MATE,
  GNOME, Cinnamon eller XFCE fixar detta på ett acceptabelt sätt.
- Alla DEs jag provat kraschar sporadiskt, varvid alla fönster och sessioner
  jag hade igång försvinner helt.
- Dubbla batterier funkar halvdant.
- Ibland hittas inte tangentbord eller mus när jag dockar i datorn. Ibland
  hjälper ur- och idockning, ibland inte.

Detta kan nog kanske beskyllas på min Thinkpad X260 också, men jag är rätt
säker på att en annan bärbar dator också hade haft problem.

Linuxdistributioner är nämligen, **efter 30 år**, fortfarande skitkassa på
skrivbordsanvändning för bärbar dator. Tiden jag hade stationär workstation (en HP z440) funkade saker bättre, men då hade jag å andra sidan inte heller kraven som en bärbar arbetsstation kräver.

Inga av dessa krav är särskilt högt ställda, utan anses enligt mig fullt
rimliga.

## 2020 bryter jag min exil från Mac

Apple har gjort en del förbättringar med sina produkter, så jag är nu på väg
tillbaka till de datorer jag alltid har föredragit. Det finns några anledningar
till att de får ny en chans av mig.

- Macbook pro har återigen en _riktig_ ESC-tangent.
- Macbook pro har acceptabelt tangentbord, med samma tangentbord som Macbook
  Air var sist med att förlora.
- Macbook pro har fått tillbaka T-formationen på piltangenterna.

Det finns också saker jag verkligen saknat i min exil.

- MacOS: det bästa operativsystemet jag någonsin använt.
- Den överlag fantastiskt höga kvaliteten på appar och program.
- Touchpaden, som är överlägsen alla konkurrenters.

Det finns fortfarande saker som jag sörjer med Mac:

- Magsafe, det lysande äpplet, startljudet och den pulserande dioden som
  indikerade sömnläget. Vila i frid, ni var en del av en fantastisk era
  av Macar. jag saknar er alla!
- Adapter-helvetet. Ingenting nytt däremot, och det går att komma runt.
- Löjligt låg batteritid. Seriöst Apple, ge datorn 400g och en halv millimeter
  tjocklek till så att batteritiden räcker en hel arbetsdag!
- Mother fucking TouchBar, som inte längre är möjlig att välja bort. Jag har
  däremot vant av mig vid funktionstangenterna på sistone, så det är inte längre
  ett problem.

[1]: https://www.change.org/p/apple-apple-recall-macbook-pro-w-defective-keyboard-replace-with-different-working-keyboard
[2]: https://forums.macrumors.com/threads/why-does-everyone-hate-the-touch-bar.2213135/
[3]: ../../2015/no-sysop/
