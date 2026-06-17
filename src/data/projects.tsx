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
  /* 1. Berkeley CAPTAIN — Overview & ROS2 Autonomy Stack                     */
  /* ----------------------------------------------------------------------- */
  {
    slug: 'taflab',
    title: 'Berkeley CAPTAIN: Autonomous Ocean-Sensor Swarm',
    caption: 'Ships burn $65B a year fighting waves nobody measures. We built a sensor swarm that measures them.',
    tldr: 'My Berkeley capstone (with the TAFLAB lab): a swarm of self-powered autonomous sailboats that map wave conditions for fuel-saving ship routing. I owned the guidance, navigation and control, built on a modular ROS2 stack.',
    heroStat: {value: '~30%', label: 'of shipping fuel saved through wave-aware routing'},
    highlights: [
      'Owned the guidance, navigation & control for each autonomous sailboat',
      'Designed a modular, real-time ROS2 node architecture for waypoint handling, path planning and actuation',
      'A* global planner that respects the no-sail zone and auto-inserts tacking waypoints',
      'Built to scale from a single vessel to a coordinated, mesh-networked swarm',
    ],
    techTags: ['ROS2', 'C++', 'Python', 'A* Path Planning', 'LQI Control', 'Sensor Fusion', 'XBee Mesh', 'ESP32'],
    media: {
      type: 'video',
      src: '/capstone/frontvideo.mp4',
      poster: '/capstone/capstone-title.jpg',
      label: 'Field test',
    },
    gallery: [
      {type: 'image', src: '/capstone/ros2-node-architecture.png'},
      {type: 'image', src: '/capstone/capstone-swarm.jpg'},
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
              Shipping carries 80% of global trade by volume, and fuel is 50–60% of a ship&apos;s operating budget. Around
              30% of that fuel is spent simply overcoming wave forces, roughly $65B a year, because routes are planned as
              straight lines through seas nobody is measuring in real time.
            </p>
            <p>
              The fix is wave-aware routing, but it needs dense, live ocean data. Weather balloons, stationary buoys and
              million-dollar USVs each cover only part of the problem and none can blanket an area in a low-cost grid. We
              estimate live route optimization could save the industry on the order of $6.5B/year.
            </p>
          </div>
        ),
      },
      {
        heading: 'Our solution',
        body: (
          <div className="space-y-3">
            <p>
              We built a swarm of autonomous, self-powered sailboats that position themselves to measure tidal forces,
              currents, wave height and weather, the inputs that feed wave-prediction and routing models. It blends the
              mapping fidelity of a USV, the low cost of a buoy, and the broad coverage of a weather balloon.
            </p>
            <p>
              Working with the TAFLAB lab at UC Berkeley, my focus was the guidance, navigation and control: making each
              boat sail itself reliably toward its waypoints, and designing the software so it scales cleanly from one
              vessel to a coordinated, mesh-networked fleet.
            </p>
            <Image
              alt="Autonomous sailboat swarm"
              className="rounded-lg"
              height={400}
              loading="lazy"
              src="/capstone/capstone-swarm.jpg"
              width={600}
            />
          </div>
        ),
      },
      {
        heading: 'Sailing under hard dynamic constraints',
        body: (
          <div className="space-y-3">
            <p>
              Unlike a motorboat, a sailboat is underactuated, it relies on the wind, so the autonomy has to be
              wind-aware at every step. The central constraint is the <strong>no-sail zone</strong>, a band roughly 30–45°
              directly upwind where the sail produces no forward thrust.
            </p>
            <p>
              A boat therefore can&apos;t head straight at a goal that sits upwind; it has to <strong>tack</strong> (zigzag
              across the wind) to get there, and <strong>jibe</strong> to turn quickly downwind. My planner screens every
              candidate heading against the no-sail zone and inserts intermediate tacking waypoints automatically, pairing
              an A* global planner with the on-board controller.
            </p>
          </div>
        ),
      },
      {
        heading: 'A modular, real-time ROS2 architecture',
        body: (
          <div className="space-y-3">
            <p>
              I implemented the autonomy on ROS2, which splits functionality into independent nodes that talk over a
              publish/subscribe bus. That modularity is exactly what an autonomous marine system needs: sensing, planning
              and actuation run as asynchronous processes, individual nodes can be simulated or debugged in isolation, and
              the same design scales out to multiple vessels.
            </p>
            <Image
              alt="ROS2-based modular node architecture for waypoint management, path planning and low-level control"
              className="rounded-lg"
              height={400}
              loading="lazy"
              src="/capstone/ros2-node-architecture.png"
              width={700}
            />
            <p>Navigation is organised into three layers, with sail control running independently:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Waypoint Queue node:</strong> receives targets from the ground station and manages them in a
                dynamic queue, stripping conflicts and duplicates.
              </li>
              <li>
                <strong>Coordinate Calculations node:</strong> turns the queue into an optimized trajectory, handling
                tacking/jibing and recovery from getting caught in the no-sail zone (&quot;in irons&quot;).
              </li>
              <li>
                <strong>Rudder Servo Control node:</strong> issues low-level LQI heading commands to the actuators.
              </li>
              <li>
                <strong>Sail Servo node:</strong> subscribes to wind angle and heading and trims the sail in its own
                closed loop.
              </li>
            </ul>
            <p>
              Clean separation between high-level planning and low-level execution means every layer can react in real
              time to new data without the others getting in the way.
            </p>
          </div>
        ),
      },
      {
        heading: 'Scaling to a coordinated swarm',
        body: (
          <p>
            To coordinate the fleet and stay in touch with shore, the system uses an XBee-based mesh network in a
            master/client model: the shoreside radio broadcasts data requests and each boat replies with its GPS,
            environmental readings and system health. We validated stable, low-latency communication across ten boats at
            ranges up to 200 m, enough for the formation and relay setups our design needs, with the architecture built to
            scale as more boats join. The detailed field-testing and state-estimation work lives on the next slide.
          </p>
        ),
      },
    ],
  },

  /* ----------------------------------------------------------------------- */
  /* 2. Berkeley CAPTAIN — Field Testing & Kalman Filtering                   */
  /* ----------------------------------------------------------------------- */
  {
    slug: 'captain-field-testing',
    title: 'Berkeley CAPTAIN: Field Testing & Kalman Filtering',
    caption: 'A control loop is only as good as the noisy sensors feeding it. Here is how I made the autonomy survive the real ocean.',
    tldr: 'The validation half of my Berkeley capstone: hardware-in-the-loop testing, low-pass + Kalman filtering to tame IMU and wind-vane noise, an LQI controller, and full-autonomy field trials at the Berkeley Marina.',
    heroStat: {value: 'Live sea trials', label: 'full autonomy stack validated on the water at the Berkeley Marina'},
    highlights: [
      'De-risked the stack with hardware-in-the-loop testing before any on-water run',
      'Cut IMU & wind-vane noise with a combined low-pass + 1-D Kalman filter',
      'Tuned an LQI controller to kill steady-state heading error with minimal actuator effort',
      'Field-tested full autonomy: the boat planned and executed its own tack at the Berkeley Marina',
    ],
    techTags: ['Kalman Filter', 'LQI Control', 'Hardware-in-the-Loop', 'ROS2', 'Sensor Fusion', 'Simulation', 'Python'],
    media: {
      type: 'image',
      src: '/capstone/marina-launch.png',
      poster: '/capstone/marina-launch.png',
      label: 'Berkeley Marina trial',
    },
    gallery: [
      {type: 'image', src: '/capstone/kalman-noise-reduction.png'},
      {type: 'image', src: '/capstone/simulation-gui.png'},
      {type: 'image', src: '/capstone/capstone-workshop.jpg'},
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
        heading: 'Hardware-in-the-loop testing',
        body: (
          <div className="space-y-3">
            <p>
              Before putting anything on the water, I validated the stack with hardware-in-the-loop (HIL) testing: real
              physical servos on a test rig driven by the full ROS2 autonomy stack, with the remaining sensor inputs
              simulated. That let me watch real actuation behaviour and exercise the control logic without burning time at
              the marina.
            </p>
            <p>HIL surfaced exactly the kind of bug that ruins a field day:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Inconsistent coordinate conventions across servo models, fixed by recalibrating the control output.</li>
              <li>The need for command smoothing and rate limiting to avoid mechanical stress on the actuators.</li>
              <li>
                Significant sensor noise, especially in the wind-vane and IMU, which pushed me to build a dedicated
                noise-preprocessing stage before that data ever touched the controller.
              </li>
            </ul>
          </div>
        ),
      },
      {
        heading: 'Taming sensor noise with Kalman filtering',
        body: (
          <div className="space-y-3">
            <p>
              Raw IMU and wind-vane signals were far too noisy to feed a controller directly, jittery inputs turn into
              jittery, energy-wasting steering. I combined a <strong>low-pass filter</strong> with a{' '}
              <strong>one-dimensional Kalman filter</strong> to attenuate the high-frequency noise while preserving the
              underlying trend, then applied the same approach to the wind-vane.
            </p>
            <Image
              alt="Steady-state IMU measurements: raw signal versus low-pass + 1-D Kalman filter output"
              className="rounded-lg"
              height={350}
              loading="lazy"
              src="/capstone/kalman-noise-reduction.png"
              width={700}
            />
            <p>
              The result (above) is a clean, stable estimate from a badly noisy raw signal, which is what made smooth
              closed-loop control possible. On the sail side, a Kalman-filtered wind loop kept the wind-angle estimate
              steady enough to hold the sail near its optimal driving angle through gusts.
            </p>
          </div>
        ),
      },
      {
        heading: 'LQI closed-loop control',
        body: (
          <div className="space-y-3">
            <p>
              For rudder and sail actuation I started from a Linear Quadratic Regulator (LQR), which computes an optimal
              state-feedback law balancing heading accuracy against actuator effort. HIL testing showed each actuator had
              a persistent steady-state error, so I added an integral term, turning it into a{' '}
              <strong>Linear Quadratic Integrator (LQI)</strong> that drives that error to zero over time.
            </p>
            <p>
              I tuned the state and control weights iteratively in simulation. Penalising control action harder produced
              smoother rudder commands, fewer high-frequency oscillations and lower energy use, which matters for
              long-duration missions, while the integral term absorbed slow disturbances like gradual wind shifts and
              current drift without aggressive steering.
            </p>
          </div>
        ),
      },
      {
        heading: 'Full-system simulation',
        body: (
          <div className="space-y-3">
            <p>
              After HIL, I built a simulated environment on the same ROS2 framework to generate wind patterns, target
              waypoints and heading anomalies, a virtual test bed for exercising both global and local path planning and
              running the LQI heading loop under the conditions we&apos;d see on the water, without monopolising marina
              time.
            </p>
            <Image
              alt="Simulation GUI showing commanded sail and rudder angles"
              className="rounded-lg"
              height={360}
              loading="lazy"
              src="/capstone/simulation-gui.png"
              width={420}
            />
            <p>
              Dedicated ROS2 logging nodes captured rudder and sail commands in real time, confirming heading corrections
              and sail trim matched design intent even through abrupt transients, and exposing subtle estimator drift and
              rate-limit issues I could tune immediately. That tight loop shrank the debug cycle dramatically.
            </p>
          </div>
        ),
      },
      {
        heading: 'On-the-water field trials',
        body: (
          <div className="space-y-3">
            <p>
              In a day-long series of trials at the Berkeley Marina, I tested the full autonomy stack by assigning
              waypoints placed deliberately upwind so a tack would be unavoidable, and logged every sensor channel. The
              GPS track shows the boat advancing on the first close-hauled leg, easing off as it reached the edge of the
              no-sail zone, then pivoting through the tack at a controlled rate before accelerating onto the new heading.
            </p>
            <Image
              alt="The sailboat beginning its voyage from the Berkeley Marina autonomously"
              className="rounded-lg"
              height={400}
              loading="lazy"
              src="/capstone/marina-launch.png"
              width={600}
            />
            <p>
              Post-mission log analysis confirmed the autonomy correctly recognised the tack was needed and split the
              original waypoint into two intermediate ones, while the Kalman-filtered sail loop held the wind angle near
              optimal throughout. Together the planner, LQI rudder loop and autonomous sail control delivered reliable
              navigation in real wind, executing a complex maneuver with no shore-side intervention.
            </p>
          </div>
        ),
      },
      {
        heading: "What's next",
        body: (
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong>Adaptive gain scheduling:</strong> e.g. shift the LQI weights toward low actuator effort when
              battery falls below a threshold to extend mission life.
            </li>
            <li>
              <strong>Longer-endurance trials:</strong> move from marina runs toward offshore, multi-day testing.
            </li>
            <li>
              <strong>Tighter swarm coordination:</strong> fleets sharing live environmental data to re-plan routes
              together in real time.
            </li>
          </ul>
        ),
      },
    ],
  },

  /* ----------------------------------------------------------------------- */
  /* 3. Berkeley Robotics Lab — Quadrupedal Running Robot                     */
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
  /* 4. Obsidian Performance Gear (OPG)                                       */
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
  /* 5. UCL Capstone — Traffic-Sign Detection & Narration                     */
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
  /* 6. UCL UAS — Project Dragonfly (external, no detail page)                */
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
