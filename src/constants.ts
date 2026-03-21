import cinequestVideo from './vedio/cinequest.mp4';
import supportdeskVideo from './vedio/Screen Recording 2026-03-10 224334.mp4';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  techStack: string[];
  challenges: string;
  image: string;
  video?: string;
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'cinequest',
    title: 'CineQuest',
    description: 'A React-based movie discovery platform with advanced filtering and real-time data integration.',
    longDescription: 'CineQuest is a high-performance movie discovery application designed for cinephiles. It leverages real-time data from TMDB API to provide up-to-the-minute information on trending films, upcoming releases, and detailed movie profiles.',
    problem: 'Users often find it overwhelming to discover new movies across multiple streaming platforms. Existing solutions are either too cluttered or lack real-time trending data.',
    solution: 'CineQuest solves this by providing a clean, focused interface that prioritizes discovery. By integrating with a robust Movie API, it offers a centralized hub for all movie-related information.',
    architecture: 'Built with React 19 and TypeScript, utilizing a component-based architecture for reusability. It uses the Fetch API for real-time data retrieval and Tailwind CSS for a responsive, modern UI.',
    keyFeatures: [
      'Real-time trending movies list',
      'Advanced search functionality',
      'Detailed movie information (cast, ratings, synopsis)',
      'Responsive design for all devices',
      'Smooth animations with Framer Motion'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'TMDB API', 'Framer Motion'],
    challenges: 'Handling asynchronous API calls while maintaining a smooth user experience was a key challenge. I implemented loading states and error handling to ensure the UI remains responsive.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2050&auto=format&fit=crop',
    video: cinequestVideo,
    liveUrl: 'https://cine-quest-pir4.vercel.app/',
    githubUrl: 'https://github.com/Govind-10090'
  },
  {
    id: 'support-desk',
    title: 'SupportDesk',
    description: 'An enterprise-grade helpdesk system with real-time ticket tracking and admin analytics.',
    longDescription: 'SupportDesk is a comprehensive support management system designed for high-velocity engineering teams. It streamlines the entire support lifecycle, from ticket creation to resolution tracking.',
    problem: 'Internal support requests often get lost in fragmented communication channels, leading to slow resolution times and lack of visibility.',
    solution: 'SupportDesk centralizes all support activities into a unified dashboard. It features a robust ticketing system, an integrated knowledge base, and advanced debugging tools.',
    architecture: 'The core is built with React and TypeScript, utilizing Firebase for real-time database updates and a custom analytics engine for the admin console.',
    keyFeatures: [
      'Real-time ticket status tracking',
      'Integrated Knowledge Base',
      'Admin Console with data visualization',
      'Role-based access control',
      'Automated priority management'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Chart.js'],
    challenges: 'Designing a system that balances information density for power users with intuitive navigation was a significant challenge.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    video: supportdeskVideo,
    githubUrl: 'https://github.com/Govind-10090'
  }
];

export const SKILLS = {
  frontend: [
    { name: 'React 19', icon: 'Code2' },
    { name: 'TypeScript', icon: 'Cpu' },
    { name: 'Next.js', icon: 'Layout' },
    { name: 'Tailwind CSS', icon: 'Wind' },
    { name: 'GSAP', icon: 'Activity' }
  ],
  tools: [
    { name: 'Figma', icon: 'Figma' },
    { name: 'Firebase', icon: 'Flame' },
    { name: 'Node.js', icon: 'Server' },
    { name: 'Git', icon: 'GitBranch' },
    { name: 'Vercel', icon: 'ExternalLink' }
  ]
};
