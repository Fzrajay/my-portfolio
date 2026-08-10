'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { GitPullRequest, ExternalLink } from 'lucide-react';

import Card from './Card';
import Badge from './Badge';
import ProjectCarousel from './ProjectCarousel';

import { Project } from '@/types/project';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="h-full"
    >
      <Card
        className="
          h-full
          overflow-hidden
          p-0
          border-slate-800
          transition-colors
          duration-300

          hover:border-cyan-400/30
        "
      >
        {/* =========================
            COVER CAROUSEL
        ========================= */}

        <ProjectCarousel images={project.gallery} title={project.title} />

        {/* =========================
            CONTENT
        ========================= */}

        <div
          className="
            space-y-4
            p-5

            sm:space-y-5
            sm:p-6

            lg:space-y-6
            lg:p-8
          "
        >
          {/* Featured */}

          {project.featured && (
            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-cyan-400

                sm:px-4
                sm:text-sm
              "
            >
              ⭐ Featured
            </span>
          )}

          {/* Title */}

          <h3
            className="
              text-xl
              font-bold
              leading-tight
              text-white

              sm:text-2xl
            "
          >
            {project.title}
          </h3>

          {/* Description */}

          <p
            className="
              text-sm
              leading-6
              text-slate-400

              sm:text-base
              sm:leading-7
            "
          >
            {project.description}
          </p>

          {/* Technologies */}

          <div
            className="
              flex
              flex-wrap
              gap-1.5

              sm:gap-2
            "
          >
            {project.technologies.map((tech) => (
              <Badge key={tech} text={tech} />
            ))}
          </div>

          {/* Actions */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
              pt-1

              sm:gap-5
              sm:pt-2
            "
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-10
                items-center
                gap-2
                rounded-xl
                border
                border-slate-800
                px-3
                py-2
                text-sm
                text-slate-300
                transition-all
                duration-300

                hover:border-cyan-400/40
                hover:bg-cyan-400/5
                hover:text-cyan-400

                sm:border-0
                sm:px-0
                sm:py-0
              "
            >
              <GitPullRequest size={17} />

              <span>GitHub</span>
            </Link>

            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-10
                items-center
                gap-2
                rounded-xl
                border
                border-slate-800
                px-3
                py-2
                text-sm
                text-slate-300
                transition-all
                duration-300

                hover:border-cyan-400/40
                hover:bg-cyan-400/5
                hover:text-cyan-400

                sm:border-0
                sm:px-0
                sm:py-0
              "
            >
              <ExternalLink size={17} />

              <span>Live Demo</span>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
