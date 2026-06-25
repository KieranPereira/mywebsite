import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import {ReactNode} from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/personal-front.jpg';
import profilepic from '../images/profilepic.jpg';
import {ContactSection, ContactType, DeckData, Hero, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';

/** Emphasis for key metrics/phrases inside experience summaries. */
const Key = ({children}: {children: ReactNode}) => (
  <strong className="font-semibold text-deck-text">{children}</strong>
);

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kieran Pereira - Portfolio',
  description: 'Portfolio website of Kieran Pereira, an engineer specializing in robotics and AI.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  Projects: 'projects',
  Experience: 'experience',
  Skills: 'skills',
  Contact: 'contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Deck / slide-deck presentation content
 */
export const deckData: DeckData = {
  kicker: 'Full-Stack Robotics Engineer',
  name: 'Kieran Pereira',
  coverBio: (
    <p className="text-base leading-relaxed text-deck-muted sm:text-lg">
      I build robots end to end: mechanical design, embedded hardware, control software, and the AI on top. MEng at{' '}
      <strong className="text-deck-text">UC Berkeley</strong>, BEng at <strong className="text-deck-text">UCL</strong>,
      with time at <strong className="text-deck-text">Lockheed Martin</strong>,{' '}
      <strong className="text-deck-text">Airbus</strong>, and <strong className="text-deck-text">HSBC</strong>.
    </p>
  ),
  aboutIntro: [
    "I'm a Master's graduate from UC Berkeley who thrives on using engineering to solve real problems.",
    'Everything I build starts with a real problem: from the largest robotic security fleet in the US, deployed to keep communities safe, to a swarm of ocean sensors that optimize global shipping routes.',
    'Working across the entire stack alongside sharp people, on some of the hardest problems out there, is the part I enjoy most.',
  ],
  contactTagline: 'Open to full-stack robotics roles: software, integration, and technical program management.',
  experienceLogos: [
    {name: 'Lockheed Martin', src: '/experience/Lockheed Martin.png'},
    {name: 'Airbus', src: '/experience/Airbus.png'},
    {name: 'UC Berkeley', src: '/experience/Berkeley.png'},
    {name: 'Undaunted', src: '/experience/Undaunted.png'},
  ],
  skillLogos: [
    {name: 'ROS 2', src: '/skills/ros.svg'},
    {name: 'C++', src: '/skills/cplusplus.svg'},
    {name: 'Python', src: '/skills/python.svg'},
    {name: 'MATLAB', src: '/skills/matlab.svg'},
    {name: 'Simulink', src: '/skills/simulink.svg'},
    {name: 'Fusion 360', src: '/skills/fusion360.svg'},
  ],
};

export const profileImage = profilepic;

export const resumePdfPath = '/assets/KieranPereira_Resume.pdf';

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Kieran`,
  description: (
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Full-stack robotics engineer:{' '}
      <strong className="text-stone-100">autonomous systems, controls, and embedded AI</strong>. MEng at UC Berkeley,
      BEng at UCL.
    </p>
  ),
  actions: [
    {
      href: resumePdfPath,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      download: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * Skills section
 *
 * Grouped tags/chips by category — no numeric levels. To add a skill, just add
 * its name to the relevant group (or add a new group).
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages & Frameworks',
    skills: [{name: 'C++', core: true}, {name: 'Python', core: true}, {name: 'MATLAB'}, {name: 'Flutter'}],
  },
  {
    name: 'Robotics & Embedded',
    skills: [
      {name: 'ROS2', core: true},
      {name: 'Simulink'},
      {name: 'ESP32'},
      {name: 'Microcontroller Design'},
      {name: 'I2C'},
    ],
  },
  {
    name: 'Controls & Autonomy',
    skills: [{name: 'Kalman Filtering', core: true}, {name: 'LQR'}, {name: 'PID'}, {name: 'Sensor Fusion'}],
  },
  {
    name: 'AI/ML',
    skills: [{name: 'Embedded AI', core: true}, {name: 'TensorFlow'}, {name: 'PyTorch'}, {name: 'OpenCV'}],
  },
  {
    name: 'Design & Manufacturing',
    skills: [
      {name: 'SolidWorks / Fusion 360', core: true},
      {name: 'PCB Design'},
      {name: 'DfMA Processes'},
      {name: 'CAD'},
    ],
  },
];

/**
 * Resume — Education
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2024 – Present',
    location: 'University of California, Berkeley',
    imageSrc: '/experience/Berkeley.png',
    title: 'MEng Mechanical Engineering (Robotics and Autonomous Systems)',
    caption: 'Robotics & autonomous systems, with a swarm-robotics capstone.',
    content: (
      <ul>
        <li>
          <strong>Relevant Coursework:</strong> Dynamics &amp; Control of Autonomous Systems, Design of Microprocessor
          Systems, Robotic Locomotion
        </li>
        <li>
          <strong>Capstone Project:</strong> Developed control systems for 100+ robotic ocean sensors. Conducted field
          testing with 18 units, validated mesh networks, and created automated calibration scripts using Python/MATLAB.
        </li>
        <li>Designed go-to-market strategies by validating customer requirements for iterative releases.</li>
      </ul>
    ),
  },
  {
    date: 'September 2020 – 2024',
    location: 'University College London (UCL)',
    imageSrc: '/experience/UCL.png',
    title: 'BEng Mechanical Engineering with Intelligent Systems',
    caption: 'First-class engineering degree with a 4.0 GPA capstone.',
    content: (
      <ul>
        <li>
          <strong>Capstone Project (4.0 GPA):</strong> Built a neural network-powered car dashboard system for traffic
          sign recognition. Trained on 100,000+ images and outperformed Meta&apos;s benchmark model.
        </li>
      </ul>
    ),
  },
];

/**
 * Resume — Work experience
 */
export const experience: TimelineItem[] = [
  {
    date: '2023 - 2024',
    location: 'Lockheed Martin',
    title: 'Software & Systems Engineer',
    imageSrc: '/experience/Lockheed Martin.png',
    caption: 'Real-time combat simulation at scale.',
    tldr: (
      <>
        Built networked simulation handling <Key>500+ entities</Key> and secured <Key>£100k</Key> for AI-based
        quality-control automation.
      </>
    ),
    content: (
      <ul>
        <li>Developed real-time combat simulation software for complex networked environments.</li>
        <li>Secured £100,000 in funding for AI-based quality control automation.</li>
        <li>Designed simulation software to handle over 500+ entities with real-time accuracy.</li>
      </ul>
    ),
  },
  {
    date: '2024',
    location: 'HSBC',
    title: 'Global Digital Strategy Analyst',
    imageSrc: '/experience/HSBC.png',
    caption: 'The business side of engineering: digital strategy across 7 countries.',
    tldr: (
      <>
        Identified <Key>$300k in savings</Key> and cut <Key>time-to-market by 11%</Key>.
      </>
    ),
    content: (
      <ul>
        <li>Conducted statistical analysis identifying $300k in savings.</li>
        <li>Collaborated with international teams across seven countries for digital transformation projects.</li>
        <li>Led customer-facing discussions to streamline digital processes, reducing time-to-market by 11%.</li>
      </ul>
    ),
  },
  {
    date: '2022',
    location: 'University College London',
    title: 'Machine Learning Researcher',
    imageSrc: '/experience/UCL.png',
    caption: 'Computer vision for healthcare.',
    tldr: (
      <>
        <Key>90% accuracy</Key> skin-condition detection, deployed with <Key>NHS clinicians</Key>.
      </>
    ),
    content: (
      <ul>
        <li>Developed an AI-based classification system for healthcare applications.</li>
        <li>Achieved 90% classification accuracy for skin condition detection using computer vision.</li>
        <li>Worked closely with NHS clinicians to implement AI in real-world medical research.</li>
      </ul>
    ),
  },
  {
    date: '2019',
    location: 'Airbus',
    title: 'Engineering Intern, Wing Aerodynamics',
    imageSrc: '/experience/Airbus.png',
    caption: 'First taste of aerospace engineering.',
    tldr: (
      <>
        Modeled new wing tech and led the <Key>1st-place team</Key> in an innovation competition.
      </>
    ),
    content: (
      <ul>
        <li>Analyzed performance of new wing technology using data analytics and mathematical modeling.</li>
        <li>Led a team that placed 1st in an innovation competition among 15 teams.</li>
        <li>Presented findings on aerodynamic optimizations to senior engineers.</li>
      </ul>
    ),
  },
];

/**
 * Contact section — links only (no form).
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaboration, job opportunities, or tech discussions.',
  items: [
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/kieranpereira1001',
      href: 'https://www.linkedin.com/in/kieranpereira1001',
    },
    {type: ContactType.Email, text: 'Personal: kieranpereira@hotmail.com', href: 'mailto:kieranpereira@hotmail.com'},
    {type: ContactType.Email, text: 'University: kieran_p@berkeley.edu', href: 'mailto:kieran_p@berkeley.edu'},
    {type: ContactType.Github, text: 'github.com/kieranpereira', href: 'https://github.com/kieranpereira'},
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kieranpereira'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kieranpereira1001/'},
];
