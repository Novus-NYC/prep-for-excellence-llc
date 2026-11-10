import Link from "next/link";
import AudienceList from "@/components/audience-list";
import ClosingCta from "@/components/closing-cta";
import PhotoFrame from "@/components/photo-frame";
import VendorDetails from "@/components/vendor-details";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { contactHref } from "@/lib/programs";
import { routes, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: `About ${site.founder.name}`,
  description: `${site.founder.name}, ${site.founder.role.toLowerCase()} of ${site.name}. ${site.founder.summary} ${site.doe.status}.`,
  path: routes.about,
});

export default function AboutPage() {
  const { founder } = site;

  return (
    <>
      {/* Hero. On a phone the portrait sits beside the name so it is on the
          first screen; from md up it takes the right column. */}
      <section className="bg-mint">
        <div className="shell grid grid-cols-[minmax(0,1fr)_minmax(0,34%)] items-center gap-x-5 gap-y-5 pb-14 pt-9 [grid-template-areas:'label_label''title_photo''body_body'] md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:grid-rows-[1fr_auto_1fr] md:gap-x-12 md:[grid-template-areas:'label_photo''title_photo''body_photo'] lg:pb-24 lg:pt-16">
          <p className="label text-green-text [grid-area:label] md:self-end">Meet our founder</p>
          <div className="[grid-area:title]">
            <h1 className="font-display text-[2.375rem] font-medium leading-none tracking-[-0.02em] text-purple sm:text-display-xl">
              {founder.name}
            </h1>
            <p className="mt-3 text-lg font-semibold text-ink">
              {founder.role}, {site.name}
            </p>
          </div>
          <figure className="[grid-area:body] md:self-start">
            <blockquote className="max-w-[36rem] font-display text-display-md font-medium italic text-ink">
              “{founder.quote}”
            </blockquote>
            <figcaption className="sr-only">{founder.name}</figcaption>
          </figure>
          <div className="[grid-area:photo] md:justify-self-end md:py-2">
            <PhotoFrame
              photo={photos.headshot}
              aspect="aspect-[2/3]"
              position="object-top"
              maxWidth={400}
              sizes="(min-width: 768px) 400px, 34vw"
              priority
              reveal={false}
              block="purple"
              blockX="0.5rem"
              blockY="0.5rem"
            />
          </div>
        </div>
      </section>

      {/* The bio, with her own scholarship figures set like letterhead numbers. */}
      <section className="bg-white" aria-labelledby="story-title">
        <div className="shell grid gap-x-12 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="reveal flex flex-col gap-8 sm:flex-row sm:gap-12 lg:col-span-4 lg:flex-col lg:gap-10">
            <p>
              <span className="block text-base font-semibold text-green-text">{founder.scholarships.lead}</span>{" "}
              <span className="block font-display text-figure font-semibold text-purple">
                {founder.scholarships.figure}
              </span>{" "}
              <span className="mt-2 block text-lg text-muted">{founder.scholarships.rest}</span>
            </p>
            <p>
              <span className="block font-display text-figure-sm font-semibold text-purple sm:pt-6 lg:pt-0">
                {founder.graduation.figure}
              </span>{" "}
              <span className="mt-2 block text-lg text-muted">{founder.graduation.rest}</span>
            </p>
          </div>

          <div className="reveal lg:col-span-7 lg:col-start-6">
            <div className="letterhead mb-6 w-16 text-purple" aria-hidden="true" />
            <h2 id="story-title" className="font-display text-display-lg font-medium text-purple">
              Her story
            </h2>
            <div className="mt-6 flex max-w-2xl flex-col gap-5 text-lg">
              {founder.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 grid max-w-2xl gap-x-8 sm:grid-cols-2">
              {founder.credentials.map((credential) => (
                <li
                  key={credential}
                  className="flex items-center gap-3 border-t border-line py-3.5 text-base font-semibold text-ink"
                >
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-green" />
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* For schools: the workshop photo and the DOE vendor details. */}
      <section className="on-dark bg-purple-deep text-white" aria-labelledby="schools-title">
        <div className="shell grid items-center gap-x-12 gap-y-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <PhotoFrame
              photo={photos.workshopRoom}
              aspect="aspect-[694/435]"
              maxWidth={680}
              sizes="(min-width: 1024px) 600px, 100vw"
              block="green"
              blockX="-0.75rem"
              blockY="0.75rem"
            />
          </div>
          <div className="reveal lg:col-span-6">
            <p className="label text-mint-ink">For schools and organizations</p>
            <h2 id="schools-title" className="mt-4 font-display text-display-lg font-medium">
              Working with schools
            </h2>
            <VendorDetails tone="dark" className="mt-8" />
            <Link href={contactHref({ iam: "school" })} className="btn btn-action mt-9">
              Bring a program to your school
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mint" aria-labelledby="serve-title">
        <div className="shell grid gap-x-12 gap-y-8 py-16 lg:grid-cols-12 lg:py-24">
          <div className="reveal lg:col-span-4">
            <div className="letterhead mb-6 w-16 text-purple" aria-hidden="true" />
            <h2 id="serve-title" className="font-display text-display-lg font-medium text-purple">
              Who we serve
            </h2>
          </div>
          <div className="lg:col-span-8">
            <AudienceList />
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
