import Image from 'next/image';

import {Project} from './dataDef';

/**
 * PROJECTS
 * ----------------------------------------------------------------------------
 * This is the single source of truth for every project on the site.
 *
 * HOW TO ADD A PROJECT (no coding required):
 *   1. Copy one of the objects below.
 *   2. Fill in the fields. `slug`, `title`, `caption`, `heroStat` and `media`
 *      are required; everything else is optional.
 *   3. Drop your media files in `/public/<something>` and point `media.src`
 *      (and optional `poster`) at them.
 *   4. The new project automatically appears on the homepage grid and gets its
 *      own page at /portfolio/<slug>.
 *
 * Order of this array = display order on the homepage (most impressive first).
 *
 * `deepDive` is the only field that accepts rich JSX (lists, paragraphs,
 * images). It is collapsed by default behind a "Read the full breakdown"
 * toggle on the project page.
 */
export const projects: Project[] = [
  /* ----------------------------------------------------------------------- */
  /* 1. Berkeley TAFLAB — Autonomous Ocean-Sensor Swarm                       */
  /* ----------------------------------------------------------------------- */
  {
    slug: 'taflab',
    title: 'Berkeley TAFLAB: Autonomous Ocean-Sensor Swarm',
    caption: 'Ships burn $45B a year fighting waves nobody measures. We built a sensor swarm that measures them.',
    tldr: 'Built the guidance, navigation, and mesh-networking stack for a swarm of self-powered ocean sensors that map wave conditions for fuel-saving ship routing.',
    heroStat: {value: '~30%', label: 'of shipping fuel saved through wave-aware routing'},
    highlights: [
      'Field-tested 18 units and validated swarm mesh networks',
      'Wrote the LQR, PID, and Kalman-filter navigation stack in ROS2 and C++',
      'Automated calibration scripts in Python and MATLAB',
      'Pursuing publication of the wave-forecasting and swarm-coordination work',
    ],
    techTags: ['ROS2', 'C++', 'MATLAB/Simulink', 'Kalman Filter', 'LQR', 'PID', 'ESP32', 'Sensor Fusion'],
    media: {
      type: 'video',
      src: '/capstone/frontvideo.mp4',
      poster: '/capstone/capstone-title.jpg',
      label: 'Field test',
    },
    gallery: [
      {type: 'image', src: '/capstone/capstone-swarm.jpg'},
      {type: 'image', src: '/capstone/capstone-workshop.jpg'},
      {type: 'image', src: '/capstone/capstone-problem.jpg'},
    ],
    links: [
      {
        type: 'github',
        label: 'View code',
        href: 'https://github.com/dustinteng/TAFLAB_boatpi_roshumble/tree/version2',
      },
    ],
    featured: true,
    deepDive: [
      {
        heading: 'The problem',
        body: (
          <div className="space-y-3">
            <p>
              Global shipping incurs roughly $45B in extra fuel costs annually due to encountering unpredicted ocean
              waves, contributing nearly 1% of the world&apos;s total GHG emissions. By accurately forecasting wave
              conditions, routing algorithms can improve efficiency by over 20%, equivalent to eliminating the emissions
              of 70 million cars.
            </p>
            <p>
              Our solution is a swarm of autonomous, self-powered ocean sensors that dynamically position themselves to
              measure wave height, frequency, and direction: the inputs vital for newly developed wave-prediction
              models. I focused specifically on the guidance and navigation systems for each autonomous vessel,
              coordinating them through swarm mesh networks to optimize data collection and smart routing.
            </p>
          </div>
        ),
      },
      {
        heading: 'Methodology & key challenges',
        body: (
          <div className="space-y-3">
            <p>To ensure accurate navigation and reliable performance, the project combines several methodologies:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>MATLAB/Simulink for initial controller modeling and validation.</li>
              <li>ROS2 for modular control and real-time data management.</li>
              <li>Sensor fusion (GPS, IMU, anemometer) to track position and wind data.</li>
            </ul>
            <p className="font-semibold">Key challenges</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Real-time adaptability:</strong> balancing computational load against rapid adjustments to wind
                shifts.
              </li>
              <li>
                <strong>Sensor reliability:</strong> robust performance under harsh marine conditions.
              </li>
              <li>
                <strong>Energy efficiency:</strong> maintaining low power usage for longer voyages.
              </li>
              <li>
                <strong>Environmental factors:</strong> accounting for wave height, currents, and gusts.
              </li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Control algorithm design',
        body: (
          <div className="space-y-3">
            <p>
              The autonomous sailing system uses a modular control architecture that integrates several advanced control
              techniques to optimize navigation, stability, and efficiency.
            </p>
            <Image
              alt="Sail control node diagram"
              className="rounded-lg"
              height={400}
              loading="lazy"
              src="/capstone/Node Diagram.png"
              width={600}
            />
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Dynamic waypoint handling:</strong> a queue-based system to manage waypoints efficiently.
              </li>
              <li>
                <strong>LQR-based path optimization:</strong> dynamically adjusts waypoints and avoids inefficient
                paths.
              </li>
              <li>
                <strong>Complex maneuver planning:</strong> algorithms for advanced sailing maneuvers (tacking, jibing).
              </li>
              <li>
                <strong>Kalman filtering:</strong> refines GPS, magnetometer, and wind-sensor data, reducing noise.
              </li>
              <li>
                <strong>PID rudder control:</strong> fine-tunes rudder inputs for precise course corrections.
              </li>
              <li>
                <strong>Drift estimation:</strong> Kalman filters compensate for currents and gusts, improving
                stability.
              </li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Progress',
        body: (
          <div className="space-y-3">
            <p>
              Initial prototypes have completed inland lake tests with promising results for stable heading. A newly
              integrated sensor suite (9-DOF IMU, high-precision GPS) further improves navigation accuracy. Current work
              focuses on advanced wind-prediction models and dynamic route optimization, validated through a mix of
              calm-water and rough-sea simulations before on-water trials.
            </p>
            <Image
              alt="Capstone field testing"
              className="rounded-lg"
              height={400}
              loading="lazy"
              src="/capstone/capstone-workshop.jpg"
              width={600}
            />
          </div>
        ),
      },
      {
        heading: 'Future',
        body: (
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong>Adaptive AI integration:</strong> predict wind shifts and optimize sail trim in real time.
            </li>
            <li>
              <strong>Oceanic expedition trials:</strong> transition from lakes to offshore endurance testing.
            </li>
            <li>
              <strong>Energy harvesting:</strong> solar and wind-turbine systems for multi-day journeys.
            </li>
            <li>
              <strong>Fleet coordination:</strong> swarm intelligence for many autonomous sailboats at once.
            </li>
          </ul>
        ),
      },
    ],
  },

  /* ----------------------------------------------------------------------- */
  /* 2. Berkeley Robotics Lab — Quadrupedal Running Robot                     */
  /* ----------------------------------------------------------------------- */
  {
    slug: 'bladerunner',
    title: 'Berkeley Robotics Lab: Quadrupedal Running Robot',
    caption: "An efficient running quadruped that outpaces Boston Dynamics' Spot.",
    tldr: "Designed and trained a running quadruped in simulation, combining genetic algorithms with reinforcement learning to beat Spot's top speed.",
    heroStat: {value: '23% faster', label: "than Boston Dynamics' Spot"},
    highlights: [
      'Simulation-first design in MATLAB Simscape Multibody',
      'J-shaped running blades and a passive knee for an energy-efficient gait',
      'Gait optimized with a genetic algorithm and DDPG reinforcement learning',
      'Final gait covered 23 m in 10 s with strong stability',
    ],
    techTags: [
      'MATLAB',
      'Simscape Multibody',
      'Simulink',
      'Reinforcement Learning (DDPG)',
      'Genetic Algorithms',
      'SolidWorks',
      'Control Systems',
    ],
    media: {
      type: 'video',
      src: '/bladerunner/rl-montage.mp4',
      poster: '/bladerunner/bladerunner-title.jpg',
      label: 'Simulation',
    },
    gallery: [
      {type: 'image', src: '/bladerunner/bladerunner-biomimicry.jpg'},
      {type: 'image', src: '/bladerunner/bladerunner-passive-knee.jpg'},
      {type: 'image', src: '/bladerunner/bladerunner-results.jpg'},
    ],
    featured: true,
    deepDive: [
      {
        heading: 'Overview & motivation',
        body: (
          <div className="space-y-3">
            <p>
              Working with five cross-functional engineers, I designed and simulated a quadrupedal running robot
              equipped with running blades inspired by high-performance athletes and the biomechanics of cheetahs. The
              goal was a fast, efficient quadruped that replicates the powerful yet agile running style of cheetahs.
            </p>
            <p>
              My inspiration came from the running mechanics of cheetahs and the proven efficiency of Paralympic running
              blades. By blending mechanical design, simulation, and optimization, I tackled dynamic stability, joint
              coordination, and energy management.
            </p>
          </div>
        ),
      },
      {
        heading: 'Design innovations',
        body: (
          <div className="space-y-3">
            <p>
              <strong>Passive knee mechanism.</strong> Allowing the rear knee to lock during ground contact
              significantly reduces energy consumption: the knee travels in sync with the running motion by harnessing
              leg momentum rather than constant motor torque, minimizing power demand during the stance phase.
            </p>
            <p>
              <strong>J-shaped running blades.</strong> Blades come in C-shaped (endurance, moderate energy return) and
              J-shaped (high energy return at speed) forms. I selected J-shaped blades for their superior ground
              clearance and pronounced spring effect, letting the robot store and release energy efficiently.
            </p>
            <p>
              <strong>Biomimicry.</strong> A literature review of animal locomotion showed that at higher speeds many
              quadrupeds transition from diagonal synchronization to a front-and-back leaping motion. I started the
              genetic algorithm with a diagonal gait while rewarding a front-and-back leaping motion, merging stability
              with explosive speed.
            </p>
          </div>
        ),
      },
      {
        heading: 'Simulation & optimization',
        body: (
          <div className="space-y-3">
            <p>
              I adopted a simulation-first approach: a simplified CAD model in Onshape was imported into MATLAB Simscape
              Multibody, enabling rapid iteration on geometry and leg configurations and reducing costly physical
              prototyping errors. Simulink and the Physical Modeling Toolbox provided real-time insight into ground
              reaction forces, joint stress, and center-of-mass movement.
            </p>
            <p>
              <strong>Genetic algorithm.</strong> Starting from a walking trajectory in the literature with defined
              joint-angle limits, I generated a mutated population of joint angles and step timings. Each generation was
              scored by a reward function (rewarding longitudinal distance; penalizing lateral displacement, joint
              velocity sign flips, and torso-pitch instability) until it converged on the best gait.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <figure>
                <p className="mb-1 text-center text-sm font-semibold">Starting algorithm</p>
                <video className="w-full rounded shadow" controls preload="none" src="/bladerunner/ga-start.mp4" />
              </figure>
              <figure>
                <p className="mb-1 text-center text-sm font-semibold">With passive knee</p>
                <video className="w-full rounded shadow" controls preload="none" src="/bladerunner/ga-final.mp4" />
              </figure>
              <figure>
                <p className="mb-1 text-center text-sm font-semibold">Final results</p>
                <video
                  className="w-full rounded shadow"
                  controls
                  preload="none"
                  src="/bladerunner/ga-passive-knee.mp4"
                />
              </figure>
            </div>
            <p>
              <strong>Reinforcement learning.</strong> In parallel I applied a Deep Deterministic Policy Gradient (DDPG)
              strategy. Rather than a predefined gait, the actor-critic agent discovered optimal joint torques through
              continuous interaction with the simulation, with custom penalties discouraging abrupt velocity changes and
              prolonged ground contact for a smoother, more efficient gait.
            </p>
          </div>
        ),
      },
      {
        heading: 'Results',
        body: (
          <div className="space-y-3">
            <p>
              Combining the passive knee, J-shaped blades, and a biomimicry-driven gait, refined through genetic
              algorithms and reinforcement learning, produced a gait that covered 23 meters in 10 seconds while
              maintaining excellent stability and energy efficiency.
            </p>
            <Image
              alt="BladeRunner final results"
              className="rounded-lg"
              height={400}
              loading="lazy"
              src="/bladerunner/bladerunner-results.jpg"
              width={600}
            />
            <p>
              The project underscored the power of simulation-based design in robotics, with potential applications in
              faster search-and-rescue robots or agile courier systems.
            </p>
          </div>
        ),
      },
      {
        heading: 'References',
        body: (
          <ol className="list-inside list-decimal space-y-2">
            <li>
              Taboga P, Beck ON, Grabowski AM (2020). Influence of prosthetic shape on maximum speed in sprinters with
              bilateral transtibial amputations.{' '}
              <a className="text-orange-600 hover:underline" href="https://doi.org/10.1371/journal.pone.0229035">
                doi.org/10.1371/journal.pone.0229035
              </a>
            </li>
            <li>
              Y. M. Shabana et al. (2022). Design and simulation of prosthetic running blade using functionally graded
              materials.{' '}
              <a className="text-orange-600 hover:underline" href="https://doi.org/10.1109/NILES56402.2022.9942368">
                doi.org/10.1109/NILES56402.2022.9942368
              </a>
            </li>
            <li>
              Choi J. (2021). Multi-phase joint-angle trajectory generation inspired by canine motion for quadruped
              robot control. Sensors, 21(19), 6366.{' '}
              <a className="text-orange-600 hover:underline" href="https://doi.org/10.3390/s21196366">
                doi.org/10.3390/s21196366
              </a>
            </li>
            <li>
              Zhang, X., Zhao, C., Xu, Z., and Huang, S. (2022). Mechanism analysis of cheetah high-speed locomotion
              based on digital reconstruction. Biomimetic Intelligence and Robotics, 2(1), 100033.{' '}
              <a className="text-orange-600 hover:underline" href="https://doi.org/10.1016/j.birob.2021.100033">
                doi.org/10.1016/j.birob.2021.100033
              </a>
            </li>
          </ol>
        ),
      },
    ],
  },

  /* ----------------------------------------------------------------------- */
  /* 3. Obsidian Performance Gear (OPG)                                       */
  /* ----------------------------------------------------------------------- */
  {
    slug: 'opg',
    title: 'Obsidian Performance Gear',
    caption: 'Bad form causes most training injuries. I built a company around fixing it in real time.',
    tldr: 'Founded the company and led engineering as CTO: a custom PCB, embedded AI, and real-time 3D motion feedback packed into a wearable.',
    heroStat: {value: '$1.2M+', label: 'company valuation'},
    highlights: [
      'Real-time 3D motion analysis on resource-constrained hardware',
      'Designed a custom PCB with an I2C sensor network',
      'Embedded AI for real-time form correction',
      'Led the engineering team as CTO',
    ],
    techTags: ['C++', 'Python', 'Embedded AI', 'PCB Design', 'IoT', 'I2C'],
    media: {type: 'video', src: '/obsidian/explodedview.mp4', poster: '/obsidian/obsidian-hero.jpg', label: 'Hardware'},
    gallery: [
      {
        type: 'document',
        src: '/obsidian/pitch-deck.pdf',
        label: 'Pitch deck',
        poster: '/obsidian/obsidian-hero.jpg',
      },
      {type: 'image', src: '/obsidian/obsidian-competitive.jpg'},
      {type: 'image', src: '/obsidian/obsidian-team.jpg'},
    ],
    links: [
      {type: 'demo', label: 'Watch demo', href: '/obsidian/techdemo.mp4'},
      {type: 'deck', label: 'Pitch deck', href: '/obsidian/pitch-deck.pdf'},
    ],
    featured: true,
    deepDive: [
      {
        heading: 'The challenge',
        body: (
          <p>
            Many people feel unsure about their workout form, which can lead to frustration and even injuries.
            Traditional fitness tools often miss the mark when it comes to providing timely, actionable feedback. We
            wanted to change that.
          </p>
        ),
      },
      {
        heading: 'The opportunity',
        body: (
          <div className="space-y-3">
            <p>
              With millions of gym enthusiasts and a rapidly growing wearable-tech market, there&apos;s a huge
              opportunity to transform the way people work out, like having a friendly coach by your side guiding you
              through every move.
            </p>
            <Image
              alt="Market opportunity"
              className="rounded-lg"
              height={600}
              loading="lazy"
              src="/obsidian/obsidian-opportunity.jpg"
              width={500}
            />
          </div>
        ),
      },
      {
        heading: 'Our idea',
        body: (
          <p>
            Our solution uses smart sensors to capture every detail of your movement. The system processes this data in
            real time and gently nudges you to adjust your form, making workouts not only safer but more productive.
          </p>
        ),
      },
      {
        heading: 'Standout features',
        body: (
          <div className="space-y-3">
            <p>
              Unlike other wearables that offer only basic tracking, Obsidian Performance Gear delivers detailed 3D
              motion analysis and personalized feedback, empowering you to improve form, prevent injuries, and train
              with confidence.
            </p>
            <Image
              alt="Standout features"
              className="rounded-lg"
              height={600}
              loading="lazy"
              src="/obsidian/obsidian-competitive.jpg"
              width={800}
            />
          </div>
        ),
      },
      {
        heading: 'Live demo',
        body: (
          <div className="space-y-3">
            <p>
              Watch a brief demo of Obsidian Performance Gear tracking movement and offering real-time guidance during a
              workout.
            </p>
            <video className="w-full rounded shadow" controls preload="none" src="/obsidian/techdemo.mp4" />
          </div>
        ),
      },
      {
        heading: 'Next steps',
        body: (
          <p>
            We&apos;re continuing to fine-tune the hardware, expand sensor capabilities for more exercises, and enhance
            the form-correction algorithms ahead of a finished product.
          </p>
        ),
      },
    ],
  },

  /* ----------------------------------------------------------------------- */
  /* 4. UCL Capstone — Traffic-Sign Detection & Narration                     */
  /* ----------------------------------------------------------------------- */
  {
    slug: 'ucl-capstone',
    title: 'UCL Capstone: Traffic-Sign Detection & Narration',
    caption: 'New and elderly drivers miss road signs. This dashboard reads them aloud in real time.',
    tldr: "Trained a YOLOv5 pipeline on 100k+ images to recognize and narrate road signs in real time, outperforming Meta's benchmark model.",
    heroStat: {value: '100k+', label: "training images, outperforming Meta's benchmark model"},
    highlights: [
      'Trained YOLOv5 on 100k+ Mapillary traffic-sign images',
      'Final model reached 84.4% mAP and 0.81 F1 (4.0 GPA capstone)',
      'Custom hybrid cropping and RGB background-elimination preprocessing',
      'Real-time narration prototype running at ~15.5 FPS',
    ],
    techTags: ['Python', 'YOLOv5', 'OpenCV', 'Deep Learning', 'Computer Vision', 'Genetic Algorithm'],
    media: {type: 'video', src: '/UCLCapstone/trafficsign.mp4', poster: '/UCLCapstone/figure1.png', label: 'Live demo'},
    gallery: [
      {
        type: 'document',
        src: '/UCLCapstone/finalreport.pdf',
        label: 'Full report',
        poster: '/UCLCapstone/finaltrainingresults.png',
      },
      {type: 'image', src: '/UCLCapstone/finaltrainingresults.png'},
      {type: 'image', src: '/UCLCapstone/obstructions.png'},
    ],
    links: [{type: 'deck', label: 'Full report', href: '/UCLCapstone/finalreport.pdf'}],
    deepDive: [
      {
        heading: 'Introduction',
        body: (
          <div className="space-y-3">
            <p>
              Skills to drive motorised vehicles are acquired through experience and situational learning. This is
              concerning given the increased amount of roadside advertising and environmental clutter; studies show
              young drivers invest more attention in road advertising than highway-code signs. Driver-awareness
              technology like Tesla&apos;s Autopilot is proven but, given high vehicle cost and evidence that young
              drivers buy used cars, far from reaching the demographics that need it most.
            </p>
            <p>
              The aim is a low-cost solution that improves driver awareness via early audio alerts for oncoming traffic
              signs: a machine-learning algorithm that recognises, interprets and narrates the meaning of essential
              traffic signs in real time.
            </p>
          </div>
        ),
      },
      {
        heading: 'Literature review',
        body: (
          <p>
            A review of current methodologies compared traditional Colour Recognition and Shape Recognition against Deep
            Learning approaches. While colour and shape methods offer simplicity, they are prone to errors in adverse
            conditions; Deep Learning, particularly Convolutional Neural Networks, provides robust performance in
            diverse real-time scenarios.
          </p>
        ),
      },
      {
        heading: 'Methodology',
        body: (
          <div className="space-y-3">
            <p>
              <strong>Dataset selection.</strong> The Mapillary Traffic Sign Dataset (MTSD) was chosen for its 320,000+
              labelled images (52,000 fully annotated). Over 65% of signs were labelled &quot;other&quot; and removed to
              improve accuracy.
            </p>
            <p>
              <strong>Baseline performance.</strong> YOLOv5 was selected for fast, real-time prediction. With a 65/10/25
              train/validation/test split, baseline training ran 1400 epochs, achieving 23.2% mAP and 0.32 F1.
            </p>
            <p>
              <strong>Class reduction.</strong> Removing non-critical classes (237 removed → 164), grouping regional
              variants (→ 93), and dropping classes with fewer than 100 instances (→ 63) produced a balanced dataset.
            </p>
            <p>
              <strong>Image resizing & cropping.</strong> A hybrid cropping algorithm uses bounding boxes for initial
              crops, restores 20% of original dimensions if too small, and adds a 50-pixel tolerance so no critical
              features are lost.
            </p>
            <p>
              <strong>Background elimination.</strong> RGB thresholding (erosion, dilation, Gaussian blur, then colour
              thresholds) reduced background noise from sky, trees, and roads.
            </p>
            <p>
              <strong>Hyperparameter optimisation.</strong> A genetic algorithm tuned YOLOv5&apos;s 27 hyperparameters
              (10 variations per generation, 10 epochs each, averaging the top 5), improving mAP to 83.43%.
            </p>
            <p>
              <strong>Narration algorithm.</strong> The detection model was integrated with audio narration: predictions
              below 80% confidence are excluded, the highest-confidence sign is prioritised, and repeats are suppressed
              within a 10-second interval.
            </p>
          </div>
        ),
      },
      {
        heading: 'Results',
        body: (
          <div className="space-y-3">
            <ul className="list-inside list-disc space-y-1">
              <li>Baseline: 23.2% mAP, 0.32 F1.</li>
              <li>After class reduction: 34.07% mAP, 0.412 F1, with reduced training time.</li>
              <li>After hybrid cropping: 76.1% mAP, 0.75 F1.</li>
              <li>After hyperparameter optimisation: 83.43% mAP.</li>
              <li>Final retraining: 84.4% mAP, 0.81 F1.</li>
            </ul>
            <Image
              alt="Final training results"
              className="rounded-lg"
              height={400}
              loading="lazy"
              src="/UCLCapstone/finaltrainingresults.png"
              width={600}
            />
          </div>
        ),
      },
      {
        heading: 'Model testing & deployment',
        body: (
          <div className="space-y-3">
            <p>
              The model correctly identified signs with up to 50% obstruction, improved under reduced brightness (up to
              90% reduction lowered background noise), and stayed resilient in fog, rain, and snow with varying
              confidence. A large partially annotated dataset further verified performance via a binary confusion
              matrix.
            </p>
            <p>
              Integrated with the narration algorithm and tested with a laptop webcam plus simulated GPU support, the
              prototype reached an estimated 15.5 FPS, suitable for real-time use. The final model achieved 84.4% mAP
              and 0.81 F1, demonstrating strong potential to improve driver awareness and road safety.
            </p>
          </div>
        ),
      },
    ],
  },

  /* ----------------------------------------------------------------------- */
  /* 5. UCL UAS — Project Dragonfly (external, no detail page)                */
  /* ----------------------------------------------------------------------- */
  {
    slug: 'uas',
    title: 'UCL UAS: Project Dragonfly',
    caption: 'Guidance system for an autonomous helicopter (IMechE UAS Challenge).',
    heroStat: {value: 'Autonomous', label: 'helicopter guidance, built for the IMechE UAS Challenge'},
    media: {type: 'video', src: '/UAS/Heli.mp4', label: 'Flight test'},
    external: 'https://uclr-uas.notion.site/Project-DRAGONFLY-b92b4bb6e1b941aa9e0137fc74e913ca',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => projects.find(project => project.slug === slug);

// Slugs that have their own detail page (everything except external-only cards).
export const projectSlugs = projects.filter(project => !project.external).map(project => project.slug);
