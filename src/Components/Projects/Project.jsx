import { useNavigate } from "react-router-dom";
import ServiceMate from "../../assets/Website-Screenshot/Service_Website.png";
import CineZone from "../../assets/Website-Screenshot/cineZone.png";
import EcoAdventure from "../../assets/Website-Screenshot/Eco-Advencture.png";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Project = () => {
  const navigate = useNavigate();
  const projects = [
    {
      img: ServiceMate,
      name: "Service Mate",
      liveLink: "https://your-service-mate.web.app/",
      githubRepo:
        "https://github.com/programming-hero-web-course2/b10a11-client-side-sochin-bhattacharjee",
      Featured: [
        "Responsive Design: The website is fully responsive and works seamlessly across all devices, ensuring an optimal user experience.",
        "Dynamic Service Management: Users can browse all available services, add new services, and manage existing ones through an interactive dashboard.",
        "Search Functionality: A real-time search bar is provided to help users quickly find services based on their name.",
        "Pagination System: The services list is paginated for better usability and performance, with easy navigation between pages.",
        "User Authentication: Secure login and registration features are implemented to allow users to personalize their service interactions.",
        "Dark/Light Mode: A toggle switch is provided to allow users to switch between light and dark themes, enhancing the overall user experience.",
      ],
      Technologies: [
        "React.js: For building the user interface.",
        "Tailwind CSS: For styling the application.",
        "Framer Motion: For animations and transitions.",
        "Axios: For API calls to fetch and manage service data.",
        "React Router: For navigation and routing between pages.",
        "Firebase Hosting: For deploying the live website.",
      ],
      description: "",
      shortage:[
        "Its UI is not nice."
      ],
      improve:[
        "I plan to make the UI more beautiful in the future.",
      ]
    },
    {
      img: CineZone,
      name: "Cine Zone",
      liveLink: "https://movie-portal-91694.web.app/",
      githubRepo:
        "https://github.com/programming-hero-web-course2/b10-a10-client-side-sochin-bhattacharjee?tab=readme-ov-file",
      Featured: [
        "Search Functionality: Easily search for movies by title or genre.",
        "Responsive Design: Fully responsive, providing a seamless experience across all devices.",
        "Movie Details Update: Admins can update movie details such as title, poster, genre, rating, and summary.",
        "Rating System: Rate movies using a star rating component.",
        "Live Data: Fetches real-time data for movies from a backend server.",
      ],
      Technologies: [
        "React.js",
        "React Router",
        "Tailwind CSS",
        "SweetAlert2",
        "React-Select",
        "Custom Context for Theme Management",
        "Star Rating Component",
      ],
      description:"CineZone is a dynamic movie portal that allows users to explore, update, and manage movie details. It provides a user-friendly interface for searching movies by title or genre, updating movie details, and more.",
      shortage:[
        "Its UI is not nice."
      ],
      improve:[
        "I plan to make the UI more beautiful in the future.",
      ]
    },
    {
      img: EcoAdventure,
      name: "Eco Adventure",
      liveLink: "https://eco-adventure-12638.web.app/",
      githubRepo:
        "https://github.com/programming-hero-web-course1/b10-a9-authentication-sochin-bhattacharjee",
      Featured: [
        "Interactive Adventure Details :Users can view detailed information about each adventure, including descriptions, locations, categories, costs, and booking availability.",
        "Real-Time Features : Includes a clock feature to check expert availability and integrates with Google Meet for live consultations.",
        "User Authentication : Login, register, and forget password functionalities powered by Firebase Authentication.",
        "Responsive Design : Optimized for various screen sizes, ensuring an excellent experience across all devices.",
        "Feedback Section : Collects user feedback to improve the adventure offerings and user experience.",
        "Eco-Friendly Highlights : Showcases eco-friendly features and included items for each adventure.",
        "Modern UI with TailwindCSS : Designed with TailwindCSS for sleek, responsive, and consistent styling.",
      ],
      Technologies: [
        "React.js",
        "React Router",
        "Tailwind CSS",
        "Firebase Authentication",
        "React Hook Form",
        "React Toastify",
        "React Calendar",
        "React Query",
      ],
      description:"The main goal of this project is to promote eco-tourism by offering a curated selection of eco-friendly adventures, details about activities, and an intuitive interface for users to engage with.",
      shortage:[
        "Its UI is not nice."
      ],
      improve:[
        "I plan to make the UI more beautiful in the future.",
      ]
    },
  ];

  const handleViewDetails = (project) => {
    navigate("/project-details", { state: project });
  };

  return (
    <div className="w-[98%] xl:w-[90%] mx-auto mb-10">
      <h1 className="text-4xl font-extrabold text-[#00BFFF] mb-10 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex flex-col">
              <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
              <div className="">
                <div className="flex justify-between items-center gap-2 mx-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <AwesomeButton type="primary"><FaLink /><span className="ml-1">Live Link</span></AwesomeButton>
                </a>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <AwesomeButton type="github"><FaGithub /><span className="ml-1">GitHub</span></AwesomeButton>
                </a>
                <button
                  className=""
                  onClick={() => handleViewDetails(project)}
                >
                  <AwesomeButton type="secondary"><FaArrowRight /><span className="font-bold">View Details</span></AwesomeButton>
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
