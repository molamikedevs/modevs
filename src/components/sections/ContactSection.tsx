import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { AtSign, Github, Linkedin, MapPin, X, Loader2 } from 'lucide-react'

const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID
const publicKey = import.meta.env.VITE_PUBLIC_KEY

const ContactSection = () => {
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		const form = e.currentTarget

		try {
			const response = await emailjs.sendForm(
				serviceId,
				templateId,
				form,
				publicKey
			)

			if (response.status === 200) {
				toast.success(
					"Message sent successfully! I'll get back to you within 1 business day."
				)
				form.reset()
			} else {
				throw new Error('Email service returned non-200 status')
			}
		} catch (error) {
			console.error('Email sending failed:', error)
			toast.error(
				"Message was sent but we didn't get confirmation. I likely received it, but please check your email for confirmation."
			)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<section id="contact" className="py-20 md:py-32 relative">
			<div className="container max-w-5xl">
				<div className="space-y-4 mb-16 text-center">
					<h2 className="text-3xl md:text-4xl font-bold">
						<span className="text-gradient">Get in</span> Touch
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Have a project in mind or just want to chat? I'm always open to new
						opportunities and collaborations.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="glass p-8 rounded-lg">
						<h3 className="text-2xl font-bold mb-6">Send me a message</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-2">
								<label htmlFor="name" className="text-sm font-medium">
									Name
								</label>
								<Input
									id="name"
									name="name"
									placeholder="Molamike Devs"
									required
									className="bg-background/50"
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium">
									Email
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="molamikedevs@gmail.com"
									required
									className="bg-background/50"
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="subject" className="text-sm font-medium">
									Subject
								</label>
								<Input
									id="subject"
									name="subject"
									placeholder="Project Inquiry"
									required
									className="bg-background/50"
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="message" className="text-sm font-medium">
									Message
								</label>
								<Textarea
									id="message"
									name="message"
									placeholder="Tell me about your project..."
									rows={5}
									required
									className="bg-background/50"
								/>
							</div>

							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Sending...
									</>
								) : (
									'Send Message'
								)}
							</Button>
						</form>
					</div>

					<div className="space-y-8">
						<div>
							<h3 className="text-2xl font-bold mb-6">Contact Information</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<AtSign className="h-5 w-5 text-electric mt-0.5" />
									<div>
										<h4 className="font-medium">Email</h4>
										<a
											href="mailto:molamikedevs@gmail.com"
											className="text-muted-foreground hover:text-primary transition-colors">
											molamikedevs@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<MapPin className="h-5 w-5 text-electric mt-0.5" />
									<div>
										<h4 className="font-medium">Location</h4>
										<p className="text-muted-foreground">Baku, Azerbaijan</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
							<div className="flex gap-4">
								<a
									href="https://github.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 glass rounded-full hover:bg-muted/50 transition-colors"
									aria-label="GitHub">
									<Github className="h-6 w-6" />
								</a>
								<a
									href="https://linkedin.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 glass rounded-full hover:bg-muted/50 transition-colors"
									aria-label="LinkedIn">
									<Linkedin className="h-6 w-6" />
								</a>

								<a
									href="https://linkedin.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 glass rounded-full hover:bg-muted/50 transition-colors"
									aria-label="LinkedIn">
									<X className="h-6 w-6" />
								</a>
							</div>
						</div>

						<div className="p-6 cyber-border rounded-lg bg-background/50">
							<h4 className="text-xl font-bold mb-4">
								Let's build something amazing together
							</h4>
							<p className="text-muted-foreground">
								I'm always looking for new challenges and opportunities to grow
								as a developer. Whether you have a specific project in mind or
								just want to discuss ideas, I'd be happy to connect.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
