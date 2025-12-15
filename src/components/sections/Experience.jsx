import { motion } from "framer-motion";

export const Experience = () => {
    const experiences = [
        {
            role: "Junior MERN Stack Developer",
            company: "Corvanta Analytics",
            period: "Oct 2024 - Present",
            desc: "Developing scalable and responsive web applications using the MERN stack. Building reusable UI components and collaborating with cross-functional teams."
        },
        {
            role: "Frontend Development Certification",
            company: "Courseinn Academy",
            period: "2024",
            desc: "Intensive training in modern frontend technologies including React, Redux, and Tailwind CSS."
        },
        {
            role: "MBA - Operations & Marketing",
            company: "SCAD College of Engineering & Technology",
            period: "2022 - 2024",
            desc: "Specialized in Operations and Marketing, developing strong analytical and management skills."
        },
        {
            role: "BBA - Business Administration",
            company: "Sadakathullah Appa College",
            period: "2019 - 2022",
            desc: "Foundation in business principles and administration."
        }
    ];

    return (
        <section
            id="experience"
            className="min-h-screen py-20 bg-black relative"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        My <span className="text-blue-500">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative ml-4 md:ml-0 space-y-12">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[-21px] md:left-[-1px] top-2 bottom-0 w-[2px] bg-white/10 h-full"></div>
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[-21px] md:left-[-1px] top-2 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent origin-top"
                    ></motion.div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative pl-8 md:pl-16 group"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[26px] md:-left-[6px] top-2 w-3 h-3 rounded-full bg-black border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 z-10"></div>
                            {/* Glowing halo behind dot */}
                            <div className="absolute -left-[26px] md:-left-[6px] top-2 w-3 h-3 rounded-full bg-blue-500/50 blur-md group-hover:blur-lg transition-all duration-300"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                                <span className="text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full w-fit mt-2 sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-lg text-gray-400 mb-4 font-medium">{exp.company}</div>
                            <p className="text-gray-500 leading-relaxed font-light text-base md:text-lg max-w-2xl">
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
