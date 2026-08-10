'use client';

import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

import SocialIcon from './SocialIcon';

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      {/* Availability */}

      <div
        className="
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-emerald-500/20
          bg-emerald-500/10
          px-3
          py-1.5

          sm:px-4
          sm:py-2
        "
      >
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

        <span className="text-xs text-emerald-400 sm:text-sm">Available for Internship</span>
      </div>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-3xl
          font-bold
          leading-[1.15]

          sm:mt-8
          sm:text-4xl

          lg:text-5xl
        "
      >
        Let's Build
        <br />
        Something
        <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent"> Together</span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-4
          max-w-md
          text-sm
          leading-7
          text-slate-400

          sm:mt-6
          sm:text-base
          sm:leading-8
        "
      >
        Saya terbuka untuk internship, freelance, maupun project kolaborasi. Mari berdiskusi mengenai ide Anda.
      </p>

      {/* Social Icons */}
      <div className="mt-12 w-fit">
        <div className="grid grid-cols-3 gap-10 sm:gap-14">
          <SocialIcon icon={FaGithub} href="https://github.com/Fzrajay" label="GitHub" />

          <SocialIcon icon={FaLinkedin} href="https://www.linkedin.com/in/pajar-fadilah-3540a1284?utm_source=share_via&utm_content=profile&utm_medium=member_android" label="LinkedIn" />

          <SocialIcon icon={FaInstagram} href="https://www.instagram.com/pajar_fadillah?igsh=eHlnMjMzdjRzNW0x" label="Instagram" />

          <SocialIcon icon={Mail} href="https://mail.google.com/mail/?view=cm&fs=1&to=afajar966@gmail.com" label="Email" />

          <SocialIcon icon={FaWhatsapp} href="https://wa.me/+6285163135745" label="WhatsApp" />

          <SocialIcon icon={Download} href="/cv/Cv_Pajar_Fadilah.pdf" label="Download CV" download />
        </div>
      </div>
    </div>
  );
}
