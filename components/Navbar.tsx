"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon } from "./icons";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); setOpen(false); setActive(href); }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5%", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <button onClick={() => scrollTo("#hero")} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <span style={{ fontFamily: "system-ui", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.03em", color: "#111827" }}>
            CE
            <span style={{ background: "linear-gradient(135deg,#EA580C,#F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>.</span>
            Mouhi
          </span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", alignItems: "center" }} className="nav-desktop">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "0.88rem", fontWeight: 500,
                  color: active === link.href ? "#EA580C" : "#4B5563",
                  transition: "color 0.2s",
                  padding: "4px 0",
                  borderBottom: active === link.href ? "2px solid #EA580C" : "2px solid transparent",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#EA580C")}
                onMouseLeave={e => (e.currentTarget.style.color = active === link.href ? "#EA580C" : "#4B5563")}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "9px 20px", borderRadius: 14,
              background: "#EA580C", color: "#fff",
              border: "none", cursor: "pointer",
              fontSize: "0.85rem", fontWeight: 600,
              boxShadow: "0 4px 14px rgba(234,88,12,0.25)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#C2410C"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#EA580C"; e.currentTarget.style.transform = "translateY(0)"; }}
            onClick={() => window.open("/CV MOUHI CHRIST-EMMANUEL ANA R_C.pdf")}
          >
            ↓ CV
          </button>
          <button
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", padding: 6 }}
            className="nav-burger"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ background: "rgba(255,255,255,0.97)", borderBottom: "1px solid #E5E7EB", overflow: "hidden" }}
          >
            <ul style={{ listStyle: "none", padding: "16px 5%", display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      width: "100%", textAlign: "left", background: "none", border: "none",
                      padding: "12px 0", fontSize: "0.95rem", fontWeight: 500,
                      color: "#111827", cursor: "pointer",
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
