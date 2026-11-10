import Link from "next/link";
import { mailtoHref, primaryCta, site } from "@/lib/site";

type ClosingCtaProps = {
  title?: string;
  action?: { href: string; label: string };
};

// The green band that ends every page with the one conversion: ask.
export default function ClosingCta({ title = site.invitation, action = primaryCta }: ClosingCtaProps) {
  return (
    <section className="on-green bg-green text-ink" aria-labelledby="closing-cta-title">
      <div className="shell grid gap-8 py-14 lg:grid-cols-12 lg:items-end lg:gap-10 lg:py-20">
        <div className="reveal lg:col-span-8">
          <div className="letterhead mb-6 w-16" aria-hidden="true" />
          <h2 id="closing-cta-title" className="max-w-[18ch] font-display text-display-lg font-medium">
            {title}
          </h2>
        </div>
        <div className="reveal flex flex-col items-start gap-3 lg:col-span-4" style={{ transitionDelay: "120ms" }}>
          <Link href={action.href} className="btn btn-ink">
            {action.label}
          </Link>
          <p className="text-base">
            Or write to{" "}
            <a
              href={mailtoHref}
              className="inline-flex min-h-[2.75rem] items-center break-all font-semibold underline decoration-2 underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
