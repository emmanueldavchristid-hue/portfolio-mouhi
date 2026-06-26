import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christ-Emmanuel Mouhi — AI Engineer | Data Scientist | Data Engineer",
  description: "Portfolio de Christ-Emmanuel Mouhi — AI Engineer, Data Scientist & Data Engineer spécialisé en Machine Learning, Credit Risk et IA Générative.",
  keywords: ["Data Scientist", "AI Engineer", "Machine Learning", "Credit Risk", "Abidjan"],
  authors: [{ name: "Christ-Emmanuel Mouhi" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
