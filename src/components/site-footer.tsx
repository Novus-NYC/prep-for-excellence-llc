import Image from "next/image";
import Link from "next/link";
import ExternalLink from "@/components/external-link";
import { contactNav, mailtoHref, primaryNav, routes, site, socialLinks } from "@/lib/site";

const footerLinks = [{ href: routes.home, label: "Home" }, ...primaryNav, contactNav];

const linkClass =
  "inline-flex min-h-[2.75rem] items-center text-base text-white underline decoration-white/40 underline-offset-4 hover:decoration-mint-ink";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink text-white">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <Image
              src={site.logo.src}
              alt={site.logo.alt}
              width={site.logo.width}
              height={site.logo.height}
              sizes="96px"
              className="h-24 w-auto"
            />
            <p className="mt-5 font-display text-[1.75rem] font-medium leading-tight">{site.name}</p>
            <p className="mt-2 max-w-sm text-base text-lav">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="label text-mint-ink">Pages</h2>
            <ul className="mt-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-5">
            <h2 className="label text-mint-ink">Contact</h2>
            <ul className="mt-3">
              <li>
                <a href={mailtoHref} className={`${linkClass} break-all`}>
                  {site.email}
                </a>
              </li>
              {site.phone ? (
                <li>
                  <a href={`tel:${site.phone}`} className={`${linkClass} whitespace-nowrap`}>
                    {site.phone}
                  </a>
                </li>
              ) : null}
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <ExternalLink href={social.url} className={linkClass}>
                    {social.label}: {social.handle}
                  </ExternalLink>
                </li>
              ))}
            </ul>
            {site.address ? <p className="mt-3 text-base text-lav">{site.address}</p> : null}

            <p className="mt-6 border-t border-white/25 pt-4 text-base text-lav">
              {site.doe.status} | Vendor ID:{" "}
              <span className="whitespace-nowrap">{site.doe.vendorId}</span> | {site.doe.mwbe}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/25 pt-6 text-base text-lav sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          {/* The linked text must be exactly "Made by Novus", so the new tab
              notice is attached as a description instead of inside the link. */}
          <p>
            <a
              href="https://novusnyc.org"
              target="_blank"
              rel="noreferrer"
              aria-describedby="novus-new-tab"
              className="inline-flex min-h-[2.75rem] items-center font-semibold text-mint-ink underline underline-offset-4"
            >
              Made by Novus
            </a>
            <span id="novus-new-tab" className="sr-only">
              (opens in a new tab)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
