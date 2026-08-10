'use client';

import AnimatedSection from '../ui/AnimatedSection';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-16
        sm:py-20
        lg:py-28
      "
    >
      <Container>
        <AnimatedSection>
          <SectionTitle title="My Projects" subtitle="Selected Works" />
        </AnimatedSection>

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6

            sm:mt-14
            sm:gap-8

            lg:grid-cols-2
            lg:gap-8
          "
        >
          {projects.map((project) => (
            <AnimatedSection key={project.id}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
