"use client";

import React from "react";
import Image from "next/image";
import { RiInstagramLine, RiMailLine, RiWhatsappLine } from "react-icons/ri";
import logo from "../assets/images/logo.jpeg";
import { navlinks, NAV_SCROLL_DURATION } from "./navlinks";
import { Link } from "react-scroll";
import SectionAtmosphere from "./ui/SectionAtmosphere";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-mono-900 bg-mono-950 text-mono-400">
      <SectionAtmosphere />
      <div className="relative z-[1] mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-12 md:gap-10 md:px-10 md:py-20">
        <div className="md:col-span-4">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Zatn"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover ring-1 ring-mono-700"
            />
            <div>
              <div className="font-display text-xl text-mono-100">Zatn</div>
              <p className="mt-1 text-sm text-mono-500">Web · Apps · Content · Video</p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mono-500">
            Web development, web apps, content creation, and video editing—built around your goals.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:col-span-8 md:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mono-500">
              Reach
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Zatn</li>
              <li>
                <a href="tel:9597811944" className="transition hover:text-mono-200">
                  9597811944
                </a>
              </li>
              <li>
                <a
                  href="mailto:zatn.business@gmail.com"
                  className="transition hover:text-mono-200"
                >
                  zatn.business@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mono-500">
              Office
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              No 129 A Pemmasani Avenue, Jothi Nagar, Arakkonam
            </p>
            <p className="mt-3 text-sm">Mon–Sat · 9am–9pm</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mono-500">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {navlinks.map(
                (x) =>
                  x.quickLink && (
                    <li key={x.name}>
                      <Link
                        className="cursor-pointer transition hover:text-mono-100"
                        activeClass="text-mono-100"
                        to={x.link}
                        spy
                        smooth
                        offset={-72}
                        duration={NAV_SCROLL_DURATION}
                      >
                        {x.name}
                      </Link>
                    </li>
                  ),
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-mono-900/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 md:flex-row md:px-10">
          <div className="flex items-center gap-6 text-xl text-mono-500">
            <a
              href="mailto:zatn.business@gmail.com"
              aria-label="Email"
              className="transition hover:text-mono-100"
            >
              <RiMailLine />
            </a>
            <a
              href="https://www.instagram.com/zatn.tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-mono-100"
            >
              <RiInstagramLine />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=9597811944"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-mono-100"
            >
              <RiWhatsappLine />
            </a>
          </div>
          <p className="text-center text-xs text-mono-600 md:text-right">
            © {new Date().getFullYear()} Zatn Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
