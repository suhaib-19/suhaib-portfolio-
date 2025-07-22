export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
     
     <div className="max-w-5xl mx-auto px-4">
       <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-trasparent text-center">
          Featured Projects
        </h2>
        <div className="gird grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8xp_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">📅 Event Dashboard App</h3>
            <p className="text-gray-400 mb-4">
              A modern, responsive Event Management Dashboard built using React (JSX), Vite, and Tailwind CSS, designed to provide users with a smooth experience in organizing and tracking events.
            </p>
            <a href="https://suhaib-19.github.io/event-craft-app/" class="inline-block bg-blue-500 text-white px-5 py-2 mt-4 rounded-md shadow hover:bg-green-600 transition">click here</a>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8xp_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">✅ Todo List App</h3>
            <p className="text-gray-400 mb-4">
              A responsive and functional task management application built using React (JSX), Vite, and Tailwind CSS.
              This project demonstrates core frontend concepts such as state management, component architecture, dynamic rendering, and custom animations
            </p>
            <a href="https://suhaib-19.github.io/add-your-task/" class="inline-block bg-blue-500 text-white px-5 py-2 mt-4 rounded-md shadow hover:bg-green-600 transition">click here</a>
          </div>

          
          

          
        </div>

     </div>
    </section>
  );
};
