import { motion } from "framer-motion";

export const Skills = () => {
    const skills = {
        Frontend: [
            "React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"
        ],
        Backend: [
            "Node.js", "Express.js", "MongoDB", "REST APIs"
        ],
        Tools: [
            "Git", "GitHub", "VS Code", "Vite", "Postman", "Figma"
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-black"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Technical <span className="text-blue-500">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="glass rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-colors duration-300 relative group"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl blur-xl"></div>

                            <h3 className="text-2xl font-bold mb-6 text-white text-center pb-4 border-b border-white/10">{category}</h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-3 justify-center"
                            >
                                {items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm font-medium border border-white/5 hover:bg-white/10 hover:text-white hover:border-blue-500/50 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
