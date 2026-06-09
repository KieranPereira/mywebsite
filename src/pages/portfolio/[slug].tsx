import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Link from 'next/link';
import {memo} from 'react';

import Page from '../../components/Layout/Page';
import DeepDive from '../../components/Project/DeepDive';
import ProjectBrief from '../../components/Project/ProjectBrief';
import ProjectHero from '../../components/Project/ProjectHero';
import {SectionId} from '../../data/data';
import {getProjectBySlug, projectSlugs} from '../../data/projects';

interface ProjectPageProps {
  slug: string;
}

/**
 * Single dynamic route that renders any non-external project from data.
 * Replaces the old hardcoded capstone/opg/bladerunner/UCLCapstone pages.
 *
 * Note: the project (including JSX `deepDive` bodies) is looked up from the
 * imported data here rather than passed through getStaticProps, since JSX
 * cannot be JSON-serialized.
 */
const ProjectPage: NextPage<ProjectPageProps> = memo(({slug}) => {
  const project = getProjectBySlug(slug);

  if (!project) return null;

  return (
    <Page description={project.caption} title={`${project.title} — Kieran Pereira`}>
      <div className="min-h-screen bg-neutral-950 pt-20">
        <div className="mx-auto max-w-screen-lg px-4 py-10 lg:px-8">
          <Link
            className="mb-8 inline-flex items-center gap-x-2 text-sm font-medium text-neutral-400 transition-colors hover:text-accent-500"
            href={`/#${SectionId.Projects}`}>
            <ArrowLeftIcon className="h-4 w-4" />
            Back to projects
          </Link>

          <ProjectHero project={project} />
          <ProjectBrief project={project} />
          {project.deepDive && project.deepDive.length > 0 && <DeepDive sections={project.deepDive} />}
        </div>
      </div>
    </Page>
  );
});

ProjectPage.displayName = 'ProjectPage';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projectSlugs.map(slug => ({params: {slug}})),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({params}) => {
  const slug = params?.slug as string;
  if (!getProjectBySlug(slug)) {
    return {notFound: true};
  }
  return {props: {slug}};
};

export default ProjectPage;
