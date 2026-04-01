import React from "react";
import Reveal from "./Reveal";
import { Code, Database, Cpu, Wrench } from "lucide-react";

const skills = [
	{
		category: "Languages",
		icon: <Code size={18} />,
		items: ["C++", "Python", "SQL"],
	},
	{
		category: "Backend",
		icon: <Database size={18} />,
		items: ["Flask", "REST APIs", ],
	},
	{
		category: "Core",
		icon: <Cpu size={18} />,
		items: ["Data Structures", "Algorithms", "Problem Solving"],
	},
	{
		category: "Tools",
		icon: <Wrench size={18} />,
		items: ["Git", "GitHub", "Vercel", "Render"],
	},
];

const Skills = () => {
	return (
		<section id="skills" scroll-mt-24 	className="bg-[#020617] py-24 text-white">

			<div className="mx-auto max-w-6xl px-6">

				{/* Heading */}
				<Reveal>
					<div className="mb-16">
						<h2 className="text-3xl font-bold sm:text-4xl">
							Skills & Expertise
						</h2>
						<p className="mt-4 text-slate-400">
							Focused on backend development, problem-solving, and building efficient systems.
						</p>
					</div>
				</Reveal>

				{/* Grid */}
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

					{skills.map((skill, index) => (
						<Reveal key={skill.category} delay={index * 0.1}>
							<div className="group rounded-xl border border-slate-800 bg-[#0f172a] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">

								{/* Heading with Icon */}
								<h3 className="flex items-center gap-2 text-lg font-semibold text-white">
									{skill.icon}
									{skill.category}
								</h3>

								{/* Items */}
								<ul className="mt-4 space-y-2 text-sm text-slate-400">
									{skill.items.map((item) => (
										<li
											key={item}
											className="transition hover:text-white"
										>
											• {item}
										</li>
									))}
								</ul>

							</div>
						</Reveal>
					))}

				</div>

			</div>
		</section>
	);
};

export default Skills;