import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { collections } from "@/lib/products";

import streetwearImg from "@/assets/collections/streetwear.jpg";
import animeTeesImg from "@/assets/collections/anime-tees.jpg";
import indianFusionImg from "@/assets/collections/indian-fusion.jpg";
import hoodiesImg from "@/assets/collections/hoodies.jpg";
import newDropsImg from "@/assets/collections/new-drops.jpg";
import bestSellersImg from "@/assets/collections/best-sellers.jpg";

const collectionImages = [streetwearImg, animeTeesImg, indianFusionImg, hoodiesImg, newDropsImg, bestSellersImg];

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
            <Link
              key={collection.slug}
              to="/collections/$slug"
              params={{ slug: collection.slug }}
              className="group relative overflow-hidden rounded-2xl block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
                style={{ perspective: "800px" }}
              >
              <img
                src={collectionImages[i]}
                alt={collection.name}
                loading="lazy"
                width={768}
                height={576}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6">
                <h3 className="font-display text-lg font-bold tracking-wide text-foreground sm:text-xl">
                  {collection.name}
                </h3>
                <span className="mt-1 font-body text-xs text-muted-foreground">
                  {collection.count} Products
                </span>
                <div className="mt-2 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-12" />
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}