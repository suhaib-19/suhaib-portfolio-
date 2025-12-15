import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              About Me
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                I’m a passionate <span className="text-blue-400 font-semibold relative inline-block">
                  Junior MERN Stack Developer
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-400/50"></span>
                </span> with a unique background in Business Management (MBA) turned Tech. This combination allows me to understand both the code and the product goals.
              </p>

              <p>
                I don't just write code; I build <span className="text-white font-medium">solutions</span>. My focus is on creating intuitive, performant, and delightful interfaces that users love to interact with.
              </p>

              <p>
                Currently working at <span className="text-blue-400 font-medium">Corvanta Analytics</span>, where I'm honing my craft in building scalable web applications.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="/resume.pdf"
                download="Suhaib_Resume.pdf"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
              >
                Download Resume
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Abstract Visual / Image Placeholder */}
          {/* Abstract Geometric Art / "Digital Mind" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group"
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900/20"></div>

            {/* Rotating Rings / "Orbit" Effect */}
            <div className="relative w-64 h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-blue-500/20 rounded-full border-dashed"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-purple-500/20 rounded-full border-dotted"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-white/10 rounded-full"
              ></motion.div>

              {/* Floating "Core" */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  scale: [1, 1.05, 1],
                  filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-md opacity-80"></div>
                <div className="absolute w-20 h-20 bg-black rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm z-10">
                  <span className="text-4xl">🚀</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Code Snippets / Decorators */}
            <motion.div
              animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute top-10 right-10 p-3 glass rounded-lg border border-white/10 text-xs font-mono text-blue-300"
            >
              &lt;Code /&gt;
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-10 p-3 glass rounded-lg border border-white/10 text-xs font-mono text-purple-300"
            >
              {`{ Design }`}
            </motion.div>

            <div className="absolute bottom-4 right-4 text-[10px] text-gray-500 font-mono tracking-widest opacity-50">
              SUHAIB.ACTIVE
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
