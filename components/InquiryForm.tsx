"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries()) as Record<string, string>;

    try {
      // Default behavior: open the user's email client with a structured draft.
      // Wire to Supabase + Resend in phase 2 by replacing the body of this try block.
      const subject = encodeURIComponent(
        `New inquiry from ${payload.name || "(no name)"}`
      );
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || "—"}\nRelationship: ${payload.relationship || "—"}\n\nMessage:\n${payload.message}\n`
      );
      window.location.href = `mailto:hello@stepbysteprecoverystl.com?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. You can also reach us directly at hello@stepbysteprecoverystl.com.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-forest/30 bg-forest-soft p-8 lg:p-10">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="text-forest mt-1 shrink-0" size={28} aria-hidden />
          <div>
            <h3 className="font-display font-bold text-2xl text-ink">Your message is on its way.</h3>
            <p className="mt-3 text-body-long text-ink-muted text-pretty">
              I&apos;ll respond personally within one business day. If you don&apos;t hear from
              me by then, please check your spam folder or write to{" "}
              <a className="text-forest underline" href="mailto:hello@stepbysteprecoverystl.com">
                hello@stepbysteprecoverystl.com
              </a>
              .
            </p>
            <p className="mt-6 font-display font-semibold text-clay">— Yomi</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
        <SelectField
          label="I'm reaching out as"
          name="relationship"
          required
          options={[
            { value: "self", label: "Considering Step by Step for myself" },
            { value: "family", label: "A family member" },
            { value: "professional", label: "A referring professional" },
            { value: "investor", label: "An investor or partner" },
            { value: "other", label: "Other" },
          ]}
        />
      </div>
      <TextareaField
        label="What's on your mind?"
        name="message"
        rows={6}
        placeholder="Anything you'd like to share. Nothing is shared until you send."
        required
      />
      <p className="text-xs text-ink-subtle">
        Inquiry is private. We don&apos;t share, sell, or surface your information. Yomi reads every
        message personally and replies within one business day.
      </p>
      {error && <p className="text-sm text-clay-deep">{error}</p>}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary"
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}{" "}
        {status !== "submitting" && <ArrowRight size={16} aria-hidden />}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-2">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-subtle focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-2">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-md border border-line bg-surface px-4 py-3 text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors"
      >
        <option value="" disabled>
          Choose one…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  rows,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-ink mb-2">{label}</span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-surface px-4 py-3 text-ink placeholder:text-ink-subtle focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition-colors resize-none"
      />
    </label>
  );
}
