import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

const navLinks = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5" : "bg-transparent"
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" className="text-white font-semibold text-lg tracking-tight">
                    {personalInfo.name.split(" ")[0]}
                    <span className="text-gray-500">.</span>
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-gray-400 hover:text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="block w-5 h-px bg-current mb-1.5 transition-all"></span>
                    <span className="block w-5 h-px bg-current mb-1.5"></span>
                    <span className="block w-5 h-px bg-current"></span>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#111] border-t border-white/5 px-6 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
