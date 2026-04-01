import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import thisresume from "../assets/thisresume.pdf";

const Hero = () => {
	return (
		<section id="home" className="scroll-mt-24 w-full relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-[#0b0f19] text-white overflow-hidden">

			{/* Subtle Gradient Glow */}
			<div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 opacity-10 blur-[120px]"></div>

			{/* Grid Overlay */}
			<div className="absolute inset-0 w-full h-full overflow-hidden opacity-[0.02] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(to_right,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

			{/* Content */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.3 }}
				transition={{ duration: 0.8 }}
				className="relative z-10 text-center px-6 w-full max-w-4xl mx-auto"
			>

				{/* Role */}
				<p className=" tracking-tight text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">
					Software Developer
				</p>

				{/* Name */}
				<h1 className="tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
					Krishna Arora
				</h1>

				{/* Subtitle */}
				<TypeAnimation
					sequence={[
						"C++ • Python • SQL",
						2000,
						"Backend Systems • APIs",
						2000,
						"Scalable Design • DSA",
						2000,
					]}
					wrapper="p"
					speed={50}
					repeat={Infinity}
					className="tracking-tight mt-4 text-lg text-slate-400"
				/>

				{/* Description */}
				<p className="tracking-tight mt-6 text-slate-400 leading-relaxed">
					I build efficient backend systems and solve complex problems using
					scalable design and strong DSA foundations.
				</p>

				{/* Buttons */}
				<div className="mt-8 flex justify-center gap-4 flex-wrap">

					<a
						href={thisresume}
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:opacity-90 transition"
					>
						View Resume
					</a>

					<a
						href="#contact"
						className="px-6 py-3 rounded-md border border-white/20 text-sm text-slate-300 hover:bg-white/10 transition"
					>
						Contact Me
					</a>

				</div>
				<div className="mt-16 flex justify-center">
				<div className="w-[20px] h-[35px] border border-slate-500 rounded-full flex items-start justify-center p-1">
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="w-1 h-2 bg-slate-400 rounded-full"
					/>
				</div>
			</div>
			</motion.div>
		</section>
	);
};

export default Hero;