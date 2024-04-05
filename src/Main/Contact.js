// Import EmailSend component
import ContactUs from "./EmailSend";
// Import icons for Contact component
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
export default function Contact() {
  return (
    <div
      className="w-full h-max mt-[7rem]  flex flex-col sm:flex-row items-center justify-center gap-2"
      id="contact"
    >
      <div className="w-full  h-full flex-flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center w-full h-full gap-5">
          <h3 className="text-white text-3xl">Let's Connect :)</h3>
          <p className="text-gray-300 text-center w-[20rem] h-max text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl">
            I'm currently looking for new opportunities,my inbox is always open.
            Whethever you have a question or just want to say hi, I'll try my
            best to get back to you!
          </p>
          <div className="w-max h-max flex gap-2">
            <a
              href="https://www.instagram.com/ahliman_sl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-4xl hover:scale-[1.2]  text-white transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com/ahliman_sl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl hover:scale-[1.2] text-white transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
