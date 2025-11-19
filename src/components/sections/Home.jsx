export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="text-center z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
          Hi, I'm Suhaib👋
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Junior MERN Stack Developer — I build fast, modern, and scalable web
          applications using <span className="text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-blue-400 font-semibold">Node.js</span>,{" "}
          <span className="text-blue-400 font-semibold">Express.js</span>, and{" "}
          <span className="text-blue-400 font-semibold">MongoDB</span>.
          <br /><br />
          Currently working at <span className="text-blue-400 font-semibold">Corvanta Analytics</span>,
          building real-world products and continuously learning new technologies.
          <br />
          📍 Chennai, Tamil Nadu — Open to <strong>Opportunities, Collaborations, and Freelance Work</strong>.
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-xl
            transform transition-all duration-300 hover:scale-[1.04]
            hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-blue-400 text-blue-400 font-medium rounded-xl
            transform transition-all duration-300 hover:scale-[1.04]
            hover:bg-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

