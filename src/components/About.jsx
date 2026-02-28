import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-10">
                    About
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-gray-300 text-lg leading-relaxed">{personalInfo.bio}</p>
                    </div>

                    <div className="space-y-4 text-sm text-gray-500">
                        <div className="flex gap-4">
                            <span className="text-gray-600 w-24 shrink-0">Degree</span>
                            <span className="text-gray-300">B.Tech — Information Technology</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600 w-24 shrink-0">College</span>
                            <span className="text-gray-300">Priyadarshini College, Nagpur</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600 w-24 shrink-0">Role</span>
                            <span className="text-gray-300">Full Stack Developer</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600 w-24 shrink-0">Email</span>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                {personalInfo.email}
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
