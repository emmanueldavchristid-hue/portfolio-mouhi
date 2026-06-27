"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" style={{ padding: "120px 5%", background: "#F8FAFC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ width: 32, height: 2, background: "#EA580C", display: "inline-block", borderRadius: 2 }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>Expérience</span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-0.03em", color: "#111827", marginBottom: 56 }}>
            Parcours professionnel
          </h2>
        </motion.div>

        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, #EA580C 0%, #E5E7EB 100%)", borderRadius: 2 }} />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
              style={{ position: "relative", marginBottom: i < EXPERIENCES.length - 1 ? 52 : 0 }}
            >
              {/* Dot */}
              <div style={{
                position: "absolute", left: -46, top: 6,
                width: 14, height: 14, borderRadius: "50%",
                background: exp.current ? "#EA580C" : "#CBD5E1",
                border: `3px solid ${exp.current ? "#FFF7ED" : "#F8FAFC"}`,
                boxShadow: exp.current ? "0 0 0 3px rgba(234,88,12,0.2)" : "none",
              }} />

              <div style={{
                background: "#fff", border: `1px solid ${exp.current ? "#FDBA74" : "#E5E7EB"}`,
                borderRadius: 20, padding: "28px 32px",
                boxShadow: exp.current ? "0 4px 24px rgba(234,88,12,0.08)" : "0 2px 10px rgba(15,23,42,0.04)",
              }}>
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 6 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <h3 style={{ fontWeight: 800, fontSize: "1.2rem", color: "#111827", letterSpacing: "-0.02em" }}>{exp.company}</h3>
                      {exp.current && (
                        <span style={{
                          padding: "3px 10px", borderRadius: 999,
                          background: "#ECFDF5", border: "1px solid #6EE7B7",
                          fontSize: "0.72rem", fontWeight: 700, color: "#16A34A",
                        }}>En cours</span>
                      )}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#4B5563", marginTop: 4, fontWeight: 500 }}>{exp.role}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#EA580C", marginBottom: 2 }}>{exp.period}</div>
                    <div style={{ fontSize: "0.78rem", color: "#6B7280" }}>{exp.location}</div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "#F3F4F6", margin: "16px 0" }} />

                {/* Points */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.65 }}>
                      <span style={{ color: "#EA580C", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                      <span><strong style={{ color: "#111827" }}>{pt.bold}</strong>{"text" in pt ? pt.text : ""}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{
                      padding: "4px 12px", borderRadius: 999,
                      background: "#F8FAFC", border: "1px solid #E5E7EB",
                      fontSize: "0.76rem", color: "#4B5563", fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
