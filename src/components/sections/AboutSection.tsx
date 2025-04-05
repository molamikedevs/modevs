
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Server, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive, and interactive user interfaces using modern frameworks and libraries.",
      icon: <Code className="h-12 w-12 text-electric" />
    },
    {
      title: "Backend Development",
      description: "Building robust, scalable, and secure server-side applications and APIs.",
      icon: <Server className="h-12 w-12 text-electric" />
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end development, from database design to user interface, creating cohesive applications.",
      icon: <Globe className="h-12 w-12 text-electric" />
    },
    {
      title: "Creative Problem Solving",
      description: "Tackling complex technical challenges with innovative and efficient solutions.",
      icon: <Lightbulb className="h-12 w-12 text-electric" />
    }
  ];

  return (
		<section id="about" className="py-20 md:py-32 relative">
			<div className="container max-w-5xl">
				<div className="space-y-4 mb-16 text-center">
					<h2 className="text-3xl md:text-4xl font-bold">
						<span className="text-gradient">About</span> Me
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						I'm a passionate junior full-stack developer who thrives at the
						intersection of code and creativity.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					<div className="space-y-6">
						<h3 className="text-2xl font-bold">My Journey</h3>
						<p className="text-muted-foreground">
							With over 2 years of experience in web and application
							development, I've honed my skills across the entire development
							stack. My journey began with a fascination for creating digital
							experiences that not only function flawlessly but also engage and
							inspire users.
						</p>
						<p className="text-muted-foreground">
							I believe that great code should be both technically excellent and
							creatively designed. This philosophy guides my approach to every
							project, ensuring that I deliver solutions that are not just
							functional, but exceptional.
						</p>
					</div>

					<div className="glass p-6 rounded-lg space-y-4 h-fit">
						<h3 className="text-2xl font-bold">Tech Philosophy</h3>
						<ul className="space-y-2">
							<li className="flex gap-2">
								<span className="text-electric">▹</span>
								<span>Code should be both functional and beautiful</span>
							</li>
							<li className="flex gap-2">
								<span className="text-electric">▹</span>
								<span>User experience comes first</span>
							</li>
							<li className="flex gap-2">
								<span className="text-electric">▹</span>
								<span>Performance is a feature, not an afterthought</span>
							</li>
							<li className="flex gap-2">
								<span className="text-electric">▹</span>
								<span>Always learning, always improving</span>
							</li>
							<li className="flex gap-2">
								<span className="text-electric">▹</span>
								<span>Collaboration amplifies creativity</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="space-y-8">
					<h3 className="text-2xl font-bold text-center">What I Do</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{services.map((service, index) => (
							<Card
								key={index}
								className="border-border/50 bg-background/50 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
								<CardHeader>
									<div className="mb-4">{service.icon}</div>
									<CardTitle>{service.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{service.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
};

export default AboutSection;
