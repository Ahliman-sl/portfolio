// PHOTOS IMPORT (For Skills Component)

// import html from "../ProgramImages/html1.png";
// import css from "../ProgramImages/css.png";
// import javascript from "../ProgramImages/javascript.png";
// import react from "../ProgramImages/react.png";
// import bootstrap from "../ProgramImages/bootstrap.png";
// import git from "../ProgramImages/git1.png";
// import github from "../ProgramImages/github.png";
// import npm from "../ProgramImages/npm.png";
// import remix from "../ProgramImages/remix.png";
// import vite from "../ProgramImages/Vitejs.png";
// import tailwind from "../ProgramImages/tailwindcss.png";
// import parcel from "../ProgramImages/parcel.png";
// import nextjs from "../ProgramImages/nextjs.jpg";
// import rollup from "../ProgramImages/rollup.png";

// Icons
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { DiNpm } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBoxSeamFill } from "react-icons/bs";
import { SiRollupdotjs } from "react-icons/si";

// Carousel and Type Animation Import
// import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Skills() {
  return (
    <div className="with-full h-max flex flex-col justify-center items-center">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl  mb-5 overline decoration-sky-400 decoration-from-font decoration-double">
        Technologies
      </h1>
      <div className="text-white text-[5rem] w-full h-max gap-5 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mx-4 text-[#ff4405]">
          <AiFillHtml5 />
          <span className="text-[2rem] text-stone-50">HTML</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#4da9ff] ">
          <FaCss3Alt />
          <span className="text-[2rem] text-stone-50">CSS</span>
        </div>
        <div className="flex flex-col items-center mx-4  text-[#9d4dff]">
          <FaBootstrap />
          <span className="text-[2rem] text-stone-50">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center mx-4   text-[#4da9ff]">
          <SiTailwindcss />
          <span className="text-[2rem] text-stone-50">Tailwindcss</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ffe14d] ">
          <IoLogoJavascript />
          <span className="text-[2rem] text-stone-50">Javascript</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#4da9ff] ">
          <FaReact />
          <span className="text-[2rem] text-stone-50">React</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ff4405] ">
          <DiNpm />
          <span className="text-[2rem] text-stone-50">Npm</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ff4405] ">
          <BsGit />
          <span className="text-[2rem] text-stone-50">Git</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ffffff] ">
          <BsGithub />
          <span className="text-[2rem] text-stone-50">Github</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ff7429] ">
          <BsBoxSeamFill />
          <span className="text-[2rem] text-stone-50">Parcel</span>
        </div>
        <div className="flex flex-col items-center mx-4 text-[#ff3300] ">
          <SiRollupdotjs />
          <span className="text-[2rem] text-stone-50">Rollup</span>
        </div>
      </div>
      {/* <CarouselBasicExample /> */}
    </div>
  );
}

// function CarouselBasicExample() {
//   return (
//     <>
//       <TECarousel showControls showIndicators ride="carousel">
//         <div className="relative w-[20rem] overflow-hidden after:clear-both after:block after:content-['']">
//           <TECarouselItem
//             itemID={1}
//             className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={html}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>

//           <TECarouselItem
//             itemID={2}
//             className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={css}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//             {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//                 <h5 className="text-xl">Second slide label</h5>
//                 <p>
//                   Some representative placeholder content for the second slide.
//                 </p>
//               </div> */}
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={3}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={bootstrap}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={4}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={tailwind}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={5}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={javascript}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={6}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={react}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={7}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={npm}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={8}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={parcel}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={9}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={rollup}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={10}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={vite}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={11}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={nextjs}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={12}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={remix}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={13}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={git}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={14}
//             className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src={github}
//               className="items-center block mx-auto w-[10rem] h-[10rem] object-cover"
//               alt="..."
//             />
//           </TECarouselItem>
//         </div>
//       </TECarousel>
//     </>
//   );
// }
