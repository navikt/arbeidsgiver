---
title: Produktområde arbeidsgiver i Nav
vimeoId: 373391229
---
{% include header-scripts.html %}

## Produktområde arbeidsgiver i Nav
Området er fordelt på ni autonome produktteam som har ansvaret for sine
deler av flatene mot arbeidsgiver:

* Inkluderende Arbeidsliv
* Rekruttering av personer med nedsatt funksjonsevne
* Innloggede sider for Arbeidsgivere
* Tiltaksgjennomføring
* Dialog og relasjon (CRM)
* Koronatiltak

Arbeidet ble startet i august 2018 som et tradisjonelt prosjekt. Men har fra januar 2020 vært en permanent del av den nye produktområdestrukturen i Nav. Området er en viktig del av Navs satsing på digitalisering.

### Organisasjonen blir stadig smidigere
Nav har gått fra å være kjent for sine store IT-fiaskoer til å bli
ansett av mange som en av de plassene det skjer i Norsk IT-bransje. Vi
liker å tro at det er på grunn av den kursen vi har satt. Innenfor
arbeidsgiverområdet prøver vi så godt det lar seg gjøre å leve opp til
denne visjonen igjennom:

1. Moderne organisering med smidige produktteam, istedenfor prosjekter
2. Moderne teknologi (kontinuerlig deployment med Docker + Kubernetes, mikrotjenester, hendelsesdrevet)
3. Ansvarlig bruk av de dataene vi har tilgjengelig
4. Et klart samfunnsoppdrag som både er lett å forstå og lett å måle

### Hvem er vi?
Teamene har en tverrfaglig sammensetning av domeneeksperter, designere,
utviklere og produkteiere. Rundt teamene har vi et støtteapparat som hjelper produktteamene med smidig metodikk, økonomi, juss, kommunikasjon og andre funksjoner.

<div id="chart-roller"></div>

Vi er en god blanding av folk med forskjellig bakgrunn, alder og kjønn.

<div id="chart-kjonn2"></div>

Vi har en blanding av innleide konsulenter og Nav-ansatte. Av de 34 utviklerne våre, er 17 in-house, og det
blir stadig flere. Vi rekrutterer i disse dager utviklere direkte til området og håper å finne
flere som ønsker å jobbe for at Nav får eierskap i egne applikasjoner og systemer.

### Kontorlokaler
Vi er plassert i de splitter nye og moderne lokalene til Arbeids- og velferdsdirektoratet som ligger i Fyrstikkaléen 1 på Helsfyr.


## Utvikleropplevelse
Utvikleropplevelse har fokus, noe som gjenspeiler at Nav satser på IT i betydningen at in-house IT-utvikling
er helt essensielt for de endringene som Nav skal gjennom de neste åra.

### Lokalt utviklingsmiljø
Utviklere kan velge mellom Windows, Mac eller Linux på laptop, og har friheten til å bruke de lokale verktøyene de liker best til utvikling, enten det måtte være [Visual Studio Code], [IntelliJ], [Eclipse] eller annet.

### Kildekode
Ny programkode i Nav er som default [open source] og ligger på Github. Lukkede repositories brukes bare
unntaksvis, basert på en vurdering av teamet selv. I området har vi følgende åpne repositories:

{% include generated-repos.md %}

Vi bruker norsk i programkode for termer fra problemdomenet vårt. Grunnen til dette er at kildekoden vi skriver
skal kunne sees i sammenheng med lover og regler. For applikasjoner som ikke har mye domenelogikk er språk valgfritt.
Ved første øyekast kan det se litt rart ut med kildekode med norske begreper blandet med engelsk, men man blir fort
vant til det.

### Programmeringsspråk
Vi skriver all frontend-code i [React] og fortrinnsvis med [TypeScript]. På backend har Nav tradisjonelt brukt
Java med Spring ([Spring Boot]), men det er stadig fler team som velger Kotlin. Vi ønsker også
å bruke lettvektsløsninger, men det er det opp til teamene å avgjøre. Infrastrukturen er fleksibel og
vi har stor frihet til å velge det som er best for å løse oppgaven. Det er likevel viktig at
teamene i Nav ikke glir for langt fra hverandre, derfor er det noen føringer på hovedtrekk av teknologi.
Vi har også ting som [NAVs designsystem] som skal hjelpe oss til å ikke sprike for mye mellom teamene.

For datalagring har vi [Postgresql] som i hovedsak ligger til bunn for de nye applikasjonene vi lager.
Vi har arvet to applikasjoner som ikke er oppgradert enda, men det er en del av det vi må forholde oss
til. Det arbeides med å få disse modernisert. Andre lagringsteknologier blir sporadisk brukt på ulike
team i Nav. For asynkrone operasjoner har vi også en sentral [Kafka]-rigg som gir oss gode muligheter
til å dekoble applikasjonene våre når det er naturlig. Dette er spesielt fint når vi skal kommunisere
på tvers av produkter i Nav.

### Bygg og deploy
Vi deployer kontinuerlig. Teamet drifter all kode som vi skriver.

Applikasjonene våre deployes til [NAIS] som er Navs plattform for å kjøre Docker-kontainere med
[Kubernetes]. Her har vi tilgang til en moderne stack med monitoreringsverktøy og debuggingverktøy.
Ganske behagelig egentlig. 😃

Vi bygger koden vår fortinnsvis med [GitHub Actions] og deployer derfra, men ser på muligheter for alternativer for når GitHub ikke spiller på lag.


## Kontakt
Hvis du lurer på noe kan du kontakte [Hafsa], leder for produktområdet.
Moderniseringen av velferdsstaten går i en rivende fart og vi
jobber hver dag for å bygge [det som betyr noe].

{% include generated-members.md %}

[CircleCI]: https://circleci.com/
[det som betyr noe]: https://www.detsombetyrnoe.no
[Eclipse]: https://www.eclipse.org/
[Fyrstikkalléen 1 på Helsfyr]: https://goo.gl/maps/syFqtFSf4RfYFZpn7
[Github Actions]: https://github.com/features/actions
[Hafsa]: mailto:hafsa.elkam@nav.no
[IntelliJ]: https://www.jetbrains.com/idea/
[Kafka]: https://kafka.apache.org/
[open source]: https://github.com/navikt/offentlig/blob/master/OpenSource.md
[Kubernetes]: https://kubernetes.io/
[NAIS]: https://nais.io/
[NAVs designsystem]: https://design.nav.no/
[Postgresql]: https://www.postgresql.org
[React]: https://reactjs.org/
[Spring Boot]: https://spring.io/projects/spring-boot
[TypeScript]: https://www.typescriptlang.org/
[Visual Studio Code]: https://code.visualstudio.com/
