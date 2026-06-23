# SUB-z website

En let statisk virksomhedshjemmeside bygget i HTML, CSS og JavaScript.

## Lokal visning

Kør fra projektmappen:

```sh
python3 -m http.server 4173
```

Åbn derefter `http://localhost:4173`.

## Struktur

- `index.html` — forside
- `virksomheder.html` — virksomheder
- `kandidater.html` — kandidater
- `ydelser.html` — ydelser
- `stillinger.html` — ledige stillinger med let filtrering
- `nyheder.html` — nyheder
- `kontakt.html` — kontakt
- `assets/styles.css` — fælles design og responsive regler
- `assets/main.js` — fælles header/footer, mobilmenu, formularfeedback og jobfiltre
- `assets/sub-z-logo.png` — officielt SUB-z-logo
- `assets/hero-industrial.webp` — optimeret hero-billede

Formularerne er frontend-demoer og skal kobles til en mailservice eller backend før publicering.
