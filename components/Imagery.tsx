/**
 * Imagery — real photography from Unsplash, hotlinked.
 *
 * Each variant maps to a specific Unsplash photo (verified 200) chosen
 * to evoke "warm residential home in a real neighborhood" — the
 * design reference is Oxford House (welcoming, lived-in, not
 * institutional).
 *
 * Replace these src URLs with the client's real architectural
 * photography when shot.
 */

import { cn } from "@/lib/cn";

type Variant =
  | "residence-hero"
  | "residence-exterior"
  | "residence-interior"
  | "residence-bedroom"
  | "residence-porch"
  | "abstract-bloom"
  | "neighborhood"
  | "lifestyle-1"
  | "lifestyle-2"
  | "lifestyle-3"
  | "lifestyle-4";

const PHOTOS: Record<Variant, { id: string; focus?: string }> = {
  // The hero — a warm, welcoming home (Oxford-house spirit)
  "residence-hero": { id: "1472224371017-08207f84aaae", focus: "center" },
  "residence-exterior": { id: "1612312933146-06d98e301654" },
  "residence-interior": { id: "1631510390389-c1e4fb20ff31" },
  "residence-bedroom": { id: "1758243954982-cd1d5a8b9f97" },
  "residence-porch": { id: "1633966077296-1e8991d9326b" },
  "abstract-bloom": { id: "1666532937489-331f2f8f4668" },
  neighborhood: { id: "1687825601276-9de4bdbd30d1" },
  "lifestyle-1": { id: "1597361608554-73f287ca4547" },
  "lifestyle-2": { id: "1616593871468-2a9452218369" },
  "lifestyle-3": { id: "1698241025739-e1ab506b0f5e" },
  "lifestyle-4": { id: "1653569511862-8a0320ae66cc" },
};

interface ImageryProps {
  variant: Variant;
  className?: string;
  alt: string;
  width?: number;
  priority?: boolean;
}

export default function Imagery({
  variant,
  className,
  alt,
  width = 1600,
  priority = false,
}: ImageryProps) {
  const photo = PHOTOS[variant];
  const src = `https://images.unsplash.com/photo-${photo.id}?auto=format&fit=crop&w=${width}&q=82`;
  const srcSet = [
    `${src.replace(`w=${width}`, "w=600")} 600w`,
    `${src.replace(`w=${width}`, "w=1000")} 1000w`,
    `${src} ${width}w`,
  ].join(", ");

  return (
    <div className={cn("relative overflow-hidden bg-forest-soft", className)}>
      <img
        src={src}
        srcSet={srcSet}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* subtle warm tone overlay for visual cohesion across photo set */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/10 pointer-events-none"
      />
    </div>
  );
}
