'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

import { Mail, Heart, ArrowUpRight } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  {
    icon: FaGithub,
    href: 'https://github.com/Fzrajay',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/pajar-fadilah-3540a1284',
    label: 'LinkedIn',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/+6285163135745',
    label: 'Wthasapp',
  },
  {
    icon: Mail,
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=afajar966@gmail.com',
    label: 'Email',
  },
];

const stack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vercel'];

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-800/80
        bg-slate-950
        pt-16
        sm:pt-20
        lg:pt-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* =========================
            MAIN FOOTER
        ========================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12

            sm:gap-14

            md:grid-cols-2

            lg:grid-cols-[1.5fr_0.7fr_1fr]
            lg:gap-20
          "
        >
          {/* =========================
              BRAND
          ========================= */}

          <div className="lg:col-span-1">
            <motion.h2
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="
                text-3xl
                font-black
                tracking-tight
                bg-gradient-to-r
                from-white
                via-cyan-300
                to-indigo-400
                bg-clip-text
                text-transparent

                sm:text-4xl
              "
            >
              Pajar Fadilah
            </motion.h2>

            <p
              className="
                mt-2
                text-sm
                font-medium
                text-cyan-400

                sm:text-base
              "
            >
              Full Stack Developer
            </p>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-slate-400

                sm:mt-6
                sm:text-base
                sm:leading-8
              "
            >
              Saya senang membangun website modern, scalable, dan user friendly menggunakan teknologi web terbaru.
            </p>

            {/* Social Icons */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-3

                sm:mt-8
                sm:gap-4
              "
            >
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-900/70
                        text-slate-400
                        transition-all
                        duration-300

                        hover:border-cyan-400/60
                        hover:bg-cyan-400/10
                        hover:text-cyan-400

                        sm:h-12
                        sm:w-12
                        sm:rounded-2xl
                      "
                    >
                      <Icon size={19} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =========================
              NAVIGATION
          ========================= */}

          <div>
            <h3
              className="
                text-sm
                font-semibold
                text-white

                sm:text-base
              "
            >
              Navigation
            </h3>

            <div
              className="
                mt-5
                grid
                grid-cols-2
                gap-x-8
                gap-y-3

                sm:mt-6
                sm:grid-cols-1
                sm:gap-y-4
              "
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    flex
                    items-center
                    gap-1.5
                    text-sm
                    text-slate-400
                    transition-colors
                    duration-300

                    hover:text-cyan-400
                  "
                >
                  <span>{item.name}</span>

                  <ArrowUpRight
                    size={13}
                    className="
                      opacity-0
                      -translate-x-1
                      transition-all
                      duration-300

                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* =========================
              BUILT WITH
          ========================= */}

          <div>
            <h3
              className="
                text-sm
                font-semibold
                text-white

                sm:text-base
              "
            >
              Built With
            </h3>

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-2

                sm:mt-6
                sm:gap-3
              "
            >
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-slate-800
                    bg-slate-900/70
                    px-3
                    py-1.5
                    text-xs
                    text-slate-400
                    transition-all
                    duration-300

                    hover:border-cyan-400/30
                    hover:text-cyan-400

                    sm:px-4
                    sm:py-2
                    sm:text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM FOOTER
        ========================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-4
            border-t
            border-slate-800
            py-7
            text-center
            text-xs
            text-slate-500

            sm:mt-16
            sm:py-8
            sm:text-sm

            md:flex-row
            md:items-center
            md:justify-between
            md:text-left
          "
        >
          <p>© {new Date().getFullYear()} Fazar Fadillah. All rights reserved.</p>

          <p
            className="
              flex
              items-center
              justify-center
              gap-2

              md:justify-end
            "
          >
            Made with
            <Heart
              size={15}
              className="
                fill-red-500
                text-red-500
              "
            />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
