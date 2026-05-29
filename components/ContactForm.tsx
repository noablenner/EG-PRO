"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/site";

/**
 * Formulaire sans back-end : compose un e-mail pré-rempli vers contact@eg-pro.fr
 * et ouvre le client mail de l'utilisateur. Simple, fiable, hébergeable en statique.
 * (On pourra plus tard brancher un vrai service d'envoi — Formspree, Resend, etc.)
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nom = String(f.get("nom") || "");
    const email = String(f.get("email") || "");
    const tel = String(f.get("tel") || "");
    const msg = String(f.get("message") || "");
    const body = `Nom : ${nom}%0D%0AEmail : ${email}%0D%0ATéléphone : ${tel}%0D%0A%0D%0A${msg}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Demande via le site — " + nom
    )}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-ink/12 bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/15";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
        data-cursor="Envoyer"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-semibold text-white shadow-glow transition-colors hover:bg-brand-bright sm:w-auto"
      >
        Envoyer ma demande
        <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-brand-soft px-4 py-3 text-sm text-brand-dark"
          >
            Votre messagerie vient de s'ouvrir avec le message pré-rempli. Si rien
            ne se passe, écrivez-moi directement à{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold underline">
              {SITE.email}
            </a>
            .
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
