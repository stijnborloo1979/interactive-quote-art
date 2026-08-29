import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/landing/Nav";
import { Hero } from "../components/landing/Hero";
import {
  Stats,
  Demo,
  Features,
  Showcase,
  Pricing,
  Footer,
} from "../components/landing/Sections";

const title = "QuoteStudio — Interactieve offertes die verkopen";
const description =
  "Maak visueel sterke, interactieve offertes met 360°-beelden, live bedragen en online ondertekenen. 30 dagen gratis proberen.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Demo />
        <Features />
        <Showcase />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
