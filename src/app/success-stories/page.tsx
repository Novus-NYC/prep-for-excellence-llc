import ClosingCta from "@/components/closing-cta";
import LetterExcerpt from "@/components/letter-excerpt";
import ScholarshipStat from "@/components/scholarship-stat";
import { capitalize, countWord } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";
import { routes, site, statSentence } from "@/lib/site";
import { headlineWins, privacyNote, proofWins, wins, winsIntro, type Win } from "@/lib/wins";

export const metadata = pageMetadata({
  title: "Success Stories",
  description: `Real students, real wins. ${statSentence}. ${capitalize(countWord(wins.length))} wins with excerpts from the award letters: ${headlineWins
    .map((win) => win.award)
    .join(", ")} and more.`,
  path: routes.successStories,
});

type ExhibitProps = {
  win: Win;
  // Letter on the left, text on the right (desktop only).
  flip: boolean;
};

// One win: the headline and award as real text, the letter excerpt as proof.
function Exhibit({ win, flip }: ExhibitProps) {
  return (
    <li className="grid items-center gap-x-12 gap-y-7 border-t border-rule py-10 lg:grid-cols-12 lg:py-14">
      <div className={`reveal lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
        <p className="font-display text-figure-sm font-medium text-purple">{win.headline}</p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">{win.award}</h3>
        <p className="mt-2 text-lg leading-normal text-muted">{win.detail}</p>
        <p className="mt-4 text-base text-muted">
          Awarded to <span className="bar w-24" aria-hidden="true" />
          <span className="sr-only">a student whose name is hidden for privacy</span>
        </p>
      </div>
      <div className={`reveal reveal-fade lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        <LetterExcerpt letter={win.letter} className={flip ? "" : "lg:ml-auto"} />
      </div>
    </li>
  );
}

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="on-dark bg-purple text-white">
        <div className="shell grid items-end gap-x-12 gap-y-9 pb-12 pt-9 lg:grid-cols-12 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-7">
            <p className="label text-mint-ink">Success stories</p>
            <h1 className="mt-4 font-display text-display-xl font-medium tracking-[-0.02em]">
              <span className="block">Real students.</span>{" "}
              <span className="block italic text-mint-ink">Real wins.</span>
            </h1>
            <figure className="mt-5 max-w-[34rem] lg:mt-7">
              <blockquote className="text-lg lg:text-xl">“{winsIntro}”</blockquote>
              <figcaption className="mt-1 text-base text-lav">
                {site.founder.name}, {site.founder.role}
              </figcaption>
            </figure>
          </div>
          <div className="bg-purple-deep px-6 py-6 lg:col-span-5 lg:px-9 lg:py-9">
            <ScholarshipStat figureClassName="text-[3.25rem] sm:text-[4rem] xl:text-[4.75rem]" />
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="wins-title">
        <div className="shell py-14 lg:py-20">
          <div className="reveal max-w-3xl pb-10 lg:pb-14">
            <div className="letterhead mb-6 w-16 text-purple" aria-hidden="true" />
            <h2 id="wins-title" className="font-display text-display-lg font-medium text-purple">
              {capitalize(countWord(headlineWins.length))} headline wins
            </h2>
            <p className="mt-4 text-lg">
              Each one is shown with an excerpt from the award letter. {privacyNote}
            </p>
          </div>
          <ul className="border-b border-rule">
            {headlineWins.map((win, index) => (
              <Exhibit key={win.id} win={win} flip={index % 2 === 1} />
            ))}
          </ul>
        </div>
      </section>

      {/* The old site called this group the Proof Gallery. */}
      <section id="proof-gallery" className="bg-mint" aria-labelledby="proof-title">
        <div className="shell py-14 lg:py-20">
          <div className="reveal max-w-3xl pb-10 lg:pb-14">
            <div className="letterhead mb-6 w-16 text-purple" aria-hidden="true" />
            <h2 id="proof-title" className="font-display text-display-lg font-medium text-purple">
              Proof gallery
            </h2>
            <p className="mt-4 text-lg">
              {capitalize(countWord(proofWins.length))} more letters. {privacyNote}
            </p>
          </div>
          <ul className="border-b border-rule">
            {proofWins.map((win, index) => (
              <Exhibit key={win.id} win={win} flip={index % 2 === 0} />
            ))}
          </ul>
          <p className="reveal mt-8 max-w-2xl text-base text-muted">
            Every result on this page was earned by an individual student. They are examples of past
            outcomes, not a promise of future results.
          </p>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
