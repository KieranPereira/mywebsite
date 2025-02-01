import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { portfolioItems } from '../../data/data';
import { PortfolioItem } from '../../data/dataDef';

interface PortfolioPageProps {
  project: PortfolioItem;
}

const PortfolioPage = ({ project }: PortfolioPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <Image src={project.image} alt={project.title} width={800} height={500} className="rounded-lg mb-6" />
      <p className="text-lg">{project.description}</p>
      <a href={project.url} target="_blank" className="block mt-4 text-blue-400 hover:underline">
        View Project
      </a>
    </div>
  );
};

export default PortfolioPage;

// **Generate Static Paths for Portfolio Items**
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = portfolioItems.map((item) => ({
      params: { slug: item.slug }, // ✅ Uses pre-defined slug
    }));
    return { paths, fallback: true };
  };
  
// **Fetch Data for Each Project**
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = portfolioItems.find((item) => item.slug === params?.slug);
  
    if (!project) {
      return { notFound: true };
    }
  
    return { props: { project } };
  };
  