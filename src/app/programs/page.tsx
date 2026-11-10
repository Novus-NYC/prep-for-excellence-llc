import Link from "next/link";
import type { CSSProperties } from "react";
import ClosingCta from "@/components/closing-cta";
import PhotoFrame from "@/components/photo-frame";
import { capitalize, countWord } from "@/lib/format";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { comparison, contactHref, formats, pathway, programGroups, programs } from "@/lib/programs";
import { mailtoHref, routes, site } from "@/lib/site";

const programNames = programs.map((program) => program.name).join(", ");

export const metadata = pageMetadata({
  title: "Programs",
  description: `${capitalize(countWord(programs.length))} programs from ${site.name}: ${programNames}. Offered as ${formats.join(", ")}.`,
  path: routes.programs,
});

const groupNotes: Record<string, string> = {
  "college-career": "College readiness, scholarships, careers and admissions.",
  family: "For parents and guardians.",
  "performing-arts": pathway.headline,
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-white">
        <div className="shell grid items-end gap-x-12 gap-y-8 pb-12 pt-9 lg:grid-cols-12 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-7">
            <p className="label text-green-text">Programs</p>
            <h1 className="mt-4 font-display text-display-xl font-medium tracking-[-0.02em] text-purple">
              <span className="block">{capitalize(countWord(programs.length))} programs.</span>{" "}
              <span className="block italic text-ink">{capitalize(countWord(formats.length))} formats.</span>
            </h1>
            <p className="mt-5 max-w-[34rem] text-lg lg:mt-7 lg:text-xl">
              Choose a program, pick a format, then ask about bringing it to your school, organization
              or family.
            </p>
          </div>
          <div className="lg:col-span-5">
            <PhotoFrame
              photo={photos.studentsLaptop}
              aspect="aspect-[687/322]"
              maxWidth={680}
              sizes="(min-width: 1024px) 480px, 100vw"
              priority
              reveal={false}
              block="mint"
              blockX="0.75rem"
              blockY="-0.75rem"
            />
          </div>
        </div>
      </section>

      {/* The six services, grouped, set like the enclosure list of a packet. */}
      <section className="bg-mint" aria-label="Programs by group">
        <div className="shell flex flex-col gap-14 py-16 lg:gap-20 lg:py-24">
          {programGroups.map((group) => {
            const groupPrograms = programs.filter((program) => program.group === group.id);
            return (
              // reveal-fade only: this block is a hash target and must not move.
              <div
                key={group.id}
                id={group.anchor}
                className="reveal reveal-fade grid gap-x-12 gap-y-6 lg:grid-cols-12"
              >
                <div className="lg:col-span-4">
                  <div className="letterhead mb-5 w-16 text-purple" aria-hidden="true" />
                  <h2 className="font-display text-display-md font-medium text-purple">{group.title}</h2>
                  <p className="mt-3 max-w-xs text-base text-muted">{groupNotes[group.id]}</p>
                </div>

                <ul
                  className="sheet sheet-fold lg:col-span-8"
                  style={{ "--fold-bg": "#E8F6EE" } as CSSProperties}
                >
                  {groupPrograms.map((program, index) => (
                    <li
                      key={program.slug}
                      className={`flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:px-9 lg:py-7 ${
                        index > 0 ? "border-t border-line" : ""
                      }`}
                    >
                      <div>
                        <h3 className="font-display text-[1.5rem] font-medium leading-tight text-ink lg:text-[1.875rem]">
                          {program.name}
                        </h3>
                        {program.description ? (
                          <p className="mt-2 max-w-xl text-base text-muted">{program.description}</p>
                        ) : null}
                        {group.id === "performing-arts" ? (
                          <Link href={routes.performingArts} className="text-cta mt-1 text-base text-purple">
                            See the {pathway.name}
                            <span aria-hidden="true" className="arrow">
                              →
                            </span>
                          </Link>
                        ) : null}
                      </div>
                      <Link
                        href={contactHref({ interest: program.slug })}
                        className="text-cta shrink-0 text-base text-green-text sm:whitespace-nowrap"
                      >
                        Ask about this program
                        <span className="sr-only">: {program.name}</span>
                        <span aria-hidden="true" className="arrow">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* What Prep For Excellence adds, from the published comparison. */}
      <section className="on-dark bg-purple text-white" aria-labelledby="approach-title">
        <div className="shell grid gap-x-12 gap-y-8 py-16 lg:grid-cols-12 lg:py-24">
          <div className="reveal lg:col-span-5">
            <p className="text-lg text-lav">{site.counselorLine[0]}</p>
            <h2 id="approach-title" className="mt-3 font-display text-display-lg font-medium">
              <em className="text-mint-ink">{site.counselorLine[1]}</em>
            </h2>
            <Link href={`${routes.home}#comparison`} className="btn btn-outline-light mt-8">
              See the full comparison
            </Link>
          </div>
          <ul className="border-b border-white/30 lg:col-span-7">
            {comparison.prep.points.map((point, index) => (
              <li
                key={point}
                className="reveal flex items-center gap-4 border-t border-white/30 py-6 font-display text-[1.5rem] font-medium leading-tight lg:py-8 lg:text-[2rem]"
                style={{ "--i": index } as CSSProperties}
              >
                <span aria-hidden="true" className="h-3 w-3 shrink-0 bg-green" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formats: a plain list with hairlines and the green square marker.
          Nothing here is a control, so nothing looks like one. */}
      <section className="bg-white" aria-labelledby="formats-title">
        <div className="shell grid gap-x-12 gap-y-8 py-16 lg:grid-cols-12 lg:py-24">
          <div className="reveal lg:col-span-4">
            <div className="letterhead mb-5 w-16 text-purple" aria-hidden="true" />
            <h2 id="formats-title" className="font-display text-display-lg font-medium text-purple">
              Formats
            </h2>
            <p className="mt-4 max-w-sm text-lg">
              Programs run in {countWord(formats.length)} formats. Say which one fits when you ask, along
              with dates, grade levels and anything else you need to know, including pricing.
            </p>
            <p className="mt-3">
              <a href={mailtoHref} className="text-cta break-all text-base text-purple">
                {site.email}
              </a>
            </p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8 lg:content-start">
            {formats.map((format, index) => (
              <li
                key={format}
                className="reveal flex items-center gap-3.5 border-t border-line py-5 text-lg font-semibold leading-snug text-ink"
                style={{ "--i": index } as CSSProperties}
              >
                <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-green" />
                {format}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
