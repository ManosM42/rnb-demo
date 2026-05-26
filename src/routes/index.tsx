import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { FramedAnimation } from "@/components/FramedAnimation";
import { MapEmbed } from "@/components/MapEmbed";
import { Reveal, staggerContainer, staggerItem } from "@/components/Reveal";
import { GallerySlider } from "@/components/GallerySlider";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const reviews = [
  { name: "Ella Miles", text: "R&B is so good loved the vibe music was on point, chill but party vibe at the same time. Cocktails were amazing and their deals are good. The two blonde girls on the door were lovely and friendly." },
  { name: "Annabel", text: "R&B is by far the best bar in Malia — no competition. Every single staff member from the hosts to the bartenders to the DJ are so kind, welcoming, and funny. The music is amazing, the prices are so fair, and all round it's the most magical place on earth." },
  { name: "Katerina", text: "It's nice to meet Ukrainians in Crete! Thank you Tanya for the pleasant meeting and the wonderful atmosphere. 🤍" },
  { name: "Saran Camara", text: "The music is really good — R&B, hip hop and sometimes Afro beats. The service is the best on the street. You can drink, dance and even have a shisha!" },
  { name: "Keaton", text: "Very nice place for having drinks and meeting people. I forgot my bag with souvenirs and the next day someone came while they were closed just to hand it back to me. Very sweet!!" },
];

function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Framed Animation */}
      <FramedAnimation />

      {/* About */}
      <section className="relative px-6 py-28 section-fade-top">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <Reveal x={-40} y={0}>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">About R&amp;B</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              The Soul of <span className="text-gold">Malia Nights</span>
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              R&amp;B is Malia's most vibrant bar and nightclub — a place where live DJ sets, signature
              cocktails and a warm, magnetic crew come together. We've built the perfect balance
              between a chill lounge and a high-energy party, so whether you're starting your night
              with friends or chasing the sunrise on the dance floor, R&amp;B is where it happens.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              R&amp;B, hip-hop, afrobeats — and the kind of staff that remember your name. That's us.
            </p>
          </Reveal>

          <Reveal x={40} y={0} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(200,169,81,0.55), transparent 65%)" }} />
              <div className="absolute inset-8 rounded-full"
                style={{ background: "radial-gradient(circle at 30% 70%, rgba(160,32,240,0.6), transparent 60%)" }} />
              <div className="absolute inset-16 rounded-full"
                style={{ background: "radial-gradient(circle at 70% 30%, rgba(0,229,255,0.4), transparent 60%)" }} />
              <div className="absolute inset-24 rounded-full border border-gold/40"
                style={{ background: "radial-gradient(circle, rgba(200,169,81,0.25), transparent 70%)" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Reviews</p>
            <h2 className="gold-underline font-display text-4xl md:text-5xl">What People Are Saying</h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-20 flex gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-visible"
          >
            {reviews.map((r) => (
              <motion.article
                key={r.name}
                variants={staggerItem}
                className="glass min-w-[85%] flex-shrink-0 rounded-2xl p-7 md:min-w-0"
              >
                <div className="mb-4 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="#c8a951" stroke="#c8a951" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/85">"{r.text}"</p>
                <p className="mt-5 font-display text-lg text-gold">{r.name}</p>
              </motion.article>
            ))}
          </motion.div>

          <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-foreground/40">
            Powered by Google Reviews
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Inside R&amp;B</p>
            <h2 className="gold-underline font-display text-4xl md:text-5xl">A Glimpse of the Night</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <GallerySlider />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="relative px-6 py-28 section-fade-top">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Visit Us</p>
            <h2 className="gold-underline font-display text-4xl md:text-5xl">Find Us in Malia</h2>
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <MapEmbed />
            <div className="mt-8 flex flex-col items-center gap-4 text-center">
              <p className="text-foreground/75">Malia, Crete, Greece</p>
              
               <a href="https://www.google.com/maps/place/R%26B+Plus/@35.2880207,25.4593476,17z"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}