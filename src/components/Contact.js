"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionAtmosphere from "./ui/SectionAtmosphere";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setFeedback(null);
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, website }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setFeedback({ type: "error", text: data.error || "Could not send. Try again." });
        setSending(false);
        return;
      }

      setFeedback({ type: "success", text: "Message sent. We’ll get back to you soon." });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSending(false);
    } catch {
      setFeedback({ type: "error", text: "Network error. Check your connection and try again." });
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-mono-800 bg-mono-950 py-24 md:py-32"
    >
      <SectionAtmosphere />

      <div className="relative z-[1] mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-mono-500">
            Contact
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-mono-50">
            Let’s build something that lasts.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mono-400">
            Share a brief outline—timeline, scope, and links. We’ll respond with a clear next step.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-mono-500">
            <li className="flex gap-3">
              <span className="text-mono-600">—</span>
              <span>Response within one business day</span>
            </li>
            <li className="flex gap-3">
              <span className="text-mono-600">—</span>
              <span>Transparent scope & milestones</span>
            </li>
            <li className="flex gap-3">
              <span className="text-mono-600">—</span>
              <span>Remote-first, India-based team</span>
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-3xl border border-mono-800/90 bg-mono-950/50 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_80px_-32px_rgba(0,0,0,0.85)] backdrop-blur-md md:p-10"
          onSubmit={handleSubmit}
        >
          {/* Honeypot — leave hidden; tab order skips */}
          <label className="sr-only" aria-hidden="true">
            Website
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>

          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-mono-500">
                Name
              </span>
              <input
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={sending}
                placeholder="Your name"
                className="w-full rounded-xl border border-mono-800 bg-mono-900/80 px-4 py-3.5 text-mono-100 placeholder:text-mono-600 focus:border-mono-500 focus:outline-none focus:ring-1 focus:ring-mono-500 disabled:opacity-50"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-mono-500">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={sending}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-mono-800 bg-mono-900/80 px-4 py-3.5 text-mono-100 placeholder:text-mono-600 focus:border-mono-500 focus:outline-none focus:ring-1 focus:ring-mono-500 disabled:opacity-50"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-mono-500">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={sending}
                placeholder="+91 ···"
                className="w-full rounded-xl border border-mono-800 bg-mono-900/80 px-4 py-3.5 text-mono-100 placeholder:text-mono-600 focus:border-mono-500 focus:outline-none focus:ring-1 focus:ring-mono-500 disabled:opacity-50"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-mono-500">
                Project
              </span>
              <textarea
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={sending}
                placeholder="Goals, timeline, references…"
                rows={4}
                className="w-full resize-none rounded-xl border border-mono-800 bg-mono-900/80 px-4 py-3.5 text-mono-100 placeholder:text-mono-600 focus:border-mono-500 focus:outline-none focus:ring-1 focus:ring-mono-500 disabled:opacity-50"
              />
            </label>
          </div>

          {feedback && (
            <p
              className={`mt-4 text-sm ${
                feedback.type === "success" ? "text-mono-300" : "text-red-400/90"
              }`}
              role="status"
            >
              {feedback.text}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="mt-8 w-full rounded-xl border border-mono-200 bg-mono-100 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-mono-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
