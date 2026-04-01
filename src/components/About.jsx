import React from "react";
import Reveal from "./Reveal";

const strengths = ["C++", "DSA", "Backend Systems", "SQL"];

const About = () => {
	return (
		<section id="about" scroll-mt-24 className="relative bg-[#020617] py-24 text-white">

			{/* Background Glow */}
			<div className="absolute top-20 -left-40 h-[300px] w-[300px] rounded-full bg-purple-500 opacity-20 blur-[120px]"></div>
			<div className="absolute bottom-20 -right-40 h-[300px] w-[300px] rounded-full bg-cyan-500 opacity-20 blur-[120px]"></div>

			<div className="mx-auto max-w-6xl px-6">

				{/* Heading */}
				<Reveal>
					<div className="mb-10">
						<h2 className="text-3xl font-bold sm:text-4xl">
							About Me
						</h2>
						<p className="mt-3 text-slate-400">
							Focused on backend systems, problem-solving, and scalable design.
						</p>
					</div>
				</Reveal>

				{/* Content Card */}
				<Reveal delay={0.2}>
					<div className="group rounded-xl border border-slate-800 bg-[#0f172a] p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

						{/* Strength Tags */}
						<div className="flex flex-wrap gap-2">
							{strengths.map((item) => (
								<span
									key={item}
									className="rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-400 hover:text-white"
								>
									{item}
								</span>
							))}
						</div>

						{/* Text */}
						<div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">

							<p>
								I’m a Software developer with a strong foundation in C++ and Data Structures & Algorithms. 
								I focus on building efficient systems and writing optimized logic that can handle real-world complexity.
							</p>

							<p>
								I work primarily with C++, Python, Flask, and SQL, developing backend systems, APIs, and structured workflows. 
								My approach is centered around clean design, scalability, and performance.
							</p>

							<p>
								I enjoy solving challenging problems and continuously improving my understanding of system design, 
								data handling, and core computer science fundamentals through hands-on projects.
							</p>

						</div>

					</div>
				</Reveal>

			</div>
		</section>
	);
};

export default About;