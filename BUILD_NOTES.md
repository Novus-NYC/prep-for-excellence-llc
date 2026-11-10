# Prep For Excellence: build notes

Built 2026-11-09 on the Novus base template. English only. Nothing has been pushed.

## 1. Verified facts and where they come from

Sources: the client's current Canva site (https://prepforexcellencellc.my.canva.site/, one long page), the Instagram profile (https://www.instagram.com/prepforexcellencellc/) and the Linktree (https://linktr.ee/prepforexcellencellc), all captured 2026-11-09. Every fact on the site lives in `src/lib/site.ts`, `src/lib/programs.ts` or `src/lib/wins.ts`.

| Fact | Value used | Source |
|---|---|---|
| Brand name in text | Prep For Excellence | Decision from the student (the logo and the Canva bio spell it "Prep 4 Excellence") |
| Legal name (footer) | Prep For Excellence LLC | Instagram profile name |
| Founder | Shawnia Yon | Canva "Meet Our Founder" |
| Email | prep4excellence@gmail.com | mailto link on the Canva site |
| Instagram | https://www.instagram.com/prepforexcellencellc/ | Canva site |
| TikTok | https://www.tiktok.com/@prepforexcellencellc | Linktree |
| NYC DOE | NYC DOE Vendor, Vendor ID: PRE305254, MWBE certification pending | Canva site, verbatim |
| Headline stat | "Over $335,000 in scholarships secured for students" | Canva site, verbatim |
| Positioning | "Not your college counselor. Your opportunity strategist." | Canva site, verbatim |
| Tagline | "Scholarships, College Readiness & Retention & Performing Arts" | Canva site, verbatim |
| Promise | "We teach students how to make college work for them." | Canva heading, sentence case |
| Counselor line | "We don't replace your counselor. We give students the tools to go further." | Canva site, verbatim |
| Invitation | "Bring Prep For Excellence to your school & family" | Canva site, verbatim |
| Formats summary | "Workshops & 1:1 sessions" | Instagram bio |
| Founder quote | "I've been where your students are, and I know what it takes to win." | Canva site, verbatim |
| Founder bio | NYC public school graduate, professional dancer, Connecticut College alumna, graduated debt-free after earning over $80,000 in scholarships, has worked in college admissions, career development and mentorship, partners with schools and organizations to close the college readiness gap, serves on Connecticut College's Board of Trustees | Canva bio, rewritten in new sentences with the same facts |
| Comparison table | Three points per column, verbatim | Canva site |
| Six services | Names verbatim | Canva "Services" |
| Five formats | Names verbatim | Canva "Formats" |
| Performing Arts Pathway | Description and the three pillars with their words, verbatim | Canva site |
| Who we serve | K to 12 Students, College Students, Parents & Guardians, Schools & Community Organizations | Canva site |
| Seven wins | Headlines and award names from the Canva cards, details from the letter text in each card | Canva "Real Students. Real Wins" and "Proof Gallery" |
| Wins intro | "A few of the opportunities students I've coached have earned." | Canva site, shown as a quotation from the founder |
| Past clients | Logo strip image, used as is | Canva site |

Not published anywhere, so `null` in `src/lib/site.ts` and hidden in the UI: phone and address (footer and Contact page) and the YouTube URL (social links). Hours, service area and pricing are not published either and have no field or UI yet (pricing and service area are open items 4 and 6). No testimonials exist, so none are shown.

## 2. Art direction: "The award letter"

The proof this business has is paper: scholarship letters with the student's name blacked out. The site is built like a confident admissions packet.

