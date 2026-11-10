// Student wins shown on the client's current site, each backed by an award
// letter excerpt with the student's name hidden. Headlines, award names and
// details are taken from the cards and the letter text, nothing more.

import type { CropRect } from "./images";

export type LetterImage = {
  src: string;
  // Natural size of the original file.
  width: number;
  height: number;
  // The letter excerpt inside the original card, in natural pixels. The card
  // is cropped with CSS so the file itself is untouched.
  crop: CropRect;
  alt: string;
  // Only for something the section intro does not already say. The intro
  // of each section carries the "excerpt" and privacy wording once.
  caption: string | null;
};

export type Win = {
  id: string;
  headline: string;
  award: string;
  detail: string;
  group: "wins" | "proof";
  letter: LetterImage;
};

// Said once in the intro of each section on the Success Stories page. The
// redaction bar after "Awarded to" is the cue on each individual win.
export const privacyNote = "Student names hidden for privacy.";

export const wins: Win[] = [
  {
    id: "posse-middlebury",
    headline: "Full tuition",
    award: "Posse Foundation Scholarship to Middlebury College",
    detail: "The letter welcomes the student to Middlebury’s Class of 2030.",
    group: "wins",
    letter: {
      src: "/images/letters/posse-middlebury.png",
      width: 799,
      height: 466,
      crop: { x: 51, y: 186, w: 698, h: 206 },
      alt: "Letter excerpt telling a Posse candidate that their application to Middlebury College has been accepted and welcoming them to the Class of 2030.",
      caption: null,
    },
  },
  {
    id: "usta-foundation",
    headline: "$20,000",
    award: "USTA Foundation Leadership Scholarship",
    detail:
      "The 2023 Nora McNeely Hurley Leadership Scholarship from the USTA Foundation, in the amount of $20,000.",
    group: "wins",
    letter: {
      src: "/images/letters/usta-foundation.png",
      width: 799,
      height: 466,
      crop: { x: 51, y: 223, w: 698, h: 133 },
      alt: "Email excerpt congratulating a student, whose name is blacked out, on a 2023 Nora McNeely Hurley Leadership Scholarship from the USTA Foundation in the amount of $20,000.",
      caption: null,
    },
  },
  {
    id: "msk-apprenticeship",
    headline: "Apprenticeship",
    award: "Memorial Sloan Kettering Nursing Apprenticeship",
    detail:
      "Conditional acceptance into MSK’s Nursing Apprenticeship Program, in partnership with CareerWise.",
    group: "wins",
    letter: {
      src: "/images/letters/msk-apprenticeship.png",
      width: 799,
      height: 466,
      crop: { x: 177, y: 169, w: 444, h: 241 },
      alt: "Letter excerpt offering conditional acceptance into Memorial Sloan Kettering’s Nursing Apprenticeship Program in partnership with CareerWise.",
      caption: null,
    },
  },
  {
    id: "coco-gauff-uncf",
    headline: "2-time winner",
    award: "Coco Gauff Scholarship (UNCF)",
    detail: "$8,500 in Fall 2025, and $8,500 again in Fall 2026.",
    group: "wins",
    letter: {
      src: "/images/letters/coco-gauff-uncf.png",
      width: 800,
      height: 520,
      crop: { x: 119, y: 238, w: 561, h: 204 },
      alt: "Letter excerpt saying the student has been awarded the Coco Gauff Tennis Scholarship and that UNCF has issued $8,500 to Howard University for the 2025 Fall semester. One line is blacked out.",
      caption: "Fall 2025 excerpt shown.",
    },
  },
  {
    id: "bai-2024",
    headline: "$2,500",
    award: "bai Corporate Scholarship, 2024 (awarded again)",
    detail: "Another Achievers in Industry (bai) Corporate Scholarship Award of $2,500, for 2024.",
    group: "proof",
    letter: {
      src: "/images/letters/bai-2024.png",
      width: 800,
      height: 520,
      crop: { x: 51, y: 294, w: 699, h: 91 },
      alt: "Letter excerpt saying the student has been selected to receive another bai Corporate Scholarship Award of $2,500, for 2024.",
      caption: null,
    },
  },
  {
    id: "bai-2023",
    headline: "$2,500",
    award: "bai Corporate Scholarship, 2023",
    detail: "The 2023 Achievers in Industry Corporate Scholarship Award of $2,500.",
    group: "proof",
    letter: {
      src: "/images/letters/bai-2023.png",
      width: 800,
      height: 520,
      crop: { x: 51, y: 291, w: 699, h: 98 },
      alt: "Letter excerpt saying the student has been selected to receive a bai Corporate Scholarship Award of $2,500, for 2023.",
      caption: null,
    },
  },
  {
    id: "nyssa-theatre",
    headline: "Accepted",
    award: "NYS Summer School of the Arts, School of Theatre, 2025",
    detail:
      "A four-week program held July 6 through August 1, 2025 at the State University of New York at Fredonia.",
    group: "proof",
    letter: {
      src: "/images/letters/nyssa-theatre.png",
      width: 800,
      height: 520,
      crop: { x: 51, y: 255, w: 699, h: 169 },
      alt: "Letter excerpt congratulating the student on acceptance to the 2025 School of Theatre of the New York State Summer School of the Arts, held July 6 through August 1, 2025 at SUNY Fredonia.",
      caption: null,
    },
  },
];

export const headlineWins = wins.filter((win) => win.group === "wins");
export const proofWins = wins.filter((win) => win.group === "proof");

// The founder's own sentence from the current site, shown as a quotation.
export const winsIntro = "A few of the opportunities students I’ve coached have earned.";
