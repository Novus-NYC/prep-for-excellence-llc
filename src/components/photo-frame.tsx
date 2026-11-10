import Image from "next/image";
import type { CSSProperties } from "react";
import type { Photo } from "@/lib/images";

const blockColors = {
  green: "bg-green",
  purple: "bg-purple",
  mint: "bg-mint-ink",
  lilac: "bg-lilac",
} as const;

type PhotoFrameProps = {
  photo: Photo;
  // Tailwind aspect-ratio classes for the visible crop, e.g. "aspect-[4/3] lg:aspect-[2/3]".
  aspect: string;
  // Tailwind object-position classes. The crop is always a deliberate choice.
  position?: string;
  // Largest rendered width in CSS pixels. Clamped to the file's natural width
  // so a small original is never stretched.
  maxWidth: number;
  sizes: string;
  priority?: boolean;
  // Solid colour block that sits behind the photo, offset like a second sheet.
  block?: keyof typeof blockColors;
  blockX?: string;
  blockY?: string;
  reveal?: boolean;
  // The frame has no intrinsic width (its image is absolutely positioned),
  // so its parent must give it a definite width. Align it with margins here,
  // never with justify-self on a shrink-to-fit wrapper.
  className?: string;
};

export default function PhotoFrame({
  photo,
  aspect,
  position = "object-center",
  maxWidth,
  sizes,
  priority = false,
  block,
  blockX = "0.875rem",
  blockY = "0.875rem",
  reveal = true,
  className = "",
}: PhotoFrameProps) {
  const blockStyle = { "--block-x": blockX, "--block-y": blockY } as CSSProperties;

  return (
    <div
      // reveal-fade (opacity only): a photo frame must not shift the layout.
      className={`relative w-full ${reveal ? "reveal reveal-fade" : ""} ${className}`}
      style={{ maxWidth: Math.min(maxWidth, photo.width) }}
    >
      {block ? (
        <span
          aria-hidden="true"
          className={`frame-block absolute inset-0 ${blockColors[block]}`}
          style={blockStyle}
        />
      ) : null}
      {/* overflow-hidden is the crop window for object-fit, nothing else. */}
      <div className={`relative overflow-hidden bg-lilac ${aspect}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${position}`}
        />
      </div>
    </div>
  );
}
