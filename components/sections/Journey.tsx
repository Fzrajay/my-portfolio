'use client';

import AnimatedSection from '../ui/AnimatedSection';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import TimelineCard from '../ui/TimelineCard';

import { journey } from '@/data/journey';

export default function Journey() {
  return (
    <section
      id="journey"
      className="
        py-16
        sm:py-20
        lg:py-28
      "
    >
      <Container>
        <AnimatedSection>
          <SectionTitle title="My Journey" subtitle="Experience & Education" />
        </AnimatedSection>

        {/* =========================
            TIMELINE
        ========================= */}

        <div
          className="
            relative
            mt-10

            sm:mt-14

            lg:mt-20
          "
        >
          {/* =========================
              VERTICAL LINE
              Desktop Only
          ========================= */}

          <div
            className="
              absolute
              bottom-0
              left-6
              top-0
              hidden
              w-[2px]
              bg-gradient-to-b
              from-cyan-500
              via-slate-700
              to-transparent
              md:block
            "
          />

          {/* =========================
              JOURNEY ITEMS
          ========================= */}

          <div
            className="
              space-y-6

              sm:space-y-8

              md:space-y-12
            "
          >
            {journey.map((item) => (
              <div
                key={item.id}
                className="
                  relative

                  md:pl-20
                "
              >
                {/* Timeline Dot - Desktop */}

                <div
                  className="
                    absolute
                    left-[17px]
                    top-10
                    hidden
                    h-5
                    w-5
                    rounded-full
                    border-4
                    border-slate-950
                    bg-cyan-400
                    shadow-[0_0_25px_rgba(34,211,238,.7)]
                    md:block
                  "
                />

                {/* Card */}

                <TimelineCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
