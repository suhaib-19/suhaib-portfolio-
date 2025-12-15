import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Lingo - English Learning",
      desc: "Interactive language learning platform with voice recognition and AI feedback.",
      tech: ["React", "Web Speech API", "Tailwind"],
      live: "https://english-ivory.vercel.app/",
      github: "https://github.com/suhaib-19"
    },
    {
      title: "Brainwave AI",
      desc: "Modern UI/UX landing page for an AI SaaS application with parallax effects.",
      tech: ["React", "Parallax", "Tailwind"],
      live: "https://brainwave-sotk.vercel.app/",
      github: "https://github.com/suhaib-19"
    },
    {
      title: "Agency AI Website",
      desc: "Futuristic AI-themed landing page with smooth transitions and branding-focused UI.",
      tech: ["React", "Tailwind", "Framer Motion"],
      live: "https://agency-ai-iota-nine.vercel.app/",
      github: "https://github.com/suhaib-19"
    },
    {
      title: "Real Estate Platform",
      desc: "Sleek property listing UI with responsive design and smooth navigation.",
      tech: ["React", "Tailwind", "Vite"],
      live: "https://estate-xi-seven.vercel.app/",
      github: "https://github.com/suhaib-19"
    },
    {
      title: "QuickShow UI",
      desc: "Performance-optimized landing page with clean UI and sharp typography.",
      tech: ["React", "Tailwind"],
      live: "https://quick-show-lake.vercel.app/",
      github: "https://github.com/suhaib-19"
    },
    {
      title: "Spotify Clone",
      desc: "Responsive music player UI with modern layout and smooth animations.",
      tech: ["React", "Tailwind"],
      live: "https://spotify-clone-mu-drab-76.vercel.app/",
      github: "https://github.com/suhaib-19"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-black relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my passion for building experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Content Container */}
              <div className="p-8 h-full flex flex-col relative z-20">

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-3 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-3 rounded-lg bg-white/5 text-white font-medium text-sm hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-500 opacity-0 group-hover:opacity-100 z-0"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
