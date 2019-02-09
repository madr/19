---
title: Hackad på AWS - en snabb redogörelse
date: 2014-10-08
template: post.html
layout: single.hbs
collection: articles
---
Så, följande har hänt:

 1. Under september månad kapades mitt konto på Amazon Web Services (AWS). 
 2. **Onsdagen den 24 september** ombads jag av ett mail från AWS att byta lösenord, ta bort mina säkerhetsnycklar och se om något konstigt fanns på mitt konto.
 3. **Fredagen den 26 september** fick jag ett telefonsamtal från AWS support där de upplyste mig om att jag blivit utsatt för intrång på EC2 och hur jag kunde logga in och stänga ner de av mig ej skapade tjänsterna, samt hur jag skulle driva detta vidare. Det var när jag gjorde detta som jag fick se vad intrånget ställt till med - Ec2-missbruk för ungefär $18.000.
 4. Samma fredag, efter åtgärderna telefonsamtalet innehöll vidtagits, mailar jag Amazon och skriver om hela händelseförloppet.
 4. **Söndagen den 28 september** får jag ytterligare instruktioner om att försäkra mig om att allt intrånget skapat verkligen är avstängt. I samband med detta skapades ett ärende i deras Support center.
 4. Från 29 september till 2 oktober uppdaterar Amazon mig via ärendet. Deras ambition är att se till att jag inte behöver betala något av de $18.000 som intrånget orsakade.
 5. Idag, den 8 oktober, blev det klart att jag inte behöver betala något.

Några frågor som jag här ska besvara:

**Hur fick hackern tillgång till mitt konto?**  
Mitt lösenord och mina säkerhetsnycklar är autogenererat och unikt för AWS. Det ligger sparat i en lösenordsfil som ligger på Dropbox med tvåstegsverifiering påslaget. Tisdagen den 23 september råkade jag däremot av misstag pusha upp mina säkerhetsnycklar till ett publikt repo på Github. Jag upptäckte detta ett par timmar senare och tog genast bort hela repot. Min misstanke är att en bot lyckades komma över dem under den tidsramen.

**Vad bestod intrånget av?**  
20 maxade EC2-instanser per region (åtta stycken), samt ytterligare några i Spot Request Queue (dessa var köade för en plats i sin region). Samtliga dessa skapades innan jag bytte lösenord på onsdagen den 24 september och ingenting mer skapades efter det. Jag upptäckte dock inte EC2-maskinerna förrän samtalet på fredagen den 26 september då jag inte använde EC2 och därför inte tänkte på att kika där i och med att jag blev ombedd att byta lösenord på onsdagen.

**Hur hanterade AWS det hela?**  
I mina ögon fläckfritt - de uppdaterade mig löpande och var de som tog kontakt med mig så snart de misstänkte intrång, via såväl mail som telefon. De var också snabba med att starta en utredning och var från början inställda på att detta inte skulle debiteras mig. Deras instruktioner till mig var tydliga och pedagogiska, och jag kunde snabbt reagera på de åtgärder som var ålagda mig.

## Lärdomarna

 * Skriv **aldrig** AWS-säkerhetsnyckeln direkt i kod - ens i de minsta snabbhacken! Håll det borta med nolltolerans så hamnar det aldrig i någon versionshantering av misstag. I mitt fall var det några rader JavaScript jag fuskade ihop på en lunchrast. Knappast värt det för att utsätta sig själv för risken att bi utsatt för intrång.
 * Sätt upp ett **billing alarm** på AWS - det hade jag inte gjort, och det hade besparat mig den långa tiden innan jag kunde reagera. Numera har jag ett billing alarm på $1 som kommer att spamma mig så snart något drar iväg på AWS.