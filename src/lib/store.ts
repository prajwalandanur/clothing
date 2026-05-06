import { create } from "zustand";
import type { Product } from "./products";

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  cartOpen: boolean;
  quickViewProduct: Product | null;
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  setCartOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void;
  cartTotal: () => number;
  cartCount: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  wishlist: [],
  cartOpen: false,
  quickViewProduct: null,

  addToCart: (product, size = "M") => {
    set((state) => {
      const existing = state.cart.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          cartOpen: true,
        };
      }
      return {
        cart: [...state.cart, { product, quantity: 1, size }],
        cartOpen: true,
      };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    }));
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  toggleWishlist: (productId) => {
    set((state) => ({
      wishlist: state.wishlist.includes(productId)
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId],
    }));
  },

  setCartOpen: (open) => set({ cartOpen: open }),
  setQuickViewProduct: (product) => set({ quickViewProduct: product }),

  cartTotal: () =>
    get().cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    ),

  cartCount: () =>
    get().cart.reduce((sum, item) => sum + item.quantity, 0),
}));