import { useRouter } from 'next/router';
import Image from 'next/image';
import { portfolioItems } from '../../data/data';
import Page from '../../components/Layout/Page';

const PortfolioDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return <Page title="Project Not Found" description="This project does not exist">
      <p className="text-center text-white">Project not found</p>
    </Page>;
  }

  return (
    <Page title={project.title} description={project.description}>
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-white mb-6">{project.title}</h1>
        <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
          <Image src={project.image} alt={project.title} className="w-full h-auto" />
        </div>
        <p className="mt-4 text-lg text-gray-300">{project.description}</p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-400 underline">
            Visit Project
          </a>
        )}
      </div>
    </Page>
  );
};

export default PortfolioDetail;
