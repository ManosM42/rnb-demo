import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Disc3, Martini, Users } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — R&B Malia" },
      { name: "description", content: "Live DJ sets, signature cocktails, and the unique chill-meets-party atmosphere of R&B Malia." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex h-[60vh] items-center justify-center px-6 text-center"
        style={{
          background: "radial-gradient(ellipse at 70% 30%, rgba(0,229,255,0.3), transparent 55%), radial-gradient(ellipse at 30% 70%, rgba(200,169,81,0.45), transparent 55%), linear-gradient(135deg, #050508, #0e0820 70%)",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,8,0.5), rgba(5,5,8,0.85))" }} />
        <div className="relative z-10">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-gold">Experience</p>
          <h1 className="font-display text-5xl text-glow-gold md:text-7xl">The R&amp;B Experience</h1>
          <p className="mt-5 text-foreground/75">Nights you'll never forget</p>
        </div>
      </section>

      {/* Section 1 — Music */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <Reveal x={-40} y={0}>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">The Music</p>
            <h2 className="font-display text-4xl md:text-5xl">Feel Every Beat</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              Our resident DJs spin a curated mix of R&amp;B, hip-hop and afrobeats, weaving classic
              anthems with the freshest cuts. Expect deep grooves early in the night and full-tilt
              energy as the floor fills. Every set is built to move you.
            </p>
          </Reveal>
          <Reveal x={40} y={0}>
            <div className="glass flex h-72 items-end justify-center gap-2 rounded-2xl p-10">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="eq-bar"
                  style={{ animationDelay: `${i * 0.08}s`, animationDuration: `${1 + (i % 3) * 0.2}s` }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Cocktails */}
      <section className="px-6 py-28 section-fade-top">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <Reveal x={-40} y={0} className="md:order-2">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">The Cocktails</p>
            <h2 className="font-display text-4xl md:text-5xl">Crafted to Perfection</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              From smoked old fashioneds to neon-bright spritzes, our bartenders treat every drink
              like a small piece of theatre. Ask for a signature, follow the deals, or let us build
              something just for you — there's a glass here with your name on it.
            </p>
          </Reveal>
          <Reveal x={40} y={0} className="md:order-1">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl">
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(200,169,81,0.7), transparent 55%)" }} />
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 70% 70%, rgba(160,32,240,0.6), transparent 55%)" }} />
              <div className="absolute inset-0" style={{ background: "conic-gradient(from 180deg at 50% 50%, transparent, rgba(0,229,255,0.25), transparent, rgba(200,169,81,0.35), transparent)" }} />
              <div className="absolute inset-12 rounded-full border border-gold/30" />
              <div className="absolute inset-24 rounded-full border border-purple/30" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 — Atmosphere */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <Reveal x={-40} y={0}>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">The Atmosphere</p>
            <h2 className="font-display text-4xl md:text-5xl">Chill &amp; Party Vibes</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              Two worlds, one room. Sink into our lounge for low-lit conversation and a slow drink,
              or step onto the floor when the BPM climbs. R&amp;B is built for the whole arc of a
              night — from first sip to last dance.
            </p>
          </Reveal>
          <Reveal x={40} y={0}>
            <div className="relative h-72 w-full overflow-hidden rounded-2xl">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute top-0 h-full"
                  style={{
                    left: `${i * 22}%`,
                    width: "12%",
                    background: `linear-gradient(180deg, transparent, ${i % 2 ? "rgba(0,229,255,0.6)" : "rgba(160,32,240,0.6)"}, transparent)`,
                    filter: "blur(18px)",
                    transform: `skewX(-12deg)`,
                  }}
                />
              ))}
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,8,0.4), transparent, rgba(5,5,8,0.4))" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 4 — Team */}
      <section className="px-6 py-28 section-fade-top">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">The Team</p>
            <h2 className="gold-underline font-display text-4xl md:text-5xl">The People Behind the Magic</h2>
            <p className="mx-auto mt-10 max-w-2xl text-foreground/75 leading-relaxed">
              From our hosts and bartenders to our DJ and door staff — the R&amp;B team brings warmth,
              energy, and heart to every night.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: Disc3, role: "DJ", desc: "Reading the room and pushing the night forward, set after set." },
              { icon: Martini, role: "Bartenders", desc: "Fast hands, sharp recipes, and a story for every guest." },
              { icon: Users, role: "Hosts", desc: "The first faces you meet — and the warmest welcome on the strip." },
            ].map((c, i) => (
              <Reveal key={c.role} delay={i * 0.1}>
                <div className="glass h-full rounded-2xl p-8">
                  <c.icon size={36} className="mx-auto text-gold" />
                  <h3 className="mt-5 font-display text-2xl text-gold">{c.role}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
