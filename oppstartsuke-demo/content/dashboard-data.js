/* =====================================================================
   INNHOLD – dashboard
   Demoversjon – alle navn og data er fiktive. Netlify deployer automatisk.
   Kilder: Plan uke 33/34 (05.08.2026) + Faglig leder oversikt.xlsx (03.08.2026)
   Avklart 03.08: A-program gjelder alle grupper der B/C ikke har eget program.
   ===================================================================== */

/* Lærlingliste 05.08 – 31 lærlinger. Avklart 05.08: navn vises også på åpen
   infoside; telefon vises kun bak innlogging i dashbordet. */
const LARLINGER = [
  {id:1, navn:"Emil Strand", fag:"Sveisefaget", gruppe:"A", leder:"Ole Paulsen", tlf:"900 00 001"},
  {id:2, navn:"Nora Holm", fag:"Sveisefaget", gruppe:"A", leder:"Ole Paulsen", tlf:"900 00 002"},
  {id:3, navn:"Jonas Mork", fag:"Sveisefaget", gruppe:"A", leder:"Ole Paulsen", tlf:"900 00 003"},
  {id:4, navn:"Ida Aune", fag:"Sveisefaget", gruppe:"A", leder:"Ole Paulsen", tlf:"900 00 004"},
  {id:5, navn:"Sander Mork", fag:"Sveisefaget", gruppe:"A", leder:"Ole Paulsen", tlf:"900 00 005"},
  {id:6, navn:"Maja Tangen", fag:"Sveisefaget", gruppe:"A", leder:"Ole Paulsen", tlf:"900 00 006"},
  {id:7, navn:"Oliver Sande", fag:"Sveisefaget", gruppe:"A", leder:"Ole Paulsen", tlf:"900 00 007"},
  {id:8, navn:"Thea Aune", fag:"Sveisefaget", gruppe:"A", leder:"Ole Paulsen", tlf:"900 00 008"},
  {id:9, navn:"Henrik Strand", fag:"Logistikkfaget", gruppe:"A", leder:"Halvor Iversen", tlf:"900 00 009"},
  {id:10, navn:"Sara Rud", fag:"Logistikkfaget", gruppe:"A", leder:"Halvor Iversen", tlf:"900 00 010"},
  {id:11, navn:"Mathias Moen", fag:"Logistikkfaget", gruppe:"A", leder:"Halvor Iversen", tlf:"900 00 011"},
  {id:12, navn:"Emma Rud", fag:"Kran- og løfteoperasjonsfaget", gruppe:"A", leder:"Anders Bakke", tlf:"900 00 012"},
  {id:13, navn:"Tobias Kvam", fag:"Industrirørleggerfaget", gruppe:"B", leder:"Oskar Holm", tlf:"900 00 013"},
  {id:14, navn:"Frida Kvam", fag:"Industrirørleggerfaget", gruppe:"B", leder:"Oskar Holm", tlf:"900 00 014"},
  {id:15, navn:"Adrian Eik", fag:"Industrirørleggerfaget", gruppe:"B", leder:"Oskar Holm", tlf:"900 00 015"},
  {id:16, navn:"Live Nes", fag:"Platearbeiderfaget", gruppe:"B", leder:"Kenneth Eng", tlf:"900 00 016"},
  {id:17, navn:"Elias Fjeld", fag:"Platearbeiderfaget", gruppe:"B", leder:"Kenneth Eng", tlf:"900 00 017"},
  {id:18, navn:"Selma Grov", fag:"Isolatørfaget", gruppe:"B", leder:"Bjørn Nilsen", tlf:"900 00 018"},
  {id:19, navn:"Magnus Eik", fag:"Isolatørfaget", gruppe:"B", leder:"Bjørn Nilsen", tlf:"900 00 019"},
  {id:20, navn:"Tuva Øren", fag:"Automatiseringsfaget", gruppe:"C", leder:"Kasper Dahl", tlf:"900 00 020"},
  {id:21, navn:"Sebastian Sol", fag:"Automatiseringsfaget", gruppe:"C", leder:"Kasper Dahl", tlf:"900 00 021"},
  {id:22, navn:"Ingrid Bakke", fag:"Automatiseringsfaget", gruppe:"C", leder:"Kasper Dahl", tlf:"900 00 022"},
  {id:23, navn:"Johannes Bakke", fag:"Automatiseringsfaget", gruppe:"C", leder:"Kasper Dahl", tlf:"900 00 023"},
  {id:24, navn:"Amalie Skar", fag:"Automatiseringsfaget", gruppe:"C", leder:"Kasper Dahl", tlf:"900 00 024"},
  {id:25, navn:"Aksel Bakke", fag:"Elektrikerfaget", gruppe:"C", leder:"Einar Sund", tlf:"900 00 025"},
  {id:26, navn:"Vilde Bakke", fag:"Elektrikerfaget", gruppe:"C", leder:"Einar Sund", tlf:"900 00 026"},
  {id:27, navn:"Isak Grov", fag:"Elektrikerfaget", gruppe:"C", leder:"Einar Sund", tlf:"900 00 027"},
  {id:28, navn:"Hedda Voll", fag:"Elektrikerfaget", gruppe:"C", leder:"Einar Sund", tlf:"900 00 028"},
  {id:29, navn:"Theodor Moen", fag:"Energimontørfaget", gruppe:"C", leder:"Hanne Eik", tlf:"900 00 029"},
  {id:30, navn:"Ronja Berg", fag:"Energimontørfaget", gruppe:"C", leder:"Hanne Eik", tlf:"900 00 030"},
  {id:31, navn:"Sigurd Kvam", fag:"Telekommunikasjonsmontørfaget", gruppe:"C", leder:"Steinar Foss", tlf:"900 00 031"}
];

