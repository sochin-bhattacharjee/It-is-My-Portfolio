import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaDownload } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const navOptions = (
        <>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "border-b-2 border-white" : "text-white")}>Portfolio</NavLink>
          </li>
        </>
      );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost md:text-xl">Sochin Bhttacharjee</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
      <AwesomeButton className="flex items-center gap-2 " type="primary"><FaDownload /> <span className="text-[10px] md:text-sm lg:text-base">Download Resume</span></AwesomeButton>
      </div>
    </div>
  );
};

export default Navbar;
