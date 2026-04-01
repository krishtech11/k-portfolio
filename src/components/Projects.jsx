import React from "react";
import Reveal from "./Reveal";

const projects = [
	{
		id: "uaos",
		title: "Unified AI Automation Operating System",
		description:
			"Backend-driven automation system for executing and managing workflows",
		points: [
			"Built using Flask, PostgreSQL, and task scheduling architecture",
			"Designed workflow execution engine with retry and timeout handling",
			"Implemented API-based system for automation tasks",
			"Managed execution logs and task tracking",
		],
		tech: ["Python", "Flask", "PostgreSQL"],
		github: "https://github.com/krishtech11/automation-os-core.git",   
		demo: "https://automation-os-frontend.vercel.app/", 
	},
	{
		id: "bci",
		title: "Brain Computer Interface Prototype",
		description: "Signal-based system for human-computer interaction",
		points: [
			"Processed input signals for command execution",
			"Designed real-time interaction logic",
			"Focused on system responsiveness and control flow",
		],
		tech: ["Python", "Signal Processing"],
		github: "https://github.com/krishtech11/EEG-Smart-Home-BCI.git",   
		demo: "", // leave empty if not available
	},
	{
		id: "stock-prediction",
		title: "Stock Price Prediction System",
		description: "LSTM-based model for analyzing stock trends",
		points: [
			"Implemented LSTM model using historical data",
			"Performed data preprocessing and feature preparation",
			"Evaluated prediction performance",
		],
		tech: ["Python", "LSTM", "ML"],
		github: "https://github.com/krishtech11/Stock-Market-Price-Prediction-and-Recommendation-System-.git",
		demo: "",
	},
];

const Projects = () => {
	return (
		<section id="projects" scroll-mt-24 className="relative bg-[#020617] py-24 text-white">

			{/* Background Glow */}
			<div className="absolute top-20 -left-40 h-[300px] w-[300px] rounded-full bg-cyan-500 opacity-20 blur-[120px]"></div>
			<div className="absolute bottom-20 -right-40 h-[300px] w-[300px] rounded-full bg-purple-500 opacity-20 blur-[120px]"></div>

			<div className="mx-auto max-w-6xl px-6">

				{/* Heading */}
				<Reveal>
					<div className="mb-16 max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Selected Projects
						</h2>
						<p className="mt-4 text-slate-400">
							Real-world systems and applications focused on backend logic,
							problem-solving, and scalable design.
						</p>
					</div>
				</Reveal>

				{/* Grid */}
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

					{projects.map((project, index) => (
						<Reveal key={project.id} delay={index * 0.15}>
							<div
								className={`group flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl 
								${project.id === "uaos"
										? "border-cyan-500 bg-[#0f172a]"
										: "border-slate-800 bg-[#020617]"
								}`}
							>

								{/* Featured Badge */}
								{project.id === "uaos" && (
									<span className="mb-3 inline-block rounded-full bg-cyan-500 px-3 py-1 text-xs font-medium text-black">
										Featured
									</span>
								)}

								<h3 className="text-lg font-semibold text-white">
									{project.title}
								</h3>

								<p className="mt-3 text-sm text-slate-400">
									{project.description}
								</p>

								<ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
									{project.points.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>

								<div className="mt-5 flex flex-wrap gap-2">
									{project.tech.map((item) => (
										<span
											key={item}
											className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-300 transition hover:border-cyan-400 hover:text-white"
										>
											{item}
										</span>
									))}
								</div>

								{/* Buttons */}
								<div className="mt-6 flex gap-3">

									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 hover:scale-105 active:scale-95"
									>
										GitHub
									</a>

									{/* Live Demo Button */}
									{project.demo && (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="rounded-md border border-slate-600 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:scale-105 active:scale-95"
										>
											Live Demo
										</a>
									)}

								</div>

							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;