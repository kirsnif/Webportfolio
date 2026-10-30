"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm " +
  "placeholder:text-gray-500 focus:border-white/30 focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const t = useTranslations("ContactForm");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); 
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed"); 
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold">
        {t("title")}
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold">
              {t("name")}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={100}
              placeholder={t("tname")}
              className={inputClass}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold">
              {t("email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              placeholder={t("temail")}
              className={inputClass}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold">
            {t("content")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder={t("tmessage")}
            className={`${inputClass} resize-y`}
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-violet-500 px-6 py-2 text-sm font-semibold text-black transition hover:bg-violet-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : t("send")}
        </button>

        {status === "success" && (
          <p role="status" className="text-sm text-green-400">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm text-red-400">
            {t("error")}
          </p>
        )}
      </form>
    </section>
  );
}
