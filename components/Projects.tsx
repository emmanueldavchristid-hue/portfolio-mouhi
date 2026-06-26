"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GithubIcon, ExternalLinkIcon } from "./icons";
import { PROJECTS, type ProjectCategory } from "@/lib/data";

const FILTERS: { label: string; value: ProjectCategory }[] = [
  { label: "Tous", value: "all" },
  { label: "Machine Learning", value: "ml" },
  { label: "IA Générative", value: "ia" },
  { label: "Data Engineering", value: "data" },
  { label: "Produits", value: "prod" },
];

const EMOJI_BG: Record<string, string> = {
  ml: "linear-gradient(135deg,#EFF6FF,#DBEAFE)",
  ia: "linear-gradient(135deg,#FFF7ED,#FEF3C7)",
  data: "linear-gradient(135deg,#F0FDF4,#DCFCE7)",
  prod: "linear-gradient(135deg,#F5F3FF,#EDE9FE)",
};

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered = PROJECTS.filter(p => active === "all" || p.cat === active);

  return (
    <section id="projects" style={{ padding: "120px 5%", background: "#FCFCFD" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ width: 32, height: 2, background: "#EA580C", display: "inline-block", borderRadius: 2 }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>Projets</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-0.03em", color: "#111827" }}>Projets phares</h2>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", maxWidth: 360 }}>De la compétition internationale au produit IA — chaque projet résout un vrai problème.</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                padding: "8px 20px", borderRadius: 999, cursor: "pointer",
                fontSize: "0.85rem", fontWeight: 600, border: "1px solid",
                borderColor: active === f.value ? "#EA580C" : "#E5E7EB",
                background: active === f.value ? "#EA580C" : "#fff",
                color: active === f.value ? "#fff" : "#4B5563",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                style={{
                  background: "#fff", border: "1px solid #E5E7EB",
                  borderRadius: 20, overflow: "hidden",
                  display: "flex", flexDirection: "column",
                  boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                  transition: "border-color 0.2s",
                }}
                whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(15,23,42,0.1)", transition: { duration: 0.2 } }}
              >
                {/* Image area */}
                <div style={{
                  height: 160, background: EMOJI_BG[p.cat] || EMOJI_BG.ml,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "3.5rem", position: "relative",
                  borderBottom: "1px solid #F3F4F6",
                }}>
                  {p.emoji}
                  {/* Top tags */}
                  <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.slice(0, 2).map(t => (
                      <span key={t} style={{
                        padding: "3px 10px", borderRadius: 999,
                        background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)",
                        fontSize: "0.7rem", fontWeight: 600, color: "#EA580C",
                        border: "1px solid rgba(234,88,12,0.2)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#2563EB", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 8 }}>{p.category}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#111827", marginBottom: 10, lineHeight: 1.35, letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#4B5563", lineHeight: 1.7, flex: 1, marginBottom: 16 }}>{p.desc}</p>

                  {p.metrics.length > 0 && (
                    <div style={{ display: "flex", gap: 20, marginBottom: 16, padding: "12px 0", borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6" }}>
                      {p.metrics.map(m => (
                        <div key={m.lbl} style={{ textAlign: "center" }}>
                          <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "#EA580C", letterSpacing: "-0.03em" }}>{m.val}</div>
                          <div style={{ fontSize: "0.7rem", color: "#6B7280" }}>{m.lbl}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #F3F4F6" }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <a href={p.github} style={{
                        width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                        border: "1px solid #E5E7EB", color: "#6B7280", transition: "all 0.2s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#EA580C"; e.currentTarget.style.color = "#EA580C"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#6B7280"; }}
                      >
                        <GithubIcon size={14} />
                      </a>
                      {p.demo && (
                        <a href={p.demo} style={{
                          width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                          border: "1px solid #E5E7EB", color: "#6B7280", transition: "all 0.2s",
                        }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = "#EA580C"; e.currentTarget.style.color = "#EA580C"; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#6B7280"; }}
                        >
                          <ExternalLinkIcon size={14} />
                        </a>
                      )}
                    </div>
                    <span style={{ fontSize: "0.72rem", display: "flex", alignItems: "center", gap: 5, color: "#6B7280" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.statusColor, display: "inline-block" }} />
                      {p.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <style>{`@media(max-width:900px){.projects-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:560px){.projects-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
