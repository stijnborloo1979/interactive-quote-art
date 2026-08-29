import { QuoteCard } from "./QuoteCard";

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-foreground md:text-6xl">
            Offertes die je klant écht beleeft
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Geen saaie PDF die in de inbox blijft liggen. QuoteStudio maakt van
            elke offerte een <strong className="text-foreground">visuele, interactieve ervaring</strong> —
            met 360°-beelden, live bedragen en ondertekenen in één tik.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Bekijk de demo
            </a>
            <a
              href="#prijzen"
              className="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Gratis proberen
            </a>
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-full bg-brand/10 blur-3xl"
          />
          <QuoteCard tilted />
        </div>
      </div>
    </section>
  );
}
