import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

export function LoadingScreen() {
  const { location } = useRouterState();
  const [visible, setVisible] = useState(true);
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setKey(location.pathname);
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={key}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "#050508" }}
        >
          <div className="pulse-glow">
            <Logo size={140} />
          </div>
          <div className="mt-10 h-[2px] w-56 overflow-hidden bg-foreground/10">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-soft"
              style={{ animation: "progress-fill 1s ease-out forwards" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
