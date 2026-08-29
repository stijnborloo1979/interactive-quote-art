const links = [
  { label: "Product", href: "#demo" },
  { label: "Interactieve offertes", href: "#features" },
  { label: "Realisaties", href: "#realisaties" },
  { label: "Prijzen", href: "#prijzen" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-brand font-display text-sm font-bold text-brand-foreground">
            Q
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            QuoteStudio
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hoofdmenu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#prijzen"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
        >
          Gratis proberen
        </a>
      </div>
    </header>
  );
}
