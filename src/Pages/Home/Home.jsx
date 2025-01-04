import AboutMe from "../../Components/AboutMe/AboutMe";
import Banner from "../../Components/Banner/Banner";
import Education from "../../Components/Education/Education";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <Skills/>
            <Education/>
        </div>
    );
};

export default Home;