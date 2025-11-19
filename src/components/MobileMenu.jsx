import { useEffect, useRef } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const ref = useRef(null);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close menu when clicked outside
  const handleClickOutside = (e) => {
    if (e.target === ref.current) {
      setMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div
      ref={ref}
      onClick={handleClickOutside}
      className={`
        fixed inset-0 bg-black/80 backdrop-blur-md z-[900] flex items-center justify-center 
        transition-all duration-300 
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <nav
        className={`
          flex flex-col items-center gap-6 
          transition-all duration-300
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {menuItems.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl hover:text-blue-400 font-semibold tracking-wide hover:scale-110 transition-transform"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
