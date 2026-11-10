import { site } from "@/lib/site";

type ScholarshipStatProps = {
  className?: string;
  // Tailwind font-size classes for the figure.
  figureClassName?: string;
};

// The headline figure, worded exactly as the client publishes it. One
// paragraph so it reads as a single sentence. Sits on a purple surface.
// On load a redaction bar lifts off the figure (see .unredact in globals.css).
export default function ScholarshipStat({
  className = "",
  figureClassName = "text-figure",
}: ScholarshipStatProps) {
  return (
    <p className={className}>
      <span className="mr-3 text-base font-semibold text-mint-ink lg:mr-0 lg:block">{site.stat.lead}</span>{" "}
      <span className={`unredact whitespace-nowrap font-display font-semibold leading-none text-white ${figureClassName}`}>
        {site.stat.figure}
      </span>{" "}
      <span className="mt-1.5 block text-base text-lav lg:mt-3 lg:text-lg">{site.stat.rest}</span>
    </p>
  );
}
