import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function TrendingProducts() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <div>
            <span className="font-body text-xs font-medium tracking-[0.3em] text-primary uppercase">
              What&apos;s Hot
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Trending Now
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-full border border-foreground/20 px-6 py-2 font-body text-xs font-medium tracking-wider text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
          >
            View All
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}