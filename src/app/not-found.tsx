import type { Metadata } from "next";
import Link from "next/link";
import { contactNav, primaryCta, primaryNav, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist. Use the links to find programs, success stories and contact details.",
  robots: { index: false },
};

const links = [{ href: routes.home, label: "Home" }, ...primaryNav, contactNav];

// Server rendered inside the root layout, so it has the header, footer, one
// h1 and works without JavaScript.
export default function NotFound() {
  return (
    <section className="bg-mint">
      <div className="shell grid gap-x-12 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="text-base font-semibold text-green-text">
            Page <span className="bar w-16" aria-hidden="true" /> <span className="sr-only">not found</span>
          </p>
          <h1 className="mt-4 font-display text-display-xl font-medium tracking-[-0.02em] text-purple">
            <span className="block">This page</span>{" "}
            <span className="block italic text-ink">is not here.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg">
            The link may be old or mistyped. Everything on the site is one step away from the list here.
          </p>
          <Link href={primaryCta.href} className="btn btn-action mt-8">
            {primaryCta.label}
          </Link>
        </div>
        <nav aria-label="Pages" className="lg:col-span-5">
          <ul className="border-b border-purple/30">
            {links.map((link) => (
              <li key={link.href} className="border-t border-purple/30">
                <Link
                  href={link.href}
                  className="flex min-h-[3.5rem] items-center justify-between font-display text-[1.5rem] font-medium text-purple"
                >
                  {link.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
