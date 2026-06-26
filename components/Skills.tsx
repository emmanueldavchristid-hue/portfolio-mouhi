"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" style={{ padding: "120px 5%", background: "#FCFCFD" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ width: 32, height: 2, background: "#EA580C", display: "inline-block", borderRadius: 2 }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>Compétences</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-0.03em", color: "#111827" }}>Stack technique</h2>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", maxWidth: 380 }}>Un ensemble de compétences orientées vers la production de valeur réelle à partir de la donnée.</p>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="skills-grid">
          {SKILLS.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              style={{
                background: "#fff", border: "1px solid #E5E7EB",
                borderRadius: 20, padding: "26px",
                boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                transition: "all 0.25s",
              }}
              whileHover={{ y: -4, boxShadow: "0 14px 36px rgba(234,88,12,0.1)", borderColor: "#FDBA74" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                  background: "linear-gradient(135deg,#FFF7ED,#FEF3C7)",
                  border: "1px solid #FDBA74",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem",
                }}>
                  {cat.icon}
                </div>
                <span style={{ fontWeight: 700, fontSize: "0.92rem", color: "#111827" }}>{cat.title}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {cat.items.map(item => (
                  <span key={item} style={{
                    padding: "4px 12px", borderRadius: 999,
                    background: cat.highlight.includes(item) ? "#FFF7ED" : "#F8FAFC",
                    border: `1px solid ${cat.highlight.includes(item) ? "#FDBA74" : "#E5E7EB"}`,
                    fontSize: "0.77rem", fontWeight: cat.highlight.includes(item) ? 600 : 400,
                    color: cat.highlight.includes(item) ? "#EA580C" : "#4B5563",
                    transition: "all 0.15s", cursor: "default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#FFF7ED"; e.currentTarget.style.borderColor = "#FDBA74"; e.currentTarget.style.color = "#EA580C"; }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = cat.highlight.includes(item) ? "#FFF7ED" : "#F8FAFC";
                      e.currentTarget.style.borderColor = cat.highlight.includes(item) ? "#FDBA74" : "#E5E7EB";
                      e.currentTarget.style.color = cat.highlight.includes(item) ? "#EA580C" : "#4B5563";
                    }}
                  >{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.skills-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:560px){.skills-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
