"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setPct((window.scrollY / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 200, background: "#F3F4F6" }}>
      <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#EA580C,#F59E0B)", transition: "width 0.1s linear", borderRadius: "0 2px 2px 0" }} />
    </div>
  );
}
