
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Project, ProjectTag } from '@/types'
import { projects, tags } from '@/constants'

const ProjectsSection = () => {
	const [activeTag, setActiveTag] = useState<ProjectTag>('All')

	const filteredProjects =
		activeTag === 'All'
			? projects
			: projects.filter(project => project.tags.includes(activeTag))

	return (
		<section id="projects" className="py-20 md:py-32 relative">
			<div className="container max-w-5xl">
				<div className="space-y-4 mb-16 text-center">
					<h2 className="text-3xl md:text-4xl font-bold">
						<span className="text-gradient">Featured</span> Projects
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Explore a selection of my work showcasing my technical skills and
						creative approach.
					</p>
				</div>

				<div className="flex justify-center flex-wrap gap-2 mb-12">
					{tags.map(tag => (
						<Button
							key={tag}
							variant={activeTag === tag ? 'default' : 'outline'}
							size="sm"
							onClick={() => setActiveTag(tag)}
							className="rounded-full">
							{tag}
						</Button>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map(project => (
						<Card
							key={project.id}
							className="overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 group">
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<CardHeader className="pt-6">
								<div className="flex justify-between items-start">
									<h3 className="text-xl font-bold">{project.title}</h3>
									<div className="flex gap-2">
										{project.tags.map((tag, index) => (
											<Badge key={index} variant="outline" className="text-xs">
												{tag}
											</Badge>
										))}
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{project.description}</p>
							</CardContent>
							<CardFooter className="flex justify-between">
								{project.githubUrl && (
									<Button variant="ghost" size="sm" asChild>
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer">
											<Github className="h-4 w-4 mr-2" /> Code
										</a>
									</Button>
								)}
								{project.liveUrl && (
									<Button variant="default" size="sm" asChild>
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer">
											<ExternalLink className="h-4 w-4 mr-2" /> Live Demo
										</a>
									</Button>
								)}
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection;
