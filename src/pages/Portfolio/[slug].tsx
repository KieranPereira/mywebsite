import React from 'react';
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from 'next';
import Image from 'next/image';
import Page from '../../components/Layout/Page';
import {portfolioItems} from '../../data/data';

// 1) Define the shape of your project data (optional, but recommended)
type ProjectType = {
  slug: string;
  title: string;
  description: string;
  image: string;
  url?: string;
};

// 2) Define props for your component
type PortfolioProps = {
  project: ProjectType;
};

// 3) The component wrapped with React.memo
const PortfolioDetail = React.memo(
  ({project}: InferGetStaticPropsType<typeof getStaticProps>) => {
    // If we somehow have no project (edge cases), you can handle it:
    if (!project) {
      return (
        <Page title="Project Not Found" description="This project does not exist">
          <p className="text-center text-white">Project not found</p>
        </Page>
      );
    }

    return (
      <Page title={project.title} description={project.description}>
        <div className="min-h-screen bg-neutral-900 flex flex-col items-center p-6">
          <h1 className="text-3xl font-bold text-white mb-6">{project.title}</h1>

          <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
            {/* 
              If you have the width/height in the data, pass them here 
              so Next can optimize the image. Otherwise, you can use layout="responsive". 
            */}
            <Image
              alt={project.title}
              className="w-full h-auto"
              src={project.image}
              width={1200} 
              height={800}
            />
          </div>

          <p className="mt-4 text-lg text-gray-300">{project.description}</p>

          {project.url && (
            <a
              className="mt-4 text-blue-400 underline"
              href={project.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              Visit Project
            </a>
          )}
        </div>
      </Page>
    );
  }
);

export default PortfolioDetail;

/**
 * 4) getStaticPaths: Build-time generation of pages for each slug
 */
export const getStaticPaths: GetStaticPaths = async () => {
  // Create an array of { params: { slug: ... } } from your portfolio data
  const paths = portfolioItems.map((item) => ({
    params: {slug: item.slug},
  }));

  return {
    paths,         // e.g. [{ params: { slug: 'capstone' } }, { params: { slug: 'my-other-project' } }]
    fallback: false // or 'blocking' if you want fallback pages
  };
};

/**
 * 5) getStaticProps: Provide 'project' as a prop, based on the slug
 */
export const getStaticProps: GetStaticProps<PortfolioProps> = async ({params}) => {
  // If slug is missing, show a 404
  if (!params?.slug) {
    return {notFound: true};
  }

  // Find the matching project
  const slug = params.slug as string;
  const project = portfolioItems.find((item) => item.slug === slug);

  // If project is not found, show a 404
  if (!project) {
    return {notFound: true};
  }

  // Pass project data to the component
  return {
    props: {project},
  };
};
