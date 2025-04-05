// Define project types
export type ProjectTag = 'All' | 'Frontend' | 'Backend' | 'Full Stack' | 'UI/UX'

export type Project = {
	id: number
	title: string
	description: string
	tags: ProjectTag[]
	image: string
	liveUrl?: string
	githubUrl?: string
}

export type CommandResponse = {
    text: string;
    isError?: boolean;
};