import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import ContactMe from "../../Components/ContactMe/ContactMe";
import Education from "../../Components/Education/Education";
import Project from "../../Components/Projects/Project";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
