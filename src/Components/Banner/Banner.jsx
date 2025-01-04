import myImg from "../../assets/My-picture/My-Picture.jpg";
import { FaFacebook, FaGithub } from "react-icons/fa";
import ResumeButton from "../ResumeButton/ResumeButton";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-[90%] mx-auto my-14 gap-10">
      <div className="text-center md:text-left space-y-5 text-gray-200">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight">
          I'm a <span className="text-[#00BFFF]">Front-End Web</span> Developer
        </h1>
        <p className="text-gray-400 text-lg">
          I specialize in creating modern, interactive, and user-friendly web
          applications.
        </p>
        <div className="flex justify-center md:justify-start gap-4 text-2xl">
          <a
            href="https://web.facebook.com/sochin.bhattacharjee.2024"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#00BFFF] hover:bg-gradient-to-r hover:from-[#00BFFF] hover:to-[#008CBA] hover:shadow-lg transition duration-300 text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/sochin-bhattacharjee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#00BFFF] hover:bg-gradient-to-r hover:from-[#00BFFF] hover:to-[#008CBA] hover:shadow-lg transition duration-300 text-white"
          >
            <FaGithub />
          </a>
        </div>
        <ResumeButton />
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-auto">
        <div className="absolute z-10 -top-5 -left-5 w-full h-full bg-[#00BFFF] rounded-full filter blur-3xl opacity-20"></div>
        <div className="relative z-20">
          <img
            className="w-[250px] md:w-[400px] lg:w-[500px] mx-auto rounded-full border-4 border-[#00BFFF] shadow-xl"
            src={myImg}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
