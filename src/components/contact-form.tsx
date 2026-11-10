"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { interestFallback, interestOptions, roleOptions } from "@/lib/programs";
import { mailtoHref, site } from "@/lib/site";

type FieldName = "name" | "email" | "role" | "message";
type Errors = Partial<Record<FieldName, string>>;

const fieldOrder: FieldName[] = ["name", "email", "role", "message"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function labelFor(options: { value: string; label: string }[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? "";
}

// A short inquiry form. It has no server behind it: on submit it builds a
// mailto: link to the business address and hands it to the visitor's own mail
// app, and the surrounding copy says so.
export default function ContactForm() {
  const roleRef = useRef<HTMLSelectElement>(null);
  const interestRef = useRef<HTMLSelectElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  // Links elsewhere on the site can preselect the audience and the program,
  // for example /contact?iam=school&interest=dance.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const iam = params.get("iam");
    const interest = params.get("interest");
    if (iam && roleRef.current && roleOptions.some((option) => option.value === iam)) {
      roleRef.current.value = iam;
    }
    if (interest && interestRef.current && interestOptions.some((option) => option.value === interest)) {
      interestRef.current.value = interest;
    }
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const name = value("name");
    const email = value("email");
    const role = value("role");
    const interest = value("interest") || interestFallback.value;
    const message = value("message");

    const next: Errors = {};
    if (!name) next.name = "Enter your name.";
    if (!email) {
      next.email = "Enter your email address.";
    } else if (!emailPattern.test(email)) {
      next.email = "Enter an email address in the format name@example.com.";
    }
    if (!role) next.role = "Choose the option that describes you.";
    if (!message) next.message = "Write a short message about what you need.";
    setErrors(next);

    const firstInvalid = fieldOrder.find((field) => next[field]);
    if (firstInvalid) {
      setOpened(false);
      const element = form.elements.namedItem(firstInvalid);
      if (element instanceof HTMLElement) element.focus();
      return;
    }

    const roleLabel = labelFor(roleOptions, role);
    const subject = `Workshop inquiry from ${name} (${roleLabel})`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `I am a: ${roleLabel}`,
      `Interested in: ${labelFor(interestOptions, interest)}`,
      "",
      message,
    ].join("\r\n");

    // A mailto: link, handed to the visitor's mail app in the same tab.
    const href = `${mailtoHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(href, "_self");
    setOpened(true);
  };

  const describedBy = (field: FieldName) => (errors[field] ? `${field}-error` : undefined);

  const errorText = (field: FieldName) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-base font-semibold text-[#A3122E]">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
      <p className="text-base text-muted">Fields marked required must be filled in.</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-base font-semibold">
            Your name <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className="form-field"
          />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-base font-semibold">
            Your email <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className="form-field"
          />
          {errorText("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="role" className="mb-1.5 block text-base font-semibold">
            I am a <span className="font-normal text-muted">(required)</span>
          </label>
          <select
            ref={roleRef}
            id="role"
            name="role"
            required
            defaultValue=""
            aria-invalid={errors.role ? true : undefined}
            aria-describedby={describedBy("role")}
            className="form-field"
          >
            <option value="">Choose one</option>
            {roleOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errorText("role")}
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-base font-semibold">
            I am interested in <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            ref={interestRef}
            id="interest"
            name="interest"
            defaultValue={interestFallback.value}
            className="form-field"
          >
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-base font-semibold">
          Message <span className="font-normal text-muted">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className="form-field"
        />
        {errorText("message")}
      </div>

      <div className="flex flex-col gap-3">
        <button type="submit" className="btn btn-action self-start">
          Open my email app
        </button>
        <p className="text-base text-muted">
          This button opens your own email app with your message to {site.email} already written.
          Nothing is sent until you press send there.
        </p>
      </div>

      <p role="status" className={opened ? "border-l-4 border-green bg-mint px-4 py-3 text-base" : "sr-only"}>
        {opened
          ? `Your email app should now be open with your message. Press send there to finish. If nothing opened, write to ${site.email} directly.`
          : ""}
      </p>

      <noscript>
        <p className="border-l-4 border-purple bg-lilac px-4 py-3 text-base">
          This form needs JavaScript. You can write to {site.email} directly instead.
        </p>
      </noscript>
    </form>
  );
}
