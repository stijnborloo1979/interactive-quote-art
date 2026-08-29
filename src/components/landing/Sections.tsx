import { Palette, Rotate3d, PenLine, FileText } from "lucide-react";
import { QuoteCard } from "./QuoteCard";
import keuken from "../../assets/showcase-keuken.jpg";
import kantoor from "../../assets/showcase-kantoor.jpg";
import badkamer from "../../assets/showcase-badkamer.jpg";

const stats = [
  { value: "2×", label: "sneller geaccepteerd" },
  { value: "3 min", label: "om een offerte op te maken" },
  { value: "94%", label: "wordt op mobiel geopend" },
  { value: "0", label: "heen-en-weer e-mails" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-bold text-brand">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Demo() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <QuoteCard />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            Probeer het zelf
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
            Dit is wat je klant ziet
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Draai aan het beeld, bekijk de posten en accepteer de offerte. Precies
            zoals je klant het doet — op zijn telefoon, zonder inloggen, zonder
            bijlagen.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>· Interactieve beelden bij elke post</li>
            <li>· Totalen die live meerekenen bij opties</li>
            <li>· Directe acceptatie met digitale handtekening</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Palette,
    title: "Volledig in jouw huisstijl",
    text: "Logo, kleuren en lettertypes. Elke offerte oogt als een stuk van je merk, niet als een sjabloon.",
  },
  {
    icon: Rotate3d,
    title: "360°- en interactieve beelden",
    text: "Laat je klant door de ruimte of het product draaien, midden in de offerte zelf.",
  },
  {
    icon: PenLine,
    title: "Online accorderen",
    text: "Eén tik en het is getekend. Jij krijgt meteen bericht, zonder printen of scannen.",
  },
  {
    icon: FileText,
    title: "PDF-export & facturatie",
    text: "Van geaccepteerde offerte naar factuur in één klik, inclusief nette PDF voor je boekhouding.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-foreground">
          Alles wat een offerte overtuigend maakt
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <feature.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cases = [
  { img: keuken, title: "Keukenrenovatie", meta: "Vanderveken Interieur · € 24.800" },
  { img: kantoor, title: "Kantoorinrichting", meta: "Atelier Noord · € 61.200" },
  { img: badkamer, title: "Badkamer op maat", meta: "Sanitair De Wilde · € 18.450" },
];

export function Showcase() {
  return (
    <section id="realisaties" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
        Realisaties
      </h2>
      <p className="mt-3 max-w-xl text-lg text-muted-foreground">
        Offertes die vakmensen met QuoteStudio verstuurden — en die getekend
        terugkwamen.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cases.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card"
          >
            <img
              src={item.img}
              alt={item.title}
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="prijzen" className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-background">
          Begin vandaag met betere offertes
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-background/70">
          30 dagen gratis, geen kaartgegevens nodig. Daarna vanaf € 39 per maand
          met onbeperkte interactieve offertes.
        </p>
        <a
          href="#demo"
          className="mt-8 inline-block rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
        >
          Start je proefperiode
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-background/15 px-5 py-8">
        <span className="font-display font-bold text-background">QuoteStudio</span>
        <p className="text-sm text-background/60">
          hallo@quotestudio.be · © 2026 QuoteStudio
        </p>
      </div>
    </footer>
  );
}
