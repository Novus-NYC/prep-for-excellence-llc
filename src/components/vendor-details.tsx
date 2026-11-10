import { site } from "@/lib/site";

type VendorDetailsProps = {
  tone?: "light" | "dark";
  className?: string;
};

// The NYC DOE vendor line from the client's site, set like the reference
// block at the foot of a letter.
export default function VendorDetails({ tone = "light", className = "" }: VendorDetailsProps) {
  const term = tone === "dark" ? "text-lav" : "text-muted";
  const value = tone === "dark" ? "text-white" : "text-ink";
  const border = tone === "dark" ? "border-white/25" : "border-line";

  return (
    <dl className={`grid gap-x-8 gap-y-4 sm:grid-cols-3 ${className}`}>
      <div className={`border-t pt-3 ${border}`}>
        <dt className={`text-base ${term}`}>Status</dt>
        <dd className={`font-semibold ${value}`}>{site.doe.status}</dd>
      </div>
      <div className={`border-t pt-3 ${border}`}>
        <dt className={`text-base ${term}`}>Vendor ID</dt>
        <dd className={`whitespace-nowrap font-semibold ${value}`}>{site.doe.vendorId}</dd>
      </div>
      <div className={`border-t pt-3 ${border}`}>
        <dt className={`text-base ${term}`}>Certification</dt>
        <dd className={`font-semibold ${value}`}>{site.doe.mwbe}</dd>
      </div>
    </dl>
  );
}
