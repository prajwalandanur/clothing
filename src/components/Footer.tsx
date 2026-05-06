import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Stay In The Loop
          </h3>
          <p className="mt-2 font-body text-sm text-muted-foreground">
            Get early access to drops, exclusive deals, and trend alerts.
          </p>
          <div className="mx-auto mt-6 flex max-w-md gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full bg-input px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary px-6 py-3 font-display text-xs font-bold tracking-wider text-primary-foreground uppercase"
            >
              Join
            </motion.button>
          </div>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider text-foreground uppercase">Shop</h4>
            <ul className="mt-4 space-y-2">
              {["New Drops", "Streetwear", "Anime Tees", "Indian Fusion", "Hoodies", "Sale"].map((item) => (
                <li key={item}>
                  <button className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider text-foreground uppercase">Help</h4>
            <ul className="mt-4 space-y-2">
              {["Size Guide", "Shipping", "Returns", "Track Order", "FAQs"].map((item) => (
                <li key={item}>
                  <button className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider text-foreground uppercase">Company</h4>
            <ul className="mt-4 space-y-2">
              {["About Us", "Careers", "Press", "Sustainability"].map((item) => (
                <li key={item}>
                  <button className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold tracking-wider text-foreground uppercase">Connect</h4>
            <div className="mt-4 flex gap-3">
              {["Instagram", "Twitter", "YouTube"].map((social) => (
                <button
                  key={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border font-body text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="font-display text-sm font-bold tracking-wider text-foreground">
            WE CREATE TRENDS
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <button
                key={item}
                className="font-body text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </button>
            ))}
          </div>
          <span className="font-body text-xs text-muted-foreground">
            © 2024 We Create Trends. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}