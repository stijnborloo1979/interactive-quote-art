import { useState } from "react";
import { Check, RotateCw } from "lucide-react";
import quoteHero from "../../assets/quote-hero.jpg";

const items = [
  { label: "Vloerlegging, eikenhout", price: 1240 },
  { label: "Schilderwerk muren & plafond", price: 680 },
  { label: "Afwerking & details", price: 310 },
];

const total = items.reduce((sum, item) => sum + item.price, 0);

const format = (value: number) =>
  `€ ${value.toLocaleString("nl-BE", { minimumFractionDigits: 0 })}`;

export function QuoteCard({ tilted = false }: { tilted?: boolean }) {
  const [accepted, setAccepted] = useState(false);
  const [rotated, setRotated] = useState(false);

  return (
    <div
      className={
        tilted
          ? "rotate-3 transition-transform duration-500 hover:rotate-0"
          : undefined
      }
    >
      <div className="overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-foreground/10">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-md bg-brand font-display text-xs font-bold text-brand-foreground">
              Q
            </span>
            <span className="font-display text-sm font-semibold text-foreground">
              Offerte #2481
            </span>
          </div>
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
              accepted
                ? "bg-emerald-100 text-emerald-700"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {accepted ? "Geaccepteerd" : "In afwachting"}
          </span>
        </div>

        <div className="relative">
          <img
            src={quoteHero}
            alt="Gerenderde impressie van de gerenoveerde woonkamer in de offerte"
            width={1024}
            height={640}
            loading="lazy"
            className={`aspect-[16/10] w-full object-cover transition-transform duration-700 ${
              rotated ? "scale-x-[-1]" : ""
            }`}
          />
          <span className="absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-background">
            360°
          </span>
          <button
            type="button"
            onClick={() => setRotated((v) => !v)}
            aria-label="Draai de 360°-weergave"
            className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-background/90 text-foreground shadow-md transition hover:bg-background"
          >
            <RotateCw className="size-4" />
          </button>
        </div>

        <ul className="divide-y divide-border px-5">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between py-3 text-sm"
            >
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-semibold tabular-nums text-foreground">
                {format(item.price)}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t-2 border-foreground px-5 py-4">
          <span className="text-sm font-semibold text-foreground">
            Totaal excl. btw
          </span>
          <span className="font-display text-2xl font-bold tabular-nums text-foreground">
            {format(total)}
          </span>
        </div>

        <div className="px-5 pb-5">
          <button
            type="button"
            onClick={() => setAccepted((v) => !v)}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-colors ${
              accepted
                ? "bg-emerald-600 text-white"
                : "bg-brand text-brand-foreground hover:bg-brand/90"
            }`}
          >
            {accepted && <Check className="size-4" />}
            {accepted ? "Offerte geaccepteerd" : "Offerte accepteren"}
          </button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Geldig tot 28 september · Veilig online ondertekend
          </p>
        </div>
      </div>
    </div>
  );
}
