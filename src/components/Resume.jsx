import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Resume() {
    return (
        <section id="resume" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-10">
                    Resume
                </h2>

                <div className="border border-white/10 rounded-lg p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#111]">
                    <div>
                        <h3 className="text-white text-xl font-medium mb-2">
                            Durgesh Girde — Full Stack Developer
                        </h3>
                        <p className="text-gray-500 text-sm">
                            B.Tech in Information Technology · Priyadarshini College, Nagpur
                        </p>
                    </div>

                    <a
                        href={personalInfo.resumeLink}
                        download
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors whitespace-nowrap"
                    >
                        <FiDownload size={16} />
                        Download Resume
                    </a>
                </div>

                {/* Optional inline preview */}
                <div className="mt-6 border border-white/10 rounded-lg overflow-hidden" style={{ height: "600px" }}>
                    <iframe
                        src={personalInfo.resumeLink}
                        title="Resume Preview"
                        className="w-full h-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
