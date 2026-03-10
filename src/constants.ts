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
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    description: 'A modern productivity dashboard for managing daily tasks with priority tags and status tracking.',
    longDescription: 'Task Manager is a streamlined productivity tool designed to help individuals and teams organize their daily workflows. It focuses on simplicity and efficiency, allowing users to manage tasks with minimal friction.',
    problem: 'Many task management tools are over-engineered with features that distract from the core goal: getting things done. Users need a simple, intuitive way to track tasks without a steep learning curve.',
    solution: 'This application provides a minimalist dashboard where tasks can be created, categorized, and tracked with ease. It uses priority labels and status tracking to help users focus on what matters most.',
    architecture: 'The app is built using React and the Context API for global state management. This ensures that task data is consistent across the application without complex prop drilling. Local storage is used for data persistence.',
    keyFeatures: [
      'Task creation and editing',
      'Priority labeling (High, Medium, Low)',
      'Status tracking (To Do, In Progress, Done)',
      'Local storage persistence',
      'Clean, distraction-free UI'
    ],
    techStack: ['React', 'Context API', 'Tailwind CSS'],
    challenges: 'Implementing efficient state updates for a list of tasks was a key focus. I optimized the rendering process to ensure that adding or editing a task feels instantaneous.',
    image: 'https://picsum.photos/seed/taskmanager/800/600',
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
