import Link from "next/link";
import type { CSSProperties } from "react";
import { audiences } from "@/lib/programs";

// The four audiences from the client's "Who We Serve" list. Each row is one
// link to the page or the contact form that fits that audience.
export default function AudienceList() {
  return (
    <ul className="border-b border-purple/30">
      {audiences.map((audience, index) => (
        <li
          key={audience.name}
          className="reveal border-t border-purple/30"
          style={{ "--i": index } as CSSProperties}
        >
          <Link
            href={audience.href}
            className="group flex min-h-[4.5rem] flex-col justify-center gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <span className="font-display text-display-md font-medium text-purple">{audience.name}</span>{" "}
            <span className="text-cta shrink-0 min-h-0 text-base text-ink sm:whitespace-nowrap">
              {audience.action}{" "}
              <span aria-hidden="true" className="arrow">
                →
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
