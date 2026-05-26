import { motion } from "framer-motion";

import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";
import slider4 from "@/assets/slider-4.jpg";
import slider5 from "@/assets/slider-5.jpg";

const slides = [slider1, slider2, slider3, slider4, slider5];

const labels = [
  "Dance Floor", "Live DJ", "Cocktail Bar", "VIP Lounge", "Shisha Garden",
];

export function GallerySlider() {
  const loop = [...slides, ...slides];
  const loopLabels = [...labels, ...labels];

  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        border: "1px solid rgba(200,169,81,0.25)",
        maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-5 py-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative h-72 w-[320px] flex-shrink-0 overflow-hidden rounded-xl md:h-80 md:w-[400px]"
          >
            <img
              src={src}
              alt={loopLabels[i % labels.length]}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 50%, rgba(5,5,8,0.85))" }}
            />
            <div className="absolute bottom-5 left-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold">R&amp;B</p>
              <p className="font-display text-2xl text-foreground">{loopLabels[i % labels.length]}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}