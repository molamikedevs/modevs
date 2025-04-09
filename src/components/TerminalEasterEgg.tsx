import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Command, X } from 'lucide-react'
import { CommandResponse } from '@/types'

const TerminalEasterEgg = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [command, setCommand] = useState('')
	const [commandHistory, setCommandHistory] = useState<string[]>([])
	const [historyIndex, setHistoryIndex] = useState(-1)
	const [output, setOutput] = useState<
		{ command: string; response: CommandResponse[] }[]
	>([
		{
			command: 'welcome',
			response: [
				{
					text: "Welcome to Molamike Devs' Terminal. Type 'help' to see available commands.",
				},
			],
		},
	])

	const terminalRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (isOpen && terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight
			inputRef.current?.focus()
		}
	}, [isOpen, output])

	const handleCommand = (e: React.FormEvent) => {
		e.preventDefault()
		if (!command.trim()) return

		const cmd = command.trim().toLowerCase()
		const newHistory = [cmd, ...commandHistory]
		setCommandHistory(newHistory)
		setHistoryIndex(-1)

		let response: CommandResponse[] = []

		switch (cmd) {
			case 'help':
				response = [
					{ text: 'Available commands:' },
					{ text: 'about - Learn about Molamike' },
					{ text: 'skills - View my technical skills' },
					{ text: 'contact - Get my contact information' },
					{ text: 'projects - List my projects' },
					{ text: 'clear - Clear the terminal' },
					{ text: 'exit - Close the terminal' },
				]
				break
			case 'about':
				response = [
					{ text: 'Molamike Devs - Junior Full Stack Developer' },
					{
						text: "I'm a passionate developer who specializes in creating immersive digital experiences.",
					},
					{
						text: "With over 5 years of experience, I've worked on a wide range of projects from e-commerce platforms to interactive dashboards.",
					},
				]
				break
			case 'skills':
				response = [
					{ text: 'Technical Skills:' },
					{ text: '- Frontend: React, Next.js, TypeScript, Three.js, GSAP' },
					{ text: '- Backend: Node.js, Express, Python, PostgreSQL' },
					{ text: '- Other: Git, Docker, AWS, CI/CD, Testing' },
				]
				break
			case 'contact':
				response = [
					{ text: 'Email: molamikedevs@gmail.com' },
					{ text: 'GitHub: https://github.com/molamikedevs' },
					{ text: 'X: https://github.com/molamikedevs' },
					{
						text: 'LinkedIn: https://www.linkedin.com/in/lamin-foday-23a263344/',
					},
				]
				break
			case 'projects':
				response = [
					{ text: 'Selected Projects:' },
					{ text: '1. Cosmic Dashboard - Interactive analytics platform' },
					{ text: '2. Nexus API Platform - Scalable backend service' },
					{ text: '3. Quantum Commerce - Full-stack e-commerce solution' },
					{ text: "Type 'projects --details [number]' to learn more" },
				]
				break
			case 'projects --details 1':
				response = [
					{ text: 'Cosmic Dashboard' },
					{
						text: 'An interactive dashboard with data visualization, real-time updates,',
					},
					{
						text: 'and a responsive design built with React, D3.js, and Firebase.',
					},
					{ text: 'View live: example.com/cosmic-dashboard' },
				]
				break
			case 'projects --details 2':
				response = [
					{ text: 'Nexus API Platform' },
					{
						text: 'A scalable RESTful API service with authentication, rate limiting,',
					},
					{
						text: 'and comprehensive documentation built with Node.js and Express.',
					},
					{ text: 'View code: https://github.com/molamikedevs' },
				]
				break
			case 'projects --details 3':
				response = [
					{ text: 'Quantum Commerce' },
					{ text: 'A full-featured e-commerce platform with secure payments,' },
					{
						text: 'inventory management, and a sleek user interface using MERN stack.',
					},
					{ text: 'View live: example.com/quantum-commerce' },
				]
				break
			case 'clear':
				setOutput([])
				setCommand('')
				return
			case 'exit':
				setIsOpen(false)
				return
			default:
				response = [
					{
						text: `Command not found: ${cmd}. Type 'help' for available commands.`,
						isError: true,
					},
				]
		}

		setOutput([...output, { command: cmd, response }])
		setCommand('')
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowUp') {
			e.preventDefault()
			if (historyIndex < commandHistory.length - 1) {
				const newIndex = historyIndex + 1
				setHistoryIndex(newIndex)
				setCommand(commandHistory[newIndex])
			}
		} else if (e.key === 'ArrowDown') {
			e.preventDefault()
			if (historyIndex > 0) {
				const newIndex = historyIndex - 1
				setHistoryIndex(newIndex)
				setCommand(commandHistory[newIndex])
			} else {
				setHistoryIndex(-1)
				setCommand('')
			}
		}
	}

	return (
		<>
			<Button
				variant="outline"
				size="icon"
				className="fixed bottom-6 right-6 z-50 rounded-full size-12 bg-background/80 border-primary/50 backdrop-blur-md hover:glow"
				onClick={() => setIsOpen(true)}>
				<Command className="h-5 w-5" />
			</Button>

			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
					<div className="bg-cyber dark:bg-cyber w-full max-w-2xl h-[500px] rounded-lg border border-border/50 flex flex-col overflow-hidden">
						<div className="flex items-center justify-between p-2 bg-cyber-light dark:bg-cyber-light">
							<div className="flex items-center gap-1.5">
								<div className="size-3 bg-red-500 rounded-full" />
								<div className="size-3 bg-yellow-500 rounded-full" />
								<div className="size-3 bg-green-500 rounded-full" />
							</div>
							<h3 className="text-sm font-mono">Molamike Devs' Terminal</h3>
							<Button
								variant="ghost"
								size="icon"
								className="h-7 w-7"
								onClick={() => setIsOpen(false)}>
								<X className="h-4 w-4" />
							</Button>
						</div>

						<div
							ref={terminalRef}
							className="flex-1 p-4 font-mono text-sm overflow-auto bg-gradient-to-br from-cyber/20 to-space/20 dark:from-cyber dark:to-space text-foreground dark:text-foreground/90">
							{output.map((item, index) => (
								<div key={index} className="mb-4">
									{item.command && (
										<div className="flex gap-2 text-muted-foreground dark:text-muted-foreground">
											<span className="text-electric">$</span>
											<span>{item.command}</span>
										</div>
									)}
									{item.response.map((res, i) => (
										<div
											key={i}
											className={`ml-4 ${
												res.isError
													? 'text-red-600 dark:text-red-400'
													: 'text-foreground dark:text-foreground/90'
											}`}>
											{res.text}
										</div>
									))}
								</div>
							))}

							<form
								onSubmit={handleCommand}
								className="flex gap-2 text-muted-foreground dark:text-muted-foreground">
								<span className="text-electric">$</span>
								<input
									ref={inputRef}
									type="text"
									value={command}
									onChange={e => setCommand(e.target.value)}
									onKeyDown={handleKeyDown}
									className="flex-1 bg-transparent outline-none text-foreground dark:text-foreground caret-electric"
									autoFocus
									autoComplete="off"
									spellCheck="false"
								/>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default TerminalEasterEgg
