---
template: post.html
tags: remote, work, productivity
date: 2016-09-01
title: Tips för att jobba på distans, från andras lärdomar
layout: single.hbs
collection: articles
---
Att jobba på distans kan vid en första inblick verka simpelt i yrket som programmerare, webbutvecklare och systemutvecklare, då det som krävs för att jobba är en dator med internet-uppkoppling.

Det eskalerar dock snabbt till att bli besvärligt, då organisationskulturer fortfarande är starkt förknippade med kontor: bilden av hårt arbetande kodare som sitter tillsammans i en hastigt införd lokal och slänger dåliga skämt mellan bordsplatserna likt [Silicon Valley][1] och [IT Crowd][2] är idealbilden.

Det finns dock företag som överlistat idealbilden, där man gått långt för att få till en kultur som är anpassad för distansjobb. [Basecamp][3] är troligtvis det mest kända exemplet. De har dessutom valt att skriva böcker om sin kultur, mer generellt i [Rework][4] och mer specifikt om distansjobb i [Remote][5]. Dessa böcker kan jag varmt rekommendera för att få en överblick av de grundläggande anledningarna till att jobba på distans.

Förra månaden skrev [Jonathan Snook][6] om [erfarenheter om att jobba på distans][7] på Yahoo, Shopify och Xero. Denna är mycket läsvärd. Han kom fram till att följande fungerade bra:

 * Konkreta arbetsuppgifter att göra. T ex att ställningstagande, övergripande ansvar, utförande och leverans av en uppgift görs av samma person eller entitet, från start till mål.
 * Isolerade delmoment att göra av en uppgift, utan för starka beroenden av andra moment. T ex att i rollen som frontend-orienterad webbutvecklare motta designskisser för att realisera som HTML och CSS, eller att som backend-orienterad webbutvecklare skapa backendlogik med felhantering och flöden innan en design finns på plats.
 * Att få variation i vardagen och slippa vara bunden till en skrivbordsplats på ett kontor för att kunna jobba.

Det fanns även sånt som inte fungerade. Att vara projektledare eller team leader är särskilt utmanande. 

 * Många möten över telefon och VoIP kan ibland missas på grund av teknikstrul, vilket skapar en oro för att hamna ur synk till teamet.
 * När tidszoner diffar för mycket hamnar många möten på de timmar på dygnet som familjen kräver ens tid, vilket gör att många möten missas följt av skuldkänslor och känslor av att vara överflödig.

Artikeln avslutas med två tips för att fostra distansfrämjande kultur i ett företag.

**Ha åtskilda arbetsuppgifter**. Ha en lista över saker att göra och se till att den som åttar sig en uppgift kan göra den med så litet yttre beroenden som möjligt, med fullt ansvar och ägande.

> There are opportunities through code reviews, design reviews, and other exercises to ensure that people are on the right track. Otherwise, get out of their way.

**Kommunicera via öppna kanaler**. Undvik att information bara når delar av teamet. Säg eller skriv inte saker som stannar på kontoret eller i ett personligt mail. Informera inte om saker på en Post-it eller Whiteboard. Detta skapar nämligen oro och ängslan i arbetslaget över att inte ha koll.

> Every decision is documented. Find a place, be it Slack, GitHub, Trello, or wherever, and get the word out. 

Det andra och sista tipset kommer från [Remy Sharp][8] och det rör att ha retrospektiv på distans. Retrospektiv är grymt viktigt för alla arbetslag då det ger tillfälle att förbättra arbetsprocessen och samtidigt passa på att kolla så att alla trivs på jobbet.

Såhär körde de tidigare:

> The retrospectives would run over remote video calls, and we would try to simulate the typical writing on postit notes, with writing in a shared spreadsheet. First listing those things that worked well, then those that needed working on, then we'd vote on what we wanted to improve on. All in the spreadsheet.

Det fungerade inte riktigt, så för att prova på något annat skapades [Retrobot][9], en bot som låter en kanal i Slack bli en styrd retrospekt.

Den funkar såhär:


> You invite @retrobot a channel (we used #retro as the channel name)
>
> Tell the bot to start the retrospective: @retrobot start 5m (and automatically end in 5 minutes)
> The bot invites everyone who's active in the #retro channel to a private DM session, asking for "worked well" and "needs work" items, indicated by a prefix of + and - respectively
> 
> Once the retro is over, the bot invites everyone back into the #retro channel, and prints out a shuffled list of what worked well, and what needs work
> 
> Everyone is then asked to 👍 the items that need work that they want to action from the retrospective, and once the person running the retrospective is satisfied everyone is done, they ask the bot for a summary: @retrobot summary which prints the top three items with the most 👍s

Grymt bra initiativ som nog kan fungera i team med språkbarriärer, t ex. Eller kass lina eller med medioker utrustning för videosamtal.

Mina slutsatser är att det är klurigt att jobba på distans, och att det ligger i företaget och arbetslaget gemensamma intresse att jobba för att det ska fungera.


[1]: http://www.imdb.com/title/tt2575988/
[2]: http://www.imdb.com/title/tt0487831/
[3]: https://basecamp.com/
[4]: https://37signals.com/rework
[5]: https://37signals.com/remote
[6]: https://snook.ca
[7]: https://snook.ca/archives/other/working-remotely
[8]: https://remysharp.com
[9]: https://remysharp.com/2016/08/22/remote-retrospectives-with-retrobot