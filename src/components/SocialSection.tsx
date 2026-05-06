import { motion } from "framer-motion";

import streetStyleImg from "@/assets/social/street-style.jpg";
import newDropImg from "@/assets/social/new-drop.jpg";
import animeVibesImg from "@/assets/social/anime-vibes.jpg";
import fusionImg from "@/assets/social/fusion.jpg";
import behindScenesImg from "@/assets/social/behind-scenes.jpg";
import streetCultureImg from "@/assets/social/street-culture.jpg";

const gridItems = [
  { image: streetStyleImg, label: "Street Style" },
  { image: newDropImg, label: "New Drop" },
  { image: animeVibesImg, label: "Anime Vibes" },
  { image: fusionImg, label: "Fusion" },
  { image: behindScenesImg, label: "Behind the Scenes" },
  { image: streetCultureImg, label: "Street Culture" },
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
              <img src={item.image} alt={item.label} loading="lazy" width={640} height={640} className="absolute inset-0 h-full w-full object-cover" />
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