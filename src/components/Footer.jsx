import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-10 px-6 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>

            <div className="flex gap-5 text-gray-500">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                    className="hover:text-white transition-colors" aria-label="GitHub">
                    <FiGithub size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                    className="hover:text-white transition-colors" aria-label="LinkedIn">
                    <FiLinkedin size={18} />
                </a>
                <a href={`mailto:${personalInfo.email}`}
                    className="hover:text-white transition-colors" aria-label="Email">
                    <FiMail size={18} />
                </a>
            </div>
        </footer>
    );
}
