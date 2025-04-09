
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import TerminalEasterEgg from "@/components/TerminalEasterEgg";
import ScrollProgressBar from '@/components/ScrollProgressBar'

const Index = () => {
	useEffect(() => {
		document.title = 'Molamike Devs | Full Stack Developer'
	}, [])

	return (
		<div className="min-h-screen flex flex-col">
			<ParticleBackground />
			<Header />
			<main className="flex-1">
				<ScrollProgressBar />
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<SkillsSection />
				<ContactSection />
			</main>
			<TerminalEasterEgg />
			<Footer />
		</div>
	)
}

export default Index;
