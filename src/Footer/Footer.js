import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function FooterContent() {
  return (
    <div className="w-full h-max mt-5 ">
      <Footer />
    </div>
  );
}
function Footer() {
  return (
    <div className="w-full h-[10rem] bg-gray-950 border-t-2 border-t-indigo-900 flex  flex-col items-center justify-center">
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
        <p className="text-stone-50 text-xl ">
          This site created by : Ahliman Suleymanlı
        </p>
        <p className="text-sm text-stone-50">
          Tools : HTML CSS REACT(JS) TAILWINDCSS
        </p>
      </div>
      <div className="flex items-center justify-center gap-7 px-5">
        <p className="text-stone-50">© 2024 All rights reserved.</p>
        <a
          href="https://www.instagram.com/ahliman_sl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className=" text-2xl sm:text-4xl hover:scale-[1.2]  text-white transition duration-300" />
        </a>
        <a
          href="https://www.facebook.com/ehliman.s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-2xl sm:text-4xl hover:scale-[1.2]  text-white transition duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahliman-suleymanli-7a44a0302"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl sm:text-4xl hover:scale-[1.2] text-white transition duration-300" />
        </a>
        <a
          href="https://github.com/Ahliman-sl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl sm:text-4xl hover:scale-[1.2]  text-white transition duration-300" />
        </a>
      </div>
    </div>
  );
}