/* Faglige ledere – ekte oversikt (03.08.2026). Tlf/e-post legges inn senere. */
const LEDERE = [
  {fag:"Anleggsmaskinførerfaget",        navn:"Ingrid Nes"},
  {fag:"Automatiseringsfaget",           navn:"Kasper Dahl"},
  {fag:"Elektrikerfaget",                navn:"Einar Sund"},
  {fag:"Energimontørfaget",              navn:"Hanne Eik"},
  {fag:"Gjenvinningsfaget",              navn:"Ivar Vik"},
  {fag:"Industrimalerfaget",             navn:"Sverre Lie"},
  {fag:"Industrimekanikerfaget",         navn:"Aksel Skar"},
  {fag:"Industrioppmålingsfaget",        navn:"Karl Kvam"},
  {fag:"Industrirørleggerfaget",         navn:"Oskar Holm"},
  {fag:"Isolatørfaget",                  navn:"Bjørn Nilsen"},
  {fag:"Kran- og løfteoperasjonsfaget",  navn:"Anders Bakke"},
  {fag:"Logistikkfaget",                 navn:"Halvor Iversen"},
  {fag:"NDT-kontrollfaget",              navn:"Petter Moen"},
  {fag:"Platearbeiderfaget",             navn:"Kenneth Eng", merknad:"Overtar etter Nils Norum (info fra mai 2026)"},
  {fag:"Stillasbyggerfaget",             navn:"Harald Grov"},
  {fag:"Sveisefaget",                    navn:"Ole Paulsen"},
  {fag:"Telekommunikasjonsmontørfaget",  navn:"Steinar Foss"}
];

/* Gruppeledere (04.08) */
const GRUPPELEDERE = { A:"Anders", B:"Ole Georg / Ottar", C:"Kasper" };

/* Fagvis gruppefordeling – reelle 2026-tall fra lærlinglisten (sum 31) */
const GRUPPEFORDELING = {
  A: [
    {fag:"Sveisefaget", antall:8},
    {fag:"Logistikkfaget", antall:3},
    {fag:"Kran- og løfteoperasjonsfaget", antall:1}
  ],
  B: [
    {fag:"Industrirørleggerfaget", antall:3},
    {fag:"Platearbeiderfaget", antall:2},
    {fag:"Isolatørfaget", antall:2}
  ],
  C: [
    {fag:"Automatiseringsfaget", antall:5},
    {fag:"Elektrikerfaget", antall:4},
    {fag:"Energimontørfaget", antall:2},
    {fag:"Telekommunikasjonsmontørfaget", antall:1}
  ]
};

