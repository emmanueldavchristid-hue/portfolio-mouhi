"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 50;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round((frame / total) * target));
      if (frame >= total) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref} style={{ fontFamily: "system-ui", fontWeight: 800, fontSize: "2.4rem", color: "#EA580C", letterSpacing: "-0.04em" }}>{count}{suffix}</div>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ padding: "72px 5%", background: "#fff", borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 24 }} className="stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                textAlign: "center", padding: "28px 16px",
                background: "#fff", border: "1px solid #E5E7EB",
                borderRadius: 20, boxShadow: "0 2px 10px rgba(15,23,42,0.05)",
                transition: "all 0.2s", cursor: "default",
              }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(234,88,12,0.12)", borderColor: "#FDBA74" }}
            >
              <Counter target={s.value} suffix={s.suffix} />
              <div style={{ fontSize: "0.82rem", color: "#6B7280", marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.stats-grid{grid-template-columns:repeat(3,1fr)!important;}}@media(max-width:580px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
