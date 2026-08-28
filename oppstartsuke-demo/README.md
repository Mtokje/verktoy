# Oppstartsuke – demo

Statisk demoversjon av et internt oppstartsopplegg for lærlinger:
et instruktørdashbord, en åpen informasjonsside og et anonymt
tilbakemeldingsskjema. **Alle navn, telefonnumre og data er fiktive.**

Originalen kjører med database (innlogging, oppmøteregistrering og
innhold som redigeres live). I denne demoen er databasen erstattet med
en lokal stub – alt fungerer i nettleseren, ingenting lagres.

## Sidene

| Side | Beskrivelse |
|---|---|
| `index.html` | Instruktørdashbord: timeplan, lærlinger, grupper, oppmøte, nettlæring m.m. |
| `info/` | Åpen informasjonsside for lærlingene |
| `tilbakemelding/` | Anonymt evalueringsskjema (1–5-skala + fritekst) |

## Kjør demoen

Åpne `index.html` i en nettleser – eller publiser med GitHub Pages:
Settings → Pages → *Deploy from a branch* → `main` / root.

Bygget som ren HTML/CSS/JS uten rammeverk eller byggsteg.
