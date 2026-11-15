import { routes } from "./site";

// Service names come from the existing site; details below are based on the
// client's school, family, and dance service sheets supplied in November 2026.

export type ProgramGroupId = "college-career" | "family" | "performing-arts";

export type Program = {
  slug: string;
  name: string;
  group: ProgramGroupId;
  description: string;
};

export const programs: Program[] = [
  {
    slug: "college-readiness",
    name: "College Readiness & Transition",
    group: "college-career",
    description: "Interactive workshops on choosing post-secondary options, academic and social life on campus, study abroad, and the transition to college.",
  },
  {
    slug: "scholarships",
    name: "Scholarships & Opportunity Strategy",
    group: "college-career",
    description: "Explore scholarship opportunities, develop application strategies, and learn how to present your experience and strengths.",
  },
  {
    slug: "career-readiness",
    name: "Career & Professional Readiness",
    group: "college-career",
    description: "Build practical skills in resumes, LinkedIn, networking, email etiquette, goal setting, and finding on-campus work.",
  },
  {
    slug: "admissions-interview",
    name: "College Admissions & Interview Prep",
    group: "college-career",
    description: "Practice college and scholarship interviews and prepare for the application process, including performing arts auditions.",
  },
  {
    slug: "family-workshops",
    name: "Parent & Family Workshops",
    group: "family",
    description: "Interactive sessions for parents and families on planning for college, scholarships, and supporting a student's next steps.",
  },
  {
    slug: "dance",
    name: "Dance & Performing Arts Classes",
    group: "performing-arts",
    description: "Ballet, modern, jazz, hip-hop, and Choreography 101 classes, with professional-style training and performance preparation.",
  },
];

export const workshopTopics = [
  { title: "College transition & success", detail: "Academics, social life, dorming, time management, and study habits." },
  { title: "Scholarships & applications", detail: "The scholarship search, interviews, and communicating your value." },
  { title: "Career & professional skills", detail: "Resumes, LinkedIn, networking, email etiquette, and on-campus employment." },
  { title: "Well-being & belonging", detail: "Managing stress, imposter syndrome, and attending a PWI as a BIPOC student." },
  { title: "Custom workshops", detail: "Develop a topic with Prep For Excellence for your students or organization." },
] as const;

export const workshopTiers = [
  { name: "Economy", detail: "Interactive presentation and Q&A", price: "$750" },
  { name: "Standard", detail: "Presentation, Q&A, and a guided activity", price: "$850" },
  { name: "Premium", detail: "Presentation, Q&A, guided activity, and tailored resources", price: "$950" },
] as const;

export const danceStyles = ["Ballet", "Modern", "Jazz", "Choreography 101", "Hip-hop"] as const;

export const danceOfferings = [
  { title: "Warm-up & technique", detail: "Age-appropriate flexibility, strength, and coordination exercises, followed by technique adapted to students' experience." },
  { title: "Choreography & performance", detail: "Across-the-floor training, rehearsals, and optional choreography for school performances." },
  { title: "Dance career workshops", detail: "LinkedIn for dancers, artist portfolios, scholarships, dance resumes, and social media for opportunities in the arts." },
] as const;

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
