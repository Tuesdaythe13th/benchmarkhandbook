/*
 * MarqueeTicker — Continuous horizontal marquee
 * Linear animation, configurable speed/colors
 * Used as section separators and content tickers
 */

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  bg?: string;
  color?: string;
}

export default function MarqueeTicker({
  items,
  speed = 30,
  bg = "#000000",
  color = "#FF4D00",
}: MarqueeTickerProps) {
  // Duplicate items for seamless loop
  const allItems = [...items, ...items, ...items];

  return (
    <div
      style={{
        background: bg,
        borderTop: "2px solid #000000",
        borderBottom: "2px solid #000000",
        overflow: "hidden",
        padding: "0.6rem 0",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: color,
              whiteSpace: "nowrap",
              padding: "0 2rem",
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                background: color,
                borderRadius: "50%",
                opacity: 0.6,
              }}
            />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
