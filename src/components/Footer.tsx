import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer
      className="relative mt-24 px-6 pt-16 pb-8"
      style={{ borderTop: "1px solid rgba(200,169,81,0.35)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <Logo size={72} />
          <div className="mt-4 font-display text-2xl text-gold text-glow-gold">R&amp;B Plus</div>
          <p className="mt-4 max-w-xs text-sm text-foreground/70">
            Malia's premier nightclub. Crafted cocktails, unforgettable beats, warm hearts.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.25em] text-gold">Navigate</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
            <li><Link to="/experience" className="hover:text-gold">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-[0.25em] text-gold">Contact</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Malia, Crete, Greece</li>
            <li>info@rnbmalia.com</li>
            <li>+30 000 000 0000</li>
          </ul>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Instagram" className="text-foreground/70 hover:text-gold">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="TikTok" className="text-foreground/70 hover:text-gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.3a5.3 5.3 0 0 1-3.3-1.2 5.3 5.3 0 0 1-2-3.1h-3.4v13.2a2.6 2.6 0 1 1-2.6-2.6c.3 0 .6 0 .8.1V9.3a6 6 0 1 0 5.2 5.9V8.9a8.7 8.7 0 0 0 5.3 1.8V7.3a5.4 5.4 0 0 1 0-1z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-foreground/70 hover:text-gold">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-foreground/10 pt-6 text-center text-xs text-foreground/50">
        © 2025 R&amp;B Malia. All rights reserved.
      </div>
    </footer>
  );
}
