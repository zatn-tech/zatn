"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { navlinks, NAV_SCROLL_DURATION } from "./navlinks";
import logo from "../assets/images/logo.jpeg";

const mobileNavItems = navlinks.filter((x) => x.forMobile);
const mobileMenuLinks = [{ name: "Home", link: "home" }, ...mobileNavItems];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  const mobileMenu =
    mounted &&
    open &&
    createPortal(
      <div
        id="mobile-nav-portal"
        className="fixed inset-0 z-[2147483647] md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"
          aria-label="Close menu"
          onClick={close}
        />
        <div className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-mono-950 shadow-[-16px_0_40px_rgba(0,0,0,0.65)]">
          <div className="flex items-center justify-between border-b border-mono-700 px-5 py-4">
            <span className="font-display text-lg tracking-tight text-mono-50">Navigate</span>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-mono-600 bg-mono-900 text-mono-100"
              aria-label="Close menu"
              onClick={close}
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-5" aria-label="Mobile">
            {mobileMenuLinks.map((item, i) => (
              <Link
                key={item.name}
                to={item.link}
                spy
                smooth
                offset={-72}
                duration={NAV_SCROLL_DURATION}
                onClick={close}
                className="flex cursor-pointer items-center gap-4 rounded-xl px-4 py-4 text-left text-[0.95rem] font-medium tracking-wide text-mono-100 transition hover:bg-mono-800/90 active:bg-mono-800"
                activeClass="bg-mono-800 text-white"
              >
                <span className="font-mono text-xs text-mono-500">{String(i + 1).padStart(2, "0")}</span>
                <span className="uppercase tracking-[0.12em]">{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="border-t border-mono-800 px-5 py-5">
            <p className="text-center text-[0.65rem] uppercase tracking-[0.25em] text-mono-500">Zatn · Web · Apps · Content · Video</p>
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] border-b border-white/[0.08] bg-mono-950/90 backdrop-blur-xl supports-[backdrop-filter]:bg-mono-950/70">
      <div className="relative z-[2] mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-5 md:px-10 md:py-4">
        <Link
          to="home"
          spy
          smooth
          offset={-80}
          duration={NAV_SCROLL_DURATION}
          className="relative z-[1] flex min-w-0 cursor-pointer items-center gap-2 sm:gap-3"
          onClick={close}
        >
          <Image
            src={logo}
            alt="Zatn"
            width={52}
            height={52}
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-mono-600/80 sm:h-12 sm:w-12"
            priority
          />
          <span className="hidden font-display text-lg tracking-tight text-mono-100 sm:inline">Zatn</span>
        </Link>

        <nav className="relative z-[1] hidden items-center gap-1 md:flex" aria-label="Primary">
          {navlinks.map(
            (x) =>
              x.forLap && (
                <div key={x.name} className="px-4">
                  <Link
                    className="cursor-pointer text-sm font-medium uppercase tracking-[0.12em] text-mono-400 transition hover:text-mono-100"
                    activeClass="text-mono-50"
                    to={x.link}
                    spy
                    smooth
                    offset={-72}
                    duration={NAV_SCROLL_DURATION}
                  >
                    {x.name}
                  </Link>
                </div>
              ),
          )}
          <div className="ml-4 border-l border-mono-800 pl-6">
            <Link
              className="cursor-pointer text-sm font-medium uppercase tracking-[0.12em] text-mono-200 transition hover:text-white"
              activeClass="text-white"
              to="contact"
              spy
              smooth
              offset={-72}
              duration={NAV_SCROLL_DURATION}
            >
              Contact
            </Link>
          </div>
        </nav>

        <button
          type="button"
          className="relative z-[3] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-mono-600 bg-mono-900 text-mono-50 shadow-sm transition hover:bg-mono-800 active:scale-[0.98] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav-portal"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
        >
          {open ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
        </button>
      </div>

      {mobileMenu}
    </header>
  );
}
