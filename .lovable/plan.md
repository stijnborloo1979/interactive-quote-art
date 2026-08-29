# Verkooppagina QuoteStudio — stijl naar DOBIT solutions

## Doel
Een Nederlandstalige landingspagina die de QuoteStudio-offertetool verkoopt, in de visuele stijl van de DOBIT-website (licht, clean, corporate-met-schwung), met als inhoudelijke kern: **visueel sterke, interactieve offertes**.

## Visuele richting (referentie: dobit.be)
- Licht thema: wit/lichtgrijze achtergronden, veel ademruimte, donker bijna-zwart voor tekst.
- Grote, zeer vette headline links in de hero (meerdere regels, hoge regelafstand), met daaronder korte leadtekst en twee afgeronde knoppen.
- Rechts in de hero een **licht gekantelde, zwevende visual met schaduw** — bij DOBIT een scherm, hier een interactieve offerte-mockup.
- Accentkleur: warm rood (#E8404E-achtig, zoals DOBIT-knoppen) voor CTA's en accenten; secundair de bestaande QuoteStudio-blauw (#2563eb) waar logisch.
- Typografie: vette moderne sans (Space Grotesk voor koppen, Inter voor body — sluit aan bij de bestaande tool).
- Bovenin een dunne utility-balk + hoofdnavigatie met logo links en rode "Contact"-knop rechts.

## Pagina-opbouw (Nederlandse copy)
1. **Navigatie** — QuoteStudio-logo, links (Product, Interactieve offertes, Realisaties, Prijzen), rode CTA-knop "Gratis proberen".
2. **Hero** — headline à la "Offertes die je klant écht beleeft" + leadtekst + 2 knoppen ("Bekijk demo", "Gratis proberen"); rechts een gekantelde interactieve offerte-mockup (met 360°-badge, bedragen en "Accepteren"-knop) met zachte zwevende schaduw.
3. **Vertrouwensbalk** — korte stats (bijv. "2× sneller geaccepteerd", "offerte klaar in minuten").
4. **Interactieve demo-sectie** — werkende mini-offerte in de pagina: bedragen, totalen en een klikbare "Offerte accepteren"-knop die van status wisselt; 360°-badge op de visual. Dit is het bewijs van "interactief".
5. **Features** — 3–4 blokken: visuele offertes in eigen huisstijl, 360°/interactieve beelden, online accorderen & ondertekenen, PDF-export en facturatie.
6. **Realisaties/showcase** — visuele kaarten met voorbeeld-offertes (DOBIT-achtige "Realisaties"-sectie).
7. **Prijzen/CTA** — eenvoudig prijsblok met rode CTA.
8. **Footer** — minimalistisch, logo + links + contactgegevens.

## Techniek
- Bestaande placeholder `src/routes/index.tsx` vervangen door deze landingspagina (route `/`).
- Nieuwe componenten onder `src/components/` (nav, hero, demo-offerte, features, showcase, pricing, footer).
- Designtokens (rood accent, kleuren) toevoegen in `src/styles.css` via oklch; lettertypes Space Grotesk + Inter via `<link>` in `__root.tsx` head.
- Beelden: offerte-visual, showcase-beelden en testimonial/portret genereren met image generation (geen stockfoto's).
- Eigen `head()` op index: NL title/description/og-tags (geen "Lovable App").
- Responsief: mobiel eerst, hero stapelt onder elkaar; desktop volgt DOBIT-compositie.
