import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
}

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function LimitedDrop() {
  const target = new Date(Date.now() + 12 * 60 * 60 * 1000);
  const { hours, minutes, seconds } = useCountdown(target);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(135deg, oklch(0.96 0 0), oklch(0.93 0 0))",
            "linear-gradient(135deg, oklch(0.93 0.01 30), oklch(0.96 0 0))",
            "linear-gradient(135deg, oklch(0.96 0 0), oklch(0.93 0 0))",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Sale badge */}
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block rounded-full bg-destructive/20 px-4 py-1 font-body text-xs font-bold tracking-wider text-destructive uppercase"
          >
            🔥 Limited Drop — Only Few Left
          </motion.span>

          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            The <span className="text-gradient-accent">Midnight</span> Collection
          </h2>

          <p className="mx-auto mt-4 max-w-lg font-body text-muted-foreground">
            Exclusive drop. Limited stock. Once it&apos;s gone, it&apos;s gone. Don&apos;t sleep on this.
          </p>

          {/* Countdown */}
          <div className="mt-8 flex justify-center gap-4">
            {[
              { value: hours, label: "Hours" },
              { value: minutes, label: "Mins" },
              { value: seconds, label: "Secs" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl px-5 py-3 sm:px-8 sm:py-4">
                <motion.span
                  key={item.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="block font-display text-2xl font-bold text-foreground sm:text-4xl"
                >
                  {String(item.value).padStart(2, "0")}
                </motion.span>
                <span className="font-body text-[10px] tracking-widest text-muted-foreground uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 rounded-full bg-foreground px-10 py-3.5 font-display text-sm font-bold tracking-wider text-background uppercase transition-all hover:bg-primary hover:text-primary-foreground glow-neon"
          >
            Shop The Drop
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}