"use client";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "#111827", padding: "60px 5% 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.03em", color: "#fff", marginBottom: 12 }}>
              CE<span style={{ background: "linear-gradient(135deg,#EA580C,#F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>.</span>Mouhi
            </div>
            <p style={{ fontSize: "0.88rem", color: "#6B7280", lineHeight: 1.75, maxWidth: 260, marginBottom: 20 }}>
              AI Engineer · Data Scientist · Data Engineer.<br />Basé à Abidjan, disponible partout.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: "https://github.com", icon: <GithubIcon size={16} /> },
                { href: "https://linkedin.com", icon: <LinkedinIcon size={16} /> },
                { href: "mailto:christ.mouhi24@inphb.ci", icon: <MailIcon size={16} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener"
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    border: "1px solid #374151", color: "#6B7280",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#EA580C"; e.currentTarget.style.color = "#EA580C"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#374151"; e.currentTarget.style.color = "#6B7280"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Navigation</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.88rem", color: "#6B7280", transition: "color 0.2s", padding: 0 }}
                    onMouseEnter={e => e.currentTarget.style.color = "#EA580C"}
                    onMouseLeave={e => e.currentTarget.style.color = "#6B7280"}
                  >{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Projets</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {["Assistant IA Multimodal", "Datatour 2025", "Santé+360", "Emploi+360", "Pipeline ETL Météo"].map(p => (
                <li key={p}>
                  <span style={{ fontSize: "0.88rem", color: "#6B7280" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Contact</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "christ.mouhi24@inphb.ci", href: "mailto:christ.mouhi24@inphb.ci" },
                { label: "+225 07 06 71 29 80", href: "tel:+2250706712980" },
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener"
                    style={{ fontSize: "0.88rem", color: "#6B7280", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#EA580C"}
                    onMouseLeave={e => e.currentTarget.style.color = "#6B7280"}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1F2937", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: "0.82rem", color: "#4B5563" }}>© 2026 Christ-Emmanuel Mouhi — All rights reserved</span>
          <span style={{ fontSize: "0.82rem", color: "#4B5563" }}>
            Abidjan, Côte d'Ivoire &nbsp;·&nbsp;
            <span style={{ color: "#EA580C" }}>Disponible pour opportunités</span>
          </span>
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important;gap:32px!important;}}`}</style>
    </footer>
  );
}
