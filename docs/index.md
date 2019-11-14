---
title: Produktområde Arbeidgiver
---
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="/arbeidsgiver/assets/js/charts.js"></script>
# Hvem jobber i området


## Teamene
Produktområdet er fordelt på fire autonome produktteam:
* Inkluderende Arbeidsliv
* Inkluderende Rekruttering
* Min Side Arbeidsgiver
* Tiltak

## Sammensetning
Teamene har en tverrfaglig sammensetning med av fagpersoner, designere, utviklere og produkteiere.
<div id="chart-Rolle"></div>
Rundt teamene har vi ett støtteapparat som server økonomi, kommunikasjon og andre funksjoner for å 
supportere produktteamene.

## Utvikling
Utviklere kan velge mellom å PC og Mac, og har friheten til å bruke de verktøyene de liker best til 
utvikling. Enten det måtte være [Visual Studio Code], [IntelliJ] eller [Eclipse]. Det jobbes også med 
muligheten til å utvikler på maskiner som kjører linux, men vi har det ikke helt klart enda.

### Kildekode
I NAV [koder vi som default åpent] det er unntaksvis at man lukker repositories basert på en vurdering
av teamet selv. I produktområdet arbeidsgiver har vi følgende åpne repositories:
* [bedriftsmeny](https://github.com/navikt/bedriftsmeny)
* [ditt-nav-arbeidsgiver-api](https://github.com/navikt/ditt-nav-arbeidsgiver-api)
* [ditt-nav-arbeidsgiver](https://github.com/navikt/ditt-nav-arbeidsgiver)
* [familie-dokgen-java](https://github.com/navikt/familie-dokgen-java)
* [finn-kandidat-api](https://github.com/navikt/finn-kandidat-api)
* [finn-kandidat](https://github.com/navikt/finn-kandidat)
* [iaweb-monitorering](https://github.com/navikt/iaweb-monitorering)
* [kontakt-oss-api](https://github.com/navikt/kontakt-oss-api)
* [kontakt-oss](https://github.com/navikt/kontakt-oss)
* [kursoversikt](https://github.com/navikt/kursoversikt)
* [rekrutteringsbistand-api](https://github.com/navikt/rekrutteringsbistand-api)
* [sykefravarsstatistikk-api](https://github.com/navikt/sykefravarsstatistikk-api)
* [sykefravarsstatistikk](https://github.com/navikt/sykefravarsstatistikk)
* [tiltak-tilsagnsbrev](https://github.com/navikt/tiltak-tilsagnsbrev)
* [tiltaksgjennomforing-api](https://github.com/navikt/tiltaksgjennomforing-api)
* [tiltaksgjennomforing-prosess](https://github.com/navikt/tiltaksgjennomforing-prosess)
* [tiltaksgjennomforing-varsel](https://github.com/navikt/tiltaksgjennomforing-varsel)
* [tiltaksgjennomforing](https://github.com/navikt/tiltaksgjennomforing)

### Programmeringsspråk
Vi skriver all frontend-code i [React] og fortrinnsvis med [TypeScript]. På backend er det [kotlin]
og [java] som dominerer og Spring Boot der det er naturlig. Vi ønsker også å bruke lettere løsninger
på dette, det er det egentlig opp til teamene å avgjøre.

### Bygg og deploy
Produktområdet bygger og tester all koden vår på CircleCI og deployer til NAVs clustere derfra.

## Kontakt
Hvis du lurer på noe ang. produktområdet ta gjerne kontakt med hafsa.

[koder vi som default åpent]: https://github.com/navikt/offentlig/blob/master/OpenSource.md
[React]: https://reactjs.org/
[TypeScript]: https://www.typescriptlang.org/
[Visual Studio Code]: https://code.visualstudio.com/
[IntelliJ]: https://www.jetbrains.com/idea/
[Eclipse]: https://www.eclipse.org/
