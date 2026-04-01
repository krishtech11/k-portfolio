import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#020617] border-t border-slate-800 py-8 text-center text-slate-400 text-sm">

			<p>© {new Date().getFullYear()} Krishna Arora</p>

			<p className="mt-2 text-slate-500">
				Built with React, Tailwind & Framer Motion
			</p>

		</footer>
	);
};

export default Footer;