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
    description: 'A movie discovery platform that lets users explore trending films and search movies through an API.',
    longDescription: 'CineQuest is a high-performance movie discovery application designed for cinephiles who want a seamless way to explore the vast world of cinema. It leverages real-time data to provide up-to-the-minute information on trending films, upcoming releases, and detailed movie profiles.',
    problem: 'Users often find it overwhelming to discover new movies across multiple streaming platforms. Existing solutions are either too cluttered or lack real-time trending data, making it hard to find what to watch next.',
    solution: 'CineQuest solves this by providing a clean, focused interface that prioritizes discovery. By integrating with a robust Movie API, it offers a centralized hub for all movie-related information, complete with powerful search and filtering capabilities.',
    architecture: 'Built with React for the frontend, utilizing a component-based architecture for reusability. It uses the Fetch API for real-time data retrieval from a third-party Movie API and Tailwind CSS for a responsive, modern UI.',
    keyFeatures: [
      'Real-time trending movies list',
      'Advanced search functionality',
      'Detailed movie information (cast, ratings, synopsis)',
      'Responsive design for all devices',
      'Smooth animations and transitions'
    ],
    techStack: ['React', 'Movie API', 'Tailwind CSS', 'Vercel'],
    challenges: 'One of the main challenges was handling the asynchronous nature of API calls while maintaining a smooth user experience. I implemented loading states and error handling to ensure the UI remains responsive even during network delays.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2050&auto=format&fit=crop',
    video: 'https://vjs.zencdn.net/v/oceans.mp4', // Placeholder video for CineQuest
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'support-desk',
    title: 'SupportDesk',
    description: 'An enterprise-grade helpdesk system with real-time ticket tracking, knowledge base, and admin analytics.',
    longDescription: 'SupportDesk is a comprehensive support management system designed for high-velocity engineering teams. It streamlines the entire support lifecycle, from ticket creation and automated prioritization to resolution tracking and system-wide analytics.',
    problem: 'Internal support requests often get lost in fragmented communication channels, leading to slow resolution times and lack of visibility into recurring system issues.',
    solution: 'SupportDesk centralizes all support activities into a unified dashboard. It features a robust ticketing system, an integrated knowledge base for self-service, and advanced debugging tools for engineers, all powered by a real-time data layer.',
    architecture: 'The application follows a modular micro-frontend architecture. The core is built with React and TypeScript, utilizing a real-time database for live ticket updates and a custom analytics engine for the admin console.',
    keyFeatures: [
      'Real-time ticket status tracking',
      'Integrated Knowledge Base',
      'Advanced API Debugger & Log Analyzer',
      'Admin Console with data visualization',
      'Role-based access control (Admin/Agent/User)',
      'Automated priority management'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Firebase'],
    challenges: 'Designing a system that balances information density for power users with intuitive navigation for casual users was a significant challenge. I implemented a multi-layered dashboard approach that surfaces critical data while keeping advanced tools just a click away.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    video: 'https://vjs.zencdn.net/v/oceans.mp4', // Placeholder for the shared video
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const SKILLS = {
  frontend: [
    { name: 'React', icon: 'Code2' },
    { name: 'JavaScript', icon: 'Cpu' },
    { name: 'HTML', icon: 'Layout' },
    { name: 'CSS', icon: 'Palette' },
    { name: 'Tailwind CSS', icon: 'Wind' }
  ],
  tools: [
    { name: 'Git', icon: 'GitBranch' },
    { name: 'GitHub', icon: 'Github' },
    { name: 'Firebase', icon: 'Flame' },
    { name: 'Vercel', icon: 'ExternalLink' },
    { name: 'Figma', icon: 'Figma' }
  ]
};
