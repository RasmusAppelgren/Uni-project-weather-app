# Väderhjälpen

Det är applikationen är bygg för kursen "Flerplattformsapplikationer med webbtekniker".
Vi som utvecklat är Rasmus Appelgren, William Evans och Linus Ingvarsson. I projektet
har vi til stor del parprogrammerat, vilket gör att våra "commits" till Git kan se ut
att endast komma från ett håll.

Väderhjälpen är tänkt att vara en enkel hemsida där man kan få ut aktuellt väder
från den platsen man önskar. För att förenkla för användaren sparas dennes sökningar
i localstorage. Användaren kan självklart ta bort dessa genom att trycka på "X" där
väderdatan presenteras.

Vi använder oss av ramverket React och har delat upp applikationen i två delar.
Ena är App.js som sköter inläsning och sparning av platserna, samt hanterar input
från användaren. Weather.js kommunicerar med väder API:et som erbjuds gratis från
openweathermap.org. För att hämta data från API:et har vi valt att använda oss av
biblioteket axios.

## Varför React?

React är det mest använda ramverket idag (2022) och efterfrågan av folk som kan react är därför stor. Som eventuellt blivande utvecklare tilltalade det här oss och vi ansåg att det här var ett bra tillfälle att passa på att lära sig lite! I och med att det är så populärt finns det också ett bra community som kan vara till hjälp när man kört fast.

React tillåter oss att dela upp koden i olika komponenter som kan återanvändas i olika kontexter. I det här projektet fick vi testa på detta tänk.

Ett annat ramverk som vi diskuterade över var Vue. Vue påminner mycket om React och har sina fördelar, exemepelvis en liten filstorlek. Men det som vann över oss är att React används så mycket som det gör och vi vill ha den kunskapen.

Angular är ett till ramverk som är väldigt populärt. Vi valde dock att inte använda oss av det då det är ett stort ramverk för lite större projekt och applikationer än vårat, samt har en hög inlärningskurva, något vi inte skulle hinna med på den korta tiden vi har. Angular använder sig också av något som kallas "typescript" som är ett språk byggt på JavaScript, vilket betyder att vi skulle behöva lära oss betydligt mer.

## Vad krävs för att köra?

För att köra igång vårat projekt behöver det skrivas lite i terminalen. För att kunna köra applikationen behöver du ha nodejs
installerat. Det hittar du här: https://nodejs.org/en/

Efter det kan du följa dessa steg.

1. npm install
2. npm install axios (Har du inte installerat biblioteket axios tidigare så måste du installera det nu)
3. npm start

## Lincence
MIT License
