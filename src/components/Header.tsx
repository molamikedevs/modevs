
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from '@/constants'

const Header = () => {
	const [scrolled, setScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				scrolled
					? 'py-3 glass border-b border-border/50'
					: 'py-6 bg-transparent'
			)}>
			<div className="container flex items-center justify-between">
				<a href="#home" className="font-space text-xl font-bold">
					<span className="text-gradient">Molamike.Devs</span>
					<span className="text-foreground terminal-text">/&gt;</span>
				</a>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-1">
					<ul className="flex space-x-1">
						{navItems.map(item => (
							<li key={item.name}>
								<a
									href={item.href}
									className="px-4 py-2 rounded-md hover:bg-muted/50 transition-colors duration-300">
									{item.name}
								</a>
							</li>
						))}
					</ul>
					<ThemeToggle />
				</nav>

				{/* Mobile menu button */}
				<div className="flex items-center gap-2 md:hidden">
					<ThemeToggle />
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu">
						{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</Button>
				</div>
			</div>

			{/* Mobile menu */}
			{mobileMenuOpen && (
				<div className="md:hidden glass border-t border-border/50 mt-3">
					<nav className="container py-4">
						<ul className="flex flex-col space-y-2">
							{navItems.map(item => (
								<li key={item.name}>
									<a
										href={item.href}
										className="block px-4 py-2 rounded-md hover:bg-muted/50 transition-colors duration-300"
										onClick={() => setMobileMenuOpen(false)}>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			)}
		</header>
	)
}

export default Header;
