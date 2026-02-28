import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data).toString(),
        });

        if (response.ok) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-10">
                    Contact
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            Have a project in mind or want to collaborate? Feel free to reach out.
                        </p>
                        <a
                            href="mailto:durgeshgirde@gmail.com"
                            className="text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors text-sm"
                        >
                            durgeshgirde@gmail.com
                        </a>
                    </div>

                    {/* Netlify form */}
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                                className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors"
                        >
                            Send Message
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 text-sm text-center">
                                ✓ Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center">
                                Something went wrong. Please email me directly.
                            </p>
                        )}
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
