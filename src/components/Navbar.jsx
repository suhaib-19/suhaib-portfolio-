import { useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-white tracking-extra-wide hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            suhaib<span className="text-blue-500">.tech</span>
          </a>

          {/* Mobile Menu Icon */}
          <div
            className="w-7 h-7 flex flex-col justify-center md:hidden cursor-pointer relative z-50 group"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 w-full origin-right ${menuOpen ? "rotate-45 -translate-y-[4px] -translate-x-1 w-full" : "group-hover:w-full"
                }`}
            ></span>
            <span
              className={`block h-0.5 bg-white rounded my-1.5 transition-all duration-300 w-3/4 self-end ${menuOpen ? "opacity-0" : "group-hover:w-full"
                }`}
            ></span>
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 w-1/2 self-end origin-right ${menuOpen ? "-rotate-45 translate-y-[4px] -translate-x-1 w-full" : "group-hover:w-full"
                }`}
            ></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
