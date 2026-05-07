/**
 * Imagery — placeholder system that ships a designed, on-brand visual
 * in every image slot until real architectural photography arrives.
 *
 * Variants render as careful, branded SVG/CSS compositions in the
 * forest+clay+ivory palette — never as gradient rectangles or
 * Lorem-Picsum stock. This is the "Phase 1: Photography Pending"
 * solution from anti-patterns §5.
 */

import { cn } from "@/lib/cn";

type Variant =
  | "residence-hero"
  | "residence-exterior"
  | "residence-interior"
  | "residence-bedroom"
  | "residence-porch"
  | "founder"
  | "abstract-bloom"
  | "neighborhood";

interface ImageryProps {
  variant: Variant;
  className?: string;
  alt: string;
}

export default function Imagery({ variant, className, alt }: ImageryProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative overflow-hidden bg-forest-soft border border-line",
        className
      )}
    >
      <Composition variant={variant} />
      <span className="sr-only">{alt}</span>
      <span
        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-bg/85 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase tracking-wider text-ink-muted font-semibold border border-line"
        aria-hidden="true"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-clay" />
        Photography pending
      </span>
    </div>
  );
}

function Composition({ variant }: { variant: Variant }) {
  switch (variant) {
    case "residence-hero":
      return <ResidenceHero />;
    case "residence-exterior":
      return <ResidenceExterior />;
    case "residence-interior":
      return <ResidenceInterior />;
    case "residence-bedroom":
      return <ResidenceBedroom />;
    case "residence-porch":
      return <ResidencePorch />;
    case "founder":
      return <FounderPortrait />;
    case "abstract-bloom":
      return <AbstractBloom />;
    case "neighborhood":
      return <Neighborhood />;
  }
}

/* -------- compositions (SVG line-art in palette) -------- */

function ResidenceHero() {
  return (
    <svg viewBox="0 0 800 1000" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBF8F3" />
          <stop offset="100%" stopColor="#F1E2D7" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8EDE7" />
          <stop offset="100%" stopColor="#C9C2B3" />
        </linearGradient>
      </defs>
      <rect width="800" height="700" fill="url(#sky)" />
      <rect y="700" width="800" height="300" fill="url(#ground)" />
      {/* tree silhouettes */}
      <g opacity="0.55" fill="#2F4A3A">
        <path d="M60 700 Q90 540 130 700 Z" />
        <path d="M150 700 Q200 480 260 700 Z" />
        <path d="M620 700 Q670 500 720 700 Z" />
      </g>
      {/* modern home form */}
      <g>
        {/* main volume */}
        <rect x="180" y="430" width="440" height="280" fill="#1C2620" />
        {/* upper white volume */}
        <rect x="220" y="350" width="360" height="120" fill="#FFFFFF" />
        {/* roof line */}
        <polygon points="180,430 220,350 580,350 620,430" fill="#1F3528" />
        {/* windows lower */}
        <rect x="220" y="490" width="60" height="160" fill="#F1E2D7" />
        <rect x="320" y="490" width="160" height="160" fill="#FBF8F3" />
        <rect x="520" y="490" width="60" height="160" fill="#F1E2D7" />
        {/* door */}
        <rect x="380" y="540" width="40" height="170" fill="#B8623E" />
        {/* upper window */}
        <rect x="280" y="380" width="240" height="60" fill="#1C2620" opacity="0.85" />
        {/* warm glow */}
        <circle cx="400" cy="640" r="10" fill="#FED93B" opacity="0.6" />
      </g>
      {/* foreground hedge */}
      <rect y="700" width="800" height="20" fill="#2F4A3A" opacity="0.75" />
      {/* path */}
      <polygon points="370,720 430,720 460,1000 340,1000" fill="#E0DBD0" />
    </svg>
  );
}

function ResidenceExterior() {
  return (
    <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="800" height="600" fill="#F1E2D7" />
      <rect y="420" width="800" height="180" fill="#E0DBD0" />
      {/* low slung modern house */}
      <rect x="120" y="240" width="560" height="200" fill="#1C2620" />
      <rect x="160" y="180" width="480" height="80" fill="#FFFFFF" />
      <polygon points="120,240 160,180 640,180 680,240" fill="#1F3528" />
      <rect x="180" y="290" width="80" height="140" fill="#FBF8F3" />
      <rect x="290" y="290" width="200" height="140" fill="#1C2620" opacity="0.8" />
      <rect x="520" y="290" width="80" height="140" fill="#FBF8F3" />
      <rect x="380" y="340" width="40" height="100" fill="#B8623E" />
      <g fill="#2F4A3A" opacity="0.5">
        <path d="M40 420 Q70 280 110 420 Z" />
        <path d="M700 420 Q740 290 780 420 Z" />
      </g>
    </svg>
  );
}

function ResidenceInterior() {
  return (
    <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="800" height="600" fill="#FBF8F3" />
      {/* floor */}
      <rect y="440" width="800" height="160" fill="#C9C2B3" />
      {/* back wall window */}
      <rect x="120" y="80" width="560" height="280" fill="#F1E2D7" />
      <rect x="120" y="80" width="560" height="280" fill="none" stroke="#1C2620" strokeWidth="3" />
      <line x1="400" y1="80" x2="400" y2="360" stroke="#1C2620" strokeWidth="3" />
      <line x1="120" y1="220" x2="680" y2="220" stroke="#1C2620" strokeWidth="3" />
      {/* island */}
      <rect x="240" y="380" width="320" height="80" fill="#1C2620" />
      <rect x="240" y="370" width="320" height="14" fill="#2F4A3A" />
      {/* stools */}
      <circle cx="290" cy="450" r="14" fill="#B8623E" />
      <circle cx="400" cy="450" r="14" fill="#B8623E" />
      <circle cx="510" cy="450" r="14" fill="#B8623E" />
      {/* pendant lights */}
      <line x1="320" y1="80" x2="320" y2="170" stroke="#1C2620" strokeWidth="2" />
      <circle cx="320" cy="180" r="14" fill="#FED93B" opacity="0.85" />
      <line x1="480" y1="80" x2="480" y2="170" stroke="#1C2620" strokeWidth="2" />
      <circle cx="480" cy="180" r="14" fill="#FED93B" opacity="0.85" />
    </svg>
  );
}

