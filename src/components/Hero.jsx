import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <p className="text-gray-500 text-sm mb-4 tracking-widest uppercase">
                    Hey, I'm
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                    {personalInfo.name}
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6">
                    {personalInfo.title}
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mb-10 leading-relaxed">
                    {personalInfo.tagline}
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded hover:border-white/50 transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
