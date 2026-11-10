import { routes } from "./site";

// Service names and formats are copied exactly from the client's current
// site. The client has not published descriptions, grade levels, lengths or
// prices for any of them, so `description` stays null until they are supplied.

export type ProgramGroupId = "college-career" | "family" | "performing-arts";

export type Program = {
  slug: string;
  name: string;
  group: ProgramGroupId;
  description: string | null;
};

export const programs: Program[] = [
  {
    slug: "college-readiness",
    name: "College Readiness & Transition",
    group: "college-career",
    description: null,
  },
  {
    slug: "scholarships",
    name: "Scholarships & Opportunity Strategy",
    group: "college-career",
    description: null,
  },
  {
    slug: "career-readiness",
    name: "Career & Professional Readiness",
    group: "college-career",
    description: null,
  },
  {
    slug: "admissions-interview",
    name: "College Admissions & Interview Prep",
    group: "college-career",
    description: null,
  },
  {
    slug: "family-workshops",
    name: "Parent & Family Workshops",
    group: "family",
    description: null,
  },
  {
    slug: "dance",
    name: "Dance & Performing Arts Classes",
    group: "performing-arts",
    description: null,
  },
];

export const danceProgram = programs.find((program) => program.slug === "dance") ?? programs[0];

export type ProgramGroup = {
  id: ProgramGroupId;
  anchor: string;
  title: string;
};

export const programGroups: ProgramGroup[] = [
  { id: "college-career", anchor: "college-and-career", title: "College and career programs" },
  { id: "family", anchor: "family", title: "Family workshops" },
  { id: "performing-arts", anchor: "performing-arts", title: "Performing arts" },
];

export const formats: string[] = [
  "Individual Workshops",
  "Multi-Week Series",
  "Parent Workshops",
  "1:1 Consulting",
  "School & Organizational Programs",
];

// The published comparison between a school counselor and Prep For Excellence.
export const comparison = {
  counselor: {
    title: "Your School Counselor",
    points: [
      "Guides students through requirements & applications",
      "Supports the broader student population",
      "Connects students to available resources",
    ],
  },
  prep: {
    title: "Prep For Excellence",
    points: [
      "Teaches students to leverage who they are",
      "Prepares students for the real college experience",
      "Turns knowledge into action through hands-on strategy",
    ],
  },
} as const;

// Contact form options. The values travel in the query string
// (/contact?iam=school&interest=dance) so links can preselect them.
export type SelectOption = { value: string; label: string };

export const roleOptions: SelectOption[] = [
  { value: "student", label: "Student" },
  { value: "parent", label: "Parent or guardian" },
  { value: "school", label: "School or organization" },
];

export const interestFallback: SelectOption = { value: "not-sure", label: "Not sure yet" };

export const interestOptions: SelectOption[] = [
  interestFallback,
  ...programs.map((program) => ({ value: program.slug, label: program.name })),
];

export function contactHref(params: { iam?: string; interest?: string } = {}): string {
  const query = new URLSearchParams();
  if (params.iam) query.set("iam", params.iam);
  if (params.interest) query.set("interest", params.interest);
  const qs = query.toString();
  return qs ? `${routes.contact}?${qs}` : routes.contact;
}

export type Audience = {
  name: string;
  action: string;
  href: string;
};

// The four audiences named on the client's site, each with a next step.
export const audiences: Audience[] = [
  {
    name: "K to 12 Students",
    action: "See the programs",
    href: routes.programs,
  },
  {
    name: "College Students",
    action: "Ask as a student",
    href: contactHref({ iam: "student" }),
  },
  {
    name: "Parents & Guardians",
    action: "See family workshops",
    href: `${routes.programs}#family`,
  },
  {
    name: "Schools & Community Organizations",
    action: "Bring a program to your school",
    href: contactHref({ iam: "school" }),
  },
];

export type Pillar = { title: string; words: string[] };

export const pathway: {
  name: string;
  headline: string;
  description: string;
  pillars: Pillar[];
} = {
  name: "Performing Arts Pathway",
  headline: "Where Dance Builds More Than Dancers",
  description:
    "Professional dance training that develops confident, disciplined, and collaborative students while introducing them to college and career pathways in the arts.",
  pillars: [
    { title: "Professional Training", words: ["Technique", "Performance", "Rehearsal"] },
    { title: "Beyond Dance", words: ["Leadership", "Teamwork", "Confidence", "Perseverance"] },
    { title: "Arts Pathways", words: ["College", "Careers", "Opportunities"] },
  ],
};
