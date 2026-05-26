import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — R&B Malia" },
      { name: "description", content: "Crafted cocktails, premium spirits, beers and shisha at R&B Malia." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string };

const menu: Record<string, Item[]> = {
  Cocktails: [
    { name: "Neon Mule", desc: "Ginger beer, vodka & fresh lime", price: "€10" },
    { name: "Golden Hour", desc: "Bourbon, honey, lemon, smoked bitters", price: "€12" },
    { name: "Malia Sunset", desc: "Tequila, passion fruit, orange, grenadine", price: "€11" },
    { name: "Velvet Negroni", desc: "Gin, Campari, sweet vermouth, orange oil", price: "€11" },
    { name: "Purple Rain", desc: "Vodka, violet liqueur, lemon, prosecco top", price: "€12" },
    { name: "Espresso Martini", desc: "Vodka, espresso, coffee liqueur, vanilla", price: "€11" },
    { name: "Cretan Spritz", desc: "Aperol, prosecco, soda, rosemary", price: "€10" },
    { name: "Midnight Mojito", desc: "Dark rum, mint, lime, brown sugar, soda", price: "€10" },
  ],
  "Spirits & Shots": [
    { name: "Premium Vodka", desc: "Grey Goose, Belvedere — by the shot", price: "€8" },
    { name: "Single Malt Whisky", desc: "Glenfiddich 12 — neat or on the rocks", price: "€12" },
    { name: "Reposado Tequila", desc: "Don Julio — served with lime & salt", price: "€10" },
    { name: "Jägerbomb", desc: "Jägermeister dropped into energy drink", price: "€8" },
    { name: "B-52", desc: "Layered Kahlúa, Baileys & Grand Marnier", price: "€7" },
    { name: "Tsikoudia Shot", desc: "Traditional Cretan spirit, served chilled", price: "€5" },
  ],
  "Beers & Soft Drinks": [
    { name: "Mythos Lager", desc: "Greek pale lager, 500ml", price: "€5" },
    { name: "Alfa Hellenic Beer", desc: "Crisp pilsner, 500ml", price: "€5" },
    { name: "Corona Extra", desc: "Served with lime", price: "€6" },
    { name: "Heineken Draft", desc: "0.5L from the tap", price: "€5" },
    { name: "Soft Drinks", desc: "Coke, Sprite, Fanta, Sparkling Water", price: "€3" },
  ],
  Shisha: [
    { name: "Double Apple", desc: "The classic — sweet & aromatic", price: "€15" },
    { name: "Mint Storm", desc: "Triple mint, ice-cold finish", price: "€15" },
    { name: "Berry Mojito", desc: "Mixed berries, lime, mint", price: "€16" },
    { name: "Passion Fruit", desc: "Tropical, smooth & fragrant", price: "€16" },
  ],
};

const tabs = Object.keys(menu);

function MenuPage() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex h-[60vh] items-center justify-center px-6 text-center"
        style={{
          background: "radial-gradient(ellipse at 30% 40%, rgba(160,32,240,0.4), transparent 55%), radial-gradient(ellipse at 70% 60%, rgba(200,169,81,0.4), transparent 55%), linear-gradient(135deg, #050508, #120822 70%, #050508)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(5,5,8,0.5), rgba(5,5,8,0.85))" }}
        />
        <div className="relative z-10">
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-gold">The Menu</p>
          <h1 className="font-display text-5xl text-glow-gold md:text-7xl">Our Menu</h1>
          <p className="mt-5 text-foreground/75">Crafted cocktails, premium spirits &amp; more</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 flex flex-wrap justify-center gap-2 md:gap-6">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className="relative px-4 py-3 text-sm uppercase tracking-[0.2em] transition-colors"
                style={{ color: active === t ? "#c8a951" : "rgba(240,237,230,0.6)" }}
              >
                {t}
                {active === t && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] bg-gold"
                    style={{ width: "60%", marginInline: "20%" }}
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-2"
            >
              {menu[active].map((item, i) => (
                <Reveal key={item.name} delay={i * 0.05} y={20}>
                  <li className="group flex items-baseline gap-4 border-b border-foreground/10 py-5">
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-gold">{item.name}</h3>
                      {item.desc && (
                        <p className="mt-1 text-sm text-foreground/65">{item.desc}</p>
                      )}
                    </div>
                    <div className="flex-shrink-0 font-display text-xl text-gold">{item.price}</div>
                  </li>
                </Reveal>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
