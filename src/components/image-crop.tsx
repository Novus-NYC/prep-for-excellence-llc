import Image from "next/image";
import type { CropRect } from "@/lib/images";

type ImageCropProps = {
  src: string;
  // Natural size of the original file.
  width: number;
  height: number;
  // The part of the file to show, in natural pixels.
  crop: CropRect;
  alt: string;
  // Rendered width of the whole file, not of the window.
  sizes: string;
  quality?: number;
  className?: string;
};

// Shows one rectangle of an image through a CSS crop window. The file itself
// is untouched: the whole image is scaled and offset behind a window with the
// rectangle's proportions. The window is never wider than the rectangle's
// natural pixel width, so nothing is enlarged.
export default function ImageCrop({
  src,
  width,
  height,
  crop,
  alt,
  sizes,
  quality,
  className = "",
}: ImageCropProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: `${crop.w} / ${crop.h}`, maxWidth: crop.w }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        sizes={sizes}
        className="absolute max-w-none"
        style={{
          width: `${(width / crop.w) * 100}%`,
          height: "auto",
          left: `${(-crop.x / crop.w) * 100}%`,
          top: `${(-crop.y / crop.h) * 100}%`,
        }}
      />
    </div>
  );
}
