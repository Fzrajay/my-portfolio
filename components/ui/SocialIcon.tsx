'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

interface Props {
  icon: React.ElementType;
  href: string;
  label: string;
  download?: boolean;
}

export default function SocialIcon({ icon: Icon, href, label, download }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        rotate: -2,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        aria-label={label}
        className="
          group
          flex
          h-[78px]
          w-[78px]
          items-center
          justify-center
          rounded-[24px]
          border
          border-slate-800
          bg-slate-900/70
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400
          hover:bg-slate-800
          hover:shadow-[0_0_35px_rgba(34,211,238,.35)]
        "
      >
        <Icon
          size={32}
          className="
            text-slate-300
            transition-colors
            duration-300
            group-hover:text-cyan-400
          "
        />

        <span
          className="
          pointer-events-none
          absolute
          -bottom-10
          left-1/2
          -translate-x-1/2
          rounded-lg
          bg-slate-900
          px-3
          py-1
          text-xs
          opacity-0
          transition
          group-hover:opacity-100
          whitespace-nowrap
          "
        >
          {label}
        </span>
      </Link>
    </motion.div>
  );
}
