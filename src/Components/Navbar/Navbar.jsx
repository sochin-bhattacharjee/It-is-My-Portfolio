import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import ResumeButton from "../ResumeButton/ResumeButton";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <HashLink
          smooth
          to="#home"
        >
          Home
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#about-me"
        >
          About Me
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#skills"
        >
          Skills
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#education"
        >
          Education
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#projects"
        >
          Projects
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#contact-me"
        >
          Contact Me
        </HashLink>
      </li>
    </>
  );

  return (
    <div className="navbar md:px-10 sticky top-0 z-50 bg-gray-800 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to="/"
          className="text-sm md:text-xl flex items-center font-bold"
        >
          <img className="w-8 sm:w-10" src={logo} alt="" />
          Sochin Bhattacharjee
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal flex gap-4 px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <ResumeButton />
      </div>
    </div>
  );
};

export default Navbar;
