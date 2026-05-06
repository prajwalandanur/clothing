import { motion } from "framer-motion";

const suggestions = [
  {
    outfit: "Shinobi Anime Tee + Tactical Cargo Joggers",
    vibe: "Urban Street Warrior",
    tip: "Complete with chunky sneakers and a crossbody bag",
  },
  {
    outfit: "Neo-Desi Kurta + Cloud Baggy Pants",
    vibe: "Indo-Western Fusion",
    tip: "Add kolhapuri sandals for the perfect desi-street mix",
  },
  {
    outfit: "Psychedelic Hoodie + Tactical Cargos",
    vibe: "Y2K Rebel",
    tip: "Layer with a chain necklace and bucket hat",
  },
];

export function StyleSuggestion() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-body text-xs font-medium tracking-[0.3em] text-accent uppercase">
            ✨ AI Stylist
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Style It <span className="text-gradient-accent">Your Way</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {suggestions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6"
            >
              <span className="inline-block rounded-full bg-accent/20 px-3 py-1 font-body text-[10px] font-bold tracking-wider text-accent uppercase">
                {s.vibe}
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                {s.outfit}
              </h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{s.tip}</p>
              <button className="mt-4 font-body text-xs font-medium text-primary transition-colors hover:text-foreground">
                Shop This Look →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}