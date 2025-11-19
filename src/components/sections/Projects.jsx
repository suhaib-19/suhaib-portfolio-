export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Agency AI Website */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">🤖 Agency AI Website</h3>
            <p className="text-gray-400 mb-4">
              A futuristic AI-themed landing page with smooth transitions,
              branding-focused UI, and responsive layout designed for modern
              digital agencies.
            </p>

            <a
              href="https://agency-ai-iota-nine.vercel.app/"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
              inline-block transform transition-all duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              View Project
            </a>
          </div>

          {/* Real Estate Website */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">🏠 Real Estate Website</h3>
            <p className="text-gray-400 mb-4">
              A sleek and modern property listing UI featuring responsive
              design, smooth navigation, and clean visual structure suitable for
              real estate platforms.
            </p>

            <a
              href="https://estate-xi-seven.vercel.app/"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
              inline-block transform transition-all duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              View Project
            </a>
          </div>

          {/* QuickShow UI Website */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">⚡ QuickShow UI</h3>
            <p className="text-gray-400 mb-4">
              A fast, minimal, performance-optimized landing page with clean UI,
              sharp typography, and modern section transitions.
            </p>

            <a
              href="https://quick-show-lake.vercel.app/"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
              inline-block transform transition-all duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              View Project
            </a>
          </div>

          {/* E-Commerce Website */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">
              🛒 E-Commerce Website (MERN)
            </h3>
            <p className="text-gray-400 mb-4">
              A complete MERN e-commerce platform featuring secure auth, product
              management, cart system, checkout flow, order management, and
              role-based admin dashboard.
            </p>

            <a
              href="#"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
              inline-block transform transition-all duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              View Project
            </a>
          </div>

          {/* Auth System */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">
              🔐 Authentication System (MERN)
            </h3>
            <p className="text-gray-400 mb-4">
              A secure authentication setup including JWT, password hashing,
              protected routes, role-based access control, and a clean modern
              UI.
            </p>

            <a
              href="#"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
              inline-block transform transition-all duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              View Project
            </a>
          </div>
          {/* Spotify Clone */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">
              🎧 Spotify Clone (React + Tailwind)
            </h3>
            <p className="text-gray-400 mb-4">
              A clean, responsive Spotify-inspired UI built using React and
              Tailwind CSS. Includes a modern layout, reusable components, and
              smooth animations for a premium user experience.
            </p>

            <a
              href="https://spotify-clone-mu-drab-76.vercel.app/"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
              inline-block transform transition-all duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              View Project
            </a>
          </div>

          {/* Portfolio Website */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">💼 Portfolio Website</h3>
            <p className="text-gray-400 mb-4">
              A fully responsive personal portfolio built with modern UI
              principles, showcasing projects, skills, and experience with
              optimized performance.
            </p>

            <a
              href="https://suhaib-19.github.io/suhaib-portfolio-/"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
              inline-block transform transition-all duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              View Portfolio
            </a>
          </div>

          {/* Event Planner Dashboard */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">
              📅 Event Planner Dashboard (React + Vite)
            </h3>
            <p className="text-gray-400 mb-4">
              An interactive dashboard for planning and organizing events.
              Includes responsive UI, modern components, and smooth performance
              using React + Vite.
            </p>

            <a
              href="https://suhaib-19.github.io/event-craft-app/"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
              inline-block transform transition-all duration-300 hover:scale-[1.04]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              View Project
            </a>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">
              📄 Resume Builder Website (MERN)
            </h3>
            <p className="text-gray-400 mb-4">
              A professional Resume Builder platform built using the MERN stack.
              Users can create, edit, download, and manage resumes with
              customizable templates and real-time preview features. Includes
              secure authentication, autosave, and modern UI components.
            </p>

            <a
              href="#"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
    inline-block transform transition-all duration-300 hover:scale-[1.04]
    hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              Code Coming Soon
            </a>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition">
            <h3 className="text-xl font-bold mb-2">
              🩺 Doctor Appointment System (MERN)
            </h3>
            <p className="text-gray-400 mb-4">
              A complete Doctor Appointment Booking System built with the MERN
              stack. Features include patient authentication, doctor profiles,
              available time slots, appointment scheduling, admin dashboard, and
              status tracking with optimized UI & UX.
            </p>

            <a
              href="#"
              className="px-5 py-2 bg-blue-500 text-white font-medium rounded-md
    inline-block transform transition-all duration-300 hover:scale-[1.04]
    hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
            >
              Code Coming Soon
            </a>
          </div>
        </div>
     





      </div>
    </section>
  );
};
