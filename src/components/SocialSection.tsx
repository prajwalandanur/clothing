import { motion } from "framer-motion";

const gridItems = [
  { bg: "linear-gradient(135deg, oklch(0.3 0.08 330), oklch(0.18 0.04 270))", label: "Street Style" },
  { bg: "linear-gradient(135deg, oklch(0.35 0.1 140), oklch(0.18 0.04 270))", label: "New Drop" },
  { bg: "linear-gradient(135deg, oklch(0.3 0.08 40), oklch(0.18 0.04 270))", label: "Anime Vibes" },
  { bg: "linear-gradient(135deg, oklch(0.3 0.08 200), oklch(0.18 0.04 270))", label: "Fusion" },
  { bg: "linear-gradient(135deg, oklch(0.35 0.1 290), oklch(0.18 0.04 270))", label: "Behind the Scenes" },
  { bg: "linear-gradient(135deg, oklch(0.3 0.08 60), oklch(0.18 0.04 270))", label: "Street Culture" },
];

export function SocialSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-body text-xs font-medium tracking-[0.3em] text-primary uppercase">
            @wecreatetrends
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Join The Culture
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
          {gridItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0" style={{ background: item.bg }} />
              <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/40">
                <span className="font-body text-xs font-medium tracking-wider text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-full border border-foreground/20 px-8 py-3 font-display text-xs font-bold tracking-wider text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
          >
            Follow Us on Instagram
          </motion.button>
        </div>
      </div>
    </section>
  );
}