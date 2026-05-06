import { motion } from "framer-motion";
import { collections } from "@/lib/products";

const collectionImages = [
  "linear-gradient(135deg, oklch(0.3 0.05 270), oklch(0.15 0.02 270))",
  "linear-gradient(135deg, oklch(0.6 0.2 25), oklch(0.3 0.1 350))",
  "linear-gradient(135deg, oklch(0.5 0.15 170), oklch(0.25 0.08 200))",
  "linear-gradient(135deg, oklch(0.4 0.12 280), oklch(0.2 0.06 300))",
  "linear-gradient(135deg, oklch(0.85 0.2 140), oklch(0.4 0.1 160))",
  "linear-gradient(135deg, oklch(0.7 0.18 40), oklch(0.35 0.1 20))",
];

export function FeaturedCollections() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-body text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Curated For You
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Shop By Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {collections.map((collection, i) => (
            <motion.button
              key={collection.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ perspective: "800px" }}
            >
              <div
                className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-110"
                style={{ background: collectionImages[i] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6">
                <h3 className="font-display text-lg font-bold tracking-wide text-foreground sm:text-xl">
                  {collection.name}
                </h3>
                <span className="mt-1 font-body text-xs text-muted-foreground">
                  {collection.count} Products
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "3rem" }}
                  className="mt-2 h-0.5 bg-primary"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}