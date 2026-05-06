import { motion } from "framer-motion";

export function AboutBrand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs font-medium tracking-[0.3em] text-primary uppercase">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Not Just Fashion.
              <br />
              <span className="text-gradient-accent">A Movement.</span>
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
              We Create Trends is born from India&apos;s evolving street culture — where anime aesthetics
              collide with desi heritage, where youth rebellion meets self-expression, and where every
              outfit tells a story of cultural fusion.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
              We don&apos;t follow trends. We set them. From the streets of Mumbai to the lanes of Delhi,
              our designs speak the language of a new generation — bold, unapologetic, and unmistakably
              Indian.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 rounded-full border border-foreground/20 px-8 py-3 font-display text-xs font-bold tracking-wider text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >
              Read Our Story
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.95 0 0), oklch(0.9 0 0))",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="font-display text-7xl font-bold text-foreground/8 sm:text-9xl">
                  WCT
                </span>
                <div className="mt-4 space-y-2">
                  <p className="font-display text-lg font-bold tracking-wider text-foreground/60">
                    EST. 2024
                  </p>
                  <p className="font-body text-xs tracking-[0.5em] text-muted-foreground uppercase">
                    Culture Meets Chaos
                  </p>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-8 right-8 h-20 w-20 rounded-full border border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-12 left-8 h-16 w-16 rounded-full border border-accent/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}