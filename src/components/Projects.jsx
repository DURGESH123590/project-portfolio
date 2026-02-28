import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolioData";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-10">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="border border-white/10 rounded-lg p-6 hover:border-white/25 transition-all duration-300 group bg-[#111]"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-white font-medium text-lg">{project.title}</h3>
                                <div className="flex gap-3 text-gray-500">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-white transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <FiGithub size={18} />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-white transition-colors"
                                            aria-label="Live site"
                                        >
                                            <FiExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs text-gray-400 border border-white/10 rounded px-2 py-0.5"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
