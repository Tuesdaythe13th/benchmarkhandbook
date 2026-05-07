/*
 * Nav — Brutalist two-row sticky navigation
 * Row 1: Logo image | Page tabs | Search button | 2026 badge
 * Row 2: Section anchor links with active-section highlight (IntersectionObserver)
 * Global search: Cmd+K / Ctrl+K opens GlobalSearch overlay
 * Orange #FF4D00 | Black #000 | White #FFF
 */

import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import GlobalSearch from "./GlobalSearch";
import EnhancedSearch from "./EnhancedSearch";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310419663032006760/EoGLXC7cPBSriFrc6BxMDm/artifxnoportland_eb8df859.png";

const sectionLinks = [
  { label: "Foundations", href: "#foundations" },
  { label: "BBOM",        href: "#bbom" },
  { label: "Benchmarks",  href: "#benchmarks" },
  { label: "Selector",    href: "#selector" },
  { label: "Agentic",     href: "#agentic" },
  { label: "Scoring",     href: "#scoring" },
  { label: "Governance",  href: "#governance" },
  { label: "Glossary",    href: "#glossary" },
  { label: "Cemetery",    href: "#cemetery" },
  { label: "Resources",   href: "#resources" },
  { label: "Research",    href: "#research" },
  { label: "Compendium",  href: "#compendium" },
  { label: "Assessment",  href: "#survey" },
  { label: "Kinetic",     href: "#kinetic-threshold" },
  { label: "Calibration", href: "#calibration-governance" },
  { label: "Legal",       href: "#legal-admissibility" },
];

const pageLinks = [
  { label: "Eval Guide",    href: "/" },
  { label: "Safety",        href: "/safety" },
  { label: "Multicultural", href: "/multicultural" },
  { label: "Rubric Design", href: "/rubric-design" },
  { label: "Metrics",       href: "/metrics" },
  { label: "Doctrine",      href: "/doctrine" },
];

// Map anchor → section element id (strip the #)
const SECTION_IDS = sectionLinks.map((l) => l.href.slice(1));

export default function Nav() {
  const [scrolled, setScrolled]         = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [location, navigate]            = useLocation();

  // ── Scroll shadow ──────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── IntersectionObserver for active section ────────────────────
  useEffect(() => {
    if (location !== "/") { setActiveSection(null); return; }

    const observers: IntersectionObserver[] = [];
    const visibleMap = new Map<string, number>(); // id → intersectionRatio

    const pick = () => {
      let best = "";
      let bestRatio = 0;
      visibleMap.forEach((ratio, id) => {
        if (ratio > bestRatio) { bestRatio = ratio; best = id; }
      });
      setActiveSection(best || null);
    };

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibleMap.set(id, entry.intersectionRatio);
          pick();
        },
        { threshold: [0, 0.1, 0.3, 0.5, 0.8, 1.0] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location]);

  // ── Cmd+K / Ctrl+K global shortcut ────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [searchOpen]);

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    },
    [location, navigate]
  );

  const isHome = location === "/";

  const handleSearchClose = () => setSearchOpen(false);

  return (
    <>
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
        {/* ROW 1: Logo | Page tabs | Search | Badge */}
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
          {/* Logo */}
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

          {/* Right side: Search button + Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            {/* Search button */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search (Cmd+K)"
              title="Search (⌘K)"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.52rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#444444",
                border: "2px solid #000000",
                background: "transparent",
                padding: "0.3rem 0.65rem",
                cursor: "pointer",
                transition: "all 0.1s linear",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FF4D00";
                (e.currentTarget as HTMLElement).style.color = "#000000";
                (e.currentTarget as HTMLElement).style.borderColor = "#FF4D00";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#444444";
                (e.currentTarget as HTMLElement).style.borderColor = "#000000";
              }}
            >
              {/* Inline search icon */}
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
              </svg>
              <span>Search</span>
              <span
                style={{
                  border: "1px solid #CCCCCC",
                  padding: "0.05rem 0.3rem",
                  fontSize: "0.44rem",
                  letterSpacing: "0.04em",
                  color: "#888888",
                  lineHeight: 1.6,
                }}
              >
                ⌘K
              </span>
            </button>

            {/* 2026 Field Manual badge */}
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#FF4D00",
                border: "2px solid #FF4D00",
                padding: "0.2rem 0.55rem",
                whiteSpace: "nowrap",
              }}
            >
              2026 FIELD MANUAL
            </div>
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
            {sectionLinks.map((link, i) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href)}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: isActive ? "#FF4D00" : "#444444",
                    textDecoration: "none",
                    padding: "0 0.85rem",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    borderRight: i < sectionLinks.length - 1 ? "1px solid #E0E0E0" : "none",
                    borderBottom: isActive ? "2px solid #FF4D00" : "2px solid transparent",
                    transition: "color 0.1s linear, border-color 0.1s linear, background 0.1s linear",
                    whiteSpace: "nowrap",
                    fontWeight: isActive ? 700 : 400,
                    background: isActive ? "#FFF5F0" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#FF4D00";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = "#FF4D00";
                    (e.currentTarget as HTMLElement).style.background = "#FFF5F0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isActive ? "#FF4D00" : "#444444";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = isActive ? "#FF4D00" : "transparent";
                    (e.currentTarget as HTMLElement).style.background = isActive ? "#FFF5F0" : "transparent";
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </nav>

      {/* Global search overlay */}
      {searchOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) handleSearchClose();
          }}
          style={{ position: "fixed", inset: 0, zIndex: 40 }}
        >
          <EnhancedSearch />
        </div>
      )}
    </>
  );
}
