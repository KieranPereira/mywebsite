import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData
import React from 'react';
import Page from '../../components/Layout/Page';
import { portfolioItems } from '../../data/data';

// Define the shape of a PortfolioItem
type PortfolioItem = {
  slug: string;
  title: string;
  description: string;
  image: string | StaticImageData; // Allows both string URLs and StaticImageData
  url?: string;
};

// Define Props
type PortfolioProps = {
  project: PortfolioItem;
};

// The PortfolioDetail component wrapped with React.memo
const PortfolioDetail = React.memo(
  ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
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

// Updated getStaticPaths: Filter out duplicate slugs
export const getStaticPaths: GetStaticPaths = async () => {
  // Filter portfolioItems to ensure each normalized slug is unique
  const uniquePortfolioItems = portfolioItems.filter(
    (project, index, self) =>
      index === self.findIndex(
        (item) => item.slug.toLowerCase() === project.slug.toLowerCase()
      )
  );

  // Map the unique items to paths, normalizing slugs to lowercase
  const paths = uniquePortfolioItems.map((project) => ({
    params: { slug: project.slug.toLowerCase() },
  }));

  return {
    paths,
    fallback: 'blocking', // Allows pages to be generated on demand if not pre-rendered
  };
};

// Properly typed getStaticProps that normalizes the slug
export const getStaticProps: GetStaticProps<PortfolioProps> = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  // Normalize the slug from the URL to lowercase
  const slug = (params.slug as string).toLowerCase();
  // Find the project by comparing lowercased slugs
  const project = portfolioItems.find(
    (item) => item.slug.toLowerCase() === slug
  );

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
};
