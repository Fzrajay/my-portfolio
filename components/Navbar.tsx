'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="sticky top-0 z-50 w-full">
      <nav
        className="
          border-b
          border-white/10
          bg-slate-950/80
          backdrop-blur-xl
        "
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* =========================
                LOGO
            ========================= */}

            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <div
                className="
                  relative
                  h-10
                  w-10
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-indigo-500
                  shadow-lg
                  shadow-cyan-500/20
                "
              >
                <div className="absolute inset-[1px] rounded-[11px] bg-slate-950/20" />
              </div>

              <div>
                <h1 className="font-bold leading-none text-white">Fazar</h1>

                <p className="mt-1 font-mono text-[10px] text-slate-400">Full Stack</p>
              </div>
            </Link>

            {/* =========================
                DESKTOP NAVIGATION
            ========================= */}

            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    relative
                    text-sm
                    font-medium
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:text-cyan-400
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-px
                      w-0
                      bg-cyan-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </Link>
              ))}

              <a
                href="/cv/Cv_Pajar_Fadilah.pdf"
                download="CV-Pajar-Fadilah.pdf"
                className="
                rounded-xl
                border
                border-cyan-400/30
                bg-cyan-400/10
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-400
                transition-all
                duration-300
                hover:border-cyan-400/60
                hover:bg-cyan-400
                hover:text-slate-950
              "
              >
                Download CV
              </a>
            </div>

            {/* =========================
                MOBILE BUTTON
            ========================= */}

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-slate-800
                bg-slate-900/70
                text-slate-300
                transition
                hover:border-cyan-400/50
                hover:text-cyan-400
                md:hidden
              "
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* =========================
              MOBILE MENU
          ========================= */}

          <motion.div
            initial={false}
            animate={
              isOpen
                ? {
                    height: 'auto',
                    opacity: 1,
                  }
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden md:hidden"
          >
            <div className="border-t border-white/5 py-5">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-slate-300
                      transition
                      hover:bg-cyan-400/10
                      hover:text-cyan-400
                    "
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <a
                href="/cv/Cv_Pajar_Fadilah.pdf"
                download="CV-Pajar-Fadilah.pdf"
                onClick={() => setIsOpen(false)}
                className="
                mt-4
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-cyan-400
                px-4
                py-3
                text-sm
                font-semibold
                text-slate-950
                transition
                hover:bg-cyan-300
              "
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
