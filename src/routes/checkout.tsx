import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — WE CREATE TRENDS" },
      { name: "description", content: "Complete your order at We Create Trends." },
    ],
  }),
  component: CheckoutPage,
});

type Step = "info" | "shipping" | "payment" | "confirm";

function CheckoutPage() {
  const { cart, cartTotal } = useStore();
  const [step, setStep] = useState<Step>("info");
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    shippingMethod: "standard",
    paymentMethod: "cod",
  });

  const total = cartTotal();
  const shipping = form.shippingMethod === "express" ? 149 : total >= 1999 ? 0 : 99;
  const grandTotal = total + shipping;

  const steps: { key: Step; label: string }[] = [
    { key: "info", label: "Information" },
    { key: "shipping", label: "Shipping" },
    { key: "payment", label: "Payment" },
    { key: "confirm", label: "Confirmation" },
  ];

  const currentIdx = steps.findIndex((s) => s.key === step);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex min-h-[60vh] flex-col items-center justify-center pt-24 text-center">
          <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" className="text-muted-foreground/30">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" x2="21" y1="6" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <h2 className="mt-4 font-display text-xl font-bold text-foreground">Your cart is empty</h2>
          <p className="mt-2 font-body text-sm text-muted-foreground">Add some items before checking out.</p>
          <Link to="/" className="mt-6 rounded-full bg-primary px-8 py-3 font-display text-sm font-bold tracking-wider text-primary-foreground uppercase">
            Shop Now
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />

      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6">
        {/* Step indicator */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center gap-2">
              <button
                onClick={() => i < currentIdx && setStep(s.key)}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  i <= currentIdx
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i < currentIdx ? "✓" : i + 1}
              </button>
              <span className={`hidden font-body text-xs sm:inline ${i <= currentIdx ? "text-foreground" : "text-muted-foreground"}`}>
                {s.label}
              </span>
              {i < steps.length - 1 && (
                <div className={`mx-2 h-px w-8 sm:w-12 ${i < currentIdx ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Main form area */}
          <div className="lg:col-span-3">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {step === "info" && (
                <>
                  <h2 className="font-display text-2xl font-bold text-foreground">Contact Information</h2>
                  <Input label="Email" value={form.email} onChange={(v) => update("email", v)} placeholder="your@email.com" type="email" />
                  <Input label="Phone" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+91 98765 43210" />

                  <h2 className="pt-4 font-display text-2xl font-bold text-foreground">Shipping Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="First Name" value={form.firstName} onChange={(v) => update("firstName", v)} />
                    <Input label="Last Name" value={form.lastName} onChange={(v) => update("lastName", v)} />
                  </div>
                  <Input label="Address" value={form.address} onChange={(v) => update("address", v)} placeholder="House no., Street, Area" />
                  <Input label="Apartment, Suite, etc. (optional)" value={form.apartment} onChange={(v) => update("apartment", v)} />
                  <div className="grid grid-cols-3 gap-4">
                    <Input label="City" value={form.city} onChange={(v) => update("city", v)} />
                    <Input label="State" value={form.state} onChange={(v) => update("state", v)} />
                    <Input label="PIN Code" value={form.pincode} onChange={(v) => update("pincode", v)} placeholder="110001" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStep("shipping")}
                    className="w-full rounded-full bg-primary py-3.5 font-display text-sm font-bold tracking-wider text-primary-foreground uppercase glow-neon"
                  >
                    Continue to Shipping
                  </motion.button>
                </>
              )}

              {step === "shipping" && (
                <>
                  <h2 className="font-display text-2xl font-bold text-foreground">Shipping Method</h2>
                  <div className="space-y-3">
                    <ShippingOption
                      selected={form.shippingMethod === "standard"}
                      onSelect={() => update("shippingMethod", "standard")}
                      title="Standard Shipping"
                      desc="5-7 business days"
                      price={total >= 1999 ? "FREE" : "₹99"}
                    />
                    <ShippingOption
                      selected={form.shippingMethod === "express"}
                      onSelect={() => update("shippingMethod", "express")}
                      title="Express Shipping"
                      desc="2-3 business days"
                      price="₹149"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep("info")} className="flex-1 rounded-full border border-border py-3.5 font-display text-sm font-bold tracking-wider text-foreground uppercase">
                      Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep("payment")}
                      className="flex-1 rounded-full bg-primary py-3.5 font-display text-sm font-bold tracking-wider text-primary-foreground uppercase glow-neon"
                    >
                      Continue to Payment
                    </motion.button>
                  </div>
                </>
              )}

              {step === "payment" && (
                <>
                  <h2 className="font-display text-2xl font-bold text-foreground">Payment Method</h2>
                  <div className="space-y-3">
                    <PaymentOption selected={form.paymentMethod === "cod"} onSelect={() => update("paymentMethod", "cod")} title="Cash on Delivery" desc="Pay when you receive your order" />
                    <PaymentOption selected={form.paymentMethod === "upi"} onSelect={() => update("paymentMethod", "upi")} title="UPI" desc="Google Pay, PhonePe, Paytm" />
                    <PaymentOption selected={form.paymentMethod === "card"} onSelect={() => update("paymentMethod", "card")} title="Credit / Debit Card" desc="Visa, Mastercard, RuPay" />
                    <PaymentOption selected={form.paymentMethod === "netbanking"} onSelect={() => update("paymentMethod", "netbanking")} title="Net Banking" desc="All major banks supported" />
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep("shipping")} className="flex-1 rounded-full border border-border py-3.5 font-display text-sm font-bold tracking-wider text-foreground uppercase">
                      Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep("confirm")}
                      className="flex-1 rounded-full bg-primary py-3.5 font-display text-sm font-bold tracking-wider text-primary-foreground uppercase glow-neon"
                    >
                      Place Order — ₹{grandTotal.toLocaleString("en-IN")}
                    </motion.button>
                  </div>
                </>
              )}

              {step === "confirm" && (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-primary">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Order Confirmed!</h2>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    Thank you for your order. We'll send a confirmation to {form.email || "your email"}.
                  </p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    Order #WCT{Date.now().toString(36).toUpperCase()}
                  </p>
                  <Link to="/" className="mt-6 inline-block rounded-full bg-primary px-8 py-3 font-display text-sm font-bold tracking-wider text-primary-foreground uppercase">
                    Continue Shopping
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Order summary sidebar */}
          {step !== "confirm" && (
            <div className="lg:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-bold text-foreground">Order Summary</h3>
                <div className="mt-4 space-y-3">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="relative">
                        <img src={item.product.image} alt={item.product.name} className="h-16 w-14 rounded-lg object-cover" />
                        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[10px] font-bold text-foreground">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-display text-xs font-semibold text-foreground line-clamp-1">{item.product.name}</p>
                        <p className="font-body text-xs text-muted-foreground">Size: {item.size}</p>
                      </div>
                      <span className="font-display text-xs font-bold text-foreground">
                        ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2 border-t border-border pt-4">
                  <div className="flex justify-between font-body text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2 font-display text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
                {total < 1999 && (
                  <p className="mt-3 font-body text-xs text-primary">
                    Add ₹{(1999 - total).toLocaleString("en-IN")} more for free shipping!
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Input({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block font-body text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-input px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

function ShippingOption({ selected, onSelect, title, desc, price }: { selected: boolean; onSelect: () => void; title: string; desc: string; price: string }) {
  return (
    <button onClick={onSelect} className={`flex w-full items-center justify-between rounded-xl border p-4 transition-colors ${selected ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
      <div className="flex items-center gap-3">
        <div className={`h-4 w-4 rounded-full border-2 ${selected ? "border-primary bg-primary" : "border-muted-foreground"}`} />
        <div className="text-left">
          <p className="font-display text-sm font-semibold text-foreground">{title}</p>
          <p className="font-body text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
      <span className="font-display text-sm font-bold text-foreground">{price}</span>
    </button>
  );
}

function PaymentOption({ selected, onSelect, title, desc }: { selected: boolean; onSelect: () => void; title: string; desc: string }) {
  return (
    <button onClick={onSelect} className={`flex w-full items-center gap-3 rounded-xl border p-4 transition-colors ${selected ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
      <div className={`h-4 w-4 rounded-full border-2 ${selected ? "border-primary bg-primary" : "border-muted-foreground"}`} />
      <div className="text-left">
        <p className="font-display text-sm font-semibold text-foreground">{title}</p>
        <p className="font-body text-xs text-muted-foreground">{desc}</p>
      </div>
    </button>
  );
}