const DAGER = [
  {uke:33, dato:"2026-08-10", label:"Mandag",  kort:"10. aug"},
  {uke:33, dato:"2026-08-11", label:"Tirsdag", kort:"11. aug"},
  {uke:33, dato:"2026-08-12", label:"Onsdag",  kort:"12. aug"},
  {uke:33, dato:"2026-08-13", label:"Torsdag", kort:"13. aug"},
  {uke:33, dato:"2026-08-14", label:"Fredag",  kort:"14. aug"},
  {uke:34, dato:"2026-08-17", label:"Mandag",  kort:"17. aug"},
  {uke:34, dato:"2026-08-18", label:"Tirsdag", kort:"18. aug"},
  {uke:34, dato:"2026-08-19", label:"Onsdag",  kort:"19. aug"},
  {uke:34, dato:"2026-08-20", label:"Torsdag", kort:"20. aug"},
  {uke:34, dato:"2026-08-21", label:"Fredag",  kort:"21. aug"}
];

/* Klasseromsansvarlig («voksen i rommet») per dag, uke 33 (04.08) */
const VERTER = {
  "2026-08-11": "Marius",
  "2026-08-12": "Anders",
  "2026-08-13": "Kasper",
  "2026-08-14": "Anders"
};
const KLASSEROM_OPPGAVER = "Klasseromsansvarlig: opptelling morgen + ettermiddag, være til stede under presentasjoner, følge med på mobilbruk/ørepropper/de som sovner. Roter etter behov – én person skal slippe å ta hele dagen.";

