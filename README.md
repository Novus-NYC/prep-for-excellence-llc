# Prep For Excellence

Website for Prep For Excellence LLC, founded by Shawnia Yon. The business teaches students how to make college work for them (scholarships, college readiness and retention, career readiness, admissions and interview prep, parent workshops) and runs a Performing Arts Pathway. It is an NYC DOE vendor.

The site has one job: help students, families, and schools and organizations find the programs and ask about a workshop.

Built by Novus (https://novusnyc.org) on the Novus base template. `AGENTS.md` and `CLAUDE.md` hold the build standard and must stay identical.

## Pages

| Route | What it is |
|---|---|
| `/` | Positioning, the scholarship total, headline wins, the counselor comparison, who we serve, past clients, founder teaser |
| `/programs` | The six services and five formats |
| `/performing-arts` | The Performing Arts Pathway and its three pillars |
| `/success-stories` | Seven student wins with excerpts from the award letters |
| `/about` | Founder Shawnia Yon |
| `/contact` | Inquiry form (opens the visitor's own email app), email and social links |

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 3 with brand tokens in `tailwind.config.ts`
- `next/image` for all photos
- Fonts self-hosted with Fontsource: Fraunces Variable (headlines) and Public Sans Variable (text)
- No backend, database or third-party scripts

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Checks that must pass before a change ships:

```bash
npm run build
npm run lint
npm run typecheck
```

`npm install` sometimes stalls on the build PC. If it hangs, cancel it and run it again.

## Where the content lives

| File | What to edit there |
|---|---|
| `src/lib/site.ts` | Business name, legal name, email, phone, address, social links, DOE vendor details, taglines, the scholarship total, the founder's bio and quote, navigation |
| `src/lib/programs.ts` | The six services (add a `description` to show one), formats, the counselor comparison, audiences, the Performing Arts Pathway, contact form options |
| `src/lib/wins.ts` | Student wins and their letter excerpts |
| `src/lib/images.ts` | Photos and their alt text |
| `public/images/` | The image files (originals from the client, copied unchanged) |

Anything the client has not confirmed is `null` in `src/lib/site.ts`, and the part of the page that would show it stays hidden until a value is filled in. For example, setting `phone` makes the phone number appear in the footer and on the Contact page.

Links can preselect the contact form: `/contact?iam=student`, `/contact?iam=parent`, `/contact?iam=school`, and `&interest=` with a service slug from `src/lib/programs.ts` (for example `/contact?iam=school&interest=dance`).

## Deployment

Deploy on Vercel as a standard Next.js project. Set one environment variable:

```
NEXT_PUBLIC_SITE_URL=https://the-real-domain.example
```

It is used for canonical URLs, Open Graph URLs, the sitemap and `robots.txt`. Without it they fall back to `https://example.com`.

After replacing an image that keeps the same filename, delete `.next/cache/images` so the old optimized copy is not served.

## More detail

`BUILD_NOTES.md` has the verified facts and their sources, the art direction, the palette with contrast ratios, decisions, what was verified, and the open items for the client.
