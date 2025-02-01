import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';

import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';




/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Kieran Pereira - Portfolio',
  description: "Portfolio website of Kieran Pereira, an engineer specializing in robotics and AI.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = '/assets/KieranPereira_Resume.pdf';
  link.setAttribute('download', 'Kieran_Pereira_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Kieran!`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Mechanical Engineer</strong> specializing in <strong className="text-stone-100">robotics and AI</strong>, currently pursuing my MEng at <strong className="text-stone-100">UC Berkeley</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My work focuses on autonomous robotic systems, machine learning, and control algorithms for real-world applications.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/KieranPereira_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      onClick: handleResumeDownload,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a robotics and AI-focused mechanical engineer with experience in autonomous systems, control design, and software development. I enjoy applying my knowledge to real-world challenges in automation and AI-powered robotics.`,
  aboutItems: [
    {label: 'Location', text: 'Berkeley, CA', Icon: MapIcon},
    {label: 'Education', text: 'UC Berkeley (MEng) & UCL (BEng)', Icon: AcademicCapIcon},
    {label: 'Nationality', text: 'British / Australian', Icon: FlagIcon},
    {label: 'Interests', text: 'Robotics, AI, Autonomous Systems , Guitar', Icon: SparklesIcon},
    {label: 'Employment', text: 'Lockheed Martin, Airbus, HSBC', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'C++', level: 10 },
      { name: 'Python', level: 9 },
      { name: 'MATLAB', level: 8 },
      { name: 'Flutter', level: 6 },
    ],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow', level: 8 },
      { name: 'OpenCV', level: 7 },
      { name: 'PyTorch', level: 7 },
    ],
  },
  {
    name: 'Robotics & Embedded Systems',
    skills: [
      { name: 'ROS2', level: 9 },
      { name: 'Simulink', level: 8 },
      { name: 'ESP32', level: 8 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project 1',
    description: 'A description of the project.',
    url: 'https://example.com',
    image: porfolioImage1,
  },
  {
    title: 'Project 2',
    description: 'Another cool project.',
    url: 'https://example.com',
    image: porfolioImage2,
  },
  {
    title: 'Project 3',
    description: 'A description of the project.',
    url: 'https://example.com',
    image: porfolioImage3,
  },
  {
    title: 'Project 4',
    description: 'Another cool project.',
    url: 'https://example.com',
    image: porfolioImage4,
  },
  {
    title: 'Project 5',
    description: 'A description of the project.',
    url: 'https://example.com',
    image: porfolioImage5,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2024 - May 2025',
    location: 'University of California, Berkeley',
    imageSrc:  "/experience/Berkeley.png",
    title: 'MEng Mechanical Engineering (Robotics and Autonomous Systems)',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2020 - 2024',
    location: 'University College London (UCL)',
    imageSrc:  "/experience/UCL.png",
    title: 'BEng Mechanical Engineering with Intelligent Systems',
    content: <p>Capstone: Designed a neural network-powered car dashboard system that outperformed industry benchmarks.</p>,
  },
];


export const experience: TimelineItem[] = [
  {
    date: '2023 - 2024',
    location: 'Lockheed Martin',
    title: 'Software & Systems Engineer',
    imageSrc:  "/experience/Lockheed Martin.png",
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
    imageSrc:  "/experience/HSBC.png",
    content: (
      <ul>
        <li>Conducted statistical analysis identifying $300k in savings.</li>
        <li>Collaborated with international teams across seven countries for digital transformation projects.</li>
        <li>Led customer-facing discussions to streamline digital processes, reducing time-to-market by 11%.</li>
      </ul>
    ),
  },
  {
    date: '2022 - 2022',
    location: 'University College London',
    title: 'Machine Learning Researcher',
    imageSrc:  "/experience/UCL.png",
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
    title: 'Summer Work Experience',
    imageSrc: "/experience/Airbus.png",
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
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaboration, job opportunities, or tech discussions.',
  items: [
    { type: ContactType.LinkedIn, text: 'linkedin.com/in/kieranpereira1001', href: 'https://www.linkedin.com/in/kieranpereira1001' },
    { type: ContactType.Email, text: 'Personal: kieranpereira@hotmail.com', href: 'mailto:kieranpereira@hotmail.com' },
    { type: ContactType.Email, text: 'University: kieran_p@berkeley.edu', href: 'kieran_p@berkeley.edu' },
    
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/kieranpereira' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kieranpereira1001/' },
];