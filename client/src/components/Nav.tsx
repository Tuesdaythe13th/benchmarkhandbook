/*
 * Nav — Brutalist two-row sticky navigation
 * Row 1: Logo image | Page tabs | 2026 badge
 * Row 2: All section anchor links (always visible on home)
 * Orange #FF4D00 | Black #000 | White #FFF
 */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032006760/EoGLXC7cPBSriFrc6BxMDm/artifxnoportland_eb8df859.png";

const sectionLinks = [
  { label: "Foundations", href: "#foundations" },
  { label: "BBOM", href: "#bbom" },
  { label: "Benchmarks", href: "#benchmarks" },
  { label: "Selector", href: "#selector" },
  { label: "Agentic", href: "#agentic" },
  { label: "Scoring", href: "#scoring" },
  { label: "Governance", href: "#governance" },
  { label: "Glossary", href: "#glossary" },
  { label: "Cemetery", href: "#cemetery" },
  { label: "Resources", href: "#resources" },
  { label: "Research", href: "#research" },
  { label: "Compendium", href: "#compendium" },
  { label: "Assessment", href: "#survey" },
];

const pageLinks = [
  { label: "Eval Guide", href: "/" },
  { label: "Safety", href: "/safety" },
  { label: "Multicultural", href: "/multicultural" },
  { label: "Rubric Design", href: "/rubric-design" },
  { label: "Metrics", href: "/metrics" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
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
      }, 200);
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
        boxShadow: scrolled ? "0 4px 0 #000000" : "none",
        transition: "box-shadow 0.2s linear",
      }}
    >
      {/* ROW 1: Logo | Page tabs | Badge */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          gap: "1rem",
          borderBottom: isHome ? "1px solid #E5E5E5" : "none",
        }}
      >
        {/* Logo image */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}
        >
          <img
            src={LOGO_URL}
            alt="Artifex Labs"
            style={{ height: 56, width: "auto", objectFit: "contain", display: "block" }}
          />
        </a>

        {/* Page tabs */}
        <div style={{ display: "flex", gap: 0, border: "2px solid #000000", flexShrink: 0 }}>
          {pageLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); navigate(link.href); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: isActive ? "#FFFFFF" : "#000000",
                  textDecoration: "none",
                  padding: "0.4rem 0.85rem",
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

        {/* Badge */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FF4D00",
            border: "2px solid #FF4D00",
            padding: "0.2rem 0.55rem",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          2026 FIELD MANUAL
        </div>
      </div>

      {/* ROW 2: Section anchor links — only on home page */}
      {isHome && (
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            height: 34,
            gap: 0,
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {sectionLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.href)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: link.label === "Selector" ? "#FF4D00" : "#444444",
                textDecoration: "none",
                padding: "0 0.85rem",
                height: "100%",
                display: "flex",
                alignItems: "center",
                borderRight: i < sectionLinks.length - 1 ? "1px solid #E0E0E0" : "none",
                borderBottom: link.label === "Selector" ? "2px solid #FF4D00" : "2px solid transparent",
                transition: "color 0.1s linear, border-color 0.1s linear, background 0.1s linear",
                whiteSpace: "nowrap",
                fontWeight: link.label === "Selector" ? 700 : 400,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#FF4D00";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "#FF4D00";
                (e.currentTarget as HTMLElement).style.background = "#FFF5F0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = link.label === "Selector" ? "#FF4D00" : "#444444";
                (e.currentTarget as HTMLElement).style.borderBottomColor = link.label === "Selector" ? "#FF4D00" : "transparent";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
