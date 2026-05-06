import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleWishlist, wishlist, setQuickViewProduct } = useStore();
  const isWished = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group relative"
    >
      {/* Image container */}
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-xl bg-card cursor-pointer"
        onClick={() => setQuickViewProduct(product)}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={533}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/20" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="rounded-full bg-primary px-2.5 py-0.5 font-body text-[10px] font-bold tracking-wider text-primary-foreground uppercase">
              New
            </span>
          )}
          {product.isLimited && (
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-body text-[10px] font-bold tracking-wider text-accent-foreground uppercase">
              Limited
            </span>
          )}
          {product.discount > 0 && (
            <span className="rounded-full bg-destructive px-2.5 py-0.5 font-body text-[10px] font-bold tracking-wider text-destructive-foreground uppercase">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-all"
          aria-label="Add to wishlist"
        >
          <svg
            width="16"
            height="16"
            fill={isWished ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className={isWished ? "text-destructive" : "text-foreground"}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.button>

        {/* Quick add button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1 }}
          className="absolute right-3 bottom-3 left-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full rounded-lg bg-foreground py-2.5 font-body text-xs font-bold tracking-wider text-background uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>

      {/* Product info */}
      <div className="mt-3 space-y-1">
        <p className="font-body text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
          {product.category}
        </p>
        <h3 className="font-display text-sm font-semibold text-foreground line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          {/* Stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="font-body text-[10px] text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-display text-base font-bold text-foreground">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="font-body text-xs text-muted-foreground line-through">
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}