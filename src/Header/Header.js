import Navbar from "./Navbar.js";
// Images import for Header component
import profilPictures from "../ProgramImages/profilePicture.png";
import Resume from "../Docs/AhlimanCV.pdf";
import lightBulb from "../ProgramImages/light bulb (1).png";
import { TypeAnimation } from "react-type-animation";
// Icons Import for TopContent Component
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCloudArrowDown,
} from "react-icons/fa6";

export default function Header() {
  return (
    <div className="w-full h-max mb-10">
      <Navbar />
      <TopContent />
      {/* <p className={`text-white ${isOpen ? "mt-[20rem]" : "mt-5"}`}>
          SELAM KANKA
        </p>
        <p className="text-white">Nasilsin BA BA</p> */}
    </div>
  );
}

function TopContent() {
  return (
    <div className="flex md:flex-row  flex-col  justify-center items-center sm:justify-between mt-5 px-5 w-full h-max">
      <Image />
      <TopText />
    </div>
  );
}

function Image() {
  return (
    <div className="flex flex-row text-center justify-center w-full sm:w-1/2 ">
      <div className="box-with-vignette bg-black relative">
        <img
          src={profilPictures}
          alt="profilpicture"
          className="w-[20rem] h-[30rem] object-cover rounded-full  pt-[2rem]"
        ></img>
      </div>
      <Light />
    </div>
  );
}

function Light() {
  return (
    <div className="box-with-vignette  bg-black relative overflow-hidden">
      <img
        src={lightBulb}
        alt="profilpicture"
        className="w-[5rem] h-[10rem] md:w-[10rem] md:h-[20rem] object-cover rounded-full"
      ></img>
    </div>
  );
}

function TopText() {
  return (
    <div
      className="flex flex-col gap-5  w-full  md:w-1/2 h-full overflow-hidden text-white p-[4rem] "
      id="about"
    >
      <TypeAnimation
        className="text-right sm:text-xl mid:text-2xl lg:text-3xl text-cyan-400 w-full h-[2rem] font-meriendo"
        sequence={[
          "Greetings! 🙂",
          2500,
          "I'm Web Developer",
          2500,
          "Feel free to explore my skillset",
          2500,
          "Discover my Projects below",
          2500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <h1 className="uppercase text-xl md:text-4xl text-center  ">
        I am{" "}
        <span className="text-[#B336FF] animate-pulse">Ahliman Suleymanli</span>
      </h1>
      <p className="text-center">
        As an aspiring Front-End Developer, I am fueled by my passion for
        creating immersive and user-friendly web experiences. With a focus on
        React JS, I am eager to dive into the world of front-end development and
        grow alongside innovative projects. Throughout my journey, I have
        embraced challenges with enthusiasm, constantly seeking opportunities to
        learn and improve. I thrive in collaborative environments, where every
        project becomes an exciting opportunity to expand my skills and
        contribute fresh ideas. Currently, I am dedicated to mastering React JS
        and refining my front-end skills. My portfolio reflects my journey so
        far and my eagerness to take on new challenges. I am excited about the
        prospect of joining a dynamic team where I can continue to learn, grow,
        and make meaningful contributions. Let's connect and embark on this
        journey together!
      </p>
      <div className="mt-5 flex flex-row w-full justify-center gap-5 items-center">
        <a href={Resume} download={Resume}>
          <button
            type="button"
            className="flex items-center border-2 p-2 hover:bg-slate-300 transition duration-300 hover:text-black rounded-full light-effect   border-fuchsia-600 shadow-md shadow-fuchsia-500/50 "
          >
            <span className="mr-2">RESUME</span>
            <FaCloudArrowDown className="text-3xl" />
          </button>
        </a>

        <a
          href="https://www.instagram.com/ahliman_sl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-4xl hover:scale-[1.2]  transition duration-300" />
        </a>
        <a
          href="https://www.instagram.com/ahliman_sl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-4xl hover:scale-[1.2]  transition duration-300" />
        </a>
        <a
          href="https://github.com/Ahliman-sl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl hover:scale-[1.2]  transition duration-300" />
        </a>
      </div>
    </div>
  );
}
