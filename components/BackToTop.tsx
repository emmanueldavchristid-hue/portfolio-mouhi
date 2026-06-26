"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed", bottom: 28, right: 28, zIndex: 99,
            width: 46, height: 46, borderRadius: 14,
            background: "#EA580C", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", boxShadow: "0 8px 24px rgba(234,88,12,0.35)",
            transition: "background 0.2s",
          }}
          whileHover={{ y: -3, background: "#C2410C" } as any}
          aria-label="Retour en haut"
        >
          <ArrowUpIcon size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
