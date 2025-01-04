import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import ResumeButton from "../ResumeButton/ResumeButton";
const Navbar = () => {
    const navOptions = (
        <>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "border-b-2 border-[#00BFFF]" : "text-white")}>Portfolio</NavLink>
          </li>
        </>
      );
  return (
    <div className="navbar md:px-10 sticky top-0 z-50">
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
            className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="text-sm md:text-xl flex items-center font-bold"><img className="w-8 sm:w-10" src={logo} alt="" />Sochin Bhttacharjee</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
      <ResumeButton/>
      </div>
    </div>
  );
};

export default Navbar;
