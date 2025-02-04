import Image from 'next/image';

import Page from '../../components/Layout/Page';
import Section from '../../components/Layout/Section';

// Define all assets at the start
const IMAGES = {
  hero: '/capstone/capstone-title.jpg',
  problemStatement: '/capstone/capstone-problem.jpg',
  methodology: '/capstone/capstone-swarm.jpg',
  sailControlDiagram: '/capstone/Node Diagram.png',
  challenges: '/images/challenges.jpg',
  currentProgress: '/capstone/capstone-workshop.jpg',
  teamCollab: '/capstone/capstone-table.jpg',
};

const VIDEO = {
  capstone: '/capstone/capstone-end.mp4',
  challenges: '/capstone/capstone-sailing.mp4',
};

const CapstonePage = () => {
  return (
    <Page
      description="A detailed look at my autonomous sailboat control project"
      title="Capstone Project"
    >
      <div className="flex flex-col md:flex-row">

        {/* LEFT SIDEBAR (Navigation) */}
        <aside
          className="
            hidden md:block
            fixed left-0 top-0
            w-1/5
            h-screen
            bg-gradient-to-b from-gray-900 to-gray-700
            p-4
            shadow-lg
            z-20
            pt-16
            overflow-y-auto
          "
        >
          <nav className="space-y-4">
            <a
              className="block text-md font-semibold text-white hover:text-gray-300 transition-colors"
              href="#capstone"
            >
              Capstone Overview
            </a>
            <a
              className="block text-md font-semibold text-white hover:text-gray-300 transition-colors"
              href="#problem"
            >
              Problem Statement
            </a>
            <a
              className="block text-md font-semibold text-white hover:text-gray-300 transition-colors"
              href="#methodology"
            >
              Methodology &amp; Key Challenges
            </a>
            <a
              className="block text-md font-semibold text-white hover:text-gray-300 transition-colors"
              href="#sailing-control"
            >
              Control Algorithm Design
            </a>
            <a
              className="block text-md font-semibold text-white hover:text-gray-300 transition-colors"
              href="#progress"
            >
              Current Progress
            </a>
            <a
              className="block text-md font-semibold text-white hover:text-gray-300 transition-colors"
              href="#additional-insights"
            >
              Additional Insights
            </a>
            <a
              className="block text-md font-semibold text-white hover:text-gray-300 transition-colors"
              href="#future"
            >
              Future Goals
            </a>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        {/* Shift content to the right to avoid overlap with fixed left sidebar */}
        <main className="w-full md:w-3/5 md:ml-[20%] md:mr-[20%]">
          {/* Project Introduction with Sticky Title Section */}
          <Section
            className="bg-white text-gray-900"
            sectionId="capstone"
            sectionTitle=""
          >
            <div className="flex flex-col md:flex-row min-h-screen">
              {/* Left column: Sticky Title & Subtitle */}
              <div className="md:w-1/2 sticky top-0 h-screen flex flex-col justify-center p-6">
                <h1 className="text-4xl font-bold mb-2">My Capstone Project</h1>
                <h2 className="text-2xl font-semibold mb-4">
                  Autonomous Sailboat Control System
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  I'm a passionate engineer specializing in <strong>control systems</strong> and <strong>autonomous robotics</strong>.
                  This project showcases the culmination of my work on
                  real-time sensor fusion, optimal path planning, and
                  embedded systems for an autonomous sailboat fleet.
                </p>
              </div>

              {/* Right column: Image */}
              <div className="md:w-1/2 relative h-screen">
                <Image
                  alt="Autonomous Sailboat at Sea"
                  className="absolute inset-0 mx-auto"
                  fill
                  priority
                  src={IMAGES.hero}
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
          </Section>

          {/* Section: Skills & Tools */}
          <Section
            className="bg-gray-50 text-gray-900"
            sectionId="skills"
            sectionTitle="Skills & Tools"
          >
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Core Expertise</h2>
              <p className="leading-relaxed mb-4">
                Throughout this project, I’ve leveraged a range of tools and
                methodologies to design, implement, and test an autonomous
                sailboat control system.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Programming:</strong> C++, MATLAB, ROS2
                </li>
                <li>
                  <strong>Embedded Systems:</strong> Raspberry Pi, Arduino, ESP32
                </li>
                <li>
                  <strong>Control Theories:</strong> PID, LQR, Kalman Filters
                </li>
                <li>
                  <strong>Data Handling:</strong> Sensor Fusion, Real-Time Processing
                </li>
                <li>
                  <strong>Software Tools:</strong> Simulink, Git, Docker
                </li>
              </ul>
            </div>
          </Section>

          {/* Decorative Divider (Updated Color) */}
          <div className="w-full h-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900" />

          {/* Problem Statement */}
          <Section
            className="bg-white text-gray-900"
            sectionId="problem"
            sectionTitle="Problem Statement"
          >
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="mt-2 leading-relaxed">
                Global shipping incurs roughly $45B in extra fuel costs annually
                due to encountering unpredicted ocean waves, contributing nearly
                1% of the world’s total GHG emissions. By accurately forecasting
                wave conditions, routing algorithms can improve efficiency by
                over 20%, equivalent to eliminating the emissions of 70 million
                cars. Our solution involves a swarm of autonomous, self-powered
                ocean sensors that dynamically position themselves to measure
                wave height, frequency, and direction—inputs vital for newly
                developed wave-prediction models.
              </p>
              <p className="mt-2 leading-relaxed">
                As part of my capstone project, I am specifically focusing on
                the guidance and navigation systems for each autonomous vessel,
                coordinating them through swarm mesh networks to optimize
                data collection and smart routing.
              </p>
              <Image
                alt="Sailboat Problem Context"
                className="rounded-lg shadow-lg mt-4 mx-auto"
                height={400}
                src={IMAGES.problemStatement}
                width={600}
              />
            </div>
          </Section>

          {/* Decorative Divider (Updated Color) */}
          <div className="w-full h-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900" />

          {/* Methodology & Key Challenges (Combined) */}
          <Section
            className="bg-gray-50 text-gray-900"
            sectionId="methodology"
            sectionTitle="Methodology & Key Challenges"
          >
            <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Left: Text Content */}
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
                <p className="mt-2 leading-relaxed">
                  To ensure accurate navigation and reliable performance, the
                  project incorporates a comprehensive set of methodologies:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>
                    Utilizing MATLAB/Simulink for initial controller modeling and
                    validation.
                  </li>
                  <li>
                    Implementing ROS2 for modular control and real-time data
                    management.
                  </li>
                  <li>
                    Incorporating sensor fusion (GPS, IMU, anemometer) to track
                    position and wind data.
                  </li>
                </ul>

                {/* Key Challenges */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Key Challenges</h2>
                <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                  <li>
                    <strong>Real-Time Adaptability:</strong> Balancing computational load with
                    the need for rapid adjustments to wind shifts.
                  </li>
                  <li>
                    <strong>Sensor Reliability:</strong> Ensuring robust performance under harsh
                    marine conditions.
                  </li>
                  <li>
                    <strong>Energy Efficiency:</strong> Maintaining low power usage for longer voyages.
                  </li>
                  <li>
                    <strong>Environmental Factors:</strong> Accounting for wave height, currents, and gusts.
                  </li>
                </ul>
              </div>

              {/* Right: Image */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  alt="Methodology Diagram"
                  className="rounded-lg shadow-lg"
                  height={350}
                  src={IMAGES.methodology}
                  width={500}
                />
              </div>
            </div>
          </Section>

          {/* Decorative Divider (Updated Color) */}
          <div className="w-full h-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900" />

          {/* Control Algorithm Design */}
          <Section
            className="bg-white text-gray-900"
            sectionId="sailing-control"
            sectionTitle="Control Algorithm Design"
          >
            <Image
              alt="Sail Control Diagram"
              className="mt-4 mx-auto"
              height={400}
              src={IMAGES.sailControlDiagram}
              width={600}
            />
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Core Concepts Learned in Control System Development
              </h2>
              <p className="mt-2 leading-relaxed">
                The autonomous sailing system was developed using a modular
                control architecture, integrating advanced control techniques to
                optimize navigation, stability, and efficiency.
              </p>

              {/* Waypoint Management & Optimization */}
              <h3 className="text-xl font-semibold mt-6">
                Waypoint Management &amp; Optimization
              </h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <strong>Dynamic Waypoint Handling:</strong>
                  Implemented a queue-based system to manage waypoints efficiently.
                </li>
                <li>
                  <strong>LQR-Based Path Optimization:</strong>
                  Applied LQR to dynamically adjust waypoints and avoid inefficient paths.
                </li>
              </ul>

              {/* Path Planning & Sensor Fusion */}
              <h3 className="text-xl font-semibold mt-6">
                Path Planning &amp; Sensor Fusion
              </h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <strong>Complex Maneuver Planning:</strong>
                  Developed algorithms for advanced sailing maneuvers
                  (tacking, jibing, etc.).
                </li>
                <li>
                  <strong>Kalman Filtering:</strong>
                  Refined sensor data (GPS, magnetometers, wind sensors),
                  reducing noise and improving accuracy.
                </li>
              </ul>

              {/* Control Theory & Feedback Loops */}
              <h3 className="text-xl font-semibold mt-6">
                Control Theory &amp; Feedback Loops
              </h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <strong>PID Control for Rudder Adjustment:</strong>
                  Fine-tunes rudder inputs for precise course corrections.
                </li>
                <li>
                  <strong>Drift Estimation with Kalman Filters:</strong>
                  Compensates for currents and gusts, improving navigation stability.
                </li>
              </ul>
            </div>
          </Section>

          {/* Decorative Divider (Updated Color) */}
          <div className="w-full h-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900" />

          {/* Current Progress */}
          <Section
            className="bg-white text-gray-900"
            sectionId="progress"
            sectionTitle="Current Progress"
          >
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Latest Developments</h2>
              <p className="mt-2 leading-relaxed">
                The initial prototypes have successfully completed inland lake
                tests with promising results for stable heading. A newly integrated
                sensor suite (9-DOF IMU, high-precision GPS) further improves
                navigation accuracy. Current work focuses on advanced wind prediction
                models and dynamic route optimization.
              </p>
              <Image
                alt="Current Progress"
                className="rounded-lg shadow-lg mt-4 mx-auto"
                height={400}
                src={IMAGES.currentProgress}
                width={600}
              />
            </div>
          </Section>

          {/* Decorative Divider (Updated Color) */}
          <div className="w-full h-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900" />

          {/* Additional Insights (Improved Soft Skills Emphasis) */}
          <Section
            className="bg-gray-50 text-gray-900"
            sectionId="additional-insights"
            sectionTitle="Additional Insights"
          >
            <div className="max-w-5xl mx-auto p-6 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
              {/* Left: Text Content */}
              <div className="flex-1">
                {/* Collaboration & Personal Growth */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Collaboration &amp; Personal Growth
                  </h2>
                  <p className="leading-relaxed">
                    Working in a large research lab has taught me the importance of
                    cross-disciplinary communication, agile iteration, and
                    collaborative problem-solving. Throughout this project, I’ve
                    gained experience coordinating with mechanical, electrical, and
                    software engineers to ensure each subsystem meets the overall
                    system requirements.
                  </p>
                  <p className="leading-relaxed mt-2">
                    I’m also actively pursuing publication opportunities to share
                    breakthroughs in wave forecasting and swarm coordination.
                    This process has honed my technical writing and peer collaboration
                    skills, further enhancing my ability to learn quickly and adapt
                    to new methodologies.
                  </p>
                </div>

                {/* Simulation & Field Testing */}
                <div className="mt-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Simulation &amp; Field Testing
                  </h2>
                  <p className="leading-relaxed">
                    A significant portion of the development cycle involves running
                    simulations in both calm-water and rough-sea scenarios. This
                    approach allows rapid iteration of the control algorithms before
                    on-water tests. Once the simulated performance meets certain
                    reliability thresholds, real-world trials validate assumptions
                    and calibrate sensor parameters.
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex-shrink-0">
                <Image
                  alt="Autonomous Sailboat at Sea"
                  className="rounded-md shadow-md"
                  height={375}
                  priority
                  src={IMAGES.teamCollab}
                  width={400}
                />
              </div>
            </div>
          </Section>

          {/* Decorative Divider (Updated Color) */}
          <div className="w-full h-2 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900" />

          {/* Future Goals */}
          <Section
            className="bg-white text-gray-900"
            sectionId="future"
            sectionTitle="Future Goals"
          >
            <div className="max-w-4xl mx-auto p-6">
              <h2 className="text-2xl font-semibold mb-4">Where It’s Heading</h2>
              <ul className="list-disc list-inside space-y-2 mt-2 leading-relaxed">
                <li>
                  <strong>Adaptive AI Integration:</strong> Predict wind shifts
                  and optimize sail trim in real-time.
                </li>
                <li>
                  <strong>Oceanic Expedition Trials:</strong> Transition from lakes
                  to offshore testing for endurance and resilience.
                </li>
                <li>
                  <strong>Energy Harvesting:</strong> Explore solar and wind turbine
                  systems for multi-day journeys.
                </li>
                <li>
                  <strong>Fleet Coordination:</strong> Investigate swarm intelligence
                  for multiple autonomous sailboats.
                </li>
              </ul>
            </div>
          </Section>

          {/* Simple CTA Section: GitHub & LinkedIn */}
          <Section
            className="bg-gray-100 text-gray-900"
            sectionId="cta"
            sectionTitle=""
          >
            <div className="max-w-4xl mx-auto p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">Interested in More Details?</h2>
              <p className="leading-relaxed mb-6">
                Dive deeper into the project code or feel free to connect with me
                for collaboration opportunities.
              </p>
              <div className="space-x-4">
                {/* GitHub Button */}
                <a
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  href="https://github.com/dustinteng/TAFLAB_boatpi_roshumble/tree/version2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Code on GitHub
                </a>

                {/* LinkedIn Button */}
                <a
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                  href="https://www.linkedin.com/in/kieranpereira1/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Section>

          {/* Full-width video panel at the bottom */}
          <div className="relative w-full h-64 md:h-96">
            <video
              autoPlay
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              src={VIDEO.capstone}
            />
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside
          className="
            hidden md:block
            fixed right-0 top-0
            w-1/5
            h-screen
            bg-gradient-to-b from-gray-900 to-gray-700
            p-4
            shadow-lg
            z-20
            overflow-y-auto
            pt-16
          "
        >
          {/* Placeholder content / Additional nav items or summary */}
        </aside>
      </div>
    </Page>
  );
};

export default CapstonePage;
