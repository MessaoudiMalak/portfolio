"use client";

import { translations, profileData } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
    const t = translations.experience || { title: "Work Experience", subtitle: "What I have done so far" };

    return (
        <section id="experience" className="py-20 relative bg-[#050816] overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                        {t.subtitle}
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        {t.title}.
                    </h2>
                </motion.div>

                <div className="mt-20 flex flex-col items-center relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/20 -ml-0.5 md:ml-0 h-full" />

                    {profileData.experiences?.map((experience, index) => {
                        // Alternate left/right for desktop
                        const isLeft = index % 2 === 0;
                        // @ts-ignore - 'tech' property added recently
                        const techs = experience.tech || [];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative w-full flex items-center justify-between mb-12 md:mb-20 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Spacer for opposite side */}
                                <div className="hidden md:block w-[45%]" />

                                {/* Icon on Line */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#1d1836] border-4 border-violet-500 z-20 shadow-lg shadow-violet-500/30">
                                    <Briefcase className="w-5 h-5 text-white" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] pl-14 md:pl-0">
                                    <div className="bg-[#1d1836] p-6 rounded-2xl border border-white/10 shadow-xl relative hover:border-violet-500/50 transition-colors group">

                                        {/* Date Label */}
                                        <h4 className="text-violet-400 font-bold text-sm mb-2">{experience.date}</h4>

                                        <h3 className="text-white text-2xl font-bold mb-1">{experience.title}</h3>
                                        <p className="text-secondary text-base font-medium mb-4">{experience.company_name}</p>

                                        <ul className="list-disc ml-5 space-y-2 mb-6">
                                            {experience.points.map((point, i) => (
                                                <li key={`point-${i}`} className="text-gray-300 text-sm pl-1 leading-relaxed">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Pills */}
                                        {techs.length > 0 && (
                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                                {techs.map((tech: string, i: number) => (
                                                    <span
                                                        key={`tech-${i}`}
                                                        className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Arrow simulated with CSS clip-path or simple absolute div */}
                                        {/* Standard arrow logic differs for left/right */}
                                        <div className={`hidden md:block absolute top-6 w-4 h-4 rounded-sm bg-[#1d1836] border-t border-l border-white/10 rotate-45 transform 
                                            ${isLeft ? "right-[-9px] border-r border-b border-t-0 border-l-0 bg-[#1d1836]" : "left-[-9px] bg-[#1d1836]"}`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
