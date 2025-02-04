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

// Ensure unique slugs by normalizing them to lowercase
export const getStaticPaths: GetStaticPaths = async () => {
  // Normalize all slugs to lowercase
  const allSlugs = portfolioItems.map((item) => item.slug.toLowerCase());
  // Remove duplicates using a Set
  const uniqueSlugs = [...new Set(allSlugs)];
  // Map into { params: { slug } } format
  const paths = uniqueSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking', // Allows on-demand generation for unknown slugs
  };
};

// Properly typed getStaticProps that also normalizes the slug
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
