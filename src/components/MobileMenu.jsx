import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center"
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <nav className="flex flex-col gap-8 text-center">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                variants={itemVariants}
                className="text-4xl md:text-5xl font-light text-white tracking-tight hover:text-blue-500 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
