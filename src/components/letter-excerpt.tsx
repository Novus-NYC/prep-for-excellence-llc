import Image from "next/image";
import type { LetterImage } from "@/lib/wins";

type LetterExcerptProps = {
  letter: LetterImage;
  className?: string;
};

// Shows only the letter excerpt from one of the client's award cards. The
// original file is untouched: the card's purple header and caption are hidden
// with a CSS crop window, and the headline is set as real text on the page.
// The window is never wider than the excerpt's natural pixel width.
export default function LetterExcerpt({ letter, className = "" }: LetterExcerptProps) {
  const { crop } = letter;
  const scale = letter.width / crop.w;

  return (
    <figure className={className} style={{ maxWidth: crop.w + 2 }}>
      <div className="sheet sheet-fold">
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: `${crop.w} / ${crop.h}` }}
        >
          <Image
            src={letter.src}
            alt={letter.alt}
            width={letter.width}
            height={letter.height}
            quality={90}
            sizes="(min-width: 768px) 800px, 115vw"
            className="absolute max-w-none"
            style={{
              width: `${scale * 100}%`,
              height: "auto",
              left: `${(-crop.x / crop.w) * 100}%`,
              top: `${(-crop.y / crop.h) * 100}%`,
            }}
          />
        </div>
      </div>
      <figcaption className="mt-2.5 text-sm text-muted">{letter.caption}</figcaption>
    </figure>
  );
}
