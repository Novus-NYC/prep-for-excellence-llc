import type { CSSProperties } from "react";
import ImageCrop from "@/components/image-crop";
import type { LetterImage } from "@/lib/wins";

type LetterExcerptProps = {
  letter: LetterImage;
  className?: string;
};

// Shows only the letter excerpt from one of the client's award cards. The
// original file is untouched: the card's purple header and caption are hidden
// with a CSS crop window, and the headline is set as real text on the page.
//
// The sheet is a plain bordered sheet with no folded corner, because nothing
// may sit on top of the letter text. Below lg the excerpt keeps its natural
// pixel width so the text stays readable, and the sheet scrolls sideways when
// the column is narrower than that (it is focusable so the keyboard can scroll
// it too). From lg up the excerpt scales with its column. See `.letter` in
// globals.css.
export default function LetterExcerpt({ letter, className = "" }: LetterExcerptProps) {
  const { crop } = letter;

  return (
    <figure
      className={`letter ${className}`}
      style={{ maxWidth: crop.w + 2, "--letter-w": `${crop.w}px` } as CSSProperties}
    >
      <div className="sheet overflow-x-auto" tabIndex={0} role="group" aria-label="Award letter excerpt">
        <ImageCrop
          src={letter.src}
          width={letter.width}
          height={letter.height}
          crop={crop}
          alt={letter.alt}
          quality={90}
          sizes={`${letter.width}px`}
          className="letter-window"
        />
      </div>
      {/* Takes up space only while the sheet is wider than its column. */}
      <p className="letter-hint text-sm text-muted lg:hidden" aria-hidden="true">
        <span className="block pt-2">Scroll sideways to read the whole excerpt.</span>
      </p>
      {letter.caption ? (
        <figcaption className="mt-2.5 text-sm text-muted">{letter.caption}</figcaption>
      ) : null}
    </figure>
  );
}
