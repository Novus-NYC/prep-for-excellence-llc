// A simplified drawing of the logo's idea (purple ring, green disc, graduation
// cap) for places where the full logo would be illegible: the app icon and the
// social share image. src/app/icon.svg is the same drawing as a static file.
// The real logo PNG is used in the header and footer.

export const brandColors = {
  purple: "#4B2A86",
  deep: "#2A1558",
  ink: "#1D1033",
  green: "#00B85C",
  mintInk: "#A5EBC1",
  lav: "#D9CCF2",
  white: "#FFFFFF",
} as const;

type BrandMarkProps = {
  size: number;
  // Leave the outer purple ring off when the mark sits on a purple surface.
  ring?: boolean;
};

export function BrandMark({ size, ring = true }: BrandMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      {ring ? <circle cx="32" cy="32" r="32" fill={brandColors.purple} /> : null}
      <circle cx="32" cy="32" r="27" fill={brandColors.white} />
      <circle cx="32" cy="32" r="21" fill={brandColors.green} />
      <path d="M20.5 33.5v8c0 5 23 5 23 0v-8L32 39z" fill={brandColors.deep} />
      <path d="M32 18.5l21 9.5-21 9.5-21-9.5z" fill={brandColors.purple} />
      <path d="M53 28v10" stroke={brandColors.deep} strokeWidth="2" strokeLinecap="round" />
      <circle cx="53" cy="40.5" r="2.25" fill={brandColors.deep} />
    </svg>
  );
}
