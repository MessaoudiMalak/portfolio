"use client";

import { translations, profileData } from "@/lib/data";
import { motion } from "framer-motion";
import { Code, Lightbulb, Target, Zap, Download } from "lucide-react";

const icons = {
    code: Code,
    innovation: Lightbulb,
    goal: Target,
    performance: Zap,
};

export function About() {
    const t = translations.about;

    return (
        <section id="about" className="py-20 relative bg-[#050816]">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-8 text-white border-l-4 border-blue-500 pl-4">
                        {t.title}
                    </h2>
                    <div className="prose prose-lg dark:prose-invert text-gray-300">
                        <p>{t.description}</p>
                    </div>
                </motion.div>

                {/* Value Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {profileData.services.map((service, index) => {
                        const Icon = icons[service.icon as keyof typeof icons] || Code;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#151030] p-6 rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all group"
                            >
                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Download Resume Button */}
                <div className="flex justify-center">
                    <a
                        href="/cv.pdf"
                        download
                        className="inline-flex items-center gap-2 px-8 py-4 bg-black rounded-full text-white font-medium border border-white/20 hover:bg-white/10 transition-all hover:scale-105"
                    >
                        Download Resume
                        <Download className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
