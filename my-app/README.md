# Väderhjälpen

Det är applikationen är bygg för kursen "Flerplattformsapplikationer med webbtekniker".
Vi som utvecklat är Rasmus Appelgren, William Evans och Linus Ingvarsson.

Väderhjälpen är tänkt att vara en enkel hemsida där man kan få ut aktuellt väder
från den platsen man önskar. För att förenkla för användaren sparas dennes sökningar
i localstorage. Användaren kan självklart ta bort dessa genom att trycka på "X" där
väderdatan presenteras.

Vi använder oss av ramverket react och har delat upp applikationen i två delar.
Ena är App.js som sköter inläsning och sparning av platserna, samt hanterar input
från användaren. Weather.js kommunicerar med väder API:et som erbjuds gratis från
openweathermap.org. För att hämta data från API:et har vi valt att använda oss av
biblioteket axios.

## Vad krävs för att köra?

För att köra igång vårat projekt behöver det skrivas lite i terminalen.
