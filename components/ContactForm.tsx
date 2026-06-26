"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/site";

// Endpoint Formspree : les demandes sont envoyées par e-mail à EG-PRO.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdvorne";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/15";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Objet de l'e-mail reçu par EG-PRO */}
      <input type="hidden" name="_subject" value="Nouvelle demande via le site EG-PRO" />
      {/* Anti-spam (honeypot) */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Nom</label>
          <input name="nom" required placeholder="Votre nom" className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
          <input name="email" type="email" required placeholder="vous@email.fr" className={field} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Téléphone</label>
        <input name="tel" placeholder="06 .. .. .. .." className={field} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Que puis-je faire pour vous ?
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre besoin, votre projet, vos délais…"
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        data-cursor="Envoyer"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white shadow-glow transition-colors hover:bg-brand-bright disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
        {status !== "sending" && (
          <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        )}
      </button>

      <AnimatePresence>
        {status === "ok" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-brand-soft px-4 py-3 text-sm text-brand-dark"
          >
            Merci ! Votre demande a bien été envoyée, je reviens vers vous au plus vite.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            Une erreur est survenue. Réessayez ou écrivez-moi directement à{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold underline">{SITE.email}</a>.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
