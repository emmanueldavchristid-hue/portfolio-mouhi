"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, SendIcon } from "./icons";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const contactItems = [
    { icon: <MailIcon size={18} />, label: "Email", value: "christmouhi@gmail.com", href: "mailto:christmouhi@gmail.com" },
    { icon: <PhoneIcon size={18} />, label: "Téléphone", value: "+225 07 06 71 29 80", href: "tel:+2250706712980" },
    { icon: <MapPinIcon size={18} />, label: "Localisation", value: "Abidjan, Yopougon — Côte d'Ivoire", href: null },
    { icon: <LinkedinIcon size={18} />, label: "LinkedIn", value: "Christ-Emmanuel Mouhi", href: "https://www.linkedin.com/in/christ-emmanuel-mouhi-4328212b1" },
    { icon: <GithubIcon size={18} />, label: "GitHub", value: "github.com/", href: "https://github.com" },
  ];

  return (
    <section id="contact" style={{ padding: "120px 5%", background: "#FCFCFD" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ width: 32, height: 2, background: "#EA580C", display: "inline-block", borderRadius: 2 }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.1em", textTransform: "uppercase" }}>Contact</span>
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.6rem)", letterSpacing: "-0.03em", color: "#111827", marginBottom: 52 }}>
            Travaillons ensemble
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 60, alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.3rem", color: "#111827", marginBottom: 12 }}>Ouvert aux opportunités</h3>
            <p style={{ color: "#4B5563", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 28 }}>
              CDI, CDD, freelance, collaboration sur projets IA/Data — si vous avez un défi data intéressant, je suis à l'écoute. Basé à Abidjan, disponible en présentiel ou à distance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactItems.map(item => (
                <div
                  key={item.label}
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 18px", borderRadius: 14,
                    border: "1px solid #E5E7EB", background: "#fff",
                    boxShadow: "0 1px 6px rgba(15,23,42,0.04)",
                    transition: "all 0.2s",
                    cursor: item.href ? "pointer" : "default",
                    textDecoration: "none", color: "inherit",
                  }}
                  onClick={() => item.href && window.open(item.href, item.href.startsWith("mailto") || item.href.startsWith("tel") ? "_self" : "_blank")}
                  onMouseEnter={e => { if (item.href) { e.currentTarget.style.borderColor = "#FDBA74"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(234,88,12,0.1)"; } }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.boxShadow = "0 1px 6px rgba(15,23,42,0.04)"; }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: "#FFF7ED", border: "1px solid #FDBA74",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#EA580C",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "#6B7280", marginBottom: 2, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</div>
                    <div style={{ fontSize: "0.88rem", color: "#111827", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                {[
                  { label: "Prénom & Nom", placeholder: "Christ-Emmanuel MOUHI", type: "text" },
                  { label: "Email", placeholder: "christmouhi@exemple.com", type: "email" },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>{f.label}</label>
                    <input
                      type={f.type} placeholder={f.placeholder} required
                      style={{
                        width: "100%", padding: "12px 16px",
                        border: "1px solid #E5E7EB", borderRadius: 12,
                        fontSize: "0.9rem", color: "#111827", background: "#fff",
                        outline: "none", transition: "all 0.2s",
                        fontFamily: "inherit",
                      }}
                      onFocus={e => { e.target.style.borderColor = "#EA580C"; e.target.style.boxShadow = "0 0 0 3px rgba(234,88,12,0.08)"; }}
                      onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Objet</label>
                <select
                  style={{
                    width: "100%", padding: "12px 16px",
                    border: "1px solid #E5E7EB", borderRadius: 12,
                    fontSize: "0.9rem", color: "#111827", background: "#fff",
                    outline: "none", transition: "all 0.2s", cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                  onFocus={e => { e.target.style.borderColor = "#EA580C"; e.target.style.boxShadow = "0 0 0 3px rgba(234,88,12,0.08)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }}
                >
                  <option value="">Sélectionner un objet...</option>
                  <option>Opportunité d'emploi</option>
                  <option>Collaboration sur projet Data/IA</option>
                  <option>Mission freelance</option>
                  <option>Question générale</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Message</label>
                <textarea
                  placeholder="Décrivez votre projet ou opportunité..." required
                  style={{
                    width: "100%", padding: "12px 16px", height: 140,
                    border: "1px solid #E5E7EB", borderRadius: 12,
                    fontSize: "0.9rem", color: "#111827", background: "#fff",
                    outline: "none", transition: "all 0.2s", resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  onFocus={e => { e.target.style.borderColor = "#EA580C"; e.target.style.boxShadow = "0 0 0 3px rgba(234,88,12,0.08)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%", padding: "14px 28px", borderRadius: 14,
                  background: sent ? "#16A34A" : "#EA580C",
                  color: "#fff", border: "none", cursor: "pointer",
                  fontSize: "0.95rem", fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  boxShadow: "0 10px 30px rgba(234,88,12,0.18)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={e => { if (!sent) { e.currentTarget.style.background = "#C2410C"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                onMouseLeave={e => { if (!sent) { e.currentTarget.style.background = "#EA580C"; e.currentTarget.style.transform = "translateY(0)"; } }}
              >
                {sent ? <>✓ &nbsp;Message envoyé !</> : <><SendIcon size={16} /> Envoyer le message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:36px!important;}.form-row{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
