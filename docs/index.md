---
title: Område Arbeidgiver i NAV
vimeoId: 373391229
---
{% include header-scripts.html %}

# Med hjerte for inkludering, kode og kvalitet
I NAV er vi for tiden opptatt av å bygge [det som betyr noe]. Moderniseringen av velferdsstaten går
i en rivende fart. Vi flytter stadig vekk store deler av tjenestene våre ut av legacy og 
over i en moderne smidig organisasjon. Innefor tjenester til arbeidsgivere har vi mange muligheter på
å bygge nye tjenester rundt prosessene der det ikke eksisterer noe i dag. Selvbetjening både for 
kandidater og arbeidsgivere gir mange nye muligheter.

{% include vimeoPlayer.html id=page.vimeoId %}

## Team og organisering
Området er akkurat nå fordelt på fire autonome produktteam som har ansvaret for sine deler av flatene
mot arbeidsgiver.

* Inkluderende Arbeidsliv
* Rekruttering av personer med nedsatt funksjonsevne
* Innloggede sider for Arbeidsgivere
* Tiltaksgjennomføring

Organisasjonen er ikke spesielt gammel. Arbeidet ble startet på i august 2018 som et tradisjonelt prosjekt.
Men vil gå inn som en permanent del av strukturen i NAV fra 2020.

### Hvem jobber i teamene?
Teamene har en tverrfaglig sammensetning med av domeneeksperter, designere, utviklere og produkteiere.
Rundt teamene har vi ett støtteapparat som sørger økonomi, kommunikasjon og andre funksjoner for å 
supportere produktteamene.
<div id="chart-roller"></div>

Vi er nogen lunde balansert på ulike demografiske faktorer, og har naturlig blitt en god blanding av
folk med forskjellig bakgrunn.
<div id="chart-kjonn2"></div>

Vi har en blanding av innleide konsulenter spesielt innenfor utvikling og NAV-ansatte. Av de 21 utviklerne
våre er 6 in-house, men det blir stadig vekk flere. NAV har ett ønske om å ta eierskap i egen utvikling.

### Kontorlokaler
Vi er plassert i de gamle lokalene til Opera i Waldemar Thranes gate 98.
Her disponerer vi ca. 120 kvm og sitter godt skjermet i en egen fløy. Vi har en mix
av åpne landskap og stillerom. I August 2020 flytter vi sammen med resten av Direktoratet 
til nye lokaler på Fyrstikkalléen 1 på Helsfyr, noe som blir bra.

## Utvikleropplevelse
Utviklere kan velge mellom å PC og Mac, og har friheten til å bruke de verktøyene de liker best til 
utvikling. Enten det måtte være [Visual Studio Code], [IntelliJ] eller [Eclipse]. Det jobbes også med 
muligheten til å utvikler på maskiner som kjører linux, men vi har det ikke helt klart enda. Generelt
er utvikleropplevelse sentralt for 

### Kildekode
I NAV [koder vi som default åpent] det er unntaksvis at man lukker repositories basert på en vurdering
av teamet selv. I området arbeidsgiver har vi følgende åpne repositories:

{% include generated-repos.md %}

Det er verdt å merke seg at domenespråket vårt er norsk. Dette gjelder kode som omhandler lover og regler.
Grunnen til dette er at kildekoden vi skriver skal kunne sees i sammenheng med lover og regler. For 
applikasjoner som ikke har mye domenelogikk er språk valgfritt. Med første øyekast kan det se litt rart ut
med kildekode med norske begreper, men man blir fort vant til det.

### Programmeringsspråk
Vi skriver all frontend-code i [React] og fortrinnsvis med [TypeScript]. På backend er det kotlin
og java som dominerer og [Spring Boot] der det er naturlig. Vi ønsker også å bruke lettere løsninger
på dette, det er det egentlig opp til teamene å avgjøre. Infrastrukturen er fleksibel og vi har stor
frihet til å velge det som er best for å få løst oppgaven. Det er likevel viktig at teamene i NAV
ikke glir for langt fra hverandre, derfor er det noen føringer på hovedtrekk av teknologi. Vi har også
ting som [NAVs designsystem] som skal hjelpe oss til å ikke sprike for mye mellom teamene.

### Bygg og deploy
Området bygger og tester all koden vår på [CircleCI] og deployer derfra. Vi
drifter selvsagt all kode som vi skriver. Vi er på ingen måte låst til dette, for kodeflyter som
ligger tett inn på Github er Github Actions ett godt alternativ som vi kan ta i bruk om det
skulle bli relevant. Koden vår deployes til [NAIS] som er NAVs plattform for å kjøre kontainere med 
kubernetes. Her har vi tilgang til en moderne stack med monitoreringsverktøy og debuggingverktøy.
Ganske behagelig.

## Kontakt
Hvis du lurer på noe ang. området arbeidsgiver ta gjerne kontakt med Hafsa eller Tina. Eller 
kanskje du kjenner noen andre som jobber hos oss?

{% include generated-members.md %}

[koder vi som default åpent]: https://github.com/navikt/offentlig/blob/master/OpenSource.md
[React]: https://reactjs.org/
[TypeScript]: https://www.typescriptlang.org/
[Visual Studio Code]: https://code.visualstudio.com/
[IntelliJ]: https://www.jetbrains.com/idea/
[Eclipse]: https://www.eclipse.org/
[CircleCI]: https://circleci.com/
[det som betyr noe]: https://www.detsombetyrnoe.no
[NAIS]: https://nais.io/
[Spring Boot]: https://spring.io/projects/spring-boot
[NAVs designsystem]: https://design.nav.no/
