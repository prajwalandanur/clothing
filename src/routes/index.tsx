import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { TrendingProducts } from "@/components/TrendingProducts";
import { AboutBrand } from "@/components/AboutBrand";
import { StyleSuggestion } from "@/components/StyleSuggestion";
import { LimitedDrop } from "@/components/LimitedDrop";
import { Reviews } from "@/components/Reviews";
import { SocialSection } from "@/components/SocialSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { QuickView } from "@/components/QuickView";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WE CREATE TRENDS — Indian Streetwear Reimagined" },
      { name: "description", content: "Premium Gen Z Indian streetwear. Anime-inspired, Indo-western fusion fashion for the new generation. Shop oversized tees, cargo pants, street kurtas & more." },
      { property: "og:title", content: "WE CREATE TRENDS — Indian Streetwear Reimagined" },
      { property: "og:description", content: "Premium Gen Z Indian streetwear. Culture meets chaos." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <TrendingProducts />
      <AboutBrand />
      <StyleSuggestion />
      <LimitedDrop />
      <Reviews />
      <SocialSection />
      <Footer />
      <CartDrawer />
      <QuickView />
    </div>
  );
}
