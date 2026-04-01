import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const sections = ["home", "about", "projects", "skills", "contact"];

const Navbar = () => {
	const [active, setActive] = useState("home");
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false); // ✅ correct place

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			sections.forEach((section) => {
				const el = document.getElementById(section);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 120 && rect.bottom >= 120) {
						setActive(section);
					}
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-[#020617]/80 backdrop-blur border-b border-slate-800"
					: "bg-transparent"
			}`}
		>
			{/* 🔹 Top Bar */}
			<div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

				{/* Logo */}
				<a href="#home" className="flex items-center">
					<img
						src={logo}
						alt="KA Logo"
						className="h-7 md:h-8 w-auto object-contain transition duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
					/>
				</a>

				{/* Desktop Links */}
				<div className="hidden md:flex gap-8 text-sm">
					{sections.map((section) => (
						<a
							key={section}
							href={`#${section}`}
							className={`relative group transition ${
								active === section
									? "text-cyan-400"
									: "text-slate-400 hover:text-white"
							}`}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}

							<span
								className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
									active === section ? "w-full" : "w-0 group-hover:w-full"
								}`}
							></span>
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-white text-2xl"
					onClick={() => setOpen(!open)}
				>
					☰
				</button>
			</div>

			{/* 🔹 Mobile Dropdown (OUTSIDE container ✅) */}
			{open && (
				<div className="md:hidden bg-[#020617] border-t border-slate-800 px-6 py-4 space-y-4">
					{sections.map((section) => (
						<a
							key={section}
							href={`#${section}`}
							onClick={() => setOpen(false)}
							className="block text-slate-300 hover:text-cyan-400 transition"
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</a>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;