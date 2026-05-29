"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Magnetic from "./Magnetic";

type Variant = "primary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-glow hover:bg-brand-bright",
  ghost:
    "border border-brand/30 text-brand hover:border-brand hover:bg-brand-soft",
  light:
    "bg-white text-brand-dark hover:bg-brand-soft",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  cursor,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  cursor?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = `group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 ${styles[variant]} ${className}`;
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  return (
    <Magnetic className="inline-block">
      {external ? (
        <a href={href} className={cls} data-cursor={cursor}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={cls} data-cursor={cursor}>
          {inner}
        </Link>
      )}
    </Magnetic>
  );
}
