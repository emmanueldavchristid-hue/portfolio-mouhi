"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] as const }} style={style}>
      {children}
    </motion.div>
  );
}

const cards = [
  { icon: "🎓", title: "Formation", text: "Master Data Science Big Data & IA — INPHB / ENSEA / École Polytechnique France (2025–2026). Licence SIGL — ESATIC (2023–2024)." },
  { icon: "🏦", title: "Focus Secteur", text: "Banque & Finance : credit scoring, analyse comportementale, pricing du risque. Expériences à la Société Générale CI et à la SIB." },
  { icon: "🌍", title: "Vision", text: "Utiliser l'IA pour créer des solutions accessibles et impactantes pour l'Afrique — de l'inclusion financière à la santé connectée." },
  { icon: "⚡", title: "En ce moment", text: "Stagiaire Data Science & IA — Société Générale CI. Développement d'un assistant IA multimodal et d'un outil de tarification dynamique." },
];

const tags = ["Machine Learning", "Credit Risk", "IA Générative", "ETL & Pipelines", "Python", "SQL", "Power BI", "Abidjan, CI"];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 5%", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <FadeUp style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <div>
            <span style={{ width: 32, height: 2, background: "#EA580C", display: "inline-block", borderRadius: 2 }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>À propos</span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-0.03em", color: "#111827", marginBottom: 48 }}>
            Transformer la donnée en valeur
          </h2>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, alignItems: "start" }} className="about-grid">
          {/* Main text */}
          <FadeUp delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                <>Je suis <strong style={{ color: "#111827" }}>Christ-Emmanuel Mouhi</strong>, Data Scientist et AI Engineer en formation Master à l'INPHB (en partenariat avec l'École Polytechnique de France et l'ENSEA), spécialisé dans le risque de crédit, la modélisation prédictive et l'intelligence artificielle appliquée.</>,
                <>Mon quotidien : concevoir des pipelines qui traitent des <strong style={{ color: "#111827" }}>millions d'observations</strong>, entraîner des modèles de scoring comportemental, et développer des outils IA qui aident les banques à prendre de meilleures décisions.</>,
                <>Au-delà du code, je m'intéresse à la <strong style={{ color: "#111827" }}>façon dont l'IA peut réduire les inégalités d'accès</strong> — au crédit, à la santé, à l'emploi — dans le contexte africain. C'est ce qui nourrit des projets comme <em>Santé+360</em> et <em>Emploi+360</em>.</>,
                <>Actuellement en stage à la <strong style={{ color: "#111827" }}>Société Générale Côte d'Ivoire</strong>, je cherche à rejoindre une équipe Data ambitieuse pour construire des systèmes intelligents à fort impact.</>,
              ].map((p, i) => (
                <p key={i} style={{ fontSize: "0.97rem", color: "#4B5563", lineHeight: 1.85 }}>{p}</p>
              ))}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                {tags.map(t => (
                  <span key={t} style={{
                    padding: "5px 14px", borderRadius: 999,
                    border: "1px solid #E5E7EB", fontSize: "0.8rem",
                    color: "#4B5563", background: "#fff",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#EA580C"; e.currentTarget.style.color = "#EA580C"; e.currentTarget.style.background = "#FFF7ED"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#4B5563"; e.currentTarget.style.background = "#fff"; }}
                  >{t}</span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {cards.map((c, i) => (
              <FadeUp key={c.title} delay={0.15 + i * 0.08}>
                <div style={{
                  background: "#fff", border: "1px solid #E5E7EB",
                  borderRadius: 20, padding: "22px 24px",
                  boxShadow: "0 2px 12px rgba(15,23,42,0.05)",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#FDBA74"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(234,88,12,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(15,23,42,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#EA580C", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                    <span>{c.icon}</span> {c.title}
                  </div>
                  <p style={{ fontSize: "0.87rem", color: "#4B5563", lineHeight: 1.7 }}>{c.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
    </section>
  );
}
