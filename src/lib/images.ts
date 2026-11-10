// Real photographs from the client's current site, copied byte for byte.
// Width and height are the natural pixel size of each file. No photo is ever
// rendered wider than its natural width (see PhotoFrame's maxWidth).

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const photos = {
  headshot: {
    src: "/images/shawnia-yon-headshot.jpg",
    width: 533,
    height: 800,
    alt: "Portrait of Shawnia Yon, smiling, in a navy blazer.",
  },
  workshopRoom: {
    src: "/images/workshop-room.jpg",
    width: 694,
    height: 435,
    alt: "Shawnia Yon standing and presenting to a room of students seated at long tables. The students’ faces are covered for privacy.",
  },
  studentsLaptop: {
    src: "/images/students-laptop.jpg",
    width: 687,
    height: 322,
    alt: "Students gathered around a laptop at a table. Their faces are covered for privacy.",
  },
  dancerArabesque: {
    src: "/images/dancer-arabesque.jpg",
    width: 533,
    height: 800,
    alt: "A dancer in a white tutu holding an arabesque on a wooden stage in front of a blue curtain, facing away from the camera.",
  },
  dancerLeap: {
    src: "/images/dancer-leap.jpg",
    width: 533,
    height: 800,
    alt: "A dancer in mid-air in a split leap, back arched, in a bright studio.",
  },
  pastClients: {
    src: "/images/past-clients.png",
    width: 1598,
    height: 567,
    // Only the names that are clearly legible in the strip are listed.
    alt: "Logos of past clients, including York College SEEK (CUNY), Talent Unlimited High School, Queens Public Library, I.S. 61 William A. Morris, NeON, Big Brothers Big Sisters of New York City, NY GEAR UP, LEAP (Leadership, Education & Athletics in Partnership) and P.S. 279.",
  },
} satisfies Record<string, Photo>;
