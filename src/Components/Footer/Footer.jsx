import logo from "../../assets/logo.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content p-10">
        <aside className="flex items-center">
          <img className="w-16" src={logo} alt="" />
          <p className="text-xl font-extrabold text-neutral-content">
            Sochin's Portfolio
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://web.facebook.com/sochin.bhattacharjee.2024"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://github.com/sochin-bhattacharjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Sochin's Portfolio
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
