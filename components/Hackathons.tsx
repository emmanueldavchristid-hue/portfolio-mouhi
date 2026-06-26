"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HACKATHONS } from "@/lib/data";

export default function Hackathons() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="hackathons" style={{ padding: "120px 5%", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ width: 32, height: 2, background: "#EA580C", display: "inline-block", borderRadius: 2 }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>Compétitions</span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-0.03em", color: "#111827", marginBottom: 12 }}>
            Hackathons & Challenges
          </h2>
          <p style={{ color: "#6B7280", fontSize: "0.95rem", marginBottom: 52 }}>La compétition comme terrain d'entraînement — résoudre de vrais problèmes sous contrainte de temps.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22 }} className="hack-grid">
          {HACKATHONS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.09 }}
              style={{
                background: "#fff", border: "1px solid #E5E7EB",
                borderRadius: 20, padding: "28px",
                boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                display: "flex", gap: 20, position: "relative",
                overflow: "hidden", transition: "all 0.25s",
              }}
              whileHover={{ y: -4, boxShadow: "0 14px 36px rgba(234,88,12,0.1)", borderColor: "#FDBA74" }}
            >
              {/* Subtle bg shape */}
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 120, height: 120, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(234,88,12,0.05), transparent)",
                zIndex: 0,
              }} />

              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                background: "linear-gradient(135deg, #FFF7ED, #FEF3C7)",
                border: "1px solid #FDBA74",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem", zIndex: 1,
              }}>
                {h.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1, zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#111827", lineHeight: 1.3 }}>{h.title}</h3>
                  <span style={{
                    padding: "3px 12px", borderRadius: 999,
                    background: h.badgeColor === "#EA580C" ? "#FFF7ED" : "#EFF6FF",
                    border: `1px solid ${h.badgeColor === "#EA580C" ? "#FDBA74" : "#BFDBFE"}`,
                    fontSize: "0.72rem", fontWeight: 700,
                    color: h.badgeColor, whiteSpace: "nowrap",
                  }}>{h.badge}</span>
                </div>
                <div style={{ fontSize: "0.78rem", color: "#EA580C", fontWeight: 600, marginBottom: 10 }}>
                  {h.period} · {h.role}
                </div>
                <p style={{ fontSize: "0.87rem", color: "#4B5563", lineHeight: 1.65, marginBottom: 14 }}>{h.desc}</p>
                {/* Impact */}
                <div style={{
                  padding: "8px 14px", borderRadius: 10,
                  background: "#F8FAFC", border: "1px solid #E5E7EB",
                  fontSize: "0.8rem", color: "#2563EB", fontWeight: 600,
                  marginBottom: 14, display: "flex", alignItems: "center", gap: 6,
                }}>
                  <span>⚡</span> {h.impact}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {h.tags.map(t => (
                    <span key={t} style={{
                      padding: "3px 10px", borderRadius: 999,
                      background: "#F8FAFC", border: "1px solid #E5E7EB",
                      fontSize: "0.73rem", color: "#4B5563",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.hack-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
