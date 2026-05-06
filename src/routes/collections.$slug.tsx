import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { QuickView } from "@/components/QuickView";
import { ProductCard } from "@/components/ProductCard";
import { products, collections } from "@/lib/products";

export const Route = createFileRoute("/collections/$slug")({
  head: ({ params }) => {
    const collection = collections.find((c) => c.slug === params.slug);
    const name = collection?.name ?? "Collection";
    return {
      meta: [
        { title: `${name} — WE CREATE TRENDS` },
        { name: "description", content: `Shop ${name} collection at We Create Trends. Premium Gen Z Indian streetwear.` },
      ],
    };
  },
  component: CollectionPage,
});

function getCollectionProducts(slug: string) {
  switch (slug) {
    case "streetwear":
      return products.filter((p) => p.category === "Streetwear");
    case "anime-tees":
      return products.filter((p) => p.category === "Anime Tees");
    case "indian-fusion":
      return products.filter((p) => p.category === "Indian Fusion");
    case "hoodies":
      return products.filter((p) => p.category === "Hoodies");
    case "new-drops":
      return products.filter((p) => p.isNew);
    case "best-sellers":
      return products.filter((p) => p.rating >= 4.7);
    default:
      return products;
  }
}

function CollectionPage() {
  const { slug } = Route.useParams();
  const collection = collections.find((c) => c.slug === slug);
  const collectionProducts = getCollectionProducts(slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <QuickView />

      {/* Hero banner */}
      <div className="relative pt-16">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-body text-xs font-medium tracking-[0.3em] text-primary uppercase">
              Collection
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {collection?.name ?? "All Products"}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-2 font-body text-sm text-muted-foreground">
              {collectionProducts.length} Products
            </motion.p>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {collectionProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {collectionProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-body text-muted-foreground">No products found in this collection.</p>
            <Link to="/" className="mt-4 inline-block font-display text-sm font-bold text-primary uppercase">
              Back to Home
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}