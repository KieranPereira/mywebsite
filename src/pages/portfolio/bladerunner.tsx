import Image from 'next/image';

import Page from '../../components/Layout/Page';
import Section from '../../components/Layout/Section';

const IMAGES = {
  hero: '/bladerunner/bladerunner-title.jpg',
  methodology: '/bladerunner/bladerunner-methodology.jpg',
  research: '/bladerunner/bladerunner-research.jpg',
  simscape: '/bladerunner/bladerunner-simscape.jpg',
  genetic: '/bladerunner/bladerunner-genetic.jpg',
  reinforcement: '/bladerunner/bladerunner-rl.jpg',
  results: '/bladerunner/bladerunner-results.jpg',
};

// const VIDEO = {
//   simulation: '/bladerunner/bladerunner-sim.mp4',
// };

const BladeRunnerPage = () => {
  return (
    <Page
      description="A deep dive into my quadrupedal running robot with bladed legs."
      title="BladeRunner: A Quadrupedal Running Robot"
    >
      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block fixed left-0 top-0 w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 shadow-lg z-20 pt-16 overflow-y-auto">
          <nav className="space-y-4">
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#overview">Project Overview</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#methodology">Methodology</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#research">Research & Development</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#simscape">MATLAB Simscape Implementation</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#genetic">Genetic Algorithm Optimisation</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#reinforcement">Reinforcement Learning Optimisation</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#results">Final Results</a>
          </nav>
        </aside>

        <main className="w-full md:w-3/5 md:ml-[20%] md:mr-[20%]">
          <Section className="bg-white text-gray-900" sectionId="overview" sectionTitle="Project Overview">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">BladeRunner: A Quadrupedal Running Robot</h2>
              <p className="text-gray-700 leading-relaxed">
                This project explores the use of **J-shaped running blades** to enhance the energy efficiency and speed of quadrupedal robots for applications such as **search and rescue, reconnaissance, and autonomous delivery**.
              </p>
              <Image alt="BladeRunner Overview" className="rounded-lg shadow-lg mt-4 mx-auto" height={400} src={IMAGES.hero} width={600} />
            </div>
          </Section>

          <Section className="bg-gray-50 text-gray-900" sectionId="methodology" sectionTitle="Methodology">
            <Image alt="Methodology" className="mt-4 mx-auto" height={400} src={IMAGES.methodology} width={600} />
          </Section>

          <Section className="bg-white text-gray-900" sectionId="research" sectionTitle="Research & Development">
            <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Running Blade Design</h2>
                <p>J-shaped blades mimic **cheetah biomechanics**, improving energy efficiency and running speed.</p>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Gait Cycle Analysis</h2>
                <p>Inspired by **cheetahs and dogs**, the robot optimizes diagonal synchronization for speed and stability.</p>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Passive Knee Joint</h2>
                <p>Designed to **reduce energy consumption**, locking under external forces to optimize movement.</p>
              </div>
            </div>
          </Section>

          <Section className="bg-white text-gray-900" sectionId="simscape" sectionTitle="MATLAB Simscape Implementation">
            <Image alt="MATLAB Simscape" className="mt-4 mx-auto" height={400} src={IMAGES.simscape} width={600} />
          </Section>

          <Section className="bg-gray-50 text-gray-900" sectionId="genetic" sectionTitle="Genetic Algorithm Optimisation">
            <Image alt="Genetic Algorithm" className="mt-4 mx-auto" height={400} src={IMAGES.genetic} width={600} />
          </Section>

          <Section className="bg-white text-gray-900" sectionId="reinforcement" sectionTitle="Reinforcement Learning Optimisation">
            <Image alt="Reinforcement Learning" className="mt-4 mx-auto" height={400} src={IMAGES.reinforcement} width={600} />
          </Section>

          <Section className="bg-gray-50 text-gray-900" sectionId="results" sectionTitle="Final Results">
            <Image alt="Final Results" className="mt-4 mx-auto" height={400} src={IMAGES.results} width={600} />
          </Section>
        </main>
      </div>
    </Page>
  );
};

export default BladeRunnerPage;
