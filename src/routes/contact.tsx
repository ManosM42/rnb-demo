import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MapEmbed } from "@/components/MapEmbed";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — R&B Malia" },
      { name: "description", content: "Get in touch with R&B Malia — Malia, Crete, Greece. Phone, email, location and hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section
        className="relative flex h-[50vh] items-center justify-center px-6 text-center"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(200,169,81,0.4), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(160,32,240,0.45), transparent 55%), linear-gradient(135deg, #050508, #1a0625 80%)",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,8,0.5), rgba(5,5,8,0.85))" }} />
        <div className="relative z-10">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-gold">Contact</p>
          <h1 className="font-display text-5xl text-glow-gold md:text-7xl">Get In Touch</h1>
          <p className="mt-5 text-foreground/75">We'd love to hear from you</p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { icon: MapPin, label: "Location", value: "Malia, Crete, Greece" },
            { icon: Phone, label: "Phone", value: "+30 000 000 0000", href: "tel:+30000000000" },
            { icon: Mail, label: "Email", value: "info@rnbmalia.com", href: "mailto:info@rnbmalia.com" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-8 text-center">
                <c.icon size={32} className="mx-auto text-gold" />
                <h3 className="mt-5 text-xs uppercase tracking-[0.3em] text-foreground/60">{c.label}</h3>
                {c.href ? (
                  <a href={c.href} className="mt-3 inline-block font-display text-xl text-gold hover:text-gold-soft">{c.value}</a>
                ) : (
                  <p className="mt-3 font-display text-xl text-gold">{c.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 flex justify-center gap-5">
          <a href="#" aria-label="Instagram" className="rounded-full border border-gold/40 p-3 text-gold transition hover:bg-gold/10">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="TikTok" className="rounded-full border border-gold/40 p-3 text-gold transition hover:bg-gold/10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.3a5.3 5.3 0 0 1-3.3-1.2 5.3 5.3 0 0 1-2-3.1h-3.4v13.2a2.6 2.6 0 1 1-2.6-2.6c.3 0 .6 0 .8.1V9.3a6 6 0 1 0 5.2 5.9V8.9a8.7 8.7 0 0 0 5.3 1.8V7.3a5.4 5.4 0 0 1 0-1z"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="rounded-full border border-gold/40 p-3 text-gold transition hover:bg-gold/10">
            <Facebook size={20} />
          </a>
        </Reveal>
      </section>

      {/* Hours */}
      <section className="px-6 py-20 section-fade-top">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">Hours</p>
            <h2 className="gold-underline font-display text-4xl">Opening Hours</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-14 flex items-baseline justify-between border-b border-foreground/10 pb-5">
              <span className="text-lg">Monday – Sunday</span>
              <span className="font-display text-xl text-gold">9:00 PM – 5:00 AM</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <h2 className="gold-underline font-display text-4xl">Find Us</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <MapEmbed />
          </Reveal>
        </div>
      </section>
    </>
  );
}
