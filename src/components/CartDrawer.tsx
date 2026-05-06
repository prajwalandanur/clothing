import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { useStore } from "@/lib/store";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal } = useStore();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-card border-l border-border"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <h2 className="font-display text-lg font-bold text-foreground">Your Cart</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" className="text-muted-foreground/30">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" x2="21" y1="6" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <p className="mt-4 font-body text-sm text-muted-foreground">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="flex gap-4"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-20 w-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-display text-sm font-semibold text-foreground line-clamp-1">
                            {item.product.name}
                          </h4>
                          <p className="font-body text-xs text-muted-foreground">Size: {item.size}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center gap-2 rounded-lg bg-input px-2 py-1">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="text-xs text-muted-foreground hover:text-foreground"
                              >
                                −
                              </button>
                              <span className="font-body text-xs font-medium text-foreground">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="text-xs text-muted-foreground hover:text-foreground"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-display text-sm font-bold text-foreground">
                              ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="self-start p-1 text-muted-foreground hover:text-destructive"
                        >
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M18 6 6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t border-border px-6 py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-muted-foreground">Subtotal</span>
                    <span className="font-display text-lg font-bold text-foreground">
                      ₹{cartTotal().toLocaleString("en-IN")}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCartOpen(false);
                      navigate({ to: "/checkout" });
                    }}
                    className="w-full rounded-full bg-primary py-3.5 font-display text-sm font-bold tracking-wider text-primary-foreground uppercase glow-neon"
                  >
                    Checkout
                  </motion.button>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="w-full font-body text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}