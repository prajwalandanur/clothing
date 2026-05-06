import { motion } from "framer-motion";

const lines = [
  { text: "WE CREATE", delay: 0 },
  { text: "TRENDS THAT", delay: 0.12 },
  { text: "DEFINE THE", delay: 0.24 },
  { text: "STREETS", delay: 0.36 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 sm:px-8 lg:px-12">
      {/* Subtle red accent tag */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-32 right-4 z-10 sm:right-8 lg:right-12"
      >
        <div className="flex flex-col items-center rounded bg-accent px-2 py-3 text-accent-foreground">
          <span className="font-body text-[9px] font-bold tracking-wider uppercase" style={{ writingMode: "vertical-rl" }}>
            New Drop
          </span>
        </div>
      </motion.div>

      {/* Giant stretched typography */}
      <div className="relative z-10 w-full pt-20">
        {lines.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: line.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display leading-[0.88] tracking-[-0.02em] text-foreground"
              style={{
                fontSize: "clamp(3.5rem, 13vw, 14rem)",
                fontStretch: "condensed",
              }}
            >
              {line.text}
            </motion.h1>
          </div>
        ))}
      </div>

      {/* Bottom bar with tagline + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 mt-8 flex flex-col items-start justify-between gap-6 border-t border-border pt-6 sm:flex-row sm:items-center"
      >
        <p className="max-w-sm font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
          Indian streetwear reimagined. Where culture meets chaos and tradition finds its street motion.
        </p>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-foreground px-7 py-3 font-body text-sm font-semibold tracking-wide text-background transition-all"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-foreground/20 px-7 py-3 font-body text-sm font-semibold tracking-wide text-foreground transition-all hover:border-foreground"
          >
            Explore
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-foreground/15 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-foreground/40"
          />
        </div>
      </motion.div>
    </section>
  );
}