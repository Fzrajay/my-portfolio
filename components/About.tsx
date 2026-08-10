'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-12
        sm:py-20
        lg:py-28
      "
    >
      {/* =========================
          BACKGROUND GLOW
      ========================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/4
          -z-10
          h-[250px]
          w-[250px]
          rounded-full
          bg-cyan-500/5
          blur-[100px]
          sm:h-[350px]
          sm:w-[350px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          bottom-0
          -z-10
          h-[250px]
          w-[250px]
          rounded-full
          bg-indigo-500/5
          blur-[100px]
          sm:h-[350px]
          sm:w-[350px]
        "
      />

      <Container>
        {/* =========================
            SECTION TITLE
        ========================= */}
        <SectionTitle title="About Me" subtitle="INTRODUCTION" description="Mengenal lebih dekat tentang saya, fokus pengembangan, dan teknologi yang saya gunakan." />

        {/* =========================
            WRAPPER UTAMA (SATU WADAH)
        ========================= */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }} className="mt-8 block sm:mt-12">
          {/* FOTO PROFIL (FLOAT LEFT SETENGAH LEBAR DI MOBILE) */}
          <div
            className="
              relative
              float-left
              mr-3.5
              mb-2
              w-[45%]
              max-w-[150px]
              sm:mr-6
              sm:mb-4
              sm:w-[38%]
              sm:max-w-[260px]
              lg:mr-8
              lg:mb-4
              lg:w-[320px]
              lg:max-w-none
            "
          >
            {/* Glow Tipis di Belakang Foto */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-1.5
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500/20
                to-indigo-500/20
                blur-md
                sm:-inset-2
                sm:rounded-3xl
                sm:blur-xl
              "
            />

            {/* Frame Foto Murni */}
            <div className="relative overflow-hidden rounded-xl border border-slate-800 shadow-xl sm:rounded-2xl">
              <Image
                src="/images/profil2.jpeg"
                alt="Fazar Fadillah"
                width={400}
                height={500}
                priority
                className="
                  h-auto
                  w-full
                  object-cover
                  object-center
                  aspect-[3/4]
                "
              />

              {/* Overlay Gradient Halus */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950/20
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>

          {/* BADGE / LABEL */}
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 sm:mb-3 sm:gap-2 sm:px-3.5 sm:py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 sm:h-2 sm:w-2" />
            <span className="text-[11px] font-medium text-cyan-400 sm:text-xs lg:text-sm">Information Systems Student</span>
          </div>

          {/* HEADING */}
          <h2 className="text-base font-bold leading-tight tracking-tight text-white sm:text-2xl lg:text-4xl">
            Membangun solusi digital <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">yang bermakna.</span>
          </h2>

          {/* PARAGRAF 1 (FONT 12px DI MOBILE) */}
          <p className="mt-2 text-justify text-[12px] leading-relaxed text-slate-300 sm:mt-4 sm:text-base sm:leading-8">
            Saya merupakan mahasiswa Program Studi Sistem Informasi di Universitas Pamulang yang memiliki ketertarikan pada pengembangan aplikasi web modern, Business Intelligence, serta visualisasi data.
          </p>

          {/* PARAGRAF 2 */}
          <p className="mt-2 text-justify text-[12px] leading-relaxed text-slate-300 sm:mt-3 sm:text-base sm:leading-8">
            Saya senang membangun solusi digital yang tidak hanya memiliki tampilan menarik, tetapi juga mampu menyelesaikan permasalahan bisnis secara efektif. Dalam proses pengembangan, saya memperhatikan aspek fungsionalitas,
            responsivitas, serta pengalaman pengguna.
          </p>

          {/* PARAGRAF 3 */}
          <p className="mt-2 text-justify text-[12px] leading-relaxed text-slate-300 sm:mt-3 sm:text-base sm:leading-8">
            Teknologi yang saya gunakan meliputi <span className="font-medium text-cyan-400">Laravel</span>, <span className="font-medium text-indigo-400">Next.js</span>, React, TypeScript, MySQL, serta tools visualisasi seperti Power BI,
            Tableau, dan Metabase.
          </p>

          {/* CLEARFIX AGAR KOTAK QUICK INFO RATA DI BAWAH TEKS */}
          <div className="clear-both" />

          {/* QUICK INFO CARDS */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-4">
              <p className="text-[10px] text-slate-500 sm:text-xs">Focus</p>
              <p className="mt-0.5 text-xs font-semibold text-slate-200 sm:mt-1 sm:text-base">Web Development</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 sm:p-4">
              <p className="text-[10px] text-slate-500 sm:text-xs">Interest</p>
              <p className="mt-0.5 text-xs font-semibold text-slate-200 sm:mt-1 sm:text-base">Data Visualization</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
