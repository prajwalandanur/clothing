import { motion } from "framer-motion";

const reviews = [
  { name: "Arjun K.", text: "Quality is insane. The fabric on the anime tee is so premium, I've already ordered 3 more.", rating: 5, location: "Mumbai" },
  { name: "Priya M.", text: "The fit is literally perfect. Finally Indian streetwear that actually looks like international brands.", rating: 5, location: "Delhi" },
  { name: "Rohan S.", text: "Finally Indian streetwear done right. The kurta-street fusion is exactly what I've been looking for.", rating: 5, location: "Bangalore" },
  { name: "Sneha R.", text: "Obsessed with the tie-dye hoodie. Got so many compliments on campus. The colors are fire 🔥", rating: 5, location: "Pune" },
  { name: "Vikram P.", text: "The cargo pants are next level. Perfect pocket placement and the fabric quality is unreal.", rating: 4, location: "Hyderabad" },
];

export function Reviews() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-body text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Real Talk
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            What The Squad Says
          </h2>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide sm:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass min-w-[280px] flex-shrink-0 rounded-2xl p-6 sm:min-w-[320px]"
            >
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 font-body text-sm leading-relaxed text-foreground/80">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 font-display text-xs font-bold text-primary">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-display text-xs font-semibold text-foreground">{review.name}</p>
                  <p className="font-body text-[10px] text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}