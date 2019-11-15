---
title: Område Arbeidgiver i NAV
---
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="/arbeidsgiver/assets/js/charts.js"></script>
# Med hjerte for inkludering
I NAV er vi for tiden opptatt av å bygge [det som betyr noe]. Moderniseringen av velferdsstaten går
i en rivende fart. vi flytter stadig vekk store deler av tjenestene våre ut av legacy og 
over i en moderne organisasjon. Innefor tjenester til 

## Våre ambisjoner
*Gjøre det enklere for arbeidsgivere å ansette utsatte brukergrupper og beholde disse i jobb​*
-- sett inn bilde av 

## Teamene
Området er fordelt på fire autonome produktteam som har ansvaret for sine deler av flatene
mot arbeidsgiver.
* Inkluderende Arbeidsliv
* Rekruttering av personer med nedsatt funksjonsevne
* Innloggede sider for Arbeidsgivere
* Tiltaksgjennomføring

### Hvem jobber i teamene?
Teamene har en tverrfaglig sammensetning med av domeneeksperter, designere, utviklere og produkteiere.
Rundt teamene har vi ett støtteapparat som server økonomi, kommunikasjon og andre funksjoner for å 
supportere produktteamene.
<div id="chart-roller"></div>

<div id="chart-kjonn2"></div>




## Utvikling
Utviklere kan velge mellom å PC og Mac, og har friheten til å bruke de verktøyene de liker best til 
utvikling. Enten det måtte være [Visual Studio Code], [IntelliJ] eller [Eclipse]. Det jobbes også med 
muligheten til å utvikler på maskiner som kjører linux, men vi har det ikke helt klart enda. Generelt
er utvikleropplevelse sentralt for 

### Kildekode
I NAV [koder vi som default åpent] det er unntaksvis at man lukker repositories basert på en vurdering
av teamet selv. I området arbeidsgiver har vi følgende åpne repositories:

{% include generated-repos.md %}

### Programmeringsspråk
Vi skriver all frontend-code i [React] og fortrinnsvis med [TypeScript]. På backend er det kotlin
og java som dominerer og Spring Boot der det er naturlig. Vi ønsker også å bruke lettere løsninger
på dette, det er det egentlig opp til teamene å avgjøre.

### Bygg og deploy
Området bygger og tester all koden vår på [CircleCI] og deployer til NAVs clustere derfra. Vi
drifter selvsagt all kode som vi skriver.


### Kontorlokaler
Vi er plassert i de gamle lokalene til Opera i Waldemar Thranes gate 98.
Her disponerer vi ca. 120 kvm og sitter godt skjermet i en egen fløy. Vi har en mix
av åpne landskap og stillerom.

I August 2020 flytter vi sammen med resten av Direktoratet til nye lokaler på 
Fyrstikkalléen 1 på Helsfyr.

## Kontakt
Hvis du lurer på noe ang. området ta gjerne kontakt med hafsa.

### Folk
{% include generated-members.md %}

[koder vi som default åpent]: https://github.com/navikt/offentlig/blob/master/OpenSource.md
[React]: https://reactjs.org/
[TypeScript]: https://www.typescriptlang.org/
[Visual Studio Code]: https://code.visualstudio.com/
[IntelliJ]: https://www.jetbrains.com/idea/
[Eclipse]: https://www.eclipse.org/
[CircleCI]: https://circleci.com/
[det som betyr noe]: https://www.detsombetyrnoe.no
