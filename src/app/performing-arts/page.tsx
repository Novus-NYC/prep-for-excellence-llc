import Link from "next/link";
import type { CSSProperties } from "react";
import ClosingCta from "@/components/closing-cta";
import PhotoFrame from "@/components/photo-frame";
import { capitalize, countWord } from "@/lib/format";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { contactHref, danceOfferings, danceProgram, danceStyles, pathway, programs } from "@/lib/programs";
import { routes } from "@/lib/site";

const askAboutDance = {
  href: contactHref({ interest: danceProgram.slug }),
  label: "Ask about dance classes",
} as const;

export const metadata = pageMetadata({
  title: pathway.name,
  description: `${pathway.headline}. ${pathway.description}`,
  path: routes.performingArts,
});

// The first pillar, restated beside the classes. The founder's own dance
// career is told on the About page only: this page's hero photo shows a dancer
// the sources do not name, and a sentence about the founder here would imply
// the photo is of her.
const training = pathway.pillars[0];

// Staggered column offsets give the three pillars a sense of movement.
const pillarOffsets = ["", "md:mt-14", "md:mt-28"];

export default function PerformingArtsPage() {
  return (
    <>
      {/* Hero. On a phone the tall photo sits beside the headline so it is on
          the first screen; from md up it takes the right column. */}
      <section className="on-dark bg-purple-deep text-white">
        <div className="shell grid grid-cols-[minmax(0,1fr)_minmax(0,34%)] items-center gap-x-5 gap-y-5 pb-14 pt-9 [grid-template-areas:'label_label''title_photo''body_body'] md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:grid-rows-[1fr_auto_1fr] md:gap-x-12 md:[grid-template-areas:'label_photo''title_photo''body_photo'] lg:pb-24 lg:pt-16">
          <p className="label text-mint-ink [grid-area:label] md:self-end">{pathway.name}</p>
          <h1 className="font-display text-[2rem] font-medium leading-none tracking-[-0.02em] [grid-area:title] sm:text-display-xl">
            <span className="block">Where dance builds</span>{" "}
            <span className="block italic text-mint-ink">more than dancers.</span>
          </h1>
          <div className="[grid-area:body] md:self-start">
            <p className="max-w-[34rem] text-lg text-lav lg:mt-2 lg:text-xl">{pathway.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-9">
              <Link href={askAboutDance.href} className="btn btn-action">
                {askAboutDance.label}
              </Link>
              <Link href="#pillars" className="btn btn-outline-light">
                See the {countWord(pathway.pillars.length)} pillars
              </Link>
            </div>
          </div>
          <div className="[grid-area:photo] md:py-2">
            {/* 533 px original: a tall narrow frame, never full bleed. */}
            <PhotoFrame
              photo={photos.dancerLeap}
              aspect="aspect-[2/3]"
              maxWidth={400}
              sizes="(min-width: 768px) 400px, 34vw"
              priority
              reveal={false}
              block="green"
              blockX="0.5rem"
              blockY="0.5rem"
              className="md:ml-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-lilac" aria-labelledby="dance-details-title">
        <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="reveal lg:col-span-4">
            <p className="label text-green-text">Dance services</p>
            <h2 id="dance-details-title" className="mt-4 font-display text-display-lg font-medium text-purple">Movement, practice, opportunity.</h2>
            <p className="mt-4 text-lg">Classes are designed for groups of 5 to 20 students, with 45 to 60 minute sessions and a 90 minute option.</p>
          </div>
          <div className="lg:col-span-8">
            <h3 className="font-display text-display-md font-medium text-purple">Styles offered</h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {danceStyles.map((style) => <li key={style} className="border border-purple/25 bg-white px-4 py-2 font-semibold text-purple">{style}</li>)}
            </ul>
            <ul className="mt-9 border-b border-purple/20">
              {danceOfferings.map((offering) => (
                <li key={offering.title} className="reveal grid gap-2 border-t border-purple/20 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:gap-6">
                  <h3 className="font-display text-xl font-medium text-purple">{offering.title}</h3>
                  <p className="text-base text-ink">{offering.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-muted">Single classes and 5, 10, and 20 session packages are available. Ask about a schedule and pricing for your school.</p>
          </div>
        </div>
      </section>

      {/* Three pillars, each with the words the client publishes. The section
          is a hash target, so it carries no reveal itself. */}
      <section id="pillars" className="bg-white" aria-labelledby="pillars-title">
        <div className="shell py-16 lg:py-24">
          <div className="reveal max-w-3xl">
            <div className="letterhead mb-6 w-16 text-purple" aria-hidden="true" />
            <h2 id="pillars-title" className="font-display text-display-lg font-medium text-purple">
              {capitalize(countWord(pathway.pillars.length))} pillars of the pathway
            </h2>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-3 lg:mt-14">
            {pathway.pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`reveal ${pillarOffsets[index] ?? ""}`}
                style={{ "--i": index } as CSSProperties}
              >
                <h3 className="border-t-[3px] border-green pt-4 text-lg font-semibold text-ink">
                  {pillar.title}
                </h3>
                <ul className="mt-4">
                  {pillar.words.map((word) => (
                    <li
                      key={word}
                      className="font-display text-[2rem] font-medium italic leading-[1.2] text-purple md:text-[1.75rem] lg:text-[2.5rem]"
                    >
                      {word}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The classes, with the second dance photo in its own tall frame. */}
      <section className="bg-mint" aria-labelledby="classes-title">
        <div className="shell grid items-center gap-x-12 gap-y-10 py-16 md:grid-cols-12 lg:py-24">
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-2">
            <PhotoFrame
              photo={photos.dancerArabesque}
              aspect="aspect-[4/5] md:aspect-[2/3]"
              position="object-[50%_20%] md:object-center"
              maxWidth={420}
              sizes="(min-width: 768px) 420px, 100vw"
              block="purple"
              blockX="-0.75rem"
              blockY="0.75rem"
            />
          </div>
          <div className="reveal md:col-span-7 lg:col-span-6">
            <p className="label text-green-text">One of {countWord(programs.length)} programs</p>
            <h2 id="classes-title" className="mt-4 font-display text-display-lg font-medium text-purple">
              {danceProgram.name}
            </h2>
            <p className="mt-5 max-w-xl text-lg">
              {training.title}: {training.words.join(", ")}. Ask about classes for your school,
              organization or family.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={askAboutDance.href} className="btn btn-action">
                {askAboutDance.label}
              </Link>
              <Link href={routes.programs} className="btn btn-outline">
                See all programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta action={askAboutDance} />
    </>
  );
}
