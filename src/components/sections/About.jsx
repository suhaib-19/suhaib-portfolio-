export const About = () => {

  const techSkills = [
    "🧱 HTML",
    "🎨 CSS",
    "⚙️ JavaScirpt",
    "⚛️ React",
    "🧩 BootStarp",
    "💨 TailwindCSS",
    "📱 Flutter",
    "🎯 Dart",
    "☕ Java (Basics)",
    "🐍 Python"
  ];
 
  const softSkills = [
    "🔄 Adaptability",
    "⌛ Time Management",
    "🎯 Goal-Oriented",
    "🤝 Collaboration",
    "🔍 Attention to Detail"
  ]
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-trasparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Hi, I’m a passionate Frontend Developer with a background in Business Administration (BBA) and MBA, blending technical creativity with strategic thinking. My journey began in business, but my curiosity led me to the world of tech — and I’ve never looked back.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">techSkills</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">SoftSkills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>BBA Bachelor of Business Administration</strong> - Sadakathullah Appa College (2019-2022)
              </li>
              <li><strong>MBA Master of Business Administration</strong>- SCAD College of Engineering and Technology (2022-2024)</li>
              <li>
                <strong>Certifications</strong> -Frontend Development Certification – Courseinn Academy, (2024)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🎯 Work Experience</h3>
            <h4 className="font semi-bold">Intern at Bigzeil Technollogy</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Assisted in building front-end components and integration REST APIs
              </li>
              <li> Client Requirements Analysis at Bigzeil Technology</li>
              <li>
                Conducted a comprehensive study of client requirement gathering and communication strategies.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
