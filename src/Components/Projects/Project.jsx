import { useNavigate } from 'react-router-dom';
import ServiceMate from '../../assets/Website-Screenshot/Service_Website.png';
import CineZone from '../../assets/Website-Screenshot/cineZone.png';
import EcoAdventure from '../../assets/Website-Screenshot/Eco-Advencture.png';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Project = () => {
    const navigate = useNavigate();
    const projects = [
        { img: ServiceMate, name: "Service Mate", liveLink: "https://your-service-mate.web.app/", githubRepo: "https://github.com/programming-hero-web-course2/b10a11-client-side-sochin-bhattacharjee"},
        { img: CineZone, name: "Cine Zone", liveLink: "https://movie-portal-91694.web.app/", githubRepo: "https://github.com/programming-hero-web-course2/b10-a10-client-side-sochin-bhattacharjee?tab=readme-ov-file"},
        { img: EcoAdventure, name: "Eco Adventure", liveLink: "https://eco-adventure-12638.web.app/", githubRepo: "https://github.com/programming-hero-web-course1/b10-a9-authentication-sochin-bhattacharjee" },
    ];

    const handleViewDetails = (project) => {
        navigate('/project-details', { state: project });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-[#00BFFF] mb-8 text-center">Projects</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <img src={project.img} alt={project.name} className="w-full h-auto rounded-lg mb-4" />
                        <h2 className="text-xl font-semibold text-center mb-4">{project.name}</h2>
                        
                        <div className="flex gap-4 justify-center">
                        <a href={project.liveLink} target='_blank'><AwesomeButton className="flex items-center gap-2 " type="pinterest"><span className="text-[10px] md:text-sm lg:text-base">Live Link</span></AwesomeButton></a>
                        <a href={project.githubRepo} target='_blank'><AwesomeButton className="flex items-center gap-2 " type="github"><span className="text-[10px] md:text-sm lg:text-base">Github Repo</span></AwesomeButton></a>
                        <button onClick={() => handleViewDetails(project)}><AwesomeButton 
                            className="flex items-center gap-2 " 
                            type="primary">
                            <span className="text-[10px] md:text-sm lg:text-base">View Details</span>
                        </AwesomeButton></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
