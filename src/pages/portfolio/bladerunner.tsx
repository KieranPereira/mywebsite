import Image from 'next/image';
import Page from '../../components/Layout/Page';
import Section from '../../components/Layout/Section';

// Define all assets at the start
const IMAGES = {
  hero: '/bladerunner/bladerunner-title.jpg', // updated to a GIF if needed
  methodology: '/bladerunner/bladerunner-methodology.jpg',
  simscape: '/bladerunner/bladerunner-simscape.jpg',
  genetic: '/bladerunner/bladerunner-genetic.jpg',
  reinforcement: '/bladerunner/bladerunner-rl.jpg',
  results: '/bladerunner/bladerunner-results.jpg',
  // New images for sections (now used only in sections that need them)
  passiveKnee: '/bladerunner/bladerunner-passive-knee.jpg',
  bladeDesign: '/bladerunner/bladerunner-blade-design.jpg',
  biomimicry: '/bladerunner/bladerunner-biomimicry.jpg',
};

const VIDEOS = {
  gaStart: '/bladerunner/ga-start.mp4',
  gaFinal: '/bladerunner/ga-passive-knee.mp4',
  gaPassiveKnee: '/bladerunner/ga-final.mp4',
  rlmontage: '/bladerunner/rl-montage.mp4',
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
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#blade-runner">
              BladeRunner Intro
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#skills">
              Skills &amp; Tools
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#overview">
              Project Overview
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#methodology">
              Methodology
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#passive-knee">
              Passive Knee
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#blade-design">
              Blade Design
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#biomimicry">
              Biomimicry
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#simscape">
              Simscape Implementation
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#genetic">
              Genetic Algorithm
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#reinforcement">
              Reinforcement Learning
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#results">
              Final Results
            </a>
            <a className="block text-md font-semibold text-white hover:text-gray-300 transition-colors" href="#references">
              References
            </a>
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
                  I’m a robotics enthusiast who worked with five other cross-functional engineers to explore advanced simulation, optimization, and control systems.
                  In this project, I designed and simulated a quadrupedal running robot equipped with innovative running blades inspired by high-performance athletes and the biomechanics of cheetahs.
                </p>
                {/* Mission Objective */}
                <h3 className="text-xl font-semibold mt-4 mb-2">Mission Objective</h3>
                <p className="text-gray-700 leading-relaxed">
                  My primary goal was to create a <strong>fast and efficient robotic quadruped</strong> that replicates the powerful yet agile running style of cheetahs.
                  I aimed to leverage advanced blade designs, biomimicry insights, and a passive knee mechanism to maximize speed, stability, and energy savings.
                </p>
              </div>
              {/* Right column: GIF Image */}
              <div className="md:w-1/2 relative h-screen">
                <Image
                  alt="BladeRunner Project Title"
                  className="absolute inset-0 mx-auto object-contain"
                  fill
                  priority
                  src={IMAGES.hero}
                />
              </div>
            </div>
          </Section>

          {/* Section: Skills & Tools (Text Only) */}
          <Section className="bg-gray-50 text-gray-900" sectionId="skills" sectionTitle="Skills &amp; Tools">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Core Expertise</h2>
              <p className="leading-relaxed mb-4">
                I combined multiple disciplines to bring the BladeRunner project to life. Here are some of the key skills and tools I used:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Programming:</strong> MATLAB</li>
                <li><strong>Simulation Tools:</strong> MATLAB Simscape Multibody, Simulink</li>
                <li><strong>Optimization Techniques:</strong> Genetic Algorithms, Reinforcement Learning (DDPG)</li>
                <li><strong>Design &amp; CAD:</strong> SolidWorks, Onshape</li>
                <li><strong>Control Systems:</strong> Dynamic System Modeling, Feedback Control, Sensor Integration</li>
              </ul>
            </div>
          </Section>

          {/* Decorative Divider */}
          <div className="w-full h-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900" />

          {/* Project Overview (Text Only) */}
          <Section className="bg-white text-gray-900" sectionId="overview" sectionTitle="Project Overview">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Introduction and Motivation</h2>
              <p className="text-gray-700 leading-relaxed">
                My inspiration came from the extraordinary running mechanics of cheetahs and the proven efficiency of Paralympic running blades.
                By blending mechanical design, simulation, and optimization, I tackled challenges such as dynamic stability, joint coordination, and energy management.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <em>Transition:</em> After defining the project's objectives, I moved on to developing a robust simulation strategy to validate my initial designs.
              </p>
            </div>
          </Section>

          {/* Methodology */}
          <Section className="bg-gray-50 text-gray-900" sectionId="methodology" sectionTitle="Methodology">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Simulation Setup and System Design</h2>
              <p className="text-gray-700 leading-relaxed">
                I adopted a simulation-first approach, creating a simplified CAD model in Onshape and importing it into MATLAB Simscape Multibody.
                This enabled me to rapidly iterate on the robot’s geometry and test various leg configurations, reducing the risk of costly physical prototyping errors.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <em>Transition:</em> To further refine my approach, I explored a passive knee mechanism, advanced blade designs, and biomimicry-inspired gait cycles.
              </p>
            </div>
          </Section>

          {/* Passive Knee Section */}
          <Section className="bg-white text-gray-900" sectionId="passive-knee" sectionTitle="Passive Knee Mechanism">
            <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Leveraging Momentum for Efficiency</h2>
                <p className="text-gray-700 leading-relaxed">
                  One key innovation was the introduction of a <strong>passive knee mechanism</strong> in the rear legs.
                  From my literature review, I learned that allowing the knee to lock during ground contact can significantly reduce energy consumption.
                  Essentially, the knee travels in sync with the running motion by harnessing the leg’s momentum rather than requiring constant motor torque.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This approach minimizes power demands during the stance phase and aligns with research showing that limiting active control when ground reaction forces are highest leads to more efficient locomotion.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <Image
                  alt="Passive Knee Mechanism"
                  className="rounded-lg shadow-lg"
                  src={IMAGES.passiveKnee}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </Section>

          {/* Blade Design Section */}
          <Section className="bg-gray-50 text-gray-900" sectionId="blade-design" sectionTitle="Blade Design">
            <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">C-Shaped vs. J-Shaped Running Blades</h2>
                <p className="text-gray-700 leading-relaxed">
                  Through a thorough literature review, I discovered that running blades generally come in two forms: <strong>C-shaped</strong> and <strong>J-shaped</strong>.
                  C-shaped blades often cater to endurance running with moderate energy return and stability.
                  In contrast, J-shaped blades excel at delivering high energy return at fast speeds, making them ideal for sprinting.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Given my goal of maximizing speed, I selected a J-shaped blade design for its superior ground clearance and pronounced spring effect.
                  This choice allowed my robot to store and release energy efficiently, playing a pivotal role in achieving a fast yet stable running gait.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <Image
                  alt="Blade Design"
                  className="rounded-lg shadow-lg"
                  src={IMAGES.bladeDesign}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </Section>

          {/* Biomimicry Section */}
          <Section className="bg-white text-gray-900" sectionId="biomimicry" sectionTitle="Biomimicry">
            <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Animal Gait Cycles and Speed Variations</h2>
                <p className="text-gray-700 leading-relaxed">
                  I conducted a literature review on animal locomotion to understand how gait cycles differ among species like dogs, horses, and cheetahs.
                  I observed that at higher speeds, many quadrupeds transition from diagonal synchronization to a front-and-back leaping motion,
                  which maximizes ground contact time during propulsion.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Based on these insights, I began my genetic algorithm with a <strong>diagonal gait cycle</strong> while encouraging a <strong>front-and-back leaping motion</strong> in the reward function.
                  This hybrid approach provided the flexibility to discover faster, more powerful strides, merging stability with explosive speed.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <Image
                  alt="Biomimicry in Gait Cycles"
                  className="rounded-lg shadow-lg"
                  src={IMAGES.biomimicry}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </Section>

          {/* Simscape Implementation */}
          <Section className="bg-gray-50 text-gray-900" sectionId="simscape" sectionTitle="Simscape Implementation">
            <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">High-Fidelity Simulation in MATLAB</h2>
                <p className="text-gray-700 leading-relaxed">
                  After refining the design choices—passive knee, J-shaped blades, and biomimicry-inspired gaits—I moved to MATLAB Simscape Multibody for detailed dynamic analysis.
                  I tested how the blades compressed and released energy, how the passive knee responded to ground contact, and how torque inputs influenced forward velocity and stability.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Simulink and the Physical Modeling Toolbox provided real-time insights into ground reaction forces, joint stress, and center-of-mass movement.
                  This thorough simulation phase helped validate each subsystem before integrating advanced optimization methods.
                </p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <Image
                  alt="MATLAB Simscape Implementation"
                  className="rounded-lg shadow-lg"
                  src={IMAGES.simscape}
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </Section>

          {/* Genetic Algorithm Optimization */}
          <Section className="bg-white text-gray-900" sectionId="genetic" sectionTitle="Genetic Algorithm">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Overview of the Genetic Algorithm (GA)</h2>
              <p className="text-gray-700 leading-relaxed">
                To systematically refine my quadruped’s gait, I employed a genetic algorithm (GA). The process began with an <strong>input gait</strong>—a walking trajectory from literature—and defined upper and lower angle limits for each joint.
                I then generated a mutated population of joint angles and step timings, allowing the GA to explore various stride profiles.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Input Gait:</strong> Walking trajectory from literature</li>
                <li><strong>Angle Limits:</strong> Defined upper and lower bounds for each joint</li>
                <li><strong>Mutated Population:</strong> Variations in joint angles &amp; step timings to influence stride and trajectory</li>
                <li><strong>Iterative Process:</strong> Evaluated each generation via a reward function, converging on the best gait</li>
              </ul>

              {/* Two-Column Rewards and Penalties */}
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-green-700 text-center">Rewards</h4>
                  <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li><strong>Longitudinal (X) distance traveled</strong></li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-red-700 text-center">Penalties</h4>
                  <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li>Lateral (Y) displacement</li>
                    <li><em>Aggressiveness:</em> Sign flips in joint velocity</li>
                    <li>Torso pitch instability: Exceeding 1 standard deviation from mean</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                By focusing on maximizing forward motion while minimizing instability, the GA refined my robot’s gait,
                striking a balance between speed and stability that aligns with my mission objective.
              </p>

              <h3 className="text-xl font-semibold mt-8">Algorithm Progress Videos</h3>
              <p className="mt-2">
                Below are three key milestones from my GA runs. The first video shows the <strong>starting algorithm</strong>,
                the second highlights the <strong>passive knee integration</strong>, and the final clip demonstrates the <strong>converged gait</strong>.
              </p>

              {/* Three Video Panel */}
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <div className="flex-1">
                  <p className="font-semibold text-center mb-2">Starting Algorithm</p>
                  <video src={VIDEOS.gaStart} className="w-full rounded shadow" controls />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-center mb-2">With Passive Knee</p>
                  <video src={VIDEOS.gaPassiveKnee} className="w-full rounded shadow" controls />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-center mb-2">Final Results</p>
                  <video src={VIDEOS.gaFinal} className="w-full rounded shadow" controls />
                </div>
              </div>
            </div>
          </Section>

          {/* Reinforcement Learning Optimization */}
          <Section className="bg-gray-50 text-gray-900" sectionId="reinforcement" sectionTitle="Reinforcement Learning">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Enhancing Performance through Reinforcement Learning</h2>
              <p className="text-gray-700 leading-relaxed">
                In parallel with the genetic algorithm, I applied a reinforcement learning (RL) strategy using Deep Deterministic Policy Gradient (DDPG).
                Rather than relying on a predefined gait, the RL agent discovered optimal joint torques through continuous interaction with the simulation environment.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I used an actor-critic framework, where the agent received continuous feedback on joint angles, body orientation, and ground reaction forces.
                Custom penalty functions discouraged abrupt velocity changes and prolonged ground contact, resulting in a smoother, more energy-efficient gait.
              </p>
            </div>
            <video src={VIDEOS.rlmontage} className="w-full rounded shadow" controls />
          </Section>

          {/* Final Results */}
          <Section className="bg-white text-gray-900" sectionId="results" sectionTitle="Final Results">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Conclusive Analysis and Achievements</h2>
              <p className="text-gray-700 leading-relaxed">
                The combination of a passive knee mechanism, J-shaped blades, and biomimicry-driven gait cycles significantly enhanced my quadruped’s locomotion.
                Through iterative refinement with genetic algorithms and reinforcement learning, I achieved a gait that allowed the robot to cover 23 meters in 10 seconds while maintaining excellent stability and energy efficiency.
              </p>
              <Image
                alt="Final Results"
                className="mt-4 mx-auto"
                height={400}
                src={IMAGES.results}
                width={600}
              />
              <p className="text-gray-700 leading-relaxed mt-4">
                This project underscored the power of simulation-based design and optimization in robotics.
                I’m excited about potential real-world applications, such as faster search-and-rescue robots or agile courier systems.
                Collaborating with five cross-functional engineers has deepened my appreciation for teamwork, as each subsystem was carefully integrated for optimal results.
              </p>
            </div>
          </Section>

          {/* References (Text Only) */}
          <Section className="bg-gray-50 text-gray-900" sectionId="references" sectionTitle="References">
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">References and Supplementary Materials</h2>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed">
                <li>
                  Taboga P, Beck ON, Grabowski AM (2020). Influence of prosthetic shape on maximum speed in sprinters with bilateral transtibial amputations.
                  <a href="https://doi.org/10.1371/journal.pone.0229035" className="text-blue-600 hover:underline ml-1">
                    https://doi.org/10.1371/journal.pone.0229035
                  </a>
                </li>
                <li className="mt-2">
                  Y. M. Shabana et al. (2022). Design and simulation of prosthetic running blade using functionality graded materials.
                  <a href="https://doi.org/10.1109/NILES56402.2022.9942368" className="text-blue-600 hover:underline ml-1">
                    https://doi.org/10.1109/NILES56402.2022.9942368
                  </a>
                </li>
                <li className="mt-2">
                  Choi J. (2021). Multi-phase joint-angle trajectory generation inspired by canine motion for quadruped robot control. Sensors, 21(19), 6366.
                  <a href="https://doi.org/10.3390/s21196366" className="text-blue-600 hover:underline ml-1">
                    https://doi.org/10.3390/s21196366
                  </a>
                </li>
                <li className="mt-2">
                  Zhang, X., Zhao, C., Xu, Z., and Huang, S. (2022). Mechanism analysis of cheetah high-speed locomotion based on digital reconstruction. Biomimetic Intelligence and Robotics, 2(1), 100033.
                  <a href="https://doi.org/10.1016/j.birob.2021.100033" className="text-blue-600 hover:underline ml-1">
                    https://doi.org/10.1016/j.birob.2021.100033
                  </a>
                </li>
              </ol>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4 max-w-4xl mx-auto p-6">
              I have also compiled a more detailed report and presentation slides that dive deeper into the design decisions, simulation data, and optimization metrics used throughout this project.
            </p>
          </Section>
        </main>

        {/* RIGHT SIDEBAR (Optional) */}
        <aside className="hidden md:block fixed right-0 top-0 w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 shadow-lg z-20 pt-16 overflow-y-auto">
          {/* Additional content or navigation can be placed here */}
        </aside>
      </div>
    </Page>
  );
};

export default BladeRunnerPage;