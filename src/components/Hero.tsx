import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="grain relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, oklch(0.85 0.2 140 / 15%) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, oklch(0.75 0.18 330 / 15%) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, oklch(0.7 0.22 190 / 15%) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, oklch(0.85 0.2 140 / 15%) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 80% 20%, oklch(0.75 0.18 330 / 10%) 0%, transparent 40%)",
              "radial-gradient(circle at 20% 80%, oklch(0.75 0.2 40 / 10%) 0%, transparent 40%)",
              "radial-gradient(circle at 80% 20%, oklch(0.75 0.18 330 / 10%) 0%, transparent 40%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Y2K elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 left-[10%] font-display text-6xl font-bold text-foreground/5 sm:text-8xl"
      >
        ストリート
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute right-[10%] bottom-40 font-display text-5xl font-bold text-foreground/5 sm:text-7xl"
      >
        文化
      </motion.div>

      {/* Star decorations */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          className="absolute h-1 w-1 rounded-full bg-primary"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-body text-xs font-medium tracking-widest text-primary uppercase">
            New Collection Live
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-bold leading-[0.9] tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          >
            WE CREATE
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-bold leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <span className="text-gradient-neon">TRENDS</span>
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-md font-body text-base text-muted-foreground sm:text-lg"
        >
          Indian Streetwear Reimagined. Where culture meets chaos and tradition finds its street motion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full bg-primary px-8 py-3.5 font-display text-sm font-bold tracking-wider text-primary-foreground uppercase transition-all glow-neon"
          >
            <span className="relative z-10">Shop Now</span>
            <motion.div
              className="absolute inset-0 bg-foreground"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-foreground/20 px-8 py-3.5 font-display text-sm font-bold tracking-wider text-foreground uppercase backdrop-blur transition-all hover:border-primary hover:text-primary"
          >
            Explore Collection
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-foreground/20 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}