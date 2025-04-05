import { Project, ProjectTag } from '@/types'

export const tags: ProjectTag[] = [
	'All',
	'Frontend',
	'Backend',
	'Full Stack',
	'UI/UX',
]

export  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
];

export const projects: Project[] = [
	{
		id: 1,
		title: 'Cosmic Dashboard',
		description:
			'An interactive dashboard with data visualization, real-time updates, and a responsive design.',
		tags: ['Frontend', 'UI/UX'],
		image:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
		liveUrl: '#',
		githubUrl: '#',
	},
	{
		id: 2,
		title: 'Nexus API Platform',
		description:
			'A scalable RESTful API service with authentication, rate limiting, and comprehensive documentation.',
		tags: ['Backend'],
		image:
			'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000',
		liveUrl: '#',
		githubUrl: '#',
	},
	{
		id: 3,
		title: 'Quantum Commerce',
		description:
			'A full-featured e-commerce platform with secure payments, inventory management, and a sleek user interface.',
		tags: ['Full Stack', 'UI/UX'],
		image:
			'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000',
		liveUrl: '#',
		githubUrl: '#',
	},
	{
		id: 4,
		title: 'Cerebral Task Manager',
		description:
			'A productivity app featuring kanban boards, time tracking, and collaboration tools.',
		tags: ['Frontend', 'Full Stack'],
		image:
			'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000',
		liveUrl: '#',
		githubUrl: '#',
	},
	{
		id: 5,
		title: 'Synapse Social',
		description:
			'A social media platform with real-time messaging, content sharing, and personalized feeds.',
		tags: ['Full Stack', 'Backend'],
		image:
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000',
		liveUrl: '#',
		githubUrl: '#',
	},
	{
		id: 6,
		title: 'Atlas Weather',
		description:
			'A weather forecasting app with beautiful visualizations, location tracking, and accurate predictions.',
		tags: ['Frontend', 'UI/UX'],
		image:
			'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000',
		liveUrl: '#',
		githubUrl: '#',
	},
]

export const terminalLines = [
	{ text: 'Loading personal profile...', delay: 400 },
	{ text: 'Company: Molamike Devs', delay: 800 },
	{ text: 'Occupation: Junior Fullstack Developer', delay: 400 },
	{ text: 'Status: Ready to create digital experiences', delay: 400 },
]

export const skills = {
	frontend: [
		'React',
		'Next.js',
		'TypeScript',
		'HTML5/CSS3',
		'Tailwind CSS',
		'Redux',
		'Framer Motion',
		'Three.js',
		'GSAP',
		'Responsive Design',
		'Material UI',
		'CSS-in-JS',
		'Webpack',
		'Vite',
	],
	backend: [
		'Node.js',
		'Express',
		'Python',
		'Django',
		'GraphQL',
		'REST API',
		'MongoDB',
		'PostgreSQL',
		'Firebase',
		'AWS',
		'Docker',
		'Redis',
		'Authentication',
		'Microservices',
	],
	tools: [
		'Git',
		'GitHub Actions',
		'CI/CD',
		'Jest',
		'Testing Library',
		'Lighthouse',
		'Figma',
		'Adobe XD',
		'VS Code',
		'Postman',
		'Chrome DevTools',
		'Storybook',
	],
	soft: [
		'Problem Solving',
		'Team Collaboration',
		'Project Management',
		'Technical Writing',
		'Agile/Scrum',
		'Code Reviews',
		'Mentoring',
		'Communication',
		'Time Management',
		'User Empathy',
	],
}

export const experience = [
	{
		title: 'Senior Frontend Developer',
		company: 'TechNova Solutions',
		period: '2022 - Present',
		responsibilities: [
			"Led the development of the company's flagship SaaS platform UI",
			'Implemented advanced animations and micro-interactions using GSAP',
			'Optimized application performance, improving load times by 40%',
			'Mentored junior developers and conducted code reviews',
		],
	},
	{
		title: 'Full Stack Developer',
		company: 'Digital Horizons',
		period: '2019 - 2022',
		responsibilities: [
			'Built RESTful APIs and integrated with various third-party services',
			'Developed responsive web applications using React and Node.js',
			'Implemented authentication and authorization systems',
			'Participated in the entire product lifecycle from concept to deployment',
		],
	},
	{
		title: 'Web Developer',
		company: 'Creative Minds Agency',
		period: '2017 - 2019',
		responsibilities: [
			'Created interactive websites for clients across various industries',
			'Collaborated with designers to implement pixel-perfect interfaces',
			'Ensured cross-browser compatibility and mobile responsiveness',
			'Optimized website performance and SEO',
		],
	},
]

export const education = [
	{
		degree: 'Master of Science in Computer Science',
		institution: 'Tech University',
		period: '2015 - 2017',
		details: 'Specialized in Web Technologies and Human-Computer Interaction',
	},
	{
		degree: 'Bachelor of Science in Information Technology',
		institution: 'State University',
		period: '2011 - 2015',
		details: 'Graduated with honors, participated in multiple hackathons',
	},
]
