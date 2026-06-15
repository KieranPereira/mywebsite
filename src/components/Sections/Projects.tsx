import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import {projects} from '../../data/projects';
import Section from '../Layout/Section';
import ProjectCard from '../Project/ProjectCard';
import SectionHeading from '../UI/SectionHeading';

/**
 * Homepage centerpiece: the prominent grid of project cards (data-driven).
 */
const Projects: FC = memo(() => (
  <Section className="bg-neutral-900" sectionId={SectionId.Projects}>
    <div className="flex flex-col gap-y-10">
      <SectionHeading
        light
        subtitle="Robotics, AI and embedded systems. Click any project for the one-screen brief."
        title="Selected work"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} priority={index === 0} project={project} />
        ))}
      </div>
    </div>
  </Section>
));

Projects.displayName = 'Projects';
export default Projects;
