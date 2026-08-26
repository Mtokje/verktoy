# Verktøykassen – oppsett

Samling av frittstående HTML-verktøy, publisert med GitHub Pages.

## Repo-struktur

Alt ligger flatt i roten – det gir enklest mulige lenker og null path-trøbbel:

```
verktoy/
├── index.html                  ← menysiden (denne mappen sin forside)
├── README.md
├── eksempel-kalkulator.html    ← verktøyene dine, én fil per verktøy
├── eksempel-quiz.html
└── ...
```

## Førstegangsoppsett (5 min, alt i nettleseren)

1. Logg inn på github.com → **New repository** → kall det f.eks. `verktoy`, sett **Public**, opprett.
2. **Add file → Upload files** → dra inn `index.html` og verktøyfilene dine → **Commit changes**.
3. Gå til **Settings → Pages** → under *Branch*: velg `main` og `/ (root)` → **Save**.
4. Vent 1–2 minutter. Siden ligger nå på:
   `https://DITTBRUKERNAVN.github.io/verktoy/`

Del den ene adressen – menysiden lenker til resten.

## Legge til et nytt verktøy (1 min)

1. **Add file → Upload files** → last opp den nye html-filen.
2. Åpne `index.html` i repoet → blyantikonet (Edit) → finn `TOOLS`-listen øverst i `<script>` og legg til én linje:
   ```js
   { file: "min-nye-fil.html", name: "Navn på verktøyet", desc: "Én setning om hva det gjør.", cat: "Fagopplæring" },
   ```
3. **Commit changes**. Live etter et minutt eller to.

Kategorier lages automatisk ut fra `cat`-feltet – skriv en ny kategori, og den dukker opp som egen seksjon.

## Verdt å vite

- **Filnavn**: bruk små bokstaver, bindestrek i stedet for mellomrom, unngå æøå i filnavn (`fse-quiz.html`, ikke `FSE quiz.html`).
- **Offentlig**: alt i repoet er synlig for hele verden. Ikke last opp noe internt fra Aker, og aldri API-nøkler i koden.
- **QR-kode**: lag gjerne en QR-kode av adressen til bruk på slides/oppslag – f.eks. på qrcode.no eller lignende.
- **Eget domene senere**: kan pekes til GitHub Pages via Settings → Pages → Custom domain, hvis github.io-adressen blir klønete å dele.
