import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/lib/store";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setCartOpen, cartCount, wishlist } = useStore();
  const count = cartCount();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1 lg:hidden"
              aria-label="Menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-foreground"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-foreground"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-foreground"
              />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-lg font-bold tracking-wider text-foreground sm:text-xl">
                WE CREATE TRENDS
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 lg:flex">
              {["New Drops", "Streetwear", "Anime", "Fusion", "Sale"].map((item) => (
                <button
                  key={item}
                  className="group relative font-body text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button className="p-2 text-muted-foreground transition-colors hover:text-foreground" aria-label="Search">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              {/* Wishlist */}
              <button className="relative p-2 text-muted-foreground transition-colors hover:text-foreground" aria-label="Wishlist">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Cart"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
                  >
                    {count}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-6 p-8">
              {["New Drops", "Streetwear", "Anime Tees", "Indian Fusion", "Hoodies", "Sale"].map(
                (item, i) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-2xl font-bold tracking-wide text-foreground"
                  >
                    {item}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}