"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contactNav, mailtoHref, primaryCta, primaryNav, routes, site } from "@/lib/site";

// Must match the "nav" breakpoint in tailwind.config.ts.
const DESKTOP_NAV_QUERY = "(min-width: 1100px)";

const menuLinks = [{ href: routes.home, label: "Home" }, ...primaryNav, contactNav];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef(false);

  // Subtle border once content scrolls under the header.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the menu when the viewport grows past the desktop breakpoint.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_NAV_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        restoreFocus.current = false;
        setOpen(false);
      }
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // While the menu is open: everything outside the panel (skip link, header,
  // main, footer) is inert, the page does not scroll, and Escape closes it.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const toggle = toggleRef.current;
    const outside = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement &&
        element !== panel &&
        element.tagName !== "SCRIPT" &&
        !element.hasAttribute("inert"),
    );
    outside.forEach((element) => element.setAttribute("inert", ""));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreFocus.current = true;
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // Inert comes off first, otherwise the toggle cannot take focus.
      outside.forEach((element) => element.removeAttribute("inert"));
      document.body.style.overflow = previousOverflow;
      if (restoreFocus.current) {
        restoreFocus.current = false;
        toggle?.focus();
      }
    };
  }, [open]);

  const closeAndReturnFocus = () => {
    restoreFocus.current = true;
    setOpen(false);
  };

  // Used by links. Same-page links do not change the pathname, so the menu
  // closes on every tap rather than on navigation.
  const closeForNavigation = () => {
    restoreFocus.current = false;
    setOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b bg-white transition-colors duration-300 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link href={routes.home} className="flex min-h-[2.75rem] items-center gap-2.5 nav:gap-3">
            <Image
              src={site.logo.src}
              alt=""
              width={site.logo.width}
              height={site.logo.height}
              sizes="48px"
              priority
              className="h-11 w-auto nav:h-12"
            />
            <span className="whitespace-nowrap font-display text-[1.125rem] font-semibold tracking-tight text-purple max-[359px]:sr-only sm:text-[1.3125rem]">
              {site.name}
            </span>
          </Link>

          <nav aria-label="Main" className="hidden nav:block">
            <ul className="flex items-center xl:gap-2">
              {primaryNav.map((item) => {
                const current = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={`inline-flex min-h-[2.75rem] items-center whitespace-nowrap px-2.5 text-[0.9375rem] font-medium underline-offset-8 hover:text-purple hover:underline xl:px-3 ${
                        current
                          ? "text-purple underline decoration-green decoration-[3px]"
                          : "text-ink decoration-line decoration-2"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href={primaryCta.href}
            className="btn btn-action hidden min-h-[2.75rem] whitespace-nowrap px-4 text-[0.9375rem] nav:inline-flex xl:px-5"
          >
            {primaryCta.label}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 items-center gap-2 border-2 border-purple px-3 text-base font-semibold text-purple nav:hidden"
            style={{ borderRadius: 2 }}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            Menu
            <svg aria-hidden="true" width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>

      {/* Rendered outside the header so nothing on the sticky header can trap
          this fixed panel. */}
      <div
        ref={panelRef}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`menu-panel on-dark fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-purple-deep text-white nav:hidden ${
          open ? "is-open" : ""
        }`}
      >
        <div className="shell flex min-h-full flex-col pb-10">
          <div className="flex h-[var(--header-h)] shrink-0 items-center justify-between gap-4">
            <p className="font-display text-[1.125rem] font-semibold tracking-tight sm:text-[1.3125rem]">
              {site.name}
            </p>
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 items-center gap-2 border-2 border-white px-3 text-base font-semibold"
              style={{ borderRadius: 2 }}
              onClick={closeAndReturnFocus}
            >
              Close
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <nav aria-label="Menu pages" className="mt-4">
            <ul className="border-t border-white/25">
              {menuLinks.map((item) => {
                const current = pathname === item.href;
                return (
                  <li key={item.href} className="border-b border-white/25">
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      onClick={closeForNavigation}
                      className={`flex min-h-[3.5rem] items-center justify-between py-2 font-display text-[1.75rem] leading-tight ${
                        current ? "text-mint-ink" : "text-white"
                      }`}
                    >
                      {item.label}
                      {current ? (
                        <span className="font-sans text-sm font-semibold text-mint-ink">This page</span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <Link href={primaryCta.href} onClick={closeForNavigation} className="btn btn-action w-full">
              {primaryCta.label}
            </Link>
            <a
              href={mailtoHref}
              onClick={closeForNavigation}
              className="inline-flex min-h-[2.75rem] items-center break-all text-base text-lav underline underline-offset-4"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
