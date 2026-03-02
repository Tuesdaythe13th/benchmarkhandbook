/*
 * Nav — Brutalist sticky navigation
 * Archivo Black brand name | Space Mono nav links
 * 2px bottom border | Orange accent on active
 * Page-aware: shows section links on Home, page links on all pages
 */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const sectionLinks = [
  { label: "Foundations", href: "#foundations" },
  { label: "BBOM", href: "#bbom" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Agentic", href: "#agentic" },
  { label: "Scoring", href: "#scoring" },
  { label: "Governance", href: "#governance" },
  { label: "Glossary", href: "#glossary" },
];

const pageLinks = [
  { label: "Eval Guide", href: "/" },
  { label: "Safety", href: "/safety" },
  { label: "Multicultural", href: "/multicultural" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isHome = location === "/";

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
          gap: "1rem",
        }}
      >
        {/* Brand */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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
            flexShrink: 0,
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

        {/* Page tabs — always visible */}
        <div style={{ display: "flex", gap: "0", border: "2px solid #000000", flexShrink: 0 }}>
          {pageLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); navigate(link.href); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: isActive ? "#FFFFFF" : "#000000",
                  textDecoration: "none",
                  padding: "0.4rem 0.9rem",
                  background: isActive ? "#000000" : "transparent",
                  borderRight: "2px solid #000000",
                  transition: "background 0.1s linear, color 0.1s linear",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background = "#FF4D00";
                    (e.currentTarget as HTMLElement).style.color = "#000000";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "#000000";
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Section links — only on home page, desktop */}
        {isHome && (
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#666666",
                  textDecoration: "none",
                  paddingBottom: "2px",
                  borderBottom: "2px solid transparent",
                  transition: "color 0.1s linear, border-color 0.1s linear",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#FF4D00";
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "#FF4D00";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#666666";
                  (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

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
            flexShrink: 0,
          }}
        >
          2026 FIELD MANUAL
        </div>
      </div>
    </nav>
  );
}