/* Timeplan – generert fra Plan uke 33/34 (uke 33: 12.08 / uke 34: arbeidsfil 18.08). Med forbehold om endringer. */
const TIMEPLAN = {
  "2026-08-10": [
    {tid:"09:00", tittel:"Opplæringskontoret: oppstartssamling dag 1 (09:00–15:00) – Opplæringskontoret", sted:"Kulturhuset", gr:"Alle"}
  ],
  "2026-08-11": [
    {tid:"07:00", tittel:"Oppmøte kl 07:00 (07:00–09:00) – Lars Otto, Anders, Kasper", sted:"Ankomstsenter · Bilde, kortutdelling", gr:"Alle"},
    {tid:"09:00", tittel:"INFOMØTE: Velkommen og husregler (09:00–10:30) – Lars Otto, Marius", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"10:30", tittel:"INNLEGG: Velkommen til verftet (10:30–11:30) – A. Hansen, N. Aas", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00) – Pizza på huset!", sted:"Kantine 1. etasje", gr:"Alle", lunsj:true},
    {tid:"12:00", tittel:"Meet&greet med faglige ledere (12:00–12:30)", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"12:30", tittel:"INNLEGG: Info fra tillitsvalgte (12:30–13:30) – F. Moen, R. Berg", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"13:30", tittel:"Utdeling av garderobeskap og PVU (13:30–15:00) – Anders", sted:"", gr:"Alle"}
  ],
  "2026-08-12": [
    {tid:"07:00", tittel:"Oppmøte kl 07:00 – Anders", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"07:30", tittel:"INNLEGG: Info fra HR (07:30–08:30) – Mari Voll", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"08:45", tittel:"INNLEGG: Kvalitet og kontinuerlig forbedring (08:45–10:15) – Berit Solheim, Kai Mikkelsen", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"10:30", tittel:"Gruppebilde (10:30–11:30) – E. Strand, L. Myhre", sted:"Yard Academy · Husk vernetøy", gr:"Alle"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00) – Husk matboks!", sted:"", gr:"Alle", lunsj:true},
    {tid:"12:00", tittel:"KURS: Fallende gjenstander (12:00–15:00) – Mona Mork", sted:"Yard Academy, Klasse 1", gr:"Alle"}
  ],
  "2026-08-13": [
    {tid:"07:00", tittel:"Oppmøte kl 07:00 – Kasper", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"07:15", tittel:"KURS: Brannslukking (07:15–11:30) – A. Tangen, M. Engen", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00) – Husk matboks!", sted:"", gr:"Alle", lunsj:true},
    {tid:"12:00", tittel:"INNLEGG: Info fra BHT (12:00–13:30) – L. Skog", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"13:45", tittel:"INNLEGG: Info fra ungdomsnettverket & LAN-klubben (13:45–15:00) – A. Stokke, K. Aune", sted:"Yard Academy, Klasse 1", gr:"Alle"}
  ],
  "2026-08-14": [
    {tid:"07:00", tittel:"Oppmøte kl 07:00 (07:00–07:05) – Anders", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"07:05", tittel:"INNLEGG: Velferdsforeningen (07:05–07:30) – J.E. Østby", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"07:30", tittel:"KURS: Kjemikalie (07:30–10:00) – Siri Moe", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"10:00", tittel:"MØTE: Bestilling av mobtel (10:00–11:30) – Silje Sund, Lars Otto", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00) – Husk matboks!", sted:"", gr:"Alle", lunsj:true},
    {tid:"12:00", tittel:"KURS: DS (12:00–15:00) – Ottar", sted:"Opplæringsverksted-Rør og stål (bygg 16) · Ottar henter dere ved Yard Academy.", gr:"A"},
    {tid:"12:00", tittel:"Kjentsmannrunde (12:00–15:00) – Din faglig leder", sted:"Yard Academy, Klasse 1 · Deres faglige ledere møter dere i klasserom 1.", gr:"B"},
    {tid:"12:00", tittel:"Kjentsmannrunde (12:00–15:00) – Din faglig leder", sted:"Yard Academy, Klasse 1 · Deres faglige ledere møter dere i klasserom 1.", gr:"C"}
  ],
  "2026-08-17": [
    {tid:"07:00", tittel:"Oppmøte kl 07:00", sted:"Yard Academy, Klasse 4", gr:"Alle"},
    {tid:"07:15", tittel:"KURS: DS-opplæring (07:15–11:30) – Atle", sted:"Opplæringsverksted-Rør og stål (bygg 16) · Husk PVU", gr:"B"},
    {tid:"07:30", tittel:"KURS: Fallsikring (07:30–11:30) – Anders", sted:"Yard Academy, Klasse 4 · Husk PVU", gr:"A"},
    {tid:"07:30", tittel:"KURS: FSE (07:30–11:30) – Stein Aasen, Dag Fossum", sted:"Yard Academy, Klasse 1", gr:"C"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00)", sted:"", gr:"Alle", lunsj:true},
    {tid:"12:00", tittel:"KURS: Fallsikring: praksis (12:00–15:00) – Anders", sted:"Klasse 4 + MK06 · Husk PVU", gr:"A"},
    {tid:"12:00", tittel:"Fagvis opplæring (12:00–15:00) – Faglig leder", sted:"Etter avtale med faglig leder · Husk PVU", gr:"B"},
    {tid:"12:00", tittel:"Fagvis opplæring (12:00–15:00) – Faglig leder", sted:"Etter avtale med faglig leder · Husk PVU", gr:"C"}
  ],
  "2026-08-18": [
    {tid:"07:00", tittel:"Oppmøte kl 07:00", sted:"Yard Academy, Klasse 1", gr:"Alle"},
    {tid:"07:15", tittel:"KURS: DS-opplæring (07:15–11:30) – Frank, Ottar, Atle", sted:"Yard Academy, Kantine 1. etasje · Husk PVU.", gr:"C"},
    {tid:"07:30", tittel:"KURS: Personløfter (07:30–11:30) – Atle", sted:"Klasse 1 · Husk PVU", gr:"A"},
    {tid:"07:30", tittel:"KURS: Fallsikring (07:30–11:30) – Anders", sted:"Yard Academy, Klasse 4 · Husk PVU", gr:"B"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00)", sted:"", gr:"Alle", lunsj:true},
    {tid:"12:00", tittel:"KURS: Personløfter praksis (12:00–15:00) – Atle", sted:"Klasse 4 + MK06 · Husk PVU", gr:"A"},
    {tid:"12:00", tittel:"KURS: Fallsikring: praksis (12:00–15:00) – Anders", sted:"Klasse 4 + MK06 · Husk PVU", gr:"B"},
    {tid:"12:00", tittel:"KURS: DS-opplæring + fagvis opplæring (12:00–15:00) – Faglig leder", sted:"Praksisverkstad · Ferdig med DS-opplæring → fagvis opplæring med faglig leder", gr:"C"}
  ],
  "2026-08-19": [
    {tid:"07:00", tittel:"Oppmøte kl 07:00 (07:00–07:15)", sted:"Yard Academy, Kantine 1.etasje", gr:"A"},
    {tid:"07:00", tittel:"Praksis: Sveiseverksted (07:00–15:00)", sted:"Opplæringsverksted-Rør og stål (bygg 16) · Husk PVU", gr:"B"},
    {tid:"07:00", tittel:"Oppmøte kl 07:00", sted:"Yard Academy, Klasse 4", gr:"C"},
    {tid:"07:30", tittel:"Kjentsmannrunde + fagvis opplæring (07:30–15:00) – Faglig leder", sted:"Yard Academy · Husk PVU", gr:"A"},
    {tid:"07:30", tittel:"KURS: Fallsikring (07:30–11:30) – Anders", sted:"Yard Academy, Klasse 4 · Husk PVU", gr:"C"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00)", sted:"", gr:"C", lunsj:true},
    {tid:"12:00", tittel:"KURS: Fallsikring: praksis (12:00–15:00) – Anders", sted:"Klasse 4 + MK06 · Husk PVU", gr:"C"}
  ],
  "2026-08-20": [
    {tid:"07:00", tittel:"Fagvis opplæring (07:00–15:00) – Faglig leder", sted:"Etter avtale med faglig leder · Husk PVU", gr:"A"},
    {tid:"07:00", tittel:"Fagvis opplæring (07:00–15:00) – Faglig leder", sted:"Etter avtale med faglig leder · Husk PVU", gr:"B"},
    {tid:"07:00", tittel:"Oppmøte kl 07:00", sted:"Yard Academy, Klasse 1", gr:"C"},
    {tid:"07:30", tittel:"KURS: Personløfter (07:30–11:30) – Atle", sted:"Klasse 1 · Husk PVU", gr:"C"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00)", sted:"", gr:"C", lunsj:true},
    {tid:"12:00", tittel:"KURS: Personløfter praksis (12:00–15:00) – Atle", sted:"Klasse 4 + MK06 · Husk PVU", gr:"C"}
  ],
  "2026-08-21": [
    {tid:"07:00", tittel:"Fagvis opplæring (07:00–15:00) – Faglig leder", sted:"Etter avtale med faglig leder · Husk PVU", gr:"A"},
    {tid:"07:00", tittel:"Oppmøte kl 07:00 (07:00–07:05)", sted:"Yard Academy, Klasse 1", gr:"B"},
    {tid:"07:00", tittel:"Fagvis opplæring (07:00–15:00) – Faglig leder", sted:"Etter avtale med faglig leder · Husk PVU", gr:"C"},
    {tid:"07:05", tittel:"KURS: Personløfter (07:05–15:00) – Atle", sted:"Yard Academy, Klasse 1", gr:"B"},
    {tid:"11:30", tittel:"Lunsj (11:30–12:00)", sted:"", gr:"B", lunsj:true},
    {tid:"12:00", tittel:"KURS: Personløfter praksis (12:00–15:00) – Atle", sted:"Klasse 1 + MK06 · Husk PVU", gr:"B"}
  ]
};

/* Nettlæring – skann QR eller bruk lenken */
const NETTLARING = [
  {tittel:"Introkurs (demo)", desc:"Eksempel på nettkurs med QR-kode", url:"https://example.com/kurs"}
];

/* Filmer som vises i klasserommet. intern:true = krever intern pålogging. */
const FILMER = [
  {tittel:"Introduksjonsfilm", kilde:"Video", intern:false, desc:"Eksempelfilm i spillelisten.", url:"https://example.com/film1"},
  {tittel:"HMS-film", kilde:"Video", intern:true, desc:"Eksempel på film som krever intern pålogging.", url:"https://example.com/film2"}
];
