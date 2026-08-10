'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[calc(100vh-4rem)]
        overflow-hidden
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =========================
          BACKGROUND GLOW
      ========================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          -z-10
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[100px]

          sm:h-[400px]
          sm:w-[400px]

          lg:left-3/4
          lg:top-1/2
          lg:h-[500px]
          lg:w-[500px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          -z-10
          h-[250px]
          w-[250px]
          rounded-full
          bg-indigo-500/10
          blur-[100px]

          sm:h-[350px]
          sm:w-[350px]
        "
      />

      {/* =========================
          CONTAINER
      ========================= */}

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            items-center
            gap-14

            md:gap-16
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
          "
        >
          {/* =========================
              PROFILE IMAGE (Dipindah ke atas dalam struktur HTML)
              order-1 pada Mobile (Atas)
              lg:order-2 pada Desktop (Kanan)
          ========================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="
              order-1
              flex
              justify-center

              lg:order-2
              lg:justify-end
            "
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="
                  absolute
                  -inset-4
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400/30
                  to-indigo-500/30
                  blur-2xl
                  opacity-70
                "
              />

              {/* Secondary Glow */}
              <div
                className="
                  absolute
                  -inset-8
                  rounded-full
                  bg-cyan-400/10
                  blur-3xl
                "
              />

              {/* Profile */}
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="relative">
                <Image
                  src="/images/profil.jpeg"
                  alt="Pajar Fadilah"
                  width={480}
                  height={480}
                  priority
                  className="
                    relative
                    z-10
                    h-[200px]
                    w-[200px]
                    rounded-full
                    border-4
                    border-cyan-400
                    object-cover
                    object-center
                    shadow-2xl
                    shadow-cyan-500/20

                    sm:h-[270px]
                    sm:w-[270px]

                    md:h-[320px]
                    md:w-[320px]

                    lg:h-[380px]
                    lg:w-[380px]

                    xl:h-[300px]
                    xl:w-[300px]
                  "
                />

                {/* Ring */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-2
                    z-0
                    rounded-full
                    border
                    border-cyan-400/20
                  "
                />
              </motion.div>
            </div>
          </motion.div>

          {/* =========================
              TEXT CONTENT
              order-2 pada Mobile (Bawah)
              lg:order-1 pada Desktop (Kiri)
          ========================= */}

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="order-2 text-left lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-4
                py-2
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-cyan-400
                "
              />

              <span className="text-xs font-medium text-cyan-400 sm:text-sm">Hello, Saya</span>
            </motion.div>

            {/* Name */}
            <h1
              className="
                text-5xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white

                sm:text-6xl

                md:text-7xl

                lg:text-7xl

                xl:text-8xl
              "
            >
              Pajar
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-cyan-300
                  to-indigo-500
                  bg-clip-text
                  text-transparent
                "
              >
                Fadilah
              </span>
            </h1>

            {/* Profession */}
            <h2
              className="
                mt-5
                text-xl
                font-medium
                text-slate-300

                sm:text-2xl

                md:text-3xl
              "
            >
              Full Stack Developer
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-slate-400

                sm:text-base
                sm:leading-8

                lg:text-lg
              "
            >
              Mahasiswa Sistem Informasi yang memiliki minat pada pengembangan website modern menggunakan <span className="font-medium text-cyan-400">Laravel</span>, <span className="font-medium text-indigo-400">Next.js</span>, React, dan
              MySQL.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-8
                flex
                flex-col
                justify-start
                gap-3

                sm:flex-row
              "
            >
              <Link
                href="#projects"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-400
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-950
                  shadow-lg
                  shadow-cyan-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-cyan-300
                  hover:shadow-cyan-400/30

                  sm:px-7
                "
              >
                Lihat Project
              </Link>

              <Link
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900/40
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-slate-200
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/60
                  hover:text-cyan-400

                  sm:px-7
                "
              >
                Hubungi Saya
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
