import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GridBeam = ({ delay, duration, x, isHorizontal }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        [isHorizontal ? "x" : "y"]: "-100%"
      }}
      animate={{
        opacity: [0, 1, 0],
        [isHorizontal ? "x" : "y"]: "100%"
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
        repeatDelay: Math.random() * 5
      }}
      className={`absolute bg-gradient-to-r from-transparent via-blue-500/40 to-transparent ${isHorizontal ? "h-[1px] w-full left-0" : "w-[1px] h-full top-0"
        }`}
      style={isHorizontal ? { top: `${x}%` } : { left: `${x}%` }}
    />
  );
};

export const Home = () => {
  const [beams, setBeams] = useState([]);

  useEffect(() => {
    // Generate random beams
    const newBeams = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      isHorizontal: Math.random() > 0.5,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3
    }));
    setBeams(newBeams);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-20 bg-black"
    >
      {/* --- BACKGROUND: NEURAL GRID --- */}
      <div className="absolute inset-0 z-0">
        {/* Static Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-black/40 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]"></div>

        {/* Animated Beams */}
        {beams.map((beam) => (
          <GridBeam
            key={beam.id}
            delay={beam.delay}
            duration={beam.duration}
            x={beam.x}
            isHorizontal={beam.isHorizontal}
          />
        ))}
      </div>

      {/* --- BACKGROUND: CORE GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-white drop-shadow-2xl">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient bg-300%">modern,</span> <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">high-impact</span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-blue-600/30 -z-10 skew-x-12"
                ></motion.span>
              </span> web experiences.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Frontend / MERN / UI-focused Developer crafting <span className="text-white font-medium">pixel-perfect</span>, scalable digital products with a focus on user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary Button "View Skills" */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold text-base md:text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-shadow duration-300 w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Skills
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </motion.a>

            {/* Secondary Button "Contact Me" */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-white font-medium text-base md:text-lg rounded-full overflow-hidden hover:border-white/50 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Contact Me</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </motion.div>

    </section>
  );
};
