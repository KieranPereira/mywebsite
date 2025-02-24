import Image from 'next/image';
import Page from '../../components/Layout/Page';
import Section from '../../components/Layout/Section';

// Define all assets at the start
const IMAGES = {
  hero: '/bladerunner/bladerunner-title.jpg',
  methodology: '/bladerunner/bladerunner-methodology.jpg',
  research: '/bladerunner/bladerunner-research.jpg',
  simscape: '/bladerunner/bladerunner-simscape.jpg',
  genetic: '/bladerunner/bladerunner-genetic.jpg',
  reinforcement: '/bladerunner/bladerunner-rl.jpg',
  results: '/bladerunner/bladerunner-results.jpg',
};

const BladeRunnerPage = () => {
  return (
    <Page
      description="A detailed look at my quadrupedal running robot project featuring advanced simulation, optimization, and control system techniques."
      title="BladeRunner Project"
    >
      <div className="flex flex-col md:flex-row">
        {/* LEFT SIDEBAR (Navigation) */}
        <aside className="hidden md:block fixed left-0 top-0 w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 shadow-lg z-20 pt-16 overflow-y-auto">
          <nav className="space-y-4">
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#blade-runner">BladeRunner Intro</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#skills">Skills &amp; Tools</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#overview">Project Overview</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#methodology">Methodology</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#research">Research and Development</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#simscape">MATLAB Simscape Implementation</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#genetic">Genetic Algorithm Optimization</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#reinforcement">Reinforcement Learning Optimization</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#results">Final Results</a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#references">References and Appendix</a>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="w-full md:w-3/5 md:ml-[20%] md:mr-[20%]">
          {/* Project Introduction with Sticky Title Section */}
          <Section className="bg-white text-gray-900" sectionId="blade-runner" sectionTitle="">
            <div className="flex flex-col md:flex-row min-h-screen">
              {/* Left column: Sticky Title & Subtitle */}
              <div className="md:w-1/2 sticky top-0 h-screen flex flex-col justify-center p-6">
                <h1 className="text-4xl font-bold mb-2">My BladeRunner Project</h1>
                <h2 className="text-2xl font-semibold mb-4">A Quadrupedal Running Robot</h2>
                <p className="text-gray-700 leading-relaxed">
                  I am passionate about robotics and simulation. In this project, I designed and simulated a quadrupedal running robot equipped with innovative running blades inspired by high-performance athletes and the biomechanics of cheetahs. This project showcases my skills in advanced simulation, optimization, and control system design.
                </p>
              </div>
              {/* Right column: Image */}
              <div className="md:w-1/2 relative h-screen">
                <Image
                  alt="BladeRunner Project Title"
                  className="absolute inset-0 mx-auto"
                  fill
                  priority
                  src={IMAGES.hero}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </Section>

          {/* Section: Skills & Tools */}
          <Section className="bg-gray-50 text-gray-900" sectionId="skills" sectionTitle="Skills &amp; Tools">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Core Expertise</h2>
              <p className="leading-relaxed mb-4">
                Throughout this project, I have applied a range of skills and tools to design, simulate, and optimize my quadrupedal running robot.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Programming:</strong> JavaScript, React, MATLAB
                </li>
                <li>
                  <strong>Simulation Tools:</strong> MATLAB Simscape Multibody, Simulink
                </li>
                <li>
                  <strong>Optimization Techniques:</strong> Genetic Algorithms, Reinforcement Learning (DDPG)
                </li>
                <li>
                  <strong>Design &amp; Modeling:</strong> CAD, Onshape, 3D Rendering
                </li>
                <li>
                  <strong>Control Systems:</strong> Dynamic System Modeling, Feedback Control, Sensor Integration
                </li>
              </ul>
            </div>
          </Section>

          {/* Decorative Divider */}
          <div className="w-full h-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900" />

          {/* Project Overview */}
          <Section className="bg-white text-gray-900" sectionId="overview" sectionTitle="Project Overview">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Introduction and Motivation</h2>
              <p className="text-gray-700 leading-relaxed">
                I embarked on the BladeRunner project to explore the integration of running blades into a quadrupedal robot. Inspired by the performance of Paralympic athletes and the natural biomechanics of cheetahs, I aimed to develop a robot that is both fast and energy efficient. My goal was to push the boundaries of robotic locomotion and demonstrate innovative simulation and optimization techniques.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By combining advanced mechanical design with high-fidelity simulations, I addressed key challenges such as dynamic stability, energy return, and optimal gait synchronization. This project reflects my commitment to solving complex engineering problems through a blend of theory and practical application.
              </p>
              <Image
                alt="BladeRunner Overview"
                className="rounded-lg shadow-lg mt-4 mx-auto"
                height={400}
                src={IMAGES.hero}
                width={600}
              />
            </div>
          </Section>

          {/* Methodology */}
          <Section className="bg-gray-50 text-gray-900" sectionId="methodology" sectionTitle="Methodology">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Simulation Setup and System Design</h2>
              <p className="text-gray-700 leading-relaxed">
                I adopted a simulation-first approach to validate my design concepts before committing to hardware development. I began by defining the geometric parameters of my quadrupedal robot and designing running blades with a J-shaped profile, chosen for their superior energy return and ground clearance. The design was modeled using advanced CAD tools and then imported into MATLAB Simscape Multibody. This allowed me to simulate joint dynamics, evaluate ground reaction forces, and analyze the energy storage capabilities of the blades.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I also integrated a passive knee mechanism in the rear legs. This mechanism locks the knee during ground contact, reducing energy consumption and enhancing stability. Through iterative simulation, I was able to refine the gait cycle and optimize the robot’s performance.
              </p>
              <Image
                alt="Methodology"
                className="mt-4 mx-auto"
                height={400}
                src={IMAGES.methodology}
                width={600}
              />
            </div>
          </Section>

          {/* Research and Development */}
          <Section className="bg-white text-gray-900" sectionId="research" sectionTitle="Research and Development">
            <div className="max-w-5xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Comprehensive Research and Design Considerations</h2>
              <p className="text-gray-700 leading-relaxed">
                My research began with an extensive literature review to understand the performance characteristics of various running blade designs. I discovered that J-shaped blades offer a faster energy return and higher speed compared to other configurations. I also studied the gait cycles of cheetahs and dogs to derive insights for developing an optimal gait.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I incorporated advanced simulation techniques and mathematical modeling to fine-tune joint coordination and energy efficiency. This phase was essential to ensure that the dynamic performance of my robot would be both reliable and efficient.
              </p>
            </div>
          </Section>

          {/* MATLAB Simscape Implementation */}
          <Section className="bg-gray-50 text-gray-900" sectionId="simscape" sectionTitle="MATLAB Simscape Implementation">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Advanced Simulation with MATLAB Simscape</h2>
              <p className="text-gray-700 leading-relaxed">
                I utilized MATLAB Simscape Multibody to construct a high-fidelity simulation model of my BladeRunner robot. This platform enabled me to accurately model the interactions between joints, limbs, and the running blades, while analyzing physical parameters such as mass distribution, friction, and joint stiffness.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By leveraging additional toolboxes like Simulink and the Physical Modeling Toolbox, I performed dynamic analyses and validated the performance of the passive knee mechanism. This comprehensive simulation approach allowed me to iteratively refine the gait cycle and ensure the model closely mirrored real-world dynamics.
              </p>
              <Image
                alt="MATLAB Simscape"
                className="mt-4 mx-auto"
                height={400}
                src={IMAGES.simscape}
                width={600}
              />
            </div>
          </Section>

          {/* Genetic Algorithm Optimization */}
          <Section className="bg-white text-gray-900" sectionId="genetic" sectionTitle="Genetic Algorithm Optimization">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Optimizing Gait Cycles with Genetic Algorithms</h2>
              <p className="text-gray-700 leading-relaxed">
                To develop an optimal gait cycle, I implemented a genetic algorithm that simulated a population of candidate solutions. Each candidate represented a unique combination of joint angles, stride timings, and phase offsets. I crafted a reward function that measured forward displacement while penalizing lateral deviations and abrupt joint movements.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Starting from a baseline gait cycle derived from literature, the genetic algorithm evolved a mutated population through successive iterations. This process led to significant improvements in both forward velocity and overall stability.
              </p>
              <Image
                alt="Genetic Algorithm"
                className="mt-4 mx-auto"
                height={400}
                src={IMAGES.genetic}
                width={600}
              />
            </div>
          </Section>

          {/* Reinforcement Learning Optimization */}
          <Section className="bg-gray-50 text-gray-900" sectionId="reinforcement" sectionTitle="Reinforcement Learning Optimization">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Enhancing Performance through Reinforcement Learning</h2>
              <p className="text-gray-700 leading-relaxed">
                In addition to genetic algorithms, I applied reinforcement learning to dynamically refine the control policy. I defined the system's state using 44 normalized variables, including joint angles, body orientation, and ground reaction forces. These inputs were processed by an actor network that generated continuous torque outputs for each joint.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Using an actor-critic framework, the reinforcement learning model continuously adjusted the motor torques based on real-time feedback. I introduced custom penalty parameters to discourage abrupt joint movements and excessive ground contact, resulting in a smoother and more energy-efficient gait.
              </p>
              <Image
                alt="Reinforcement Learning"
                className="mt-4 mx-auto"
                height={400}
                src={IMAGES.reinforcement}
                width={600}
              />
            </div>
          </Section>

          {/* Final Results */}
          <Section className="bg-white text-gray-900" sectionId="results" sectionTitle="Final Results">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Conclusive Analysis and Achievements</h2>
              <p className="text-gray-700 leading-relaxed">
                The integration of genetic algorithms and reinforcement learning resulted in significant improvements in my quadruped's locomotion. My optimized gait cycle enabled the robot to cover 23 meters in 10 seconds while maintaining exceptional stability and energy efficiency. The final motion profile exhibited smooth transitions and reduced mechanical strain.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This project is a testament to my ability to merge advanced simulation techniques, evolutionary optimization, and machine learning to solve complex engineering challenges. It provides a robust framework for future development in robotic locomotion.
              </p>
              <Image
                alt="Final Results"
                className="mt-4 mx-auto"
                height={400}
                src={IMAGES.results}
                width={600}
              />
            </div>
          </Section>

          {/* References and Appendix */}
          <Section className="bg-gray-50 text-gray-900" sectionId="references" sectionTitle="References and Appendix">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">References and Supplementary Materials</h2>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed">
                <li>
                  Taboga P, Beck ON, Grabowski AM (2020). This study examines the influence of prosthetic shape on maximum speed in sprinters with bilateral transtibial amputations. 
                  <a href="https://doi.org/10.1371/journal.pone.0229035" className="text-blue-600 hover:underline">https://doi.org/10.1371/journal.pone.0229035</a>
                </li>
                <li className="mt-2">
                  Y. M. Shabana et al. (2022). Design and simulation of prosthetic running blade using functionality graded materials. 
                  <a href="https://doi.org/10.1109/NILES56402.2022.9942368" className="text-blue-600 hover:underline">https://doi.org/10.1109/NILES56402.2022.9942368</a>
                </li>
                <li className="mt-2">
                  Choi J. (2021). Multi-phase joint-angle trajectory generation inspired by canine motion for quadruped robot control. Sensors, 21(19), 6366. 
                  <a href="https://doi.org/10.3390/s21196366" className="text-blue-600 hover:underline">https://doi.org/10.3390/s21196366</a>
                </li>
                <li className="mt-2">
                  Zhang, X., Zhao, C., Xu, Z., and Huang, S. (2022). Mechanism analysis of cheetah high-speed locomotion based on digital reconstruction. Biomimetic Intelligence and Robotics, 2(1), 100033. 
                  <a href="https://doi.org/10.1016/j.birob.2021.100033" className="text-blue-600 hover:underline">https://doi.org/10.1016/j.birob.2021.100033</a>
                </li>
              </ol>
              <p className="text-gray-700 leading-relaxed mt-4">
                Supplementary materials, including my detailed report and presentation, offer further insights into the design process and simulation techniques I used in this project.
              </p>
            </div>
          </Section>
        </main>

        {/* RIGHT SIDEBAR (Optional) */}
        <aside className="hidden md:block fixed right-0 top-0 w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 shadow-lg z-20 pt-16 overflow-y-auto">
          {/* Additional navigation or summary can be added here */}
        </aside>
      </div>
    </Page>
  );
};

export default BladeRunnerPage;