- **Type.** Fraunces Variable (optical size axis on, so large headlines get the high contrast cut the Canva site used) for headlines and figures, with italics as the second voice in every two-line headline. Public Sans Variable for text. Both self-hosted through Fontsource.
- **Letterhead numbers.** Outcomes are set large in the serif: "$335,000", "Full tuition", "$20,000", "$80,000", "Debt-free".
- **Redaction bar motif.** "Awarded to" is followed by a redaction bar wherever a win is listed (with screen reader text saying the name is hidden for privacy). The bars draw in from the left as each row is revealed. The bar is the privacy cue on each win, so the sentence "Student names hidden for privacy." appears only once per section on the Success Stories page, in the intro.
- **Signature moment.** On load, a redaction bar lifts off the "$335,000" figure in the hero and on the Success Stories page (650 ms, CSS only, off under reduced motion and without JavaScript).
- **Letter details.** A "letterhead rule" (heavy line over a hairline) opens each section; letter excerpts sit on plain white sheets; the program lists and the contact form are sheets with a folded corner (the fold is kept off the letter excerpts, where it would cover text); the comparison is two overlapping sheets (the counselor's plain sheet under the purple Prep For Excellence sheet, rows aligned); the contact form is a reply card. The five formats are a plain hairline list with green square markers, because they are not controls.
- **Dance brings the movement.** The two allowed dance photos are 533 px wide, so they are composed as tall narrow frames with an offset colour block, never full bleed. The three pillars of the pathway are staggered down the page.
- **Motion vocabulary.** Fade with a 14 px rise for text, fade only for photos and hash targets, the colour block behind a photo sliding out to its offset, bars drawing in. 450 to 650 ms, opacity and transform only.

### Palette and roles

| Token | Hex | Role |
|---|---|---|
| `purple` | #4B2A86 | Brand purple: primary surface, headings, links |
| `purple-deep` | #2A1558 | Darker surface: stat slab, performing arts band, mobile menu |
| `ink` | #1D1033 | Primary text, footer surface, redaction bars on light surfaces |
| `green` | #00B85C | Brand green: action fill, closing band, graphic marks. Never used as text colour |
| `green-text` | #00703A | Text-safe green for small text on light surfaces |
| `mint` | #E8F6EE | Pale canvas |
| `mint-ink` | #A5EBC1 | Accent text and focus ring on purple surfaces |
| `lilac` | #F3EDFB | Paper tint (founder band) |
| `lav` | #D9CCF2 | Muted text and redaction bars on purple surfaces |
| `muted` | #574A70 | Muted text on light surfaces |
| `rule` | #8E7BB5 | Form field and sheet borders |
| `line` | #D8CFE8 | Decorative hairlines only |

### Contrast (WCAG ratios, computed)

| Use | Foreground | Background | Ratio |
|---|---|---|---|
| Body text | #1D1033 | #FFFFFF | 17.89:1 |
| Body text on mint | #1D1033 | #E8F6EE | 16.05:1 |
| Body text on lilac | #1D1033 | #F3EDFB | 15.60:1 |
| Text and button label on green | #1D1033 | #00B85C | 6.82:1 |
| Button hover label | #1D1033 | #A5EBC1 | 12.99:1 |
| Headings, links | #4B2A86 | #FFFFFF | 10.64:1 |
| Headings, links on mint | #4B2A86 | #E8F6EE | 9.55:1 |
| Headings on lilac | #4B2A86 | #F3EDFB | 9.28:1 |
| Muted text | #574A70 | #FFFFFF | 8.02:1 |
| Muted text on mint | #574A70 | #E8F6EE | 7.20:1 |
| Muted text on lilac | #574A70 | #F3EDFB | 6.99:1 |
| Green text links | #00703A | #FFFFFF | 6.22:1 |
| Green labels on mint | #00703A | #E8F6EE | 5.58:1 |
| Text on purple | #FFFFFF | #4B2A86 | 10.64:1 |
| Text on deep purple | #FFFFFF | #2A1558 | 15.59:1 |
| Text on footer | #FFFFFF | #1D1033 | 17.89:1 |
| Accent text on purple | #A5EBC1 | #4B2A86 | 7.72:1 |
| Accent text on deep purple | #A5EBC1 | #2A1558 | 11.33:1 |
| Accent text on footer | #A5EBC1 | #1D1033 | 12.99:1 |
| Muted text on purple | #D9CCF2 | #4B2A86 | 7.02:1 |
| Muted text on deep purple | #D9CCF2 | #2A1558 | 10.30:1 |
| Muted text on footer | #D9CCF2 | #1D1033 | 11.81:1 |
| Form error text | #A3122E | #FFFFFF | 7.83:1 |
| Form field border (3:1 needed) | #8E7BB5 | #FFFFFF | 3.72:1 |
| Focus ring on white (3:1 needed) | #4B2A86 | #FFFFFF | 10.64:1 |
| Focus ring on mint | #4B2A86 | #E8F6EE | 9.55:1 |
| Focus ring on lilac | #4B2A86 | #F3EDFB | 9.28:1 |
| Focus ring on purple | #A5EBC1 | #4B2A86 | 7.72:1 |
| Focus ring on deep purple | #A5EBC1 | #2A1558 | 11.33:1 |
| Focus ring on footer | #A5EBC1 | #1D1033 | 12.99:1 |
| Focus ring on green | #1D1033 | #00B85C | 6.82:1 |
| Redaction bar on purple | #D9CCF2 | #4B2A86 | 7.02:1 |
| Redaction bar on deep purple | #D9CCF2 | #2A1558 | 10.30:1 |
| Brand green on white | #00B85C | #FFFFFF | 2.62:1 (never used for text; the green button carries an ink border and ink label) |
| Brand green on purple | #00B85C | #4B2A86 | 4.06:1 (graphic marks only: list squares, photo blocks) |

Smallest text on the site is 13 px, used only for uppercase section labels. Letter captions and the "This page" marker in the mobile menu are 14 px, desktop navigation links are 15 px, and everything else is 16 px or larger.

## 3. Architecture

| Route | Purpose |
|---|---|
| `/` | Hero (positioning, stat, workshop photo, two CTAs), four headline wins, the counselor comparison, who we serve, performing arts teaser, past clients with the DOE vendor line, founder teaser, closing CTA |
| `/programs` | Six services in three groups (college and career, family, performing arts), each with "Ask about this program"; the three published points; five formats |
| `/performing-arts` | Performing Arts Pathway: description, three pillars, both dance photos, CTA to ask about dance classes |
| `/success-stories` | All seven wins with their letter excerpts (four headline wins, then the "Proof gallery"), the $335,000 line, CTA |
| `/about` | Shawnia Yon: quote, portrait, bio, her own scholarship figures, working with schools (workshop photo and DOE vendor details) |
| `/contact` | Inquiry form that opens the visitor's mail app (mailto), email as a plain link, Instagram and TikTok |
| 404 | `src/app/not-found.tsx`, server rendered inside the root layout |

Also: `robots.txt`, `sitemap.xml` (no `lastModified`), `icon.svg`, `apple-icon` and `opengraph-image` (both generated with `ImageResponse`), Organization JSON-LD on the home page.

Code layout:

- `src/lib/site.ts`: name, legal name, site URL, email, socials, DOE details, taglines, the stat, founder bio, routes and navigation. Unknowns are typed `null`.
- `src/lib/programs.ts`: services, groups, formats, the comparison, audiences, the pathway, contact form options and `contactHref()`.
- `src/lib/wins.ts`: the seven wins and the crop rectangle of each letter excerpt.
- `src/lib/images.ts`: every photo with its natural size and alt text, and the crop rectangle of each logo in the past clients strip.
- `src/lib/metadata.ts`: `pageMetadata()` gives each route its own canonical URL, og:url, title, description and image.
- `src/components/`: header with mobile menu, footer, reveal observer, photo frame, image crop, letter excerpt, stat, audience list, vendor details, closing CTA, contact form, external link.

## 4. Decisions and exceptions

1. **Program descriptions are not written.** The client publishes only the service names. Each `description` in `src/lib/programs.ts` is `null` and the UI hides it. The three published comparison points are shown once on the Programs page instead of being assigned to individual services, because the source does not say which point belongs to which service.
2. **Hero photo.** The hero uses `workshop-room.jpg` (Shawnia presenting, student faces already covered). The Farmingdale photo (`founder-with-student.png`) was removed from the site: the poster in it shows a student’s first name and initial, and a CSS crop would still leave the name in the published file. The file was also taken out of the local git history before the first push (the eleven unpushed commits were rewritten without it), so it is never uploaded.
3. **One allowed photo is not used.** The classroom photo taken from the back of the room (source image 10) shows a surname on the back of a student's jersey. It was left out.
4. **The leaping dancer is not placed on the About page.** The source does not say who the dancer is, and placing the photo beside the founder's bio would imply it is her. It is used on the home teaser and the Performing Arts hero, with alt text that names no one. For the same reason the Performing Arts page does not mention the founder's dance career (that fact is on the About page only); the classes section restates the first pillar instead.
5. **Award cards are cropped to the letter excerpt.** The Canva cards carry their own purple header and caption. The page sets the headline, award and privacy note as real text and shows only the excerpt, through a CSS crop window (`src/components/image-crop.tsx`, used by `letter-excerpt.tsx`). Files are untouched and no excerpt is rendered wider than its natural pixel width. Below 1024 px an excerpt keeps its natural width so the text stays readable; where the column is narrower than the letter (phones), its sheet scrolls sideways, is keyboard focusable, and shows a one-line hint. A caption appears only where it adds something (the Coco Gauff letter says which semester is shown).
6. **No raster image is rendered above its natural width.** `PhotoFrame` clamps `maxWidth` to the file's width. The 533 px dance and portrait photos top out at 380 to 420 px.
7. **Desktop navigation starts at 1100 px**, not 1024 px. Logo, wordmark, four links and the CTA need roughly 1000 px, so a custom `nav` breakpoint keeps the menu button until then. The Contact link lives in the CTA on desktop and as its own item in the mobile menu and footer.
8. **"Made by Novus" link text is exact.** The "opens in a new tab" notice is attached with `aria-describedby` instead of being placed inside the link. Other external links carry the notice as visually hidden text inside the link.
9. **Redaction bars are lavender on purple surfaces.** A near-black bar on purple measured 1.2:1 to 1.7:1, so it would have vanished.
10. **Contact form.** No backend. It validates in plain language, then opens the visitor's own mail app with the subject and body filled in, and the copy says exactly that. Audience and program can be preselected from links (`/contact?iam=school&interest=dance`). It needs JavaScript; a `noscript` note points to the email address.
11. **Outcomes.** Wins are described only in the terms of the cards and letters, and the Success Stories page ends with a line saying they are past results, not a promise.
12. **Share image and icons are drawn, not photographic.** The photos include students, and a share image travels beyond the site. The icon is a simplified drawing of the logo's idea (purple ring, green disc, graduation cap). The real logo PNG is used in the header and footer.
13. **No old-URL redirects.** The old site is a single Canva page on Canva's own domain, so there are no old paths to redirect.
14. **Reveal failsafe.** Hidden reveal states exist only under `html.js`. If the reveal script has not started four seconds after load, the inline boot script removes the class so nothing stays hidden.
15. **Without JavaScript** all content is visible and the footer links reach every page. The mobile menu button and the contact form need JavaScript.
16. **Not linked:** the Linktree's free "College Essential Items" PDF (open item 15) and the YouTube channel (URL unreadable).
17. **Location wording.** The sources do not state where the business is based or which areas it serves, so the site says only what is published: "NYC DOE Vendor" and the founder's NYC public school background.
18. **Past clients on a phone.** The logo strip is one 1598 px wide file. From 768 px up it is shown whole. Below that the same file is shown as fourteen crop windows (two per row, three from 640 px), one per logo, so the logos are large enough to read. The rectangles in `src/lib/images.ts` were measured from the file. No name is typeset and the file is untouched; the group carries the strip's alt text once.
19. **Site URL fallback.** `site.url` is `NEXT_PUBLIC_SITE_URL`, or the Vercel production domain (`VERCEL_PROJECT_PRODUCTION_URL`) when that variable is not set. With neither (a local build) it falls back to `http://localhost:3000`, never a plausible looking domain, and the Organization JSON-LD leaves out `url` and `logo` and `robots.txt` leaves out the sitemap line.
20. **No repeated blocks.** "Who we serve" is on the home page only (About used to repeat it). The DOE vendor facts are in the footer of every page, one fact per line, and as a detail block on the home page and About; the Contact page no longer has its own "For schools" section, because the footer sits directly under it. The promise sentence is the heading of the comparison section only; the home hero leads with "Workshops & 1:1 sessions for students, families and schools."

## 5. Verification

Done:

- `npm run build`, `npm run lint` and `npx tsc --noEmit` pass with no errors or warnings.
- `next start` on port 3417, checked with `curl`: every route returns 200; `/zzz` returns 404 as a full server-rendered page with a `<title>`, one `<h1>`, `<main>`, header and footer, and no `__next_error__`.
- Every route has its own title, description, canonical URL, `og:url` and `og:image`.
- Script audit of the served HTML: one `h1` per page, no skipped heading levels, no duplicate ids, every `aria-labelledby`, `aria-describedby`, `aria-controls` and hash link has a target, every image has an alt attribute, every external link has `target="_blank" rel="noreferrer"` and a new-tab notice, every internal link returns 200 (including `/programs#family` and `/#comparison`), no `tel:` links.
- All visible copy extracted from the served pages and proofread against the sources.
- No em or en dashes and no leading zeroes in `src` or in the served pages.
- The 14 image files in `public/images` are byte-identical to the originals (MD5 compared).
- The generated share image and Apple icon were opened and checked.
- Contrast ratios computed for every pairing in use (table above).

Not done (per the brief, no browser tools were used):

- No visual check at 1440, 768 and 390 px. Layout widths were reasoned from the type scale and grid, not seen. Worth a look first: the hero stat slab overlapping the photo on desktop, the phone layout of the Performing Arts and About heroes (photo beside the headline), the header between 1100 and 1280 px, and the aligned rows of the comparison sheets.
- Mobile menu keyboard behaviour (focus into the panel, Escape returns focus, inert background) was written to the brief but not exercised in a browser.
- Contact form preselection and the mailto hand-off were not exercised in a browser.
- The fixes made after the independent review (letter sheets and their sideways scroll on phones, the past clients crop windows, the formats list, the footer vendor lines, the hero tagline wrap) passed build, lint and type checks but were not looked at in a browser. Worth a look at 390 px: the Success Stories letters and the past clients grid on the home page.

## 6. Open items for the client

1. **Name spelling.** Text uses "Prep For Excellence"; the logo and the old bio say "Prep 4 Excellence". Confirm which is correct, and the exact legal name.
2. **Service descriptions.** A sentence or two for each of the six services. Until then the Programs page shows names only.
3. **Grade levels** each program is meant for.
4. **Pricing and booking process.** How a school or family books, how long a workshop or series runs, and what it costs.
5. **Phone number**, if one should be public.
6. **Service area.** Where programs run (boroughs, in person or virtual). The site makes no claim today.
7. **Three photos with visible children** (classroom with a man and a girl, dance class on stage, dance group with certificates) were not used. They need a guardian's approval or blurring first.
8. **Past clients.** The full client list, and permission to show each logo. Five items in the strip were too small to read and are not named in the alt text.
9. **Farmingdale photo.** Not used, because the poster shows a student’s first name and initial. Please supply a version with the name covered, or confirm the student and family consent, if you want it on the site.
10. **Jersey photo.** The classroom photo from the back of the room shows a surname on a jersey and was left out. Supply a version with it covered if the photo should be used.
11. **St. John's University founder profile link** in the assignment returns 404. Is there a current link?
12. **YouTube URL.** The Linktree lists a channel but the address could not be read.
13. **MWBE status.** The site says "MWBE certification pending". Tell us when it changes.
14. **Testimonials.** None exist yet. Quotes from students, parents or school partners (with permission) would strengthen the Success Stories page.
15. **Linktree free PDF** ("College Essential Items" on Dropbox). Keep it, and should the site link to it?
16. **Production URL.** The real domain is not known yet. Set `NEXT_PUBLIC_SITE_URL` to it on the host. On Vercel the site uses the project's production domain until then; anywhere else, canonical URLs and share images resolve against `http://localhost:3000` and the structured data and `robots.txt` leave the address out (decision 19).
17. **Who is the dancer in the leap photo?** If it is Shawnia, the alt text and the About page can say so.
18. **Student consent for the award letters.** Names are hidden, but confirm each student (or guardian) is comfortable with the excerpt being public.
19. **Email handling.** The form opens the visitor's mail app. If the client wants submissions without a mail app, a form service or backend is needed.
