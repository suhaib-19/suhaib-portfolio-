import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.7)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white tracking-wide"
          >
            suhaib<span className="text-blue-500">.tech</span>
          </a>

          {/* Mobile Menu Icon */}
          <div
            className="w-7 h-7 flex flex-col justify-center md:hidden cursor-pointer relative z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {/* Animated Lines */}
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white rounded my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-400 transition-all"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-all"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-400 transition-all"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
