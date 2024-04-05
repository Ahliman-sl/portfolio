import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", onClick: () => scrollToSection("home") },
    { name: "About", onClick: () => scrollToSection("about") },
    { name: "Projects", onClick: () => scrollToSection("projects") },
    {
      name: "Contact Me",
      // link: "/",
      onClick: () => scrollToSection("contact"),
    },
  ];
  function scrollToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="navbar-wrapper">
      <div className="w-full h-16 text-white flex justify-between items-center border-y-2 border-fuchsia-600 shadow-md shadow-fuchsia-500/50 fixed top-0 bg-black z-50">
        <div>
          <p className="text-2xl pl-5 text-[#B336FF] uppercase">Welcome !</p>
        </div>
        {/* Hamburger Menu */}
        <div className="block lg:hidden pr-5  animate-pulse">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`lg:flex justify-between items-center gap-7 overflow-hidden px-6 ${
            isOpen
              ? "flex flex-col md:items-start py-2 sm:justify-center absolute top-16 left-0 w-full bg-gray-950 z-10 transition"
              : "hidden"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className={`${
                isOpen ? "md:w-full md:h-max lg:m-1 2xl:m-1 " : ""
              } cursor-pointer lg:hover:scale-[1.05] xl:hover:scale-[1.01]  2xl:hover:scale-[1.01]  hover:bg-stone-200 transition duration-400 ease-in-out hover:text-black rounded-md`}
            >
              <span className="w-full h-full block p-2 " onClick={link.onClick}>
                {link.name.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="content" style={{ paddingTop: "4rem" }}>
        {/* Diğer sayfa içeriği */}
      </div>
    </div>
  );
}
