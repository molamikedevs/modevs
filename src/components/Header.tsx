import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navItems } from '@/constants'
import { useLocation } from 'react-router-dom'

const Header = () => {
	const [scrolled, setScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const location = useLocation()

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Helper function to check if nav item is active
	const isActive = useCallback(
		(href: string) => {
			// Check if the href is a hash link (like #about)
			if (href.startsWith('#')) {
				return location.hash === href
			}
			return location.pathname === href
		},
		[location.pathname, location.hash]
	)

	// Effect to track title changes based on the current href
	useEffect(() => {
		const currentItem = navItems.find(item => isActive(item.href))
		if (currentItem) {
			document.title = `Molamike.Devs - ${currentItem.name}`
		}
	}, [isActive])

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
									className={cn(
										'px-4 py-2 rounded-md transition-colors duration-300',
										'hover:bg-muted/50 dark:hover:bg-muted/80',
										isActive(item.href) &&
											'bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary font-medium'
									)}>
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
										className={cn(
											'block px-4 py-2 rounded-md transition-colors duration-300',
											'hover:bg-muted/50 dark:hover:bg-muted/80',
											isActive(item.href) &&
												'bg-primary/10 dark:bg-primary/20 text-primary font-medium'
										)}
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

export default Header
