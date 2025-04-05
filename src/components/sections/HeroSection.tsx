
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import { terminalLines } from '@/constants'

const HeroSection = () => {
	const terminalTextRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!terminalTextRef.current) return

		let totalDelay = 500 // Initial delay

		terminalLines.forEach((line, index) => {
			const lineElement = document.createElement('div')
			lineElement.className = 'h-6 overflow-hidden' // Fixed height to prevent layout shift

			const textElement = document.createElement('div')
			textElement.className = 'opacity-0'
			textElement.textContent = `> ${line.text}`
			lineElement.appendChild(textElement)

			if (terminalTextRef.current) {
				terminalTextRef.current.appendChild(lineElement)
			}

			// Show line with typing effect
			setTimeout(() => {
				textElement.className = 'animate-fade-in-up'
			}, totalDelay)

			totalDelay += line.delay
		})
	}, [])

	return (
		<section
			id="home"
			className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden grid-bg">
			<div className="container flex flex-col items-start max-w-5xl">
				<div className="flex flex-col gap-6 w-full">
					<div className="flex items-center gap-2">
						<div className="size-4 bg-red-500 rounded-full" />
						<div className="size-4 bg-yellow-500 rounded-full" />
						<div className="size-4 bg-green-500 rounded-full" />
						<h2 className="text-sm font-mono ml-2">~ molamikedevs-portfolio</h2>
					</div>

					{/* Terminal text animation */}
					<div className="glass rounded-lg p-6 font-mono text-sm md:text-base leading-relaxed max-w-3xl w-full">
						<div ref={terminalTextRef} className="space-y-1"></div>
					</div>

					<div className="space-y-6 mt-6">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
							<span className="block">Code Meets Art.</span>
							<span className="text-gradient block">
								Building Digital Realities
							</span>
						</h1>

						<p className="text-lg md:text-xl max-w-2xl text-muted-foreground">
							Fullstack developer specializing in creating immersive digital
							experiences. I blend technology with creative design to build
							applications that leave a lasting impression.
						</p>

						<div className="flex flex-wrap gap-4">
							<Button
								onClick={() =>
									document
										.getElementById('projects')
										?.scrollIntoView({ behavior: 'smooth' })
								}
								className="rounded-md text-base px-8 py-6 bg-primary hover:bg-primary/90">
								View Projects
							</Button>
							<Button
								onClick={() =>
									document
										.getElementById('contact')
										?.scrollIntoView({ behavior: 'smooth' })
								}
								variant="outline"
								className="rounded-md text-base px-8 py-6">
								Contact Me
							</Button>
						</div>
					</div>
				</div>
			</div>
			<a
				href="#about"
				className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
				aria-label="Scroll to About section">
				<ArrowDownCircle className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
			</a>
		</section>
	)
}

export default HeroSection;
