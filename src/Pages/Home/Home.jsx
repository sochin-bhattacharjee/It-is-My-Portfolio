import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import ContactMe from "../../Components/ContactMe/ContactMe";
import Education from "../../Components/Education/Education";
import Project from "../../Components/Projects/Project";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <Skills/>
            <Education/>
            <Project/>
            <ContactMe/>
        </div>
    );
};

export default Home;