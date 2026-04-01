import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";

const Contact = () => {
	return (
		<section id="contact" className="scroll-mt-24 relative bg-[#020617] py-24 text-white">

			{/* Background Glow */}
			<div className="absolute top-10 left-10 h-[250px] w-[250px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
			<div className="absolute bottom-10 right-10 h-[250px] w-[250px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>

			<div className="mx-auto max-w-6xl px-6">

				<Reveal>
					<div className="rounded-2xl border border-slate-800 bg-[#0f172a] p-8 text-center transition-all duration-300 hover:shadow-xl">

						{/* Heading */}
						<h2 className="text-3xl font-bold sm:text-4xl">
							Let’s Build Something Meaningful
						</h2>

						{/* Subtitle */}
						<p className="mt-4 text-slate-400 max-w-xl mx-auto">
							I’m open to backend development opportunities, collaborations, and
							challenging projects. If you have something interesting, let’s talk.
						</p>

						{/* Email */}
						<div className="mt-6">
							<a
								href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnaarora747@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-lg font-medium text-cyan-400 hover:underline"
							>
								krishnaarora747@gmail.com
							</a>
						</div>

						{/* Social Icons */}
						<div className="mt-6 flex justify-center gap-6">

							<a
								href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnaarora747@gmail.com&subject=Opportunity%20Discussion"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition hover:scale-105 active:scale-95"
							>
								<Mail size={18} />
							</a>

							<a
								href="https://github.com/krishtech11"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition hover:scale-105 active:scale-95"
							>
								<Github size={18} />
							</a>

							<a
								href="https://linkedin.com/in/krishna-arora-83b87a26b"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition hover:scale-105 active:scale-95"
							>
								<Linkedin size={18} />
							</a>

						</div>

						{/* CTA */}
						<div className="mt-8">
							<a
								href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnaarora747@gmail.com&subject=Opportunity%20Discussion"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 hover:scale-105 active:scale-95"
							>
								Contact Me
							</a>
						</div>

					</div>
				</Reveal>

			</div>
		</section>
	);
};

export default Contact;