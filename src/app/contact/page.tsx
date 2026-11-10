import type { CSSProperties } from "react";
import ContactForm from "@/components/contact-form";
import ExternalLink from "@/components/external-link";
import { pageMetadata } from "@/lib/metadata";
import { mailtoHref, primaryCta, routes, site, socialLinks } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: `${primaryCta.label} from ${site.name}. Email ${site.email}, or use the short form to start a message from your own email app.`,
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-mint" style={{ "--fold-bg": "#E8F6EE" } as CSSProperties}>
        <div className="shell grid gap-x-12 gap-y-10 pb-16 pt-9 lg:grid-cols-12 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-5">
            <p className="label text-green-text">Contact</p>
            <h1 className="mt-4 font-display text-display-xl font-medium tracking-[-0.02em] text-purple">
              <span className="block">Ask about</span>{" "}
              <span className="block italic text-ink">a workshop.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg lg:mt-7">
              Students, families, schools and organizations are all welcome to ask. Use the form, or
              write to the email address below.
            </p>

            <dl className="mt-8 border-t border-purple/30">
              <div className="border-b border-purple/30 py-4">
                <dt className="text-base text-muted">Email</dt>
                <dd>
                  <a
                    href={mailtoHref}
                    className="inline-flex min-h-[2.75rem] items-center break-all font-display text-[1.375rem] font-medium text-purple underline decoration-2 underline-offset-4 sm:text-[1.625rem]"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              {site.phone ? (
                <div className="border-b border-purple/30 py-4">
                  <dt className="text-base text-muted">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${site.phone}`}
                      className="inline-flex min-h-[2.75rem] items-center whitespace-nowrap text-lg font-semibold text-purple underline underline-offset-4"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
              {site.address ? (
                <div className="border-b border-purple/30 py-4">
                  <dt className="text-base text-muted">Address</dt>
                  <dd className="text-lg">{site.address}</dd>
                </div>
              ) : null}
              {socialLinks.map((social) => (
                <div key={social.label} className="border-b border-purple/30 py-4">
                  <dt className="text-base text-muted">{social.label}</dt>
                  <dd>
                    <ExternalLink
                      href={social.url}
                      className="inline-flex min-h-[2.75rem] items-center break-all text-lg font-semibold text-purple underline underline-offset-4"
                    >
                      {social.handle}
                    </ExternalLink>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="sheet sheet-fold px-5 py-7 sm:px-9 sm:py-10">
              <div className="letterhead mb-6 w-16 text-purple" aria-hidden="true" />
              <h2 className="font-display text-display-md font-medium text-purple">Start your message</h2>
              <p className="mb-7 mt-3 text-lg">
                Fill this in and your email app opens with the message ready to send.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
