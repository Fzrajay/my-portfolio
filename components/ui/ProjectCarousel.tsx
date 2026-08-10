'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Props {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length, paused]);

  if (!images.length) {
    return null;
  }

  return (
    <div
      className="
        group
        relative
        aspect-video
        w-full
        overflow-hidden
        bg-slate-900

        sm:rounded-t-2xl
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      aria-label={`${title} project preview`}
    >
      {/* =========================
          IMAGE
      ========================= */}

      <motion.div
        key={index}
        initial={{
          opacity: 0,
          scale: 1.02,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className="absolute inset-0"
      >
        <Image
          src={images[index]}
          alt={`${title} preview ${index + 1}`}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            50vw
          "
          className="
            object-cover
            transition-transform
            duration-700

            group-hover:scale-105
          "
          priority={index === 0}
        />
      </motion.div>

      {/* =========================
          GRADIENT
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-slate-950/70
          to-transparent
        "
      />

      {/* =========================
          INDICATORS
      ========================= */}

      {images.length > 1 && (
        <div
          className="
            absolute
            bottom-3
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-1.5

            sm:bottom-4
            sm:gap-2
          "
        >
          {images.map((_, i) => (
            <div
              key={i}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${i === index ? 'w-5 bg-cyan-400 sm:w-6' : 'w-1.5 bg-white/40'}
              `}
            />
          ))}
        </div>
      )}

      {/* =========================
          MOBILE IMAGE COUNTER
      ========================= */}

      {images.length > 1 && (
        <div
          className="
            absolute
            right-3
            top-3
            rounded-full
            border
            border-white/10
            bg-black/40
            px-2.5
            py-1
            text-[10px]
            text-white/80
            backdrop-blur-md

            sm:right-4
            sm:top-4
            sm:text-xs
          "
        >
          {index + 1}/{images.length}
        </div>
      )}
    </div>
  );
}
