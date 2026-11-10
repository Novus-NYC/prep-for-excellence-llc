import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

// Every external link opens in a new tab with safe handling and tells screen
// reader users so.
export default function ExternalLink({ href, className, children }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
