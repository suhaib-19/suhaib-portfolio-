export const About = () => {
  const techSkills = [
    "⚛️ React",
    "🧱 HTML",
    "🎨 CSS",
    "⚙️ JavaScript",
    "💨 Tailwind CSS",
    "🧩 Bootstrap",
    "🟢 Node.js",
    "🚀 Express.js",
    "🍃 MongoDB",
    "📁 Git & GitHub",
    "💻 VS Code",
    "🎨 Figma (Basic)",
  ];

  const softSkills = [
    "🧠 Problem Solving",
    "🐞 Debugging",
    "💬 Communication",
    "🤝 Teamwork",
    "🔄 Adaptability",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        {/* About Intro */}
        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m a passionate{" "}
            <span className="text-blue-400 font-semibold">
              {" "}
              Junior MERN Stack Developer{" "}
            </span>
            with hands-on experience in building end-to-end web applications. I
            love solving problems, creating clean UI/UX, and building
            applications that make life easier for users.
            <br />
            <br />
            With a background in{" "}
            <strong>BBA + MBA (Operations & Marketing)</strong>, I combine
            technical skills with business knowledge — helping me build products
            that are not just functional but meaningful.
            <br />
            <br />
            When I'm not coding, I explore new frameworks, design modern UI
            concepts, and study how top tech teams build scalable systems.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tech Skills */}
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🛠️ Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🌟 Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Education */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>BBA — Business Administration</strong>
                <br /> Sadakathullah Appa College (2019–2022)
              </li>
              <li>
                <strong>MBA — Operations & Marketing</strong>
                <br /> SCAD College of Engineering & Technology (2022–2024)
              </li>
              <li>
                <strong>Frontend Development Certification</strong> — Courseinn
                Academy (2024)
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

            <h4 className="font-semibold text-blue-400 mb-2">
              Junior MERN Stack Developer — Corvanta Analytics (Oct 2024 –
              Present)
            </h4>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Developing scalable and responsive web applications using the
                MERN stack.
              </li>
              <li>
                Building reusable UI components and improving overall user
                experience with modern design principles.
              </li>
              <li>
                Collaborating with cross-functional teams to deliver new
                features and product improvements.
              </li>
              <li>
                Actively learning and adapting new technologies to improve
                development efficiency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
