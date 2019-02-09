---
date: 2016-02-05
tags: free, gpl, bsd
template: post.html
title: Skillnaden mellan GPL, LGPL och BSD, kort och enkelt
layout: single.hbs
collection: articles
---
*Denna text är delvis en översättning från [The differences between the 
GPL, LGPL and the BSD][3].*

Det finns ibland tillfällen när ett projekts kodbas tjänar på att 
licenseras med en fri eller öppen licens. Utmaningen är att välja
rätt licens för projektet.

[Wikipedias jämförelsetabell över fria och öppna licenser][1] är rätt 
omfattande, men i praktiken är det tre licenser som är viktiga att 
förstå skillnaden på: **GPL**, **LGPL** och **BSD**.


## GPLv2: din implementation av eller med vår kod måste förbli fri

[GNU General Public License, version 2][2] (GPLv2[^1]) är den mest populära
fria licensen. Den används av bland flera av Linuxkärnan, Wordpress och 
verkygen för GNU.

En [svensk översättning][4] finns för ökad förståelse, men det är den 
ursprungliga engelska texten som ska inkluderas i projektet för 
att licensen ska bli juridiskt bindande.

Sammanfattningen av licensen är att du är tillåten att använda, kopiera,
sprida och ändra mjukvaran, men att alla ändringar du gör på mjukvaran
måste licenseras som GPL. Syftet med detta är att ge alla andra samma 
rättigheter som dig, i en sorts *Fair's fair"-anda.

Det finns flera begränsningar också på detaljnivå, ska tilläggas.


## LGPL: ändrar du vår kod behöver du inte släppa din kod fri

[GNU Lesser General Public License][6] (LGPLv2.1) liknar GPL, men är utformad
för att bättre passa bibliotek där mjukvara ej licenserade med GPL 
länkar till bibloteket och använder det. Görs ändringar på biblioteket
ska det släppas fritt, men mjukvaran som länkar har inga sådana krav.


## BSD: Här är koden, gör vad du vill - ansvaret är ditt

Till skillnad från varianterna av GPL är BSD-licensen mycket tolerant.
Licensen har sitt ursprung från operativsystemet BSD så dess spridning 
är rätt stor bland mjukvara.

Det licensen förenklat säger är "Här är källkoden, gör vad du vill med 
den, men har du problem, är det ditt problem". Med detta sagt är det
fritt fram att ta kod under BSD-licens och använda den för en proprietär
produkt, om du så önskar; det finns ingenting som påbjuder att någon
kod ska ges tillbaka.

Eftersom BSD-licensen är enkelt utformad är den också kort, den ser 
ibland ut såhär:


> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
>
> * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
> * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
> * Neither the name of the [[whoever]] nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.
>
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Det finns flera licenser som påminner om BSD: [MIT][7] och [ISC][8] för
att nämna några exempel.


## Bara ett urval

Detta är alltså bara ett urval av alla licenser som finns. Det är slutligen
upp till utvecklarna att väga alla omständigheter mot varandra och därifrån
välja en licens. Flera licenser är restriktiva i den mening att de bevarar
kodens frihet, med GPL som tydligaste exemplet. Andra licenser är mer 
toleranta och tillåtande, likt BSD-licensen.

Som en fotnot: [Free Software Foundation][9] talar om de karismatiska GPL-restriktionerna
för [copyleft][10], där en av de högst ljudande opinionsbildarna är 
[Richard Stallman][11]. 


[1]: https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses
[2]: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
[3]: https://fosswire.com/post/2007/04/the-differences-between-the-gpl-lgpl-and-the-bsd/
[4]: http://danielnylander.se/gpl/
[6]: https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
[7]: https://sv.wikipedia.org/wiki/MIT-licens
[8]: https://en.wikipedia.org/wiki/ISC_license
[9]: https://www.fsf.org/
[10]: https://sv.wikipedia.org/wiki/Copyleft
[11]: http://www.gnu.org/philosophy/categories.html

[^1]: Här används GPLv2, då Linus Torvalds med flera har ställt sig 
öppet kritiska mot GPLv3, som är den aktuella versionen av GPL. 
Kritiken mot GPLv3 är bland annat att den är alldeles för strikt och
sträng.