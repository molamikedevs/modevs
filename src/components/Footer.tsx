
import { Code, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
		<footer className="py-12 border-t border-border/50">
			<div className="container max-w-5xl">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="text-center md:text-left">
						<a
							href="#home"
							className="font-space text-xl font-bold inline-block mb-2">
							<span className="text-gradient">Molamike.Devs</span>
							<span className="text-foreground terminal-text">/&gt;</span>
						</a>
						<p className="text-muted-foreground text-sm">
							Building digital experiences that leave a lasting impression.
						</p>
					</div>

					<nav>
						<ul className="flex flex-wrap justify-center gap-6">
							<li>
								<a
									href="#home"
									className="hover:text-primary transition-colors">
									Home
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="hover:text-primary transition-colors">
									About
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="hover:text-primary transition-colors">
									Projects
								</a>
							</li>
							<li>
								<a
									href="#skills"
									className="hover:text-primary transition-colors">
									Skills
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:text-primary transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
					<p className="flex items-center justify-center gap-1">
						Designed & Built with <Heart className="h-4 w-4 text-red-500" /> and{' '}
						<Code className="h-4 w-4 text-electric" />
					</p>
					<p className="mt-2">
						© {currentYear} Molamike Devs. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
};

export default Footer;
