"use client";

import { useLanguage } from "@/context/language-context";
import { translations, profileData } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, MapPin, Send } from "lucide-react";

export function Contact() {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]"> {/* Enforce dark bg */}

            <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <p className="text-secondary uppercase tracking-wider mb-2 text-sm font-semibold">
                        Get in touch
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t.title}
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-[#151030] p-8 rounded-2xl border border-white/10 shadow-xl h-full flex flex-col justify-between"
                    >
                        <div className="space-y-8">
                            {/* Reduced text as requested */}
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {language === 'fr'
                                    ? "Un projet en tête ? Discutons-en."
                                    : "Have a project in mind? Let's talk."}
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Email</h3>
                                        <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                                            {profileData.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Location</h3>
                                        <p className="text-gray-400">
                                            Rabat, Morocco
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 mt-8 border-t border-white/5">
                            <h3 className="font-medium text-white mb-4">Connect</h3>
                            <div className="flex gap-4">
                                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/30 rounded-full text-gray-400 hover:text-white hover:bg-black/50 transition-all border border-white/5">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/30 rounded-full text-gray-400 hover:text-white hover:bg-black/50 transition-all border border-white/5">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-[#151030] p-8 rounded-2xl shadow-xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-[#1d1836] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-[#1d1836] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-[#1d1836] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-500"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-[#1d1836] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none placeholder:text-gray-500"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.02]"
                            >
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
