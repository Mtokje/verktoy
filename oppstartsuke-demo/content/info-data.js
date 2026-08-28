/* =====================================================================
   INNHOLD – åpen infoside for lærlingene
   Redigeres av Claude på beskjed fra Marius. Netlify deployer automatisk.
   ===================================================================== */
const SEKSJONER = [
  {ikon:"📍", tittel:"Første dag – mandag 10. august", innhold:`
    <div class="viktig"><strong>Oppmøte kl. 08:00 i Kantina</strong> – bruk hovedporten (port 1) og si at du er ny lærling, så blir du vist vei.</div>
    <p>Beregn god tid første dagen – det er mange nye ansikter og litt kø i porten. Vi holder på til ca. kl. 15:00.</p>`},
  {ikon:"🎒", tittel:"Dette må du ha med", innhold:`
    <ul>
      <li><strong>Gyldig legitimasjon</strong> (pass, førerkort eller bankkort med bilde)</li>
      <li>Skattekort og kontonummer (hvis ikke levert)</li>
      <li>Innesko/joggesko – verneutstyr og arbeidstøy får du utdelt</li>
      <li>Matpakke trenger du ikke – lunsj i kantina er dekket i oppstartsukene</li>
    </ul>`},
  {ikon:"🚗", tittel:"Parkering og transport", innhold:`
    <p><strong>Bil:</strong> Parker på besøksparkeringen ved port 1 de to første ukene (gratis, ingen oblat nødvendig ennå).</p>
    <p><strong>Buss:</strong> Rute 730 stopper rett ved hovedporten. Sjekk skyss.no for tider.</p>`},
  {ikon:"⛑️", tittel:"HMS – de viktigste reglene", innhold:`
    <ul>
      <li>Verneutstyr er <strong>alltid</strong> på i verksted- og uteområder – hjelm, briller, vernesko</li>
      <li>Gå aldri inn i sperrede områder, følg alltid merkede gangveier</li>
      <li>Er du usikker – <strong>spør!</strong> Ingen spørsmål er dumme her</li>
      <li>Ser du noe farlig, si fra til nærmeste instruktør med en gang</li>
    </ul>
    <div class="viktig">Mobilbruk er ikke tillatt i produksjonsområdene – bilder tar du bare der det er avklart.</div>`},
  {ikon:"💻", tittel:"Nettlæring du skal gjennom", innhold:`
    <p>I løpet av uke 33 skal alle fullføre disse kursene (lenker/QR får du også i PC-rommet):</p>
    <ul>
      <li>HMS-introduksjon <em>(før første dag i verksted)</em></li>
      <li>Brannvern</li>
      <li>Arbeid i høyden</li>
      <li>Personvern og IT-sikkerhet</li>
    </ul>`},
  {ikon:"🤒", tittel:"Syk eller forsinket?", innhold:`
    <div class="viktig">Ring eller send SMS <strong>før kl. 07:45</strong> til fraværstelefonen: <strong>900 00 000</strong> <em>(eksempelnummer)</em>.</div>
    <p>Gi beskjed selv om du bare er litt forsinket – da slipper vi å lete etter deg.</p>`},
  {ikon:"📞", tittel:"Kontakter", innhold:`
    <div class="kontakt"><span><strong>Marius Torp</strong><span class="rolle">Leder, Yard Academy</span></span><a href="tel:+4790000001">900 00 001</a></div>
    <div class="kontakt"><span><strong>Fraværstelefon</strong><span class="rolle">Sykdom og forsinkelser</span></span><a href="tel:+4790000000">900 00 000</a></div>
    <div class="kontakt"><span><strong>Resepsjon port 1</strong><span class="rolle">Adgang og besøk</span></span><a href="tel:+4790000002">900 00 002</a></div>`}
];
