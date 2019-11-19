---
title: Område Arbeidgiver i NAV
vimeoId: 373391229
---
{% include header-scripts.html %}

## Nav Norges mest attraktive IT-miljø?
Nav har har gått fra å være kjent for sine store IT-fiaskoer til å å bli "the happening place" i Norsk IT-bransje. Faktisk er Nav IT interessante i verdenssammenheng. Hvorfor tør vi bruke så store ord om oss selv?
1) Moderne organisering (smidig, produktteam istedenfor prosjekter, in-house utviklere)
2) Moderne teknologi (Docker+Kubernetes, mikrotjenester, hendelsesdrevet)
3) Vi har mye data om Norges befolkning _og_ har lov til å bruke dem
4) Når vi lykkes får mange mennesker bedre liv
5) Verdensledende: Gitt Norges gode utgangspunkt vil et enda bedre Nav gi verdens beste velferdsstat. 

Se hvordan IT-utviklingen i NAV har beveget seg fra tungrodde og kostbare IT-systemer til smidige løsninger: https://memu.no/video/slik-loser-nav-it-floken/

Moderniseringen av velferdsstaten går i en rivende fart. Bli med på å bygge [det som betyr noe].


## Produktområdet "Arbeidsgiver"
Vi skal koble folk som vil jobbe sammen med arbeidsgivere som vil ta dem imot. Noen arbeidstakere har behov for tilrettelegging, og noen arbeidsgivere kan tilby tilrettelegging. Vi har mange muligheter til å bygge nye tjenester rundt prosessene der det ikke eksisterer noe i dag.

Området er relativt nytt: Arbeidet startet opp i august 2018 som et tradisjonelt prosjekt, men siden Nav nå skal slutte med IT-prosjekter vil vi gå inn som en permanent del av strukturen i NAV fra 2020. Området er per november 2019 fordelt på fire autonome produktteam som har ansvaret for sine deler av flatene mot arbeidsgiver:

* Inkluderende Arbeidsliv
* Rekruttering av personer med nedsatt funksjonsevne
* Innloggede sider for Arbeidsgivere
* Tiltaksgjennomføring


### Hvem er vi?
{% include vimeo-player.html id=page.vimeoId %}

Teamene har en tverrfaglig sammensetning med av domeneeksperter, designere, utviklere og produkteiere.
Rundt teamene har vi ett støtteapparat som sørger for økonomi, kommunikasjon og andre funksjoner for å 
supportere produktteamene.

<div id="chart-roller"></div>

Vi er en god blanding av folk med forskjellig bakgrunn, alder og kjønn.

<div id="chart-kjonn2"></div>

Vi har en blanding av innleide konsulenter og NAV-ansatte. Av de 21 utviklerne våre, er 6 in-house, og det 
blir stadig vekk flere. Vi rekrutterer i disse dager flere utviklere direkte til området og håper å finne 
flere som ønsker å jobbe for at velferdsstaten får eierskap til egne applikasjoner og systemer.

### Kontorlokaler
Vi er plassert i [de gamle lokalene til Opera Software og Trolltech] i [Waldemar Thranes gate 98].
Her disponerer vi ca. 120 kvm og sitter godt skjermet i en egen fløy i 5 etg. Vi har en mix
av åpne landskap og stillerom. I August 2020 flytter vi sammen med resten av Direktoratet 
til nye lokaler på [Fyrstikkalléen 1 på Helsfyr], noe som blir bra.  TODO: VET VI AT VI SKAL FLYTTE? NOEN SKAL GLI IGJEN I S2.

## Utvikleropplevelse
Utviklere kan velge mellom å PC og Mac, og har friheten til å bruke de verktøyene de liker best til 
utvikling. Enten det måtte være [Visual Studio Code], [IntelliJ] eller [Eclipse]. Det jobbes også med 
muligheten til å utvikler på maskiner som kjører linux, men vi har det ikke helt klart enda. Generelt
er utvikleropplevelse sentralt for alt vi gjør.

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

For datalagring har vi [Postgresql] som i hovedsak ligger til bunn for de nye applikasjonene vi lager.
Vi har arvet to applikasjoner som ikke er oppgradert enda, men det er en del av det vi må forholde oss
til. Det arbeides med å få disse modernisert. Andre lagringsteknologier blir sporadisk brukt på ulike
team i NAV. For asynkrone operasjoner har vi også en sentral [Kafka]-rigg som gir oss gode muligheter
til å dekoble applikasjonene våre når det er naturlig. Dette er spesielt fint når vi skal kommunisere
på tvers av produkter i NAV.

### Bygg og deploy
Området bygger og tester all koden vår på [CircleCI] og deployer derfra. Vi
drifter selvsagt all kode som vi skriver. Vi er på ingen måte låst til dette. For kodeflyter som
ligger tett inn på Github er [Github Actions] ett godt alternativ som vi kan ta i bruk om det
skulle bli relevant. 

Applikasjonene våre deployes til [NAIS] som er NAVs plattform for å kjøre kontainere med 
[Kubernetes]. Her har vi tilgang til en moderne stack med monitoreringsverktøy og debuggingverktøy.
Ganske behagelig egentlig. 😃

## Kontakt
Hvis du lurer på noe ang. området arbeidsgiver ta gjerne kontakt med [Hafsa] eller [Tina]. Eller 
kanskje du kjenner noen andre som jobber hos oss?

{% include generated-members.md %}

[CircleCI]: https://circleci.com/
[det som betyr noe]: https://www.detsombetyrnoe.no
[Eclipse]: https://www.eclipse.org/
[Fyrstikkalléen 1 på Helsfyr]: https://goo.gl/maps/syFqtFSf4RfYFZpn7
[Github Actions]: https://github.com/features/actions
[Hafsa]: mailto:hafsa.elkam@nav.no
[IntelliJ]: https://www.jetbrains.com/idea/
[Kafka]: https://kafka.apache.org/
[koder vi som default åpent]: https://github.com/navikt/offentlig/blob/master/OpenSource.md
[Kubernetes]: https://kubernetes.io/
[NAIS]: https://nais.io/
[NAV løser IT-flokene]: https://memu.no/video/slik-loser-nav-it-floken/
[NAVs designsystem]: https://design.nav.no/
[Postgresql]: https://www.postgresql.org
[React]: https://reactjs.org/
[Spring Boot]: https://spring.io/projects/spring-boot
[Tina]: mailto:tina.krekke@nav.no
[TypeScript]: https://www.typescriptlang.org/
[Visual Studio Code]: https://code.visualstudio.com/
[de gamle lokalene til Opera Software og Trolltech]: https://www.digi.no/artikler/opera-og-trolltech-hedret-med-historisk-blatt-skilt-her-hadde-vi-noen-av-de-beste-arene-i-vare-liv/476625
[Waldemar Thranes gate 98]: https://goo.gl/maps/fipkD2fDP4yV53vX7

