import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useStore } from "@/lib/store";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export function QuickView() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, wishlist } = useStore();
  const [selectedSize, setSelectedSize] = useState("M");
  const product = quickViewProduct;
  const isWished = product ? wishlist.includes(product.id) : false;

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickViewProduct(null)}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-4 z-50 m-auto max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl bg-card border border-border sm:inset-8"
          >
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden md:rounded-l-2xl">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  layoutId={`product-image-${product.id}`}
                />
                {product.discount > 0 && (
                  <span className="absolute top-4 left-4 rounded-full bg-destructive px-3 py-1 font-body text-xs font-bold text-destructive-foreground">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col p-6 sm:p-8">
                <span className="font-body text-[10px] font-medium tracking-[0.3em] text-primary uppercase">
                  {product.category}
                </span>
                <h2 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="12"
                        height="12"
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
                  <span className="font-body text-xs text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-2xl font-bold text-foreground">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="font-body text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {/* Size selector */}
                <div className="mt-6">
                  <span className="font-body text-xs font-medium tracking-wider text-foreground uppercase">
                    Size
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg border font-body text-xs font-medium transition-all ${
                          selectedSize === size
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      addToCart(product, selectedSize);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 rounded-full bg-primary py-3 font-display text-xs font-bold tracking-wider text-primary-foreground uppercase glow-neon"
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleWishlist(product.id)}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                      isWished ? "border-destructive text-destructive" : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill={isWished ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Extra info */}
                <div className="mt-6 space-y-2 border-t border-border pt-4">
                  <p className="font-body text-xs text-muted-foreground">
                    🚚 Free shipping on orders above ₹999
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    ↩️ Easy 7-day returns & exchange
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    ✅ 100% authentic products
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}