import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";

const slides = [
  { title: "Where the Night Begins", img: slider1 },
  { title: "Feel Every Beat", img: slider2 },
  { title: "Unforgettable Nights", img: slider3 },
  { title: "The Soul of Malia", img: slider4 },
  { title: "Live the Experience", img: slider5 },
];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 6, ease: "linear" } }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[i].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(5,5,8,0.95), rgba(5,5,8,0.2) 60%, rgba(5,5,8,0.6))" }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          key={`tag-${i}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.45em] text-gold"
        >
          Malia's Premier Nightclub Experience
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.h1
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display text-5xl leading-tight text-foreground text-glow-gold md:text-7xl lg:text-8xl"
          >
            {slides[i].title}
          </motion.h1>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/menu" className="btn-gold">Explore Menu</Link>
          <Link to="/contact" className="btn-outline-gold">Contact Us</Link>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="h-2 rounded-full transition-all"
            style={{
              width: idx === i ? 28 : 8,
              background: idx === i ? "#c8a951" : "rgba(240,237,230,0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
}