import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import AudienceList from "@/components/audience-list";
import ClosingCta from "@/components/closing-cta";
import PhotoFrame from "@/components/photo-frame";
import ScholarshipStat from "@/components/scholarship-stat";
import VendorDetails from "@/components/vendor-details";
import { countWord } from "@/lib/format";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { comparison, pathway } from "@/lib/programs";
import { primaryCta, routes, site, socialLinks, statSentence } from "@/lib/site";
import { headlineWins, wins, winsIntro } from "@/lib/wins";

export const metadata = pageMetadata({
  title: `${site.name} | ${site.tagline}`,
  description: `${site.positioning.join(" ")} ${site.promise} ${statSentence}.`,
  path: routes.home,
  absoluteTitle: true,
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}${site.logo.src}`,
  email: site.email,
  slogan: site.positioning.join(" "),
  founder: { "@type": "Person", name: site.founder.name },
  sameAs: socialLinks.map((social) => social.url),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero: the positioning statement as the opening line of a letter,
          the founder with a student, and the scholarship total. */}
      <section className="bg-mint">
        <div className="shell grid gap-x-12 gap-y-8 pb-10 pt-7 sm:pt-10 lg:grid-cols-12 lg:pb-28 lg:pt-16">
          <div className="lg:col-span-7">
            <p className="max-w-md text-base font-semibold leading-snug text-green-text">{site.tagline}</p>
            <h1 className="mt-4 font-display text-display-xl font-medium tracking-[-0.02em] text-purple lg:mt-6">
              <span className="block">{site.positioning[0]}</span>{" "}
              <span className="block italic text-ink">{site.positioning[1]}</span>
            </h1>
            <p className="mt-4 max-w-[34rem] text-[1.0625rem] lg:mt-7 lg:text-xl">
              {site.promise}
              <span className="hidden sm:inline">
                {" "}
                {site.instagramSummary} for students, families and schools.
              </span>
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-9">
              <Link href={primaryCta.href} className="btn btn-action">
                {primaryCta.label}
              </Link>
              <Link href={routes.programs} className="btn btn-outline">
                See the programs
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5 lg:pt-3">
            {/* Cropped from the top with CSS so the bottom edge of the poster
                stays out of frame. */}
            <PhotoFrame
              photo={photos.founderWithStudent}
              aspect="aspect-[3/2] lg:aspect-[727/640]"
              position="object-top"
              maxWidth={720}
              sizes="(min-width: 1024px) 480px, 100vw"
              priority
              reveal={false}
              block="green"
              blockX="0.75rem"
              blockY="-0.75rem"
            />
            <div className="on-dark relative max-w-[720px] bg-purple-deep px-5 py-4 lg:absolute lg:-bottom-14 lg:-left-10 lg:w-[18.5rem] lg:px-6 lg:py-6 xl:w-[21rem] xl:px-7">
              <ScholarshipStat figureClassName="text-[3.25rem] xl:text-[3.75rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Real Students, Real Wins: the four headline wins as real text. */}
      <section className="on-dark bg-purple text-white" aria-labelledby="wins-title">
        <div className="shell py-16 lg:py-24">
          <div className="grid gap-x-12 gap-y-6 lg:grid-cols-2 lg:items-end">
            <div className="reveal">
              <div className="letterhead mb-6 w-16 text-mint-ink" aria-hidden="true" />
              <h2 id="wins-title" className="font-display text-display-lg font-medium">
                Real students. <em className="text-mint-ink">Real wins.</em>
              </h2>
            </div>
            <figure className="reveal lg:pb-1.5" style={{ "--i": 1 } as CSSProperties}>
              <blockquote className="text-lg text-white">“{winsIntro}”</blockquote>
              <figcaption className="mt-1 text-base text-lav">
                {site.founder.name}, {site.founder.role}
              </figcaption>
            </figure>
          </div>

          <ul className="mt-10 border-b border-white/25 lg:mt-14">
            {headlineWins.map((win, index) => (
              <li
                key={win.id}
                className="reveal grid gap-x-12 gap-y-3 border-t border-white/25 py-7 lg:grid-cols-2 lg:items-baseline lg:py-9"
                style={{ "--i": index } as CSSProperties}
              >
                <p className="font-display text-figure-sm font-medium text-mint-ink">{win.headline}</p>
                <div>
                  <h3 className="text-xl font-semibold leading-snug">{win.award}</h3>
                  <p className="mt-2 text-base text-lav">
                    Awarded to <span className="bar w-24" aria-hidden="true" />
                    <span className="sr-only">a student whose name is hidden for privacy</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link href={routes.successStories} className="btn btn-outline-light reveal mt-10">
            See all {countWord(wins.length)} wins and the letters
          </Link>
        </div>
      </section>

      {/* The published comparison, set as two overlapping sheets. */}
      <section id="comparison" className="bg-white" aria-labelledby="difference-title">
        <div className="shell py-16 lg:py-24">
          <div className="reveal max-w-3xl">
            <div className="letterhead mb-6 w-16 text-purple" aria-hidden="true" />
            <h2 id="difference-title" className="font-display text-display-lg font-medium text-purple">
              {site.promise}
            </h2>
          </div>

          <div className="mt-10 grid lg:mt-14 lg:grid-cols-12 lg:items-start">
            <div className="reveal border border-rule bg-white px-6 py-7 lg:col-span-5 lg:mt-6 lg:px-9 lg:py-8 lg:pr-16">
              <h3 className="flex h-10 items-center text-lg font-semibold text-muted">
                {comparison.counselor.title}
              </h3>
              <ul className="mt-4">
                {comparison.counselor.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center border-t border-dashed border-rule py-4 text-lg leading-snug text-muted lg:h-28 lg:py-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="reveal on-dark relative z-10 -mt-px bg-purple px-6 py-8 text-white lg:col-span-7 lg:-ml-10 lg:mt-0 lg:px-11 lg:py-14"
              style={{ "--i": 2 } as CSSProperties}
            >
              <h3 className="flex h-10 items-center font-display text-[1.75rem] font-medium text-mint-ink">
                {comparison.prep.title}
              </h3>
              <ul className="mt-4">
                {comparison.prep.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-4 border-t border-white/30 py-4 font-display text-[1.5rem] font-medium leading-tight lg:h-28 lg:py-0 lg:text-[1.75rem]"
                  >
                    <span aria-hidden="true" className="h-3 w-3 shrink-0 bg-green" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="reveal mt-12 max-w-4xl font-display text-display-md font-medium text-ink lg:mt-16">
            {site.counselorLine[0]}{" "}
            <span className="italic text-green-text">{site.counselorLine[1]}</span>
          </p>
        </div>
      </section>

      {/* Who we serve: four audiences, each with its own next step. */}
      <section className="bg-mint" aria-labelledby="serve-title">
        <div className="shell grid gap-x-12 gap-y-8 py-16 lg:grid-cols-12 lg:py-24">
          <div className="reveal lg:col-span-4">
            <div className="letterhead mb-6 w-16 text-purple" aria-hidden="true" />
            <h2 id="serve-title" className="font-display text-display-lg font-medium text-purple">
              Who we serve
            </h2>
            <p className="mt-4 max-w-sm text-lg">Find your line, then take the next step from there.</p>
          </div>
          <div className="lg:col-span-8">
            <AudienceList />
          </div>
        </div>
      </section>

      {/* Performing arts: the leap, in a narrow frame at its natural size. */}
      <section className="on-dark bg-purple-deep text-white" aria-labelledby="arts-title">
        <div className="shell grid items-center gap-x-12 gap-y-10 py-16 md:grid-cols-12 lg:py-24">
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-2">
            <PhotoFrame
              photo={photos.dancerLeap}
              aspect="aspect-[4/3] md:aspect-[2/3]"
              position="object-[50%_42%] md:object-center"
              maxWidth={400}
              sizes="(min-width: 768px) 400px, 100vw"
              block="green"
              blockX="-0.75rem"
              blockY="0.75rem"
            />
          </div>
          <div className="reveal md:col-span-7 lg:col-span-6">
            <p className="label text-mint-ink">{pathway.name}</p>
            <h2 id="arts-title" className="mt-4 font-display text-display-lg font-medium">
              Where dance builds <em className="text-mint-ink">more than dancers.</em>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-lav">{pathway.description}</p>
            <Link href={routes.performingArts} className="btn btn-outline-light mt-8">
              See the {pathway.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust: past clients and the DOE vendor line. */}
      <section className="bg-white" aria-labelledby="clients-title">
        <div className="shell py-16 lg:py-20">
          <h2 id="clients-title" className="reveal font-display text-display-md font-medium text-purple">
            Past clients
          </h2>
          <div className="reveal reveal-fade mt-8 border-y border-line py-6">
            <Image
              src={photos.pastClients.src}
              alt={photos.pastClients.alt}
              width={photos.pastClients.width}
              height={photos.pastClients.height}
              sizes="(min-width: 1280px) 1184px, 100vw"
              className="mx-auto h-auto w-full max-w-[1100px]"
            />
          </div>
          <VendorDetails className="reveal mt-10 max-w-3xl" />
        </div>
      </section>

      {/* Founder teaser. */}
      <section className="bg-lilac" aria-labelledby="founder-title">
        <div className="shell grid items-center gap-x-12 gap-y-10 py-16 md:grid-cols-12 lg:py-24">
          <div className="reveal md:col-span-7">
            <h2 id="founder-title" className="label text-purple">
              Meet our founder
            </h2>
            <figure className="mt-5">
              <blockquote className="font-display text-display-lg font-medium text-purple">
                “{site.founder.quote}”
              </blockquote>
              <figcaption className="mt-5 text-lg font-semibold text-ink">
                {site.founder.name}, {site.founder.role}
              </figcaption>
            </figure>
            <p className="mt-4 max-w-xl text-lg">{site.founder.summary}</p>
            <Link href={routes.about} className="btn btn-outline mt-8">
              Read {site.founder.firstName}’s story
            </Link>
          </div>
          <div className="md:col-span-5 md:justify-self-end lg:col-span-4">
            <PhotoFrame
              photo={photos.headshot}
              aspect="aspect-[4/5]"
              position="object-top"
              maxWidth={380}
              sizes="(min-width: 768px) 380px, 100vw"
              block="purple"
              blockX="0.75rem"
              blockY="0.75rem"
            />
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
