"use client";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowDownIcon, FolderIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] as const },
});

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FCFCFD 0%, #FFF8F2 45%, #FFFFFF 100%)",
        display: "flex", alignItems: "center",
        padding: "100px 5% 80px",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Subtle background grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle, #E5E7EB 1px, transparent 1px)",
        backgroundSize: "40px 40px", opacity: 0.4,
      }} />

      {/* Soft glow */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)",
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <span style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "6px 14px", borderRadius: 999,
                background: "#FFF7ED", border: "1px solid #FDBA74",
                fontSize: "0.78rem", fontWeight: 600, color: "#EA580C", letterSpacing: "0.04em",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulse 2s infinite" }} />
                Disponible pour opportunités
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} style={{ fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: 12 }}>
              <span style={{ display: "block", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", color: "#111827" }}>Christ-Emmanuel</span>
              <span style={{
                display: "block", fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                background: "linear-gradient(135deg, #EA580C, #F59E0B)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Mouhi
              </span>
            </motion.h1>

            {/* Roles */}
            <motion.div {...fadeUp(0.3)} style={{ marginBottom: 20 }}>
              <span style={{
                fontSize: "1rem", fontWeight: 600, color: "#2563EB",
                letterSpacing: "0.02em",
              }}>
                AI Engineer &nbsp;·&nbsp; Data Scientist &nbsp;·&nbsp; Data Engineer
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p {...fadeUp(0.35)} style={{ fontSize: "1.05rem", color: "#4B5563", lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}>
              Je transforme des <strong style={{ color: "#111827" }}>millions de données brutes</strong> en décisions intelligentes.<br />
              Spécialisé en <strong style={{ color: "#111827" }}>Machine Learning, Credit Risk & IA Générative</strong> — basé à Abidjan.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
              <button
                onClick={() => alert("CV en cours de préparation. Email : christ.mouhi24@inphb.ci")}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 14,
                  background: "#EA580C", color: "#fff",
                  border: "none", cursor: "pointer",
                  fontSize: "0.92rem", fontWeight: 700,
                  boxShadow: "0 10px 30px rgba(234,88,12,0.18)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#C2410C"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(234,88,12,0.28)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#EA580C"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(234,88,12,0.18)"; }}
              >
                <ArrowDownIcon size={16} /> Télécharger CV
              </button>
              <button
                onClick={() => scrollTo("#projects")}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 14,
                  background: "transparent", color: "#EA580C",
                  border: "1px solid #EA580C", cursor: "pointer",
                  fontSize: "0.92rem", fontWeight: 700,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#FFF7ED"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <FolderIcon size={16} /> Voir mes projets
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 14,
                  background: "transparent", color: "#4B5563",
                  border: "1px solid #E5E7EB", cursor: "pointer",
                  fontSize: "0.92rem", fontWeight: 600,
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#EA580C"; e.currentTarget.style.color = "#EA580C"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#4B5563"; }}
              >
                Me contacter
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.45)} style={{ display: "flex", gap: 12 }}>
              {[
                { href: "https://github.com", icon: <GithubIcon size={18} />, label: "GitHub" },
                { href: "https://linkedin.com", icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
                { href: "mailto:christ.mouhi24@inphb.ci", icon: <MailIcon size={18} />, label: "Email" },
              ].map(s => (
                <a
                  key={s.label} href={s.href} target="_blank" rel="noopener"
                  title={s.label}
                  style={{
                    width: 42, height: 42, borderRadius: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid #E5E7EB", color: "#4B5563",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#EA580C"; e.currentTarget.style.color = "#EA580C"; e.currentTarget.style.background = "#FFF7ED"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#4B5563"; e.currentTarget.style.background = "transparent"; }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            className="hero-visual"
          >
            <div style={{ position: "relative" }}>
              {/* Avatar circle */}
              <div style={{
                width: 300, height: 300, borderRadius: "50%",
                background: "linear-gradient(135deg, #EA580C, #F59E0B)",
                padding: 3, position: "relative",
              }}>
                {/* Outer ring */}
                <div style={{
                  position: "absolute", inset: -14, borderRadius: "50%",
                  border: "1px solid rgba(234,88,12,0.2)",
                  animation: "spin 12s linear infinite",
                }} />
                <div style={{
                  position: "absolute", inset: -26, borderRadius: "50%",
                  border: "1px dashed rgba(234,88,12,0.1)",
                  animation: "spin 20s linear infinite reverse",
                }} />
                <div style={{
                  width: "100%", height: "100%", borderRadius: "50%",
                  background: "#FCFCFD", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  overflow: "hidden",
                }}>
                  <div id="avatar-container" style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: 8, color: "#6B7280", fontSize: "0.8rem",
                  }}>
                    <div style={{ fontSize: "3.5rem" }}>👤</div>
                    <div style={{ fontWeight: 600, color: "#EA580C" }}>Photo à ajouter</div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div style={{
                position: "absolute", bottom: 10, right: -10,
                background: "linear-gradient(135deg, #EA580C, #F59E0B)",
                borderRadius: 12, padding: "8px 16px",
                fontSize: "0.75rem", fontWeight: 700, color: "#fff",
                boxShadow: "0 8px 24px rgba(234,88,12,0.35)",
                whiteSpace: "nowrap",
              }}>
                ✦ Open to Work
              </div>

              {/* Floating pills */}
              {[
                { label: "Python · ML", color: "#16A34A", top: 30, left: -60, delay: 0 },
                { label: "17M+ données", color: "#2563EB", top: 130, right: -70, left: "auto", delay: 0.8 },
                { label: "Credit Risk", color: "#EA580C", bottom: 80, left: -50, delay: 1.5 },
              ].map((pill, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: pill.delay, ease: "easeInOut" }}
                  style={{
                    position: "absolute", top: pill.top, left: (pill as any).left, right: (pill as any).right, bottom: (pill as any).bottom,
                    background: "#fff", border: "1px solid #E5E7EB",
                    borderRadius: 999, padding: "7px 14px",
                    fontSize: "0.75rem", fontWeight: 600,
                    boxShadow: "0 4px 16px rgba(15,23,42,0.08)",
                    display: "flex", alignItems: "center", gap: 7,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: pill.color, display: "inline-block", flexShrink: 0 }} />
                  {pill.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
