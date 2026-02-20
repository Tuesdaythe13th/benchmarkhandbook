/*
 * Nav — Brutalist sticky navigation
 * Archivo Black brand name | Space Mono nav links
 * 2px bottom border | Orange accent on active
 */

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Foundations", href: "#foundations" },
  { label: "BBOM", href: "#bbom" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Agentic", href: "#agentic" },
  { label: "Scoring", href: "#scoring" },
  { label: "Governance", href: "#governance" },
  { label: "Glossary", href: "#glossary" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#FFFFFF",
        borderBottom: "2px solid #000000",
        transition: "box-shadow 0.2s linear",
        boxShadow: scrolled ? "0 4px 0 #000000" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#000000",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              background: "#FF4D00",
              color: "#000000",
              padding: "0.15rem 0.4rem",
              fontSize: "0.65rem",
              fontFamily: "'Space Mono', monospace",
              letterSpacing: "0.05em",
              fontWeight: 700,
            }}
          >
            ARTIFEX
          </span>
          <span>LABS</span>
        </a>

        {/* Nav links — desktop */}
        <div
          style={{
            display: "flex",
            gap: "1.75rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#000000",
                textDecoration: "none",
                paddingBottom: "2px",
                borderBottom: "2px solid transparent",
                transition: "color 0.1s linear, border-color 0.1s linear",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#FF4D00";
                (e.target as HTMLElement).style.borderBottomColor = "#FF4D00";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#000000";
                (e.target as HTMLElement).style.borderBottomColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right badge */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FF4D00",
            border: "2px solid #FF4D00",
            padding: "0.2rem 0.6rem",
          }}
        >
          2026 FIELD MANUAL
        </div>
      </div>
    </nav>
  );
}
