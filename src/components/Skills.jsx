import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-10">
                    Skills
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {skills.map((group) => (
                        <div key={group.category}>
                            <h3 className="text-gray-600 text-xs uppercase tracking-widest mb-4">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-gray-300 border border-white/10 rounded px-3 py-1 hover:border-white/30 hover:text-white transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