function ResidenceBedroom() {
  return (
    <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="800" height="600" fill="#F4F1EB" />
      {/* window */}
      <rect x="80" y="80" width="280" height="280" fill="#FBF8F3" stroke="#1C2620" strokeWidth="3" />
      <line x1="220" y1="80" x2="220" y2="360" stroke="#1C2620" strokeWidth="2" />
      <line x1="80" y1="220" x2="360" y2="220" stroke="#1C2620" strokeWidth="2" />
      {/* bed */}
      <rect x="140" y="380" width="540" height="160" fill="#FFFFFF" />
      <rect x="140" y="350" width="540" height="40" fill="#1C2620" />
      {/* pillows */}
      <rect x="180" y="370" width="120" height="50" fill="#F1E2D7" rx="6" />
      <rect x="320" y="370" width="120" height="50" fill="#F1E2D7" rx="6" />
      {/* throw blanket */}
      <rect x="500" y="430" width="180" height="110" fill="#2F4A3A" />
      {/* lamp */}
      <line x1="720" y1="280" x2="720" y2="380" stroke="#1C2620" strokeWidth="2" />
      <circle cx="720" cy="270" r="20" fill="#FED93B" opacity="0.75" />
      {/* floor */}
      <rect y="540" width="800" height="60" fill="#C9C2B3" />
    </svg>
  );
}

function ResidencePorch() {
  return (
    <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="800" height="600" fill="#E8EDE7" />
      <rect y="380" width="800" height="220" fill="#C9C2B3" />
      {/* porch railing */}
      <rect y="350" width="800" height="14" fill="#1C2620" />
      <g stroke="#1C2620" strokeWidth="3">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={50 + i * 47} y1={365} x2={50 + i * 47} y2={420} />
        ))}
      </g>
      {/* chairs */}
      <rect x="180" y="320" width="80" height="80" fill="#B8623E" rx="6" />
      <rect x="540" y="320" width="80" height="80" fill="#B8623E" rx="6" />
      {/* small table */}
      <rect x="380" y="360" width="40" height="40" fill="#1F3528" />
      {/* trees beyond */}
      <g fill="#2F4A3A" opacity="0.6">
        <path d="M0 350 Q50 200 100 350 Z" />
        <path d="M700 350 Q750 200 800 350 Z" />
      </g>
    </svg>
  );
}

function FounderPortrait() {
  return (
    <svg viewBox="0 0 600 800" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="600" height="800" fill="#1C2620" />
      <circle cx="300" cy="280" r="160" fill="#2F4A3A" />
      {/* head silhouette */}
      <ellipse cx="300" cy="260" rx="105" ry="130" fill="#1C1F1B" />
      {/* shoulders */}
      <path d="M120 800 L120 560 Q300 460 480 560 L480 800 Z" fill="#1C1F1B" />
      {/* warm light glow */}
      <circle cx="450" cy="200" r="120" fill="#B8623E" opacity="0.18" />
      {/* name plate */}
      <rect x="40" y="700" width="180" height="3" fill="#B8623E" />
    </svg>
  );
}

function AbstractBloom() {
  return (
    <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="600" height="600" fill="#F1E2D7" />
      <circle cx="300" cy="300" r="220" fill="#2F4A3A" opacity="0.18" />
      <circle cx="300" cy="300" r="160" fill="#B8623E" opacity="0.25" />
      <circle cx="300" cy="300" r="100" fill="#1C2620" opacity="0.6" />
    </svg>
  );
}

function Neighborhood() {
  return (
    <svg viewBox="0 0 800 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="800" height="400" fill="#FBF8F3" />
      <rect y="260" width="800" height="140" fill="#E0DBD0" />
      {/* houses in a row */}
      <g>
        <rect x="40" y="160" width="120" height="100" fill="#1C2620" />
        <polygon points="40,160 100,110 160,160" fill="#1F3528" />
        <rect x="200" y="180" width="100" height="80" fill="#FBF8F3" stroke="#1C2620" strokeWidth="2" />
        <polygon points="200,180 250,140 300,180" fill="#B8623E" />
        <rect x="340" y="150" width="160" height="110" fill="#1C2620" />
        <rect x="380" y="180" width="80" height="40" fill="#F1E2D7" />
        <rect x="540" y="170" width="120" height="90" fill="#FBF8F3" stroke="#1C2620" strokeWidth="2" />
        <polygon points="540,170 600,130 660,170" fill="#2F4A3A" />
        <rect x="700" y="180" width="80" height="80" fill="#1C2620" />
      </g>
      {/* trees */}
      <g fill="#2F4A3A" opacity="0.7">
        <circle cx="180" cy="220" r="22" />
        <circle cx="320" cy="220" r="20" />
        <circle cx="520" cy="220" r="22" />
      </g>
    </svg>
  );
}
