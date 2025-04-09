// components/ScrollProgressBar.tsx
import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'

const ScrollProgressBar = () => {
	const [scrollProgress, setScrollProgress] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const windowHeight = window.innerHeight
			const docHeight = document.documentElement.scrollHeight
			const totalScroll = docHeight - windowHeight
			const scrollPercent = (scrollTop / totalScroll) * 100
			setScrollProgress(scrollPercent)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const radius = 24
	const stroke = 4
	const normalizedRadius = radius - stroke * 2
	const circumference = 2 * Math.PI * normalizedRadius
	const offset = circumference - (scrollProgress / 100) * circumference

	return (
		<div className="fixed z-50 top-[15vh] right-10 transform -translate-x-1/2">
			<svg height={radius * 2} width={radius * 2}>
				<circle
					stroke="#e5e7eb"
					fill="transparent"
					strokeWidth={stroke}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
				<circle
					stroke="currentColor"
					fill="transparent"
					strokeWidth={stroke}
					strokeLinecap="round"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
					className="transition-all duration-200 ease-linear stroke-current text-electric dark:bg-primary/20"
				/>
			</svg>
			{scrollProgress >= 99 && (
				<div className="absolute inset-0 flex items-center justify-center">
					<Check className="text-electric dark:bg-primary/20 w-5 h-5" />
				</div>
			)}
		</div>
	)
}

export default ScrollProgressBar
