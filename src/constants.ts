import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Campus Entry-Exit System',
    description: 'A system I built to help a campus record who enters and leaves, so the team can follow daily movement more easily.',
    tags: ['BACKEND', 'TRACKING'],
    image: '/projects/entry-exit.jpg',
    link: '#',
  },
  {
    id: '02',
    title: 'QR Hotel Menu Experience',
    description: 'A simple QR menu for hotels, made so guests can open the menu on their phone and staff can update items without printing again.',
    tags: ['FULL STACK', 'HOTEL MENU'],
    image: '/projects/qrcode.jpg',
    link: '#',
  },
  {
    id: '03',
    title: 'Infrastructure Reporting Platform',
    description: 'A reporting tool for collecting infrastructure problems, keeping the reports organized, and helping teams respond faster.',
    tags: ['REPORTING', 'OPERATIONS'],
    image: '/projects/project-placeholder.svg',
    link: '#',
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'Frontend', level: 92 },
  { name: 'CSS', category: 'Frontend', level: 90 },
  { name: 'JavaScript', category: 'Frontend', level: 91 },
  { name: 'React.js', category: 'Frontend', level: 89 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 88 },
  // Backend
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'Express.js', category: 'Backend', level: 82 },
  { name: 'NestJS', category: 'Backend', level: 75 },
  { name: 'Django', category: 'Backend', level: 78 },
  { name: 'REST APIs', category: 'Backend', level: 84 },
  { name: 'Authentication', category: 'Backend', level: 78 },
  // Database
  { name: 'PostgreSQL', category: 'Database', level: 80 },
  { name: 'MongoDB', category: 'Database', level: 85 },
  { name: 'MySQL', category: 'Database', level: 78 },
  // Tools
  { name: 'Git', category: 'Tools', level: 90 },
  { name: 'GitHub', category: 'Tools', level: 88 },
  { name: 'Postman', category: 'Tools', level: 86 },
  { name: 'VS Code', category: 'Tools', level: 90 },
  { name: 'Docker', category: 'Tools', level: 72 },
  { name: 'Figma', category: 'Tools', level: 80 },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'What I enjoy',
    role: 'Building useful backend systems',
    period: 'CORE FOCUS',
    description: 'I like working on systems that make daily work easier, especially APIs, dashboards, and tools that people can depend on.'
  },
  {
    company: 'How I work',
    role: 'Simple ideas, clean code',
    period: 'METHODOLOGY',
    description: 'I try to keep every project clear, organized, and easy to improve later. I care about the small details because they make the final product better.'
  }
];
