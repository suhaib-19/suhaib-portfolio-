export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-right">Hi, I'm Suhaib</h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto" >
          Combining a background in business with a passion for frontend development. Builds intuitive user interfaces and real-world web apps with a strong focus on performance and usability.</p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-500 text-white py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            view Projects
          </a>
          <a href="#contact" className="bg-blue-500 text-white py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
