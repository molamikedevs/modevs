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
		title: 'Admin Dashboard',
		description:
			'🚀 A modern Admin Dashboard built with Syncfusion components, featuring interactive charts, grids, calendars, and more. Currently, the app uses dummy data, but it will be upgraded in the future with full backend functionality.',
		tags: ['Frontend', 'UI/UX'],
		image: 'https://i.imgur.com/o1O9TJA.png',
		liveUrl: 'https://admin-dashboard-bsjq.onrender.com',
		githubUrl: 'https://github.com/molamikedevs/admin_dashboard.git',
	},
	{
		id: 2,
		title: 'Movie Trends',
		description:
			'🚀 A modern web application that displays the latest trending movies, their ratings, and the top five most searched movies. Powered by Appwrite for backend operations and the TMDb API for movie data.',
		tags: ['Backend'],
		image: 'https://i.imgur.com/DNKhZOz.png',
		liveUrl: 'https://movies-app-4bz6.onrender.com',
		githubUrl: 'https://github.com/molamikedevs/movies-trends.git',
	},
	{
		id: 3,
		title: 'BrandNest',
		description:
			'A website for a fictional company, BrandNest, that specializes in branding and design. The site features a modern layout, smooth animations, and a responsive design.',
		tags: ['Full Stack', 'UI/UX'],
		image: '/images/brand.png',
		liveUrl: 'https://brandnest-site-builder.vercel.app/',
		githubUrl: '#',
	},
	{
		id: 4,
		title: 'Photography Portfolio',
		description:
			'A photography portfolio, that shows top clients and a book session cta, aiming to make it .',
		tags: ['Frontend', 'Full Stack'],
		image: '/images/med.png',
		liveUrl: 'https://med-bee-concept.vercel.app/',
		githubUrl: 'https://github.com/molamikedevs/photo-muse-portfolio.git',
	},
	{
		id: 5,
		title: 'YuSocial',
		description:
			'A social media platform with real-time notification, comment on post, save posts, like and dislike posts, follow and unfollow user, infinite scrolling and personalized feeds with top creators.',
		tags: ['Full Stack', 'Backend'],
		image: 'https://i.imgur.com/MTiHWip.png',
		liveUrl: 'https://social-app-henna-theta.vercel.app/',
		githubUrl: 'https://github.com/molamikedevs/social-app.git',
	},
	{
		id: 6,
		title: 'Xora Landing Page',
		description:
			'Xora Landing Page is a sleek and modern React-based web page designed to showcase products, services, or businesses with an engaging user experience. The page is built with a focus on smooth animations, responsive design, and high performance.',
		tags: ['UI/UX'],
		image: 'https://i.imgur.com/MJh6U5A.png',
		liveUrl: 'https://xora-git-master-molamikedevs-projects.vercel.app/',
		githubUrl: 'https://github.com/molamikedevs/xora-landding-page.git',
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
