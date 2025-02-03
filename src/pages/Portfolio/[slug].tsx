import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react';

import Page from '../../components/Layout/Page';
import {portfolioItems} from '../../data/data';

const PortfolioDetail = React.memo(() => {  // ✅ Wrapped component with React.memo()
  const router = useRouter();
  const {slug} = router.query;

  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Page description="This project does not exist" title="Project Not Found">
        <p className="text-center text-white">Project not found</p>
      </Page>
    );
  }

  return (
    <Page description={project.description} title={project.title}>
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-white mb-6">{project.title}</h1>
        <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
          <Image alt={project.title} className="w-full h-auto" src={project.image} />
        </div>
        <p className="mt-4 text-lg text-gray-300">{project.description}</p>
        {project.url && (
          <a className="mt-4 text-blue-400 underline" href={project.url} rel="noopener noreferrer" target="_blank">
            Visit Project
          </a>
        )}
      </div>
    </Page>
  );
});

export default PortfolioDetail;
