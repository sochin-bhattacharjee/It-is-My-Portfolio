import { Link, useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state;

  if (!project) {
    return (
      <div className="text-center mt-8 text-red-500 text-lg font-semibold">
        No project selected.
      </div>
    );
  }

  return (
    <div className="p-6 w-full md:w-[90%] mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-[#00BFFF] mb-8">
        {project.name}
      </h1>
      <div className="flex justify-center mb-8">
        <img
          src={project.img}
          alt={project.name}
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />
      </div>

      <p className="text-lg text-gray-300 text-center mb-10 leading-relaxed">
        {project.description || `Explore more details about ${project.name}.`}
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
        >
          Live Link
        </a>
        <a
          href={project.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition-all"
        >
          GitHub Repo
        </a>
        <Link to="/">
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all">
            Back to Portfolio
          </button>
        </Link>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-[#00BFFF] mb-6">
          Featured Highlights
        </h2>
        <ul className="list-disc list-inside bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          {project.Featured.map((feature, index) => (
            <li
              key={index}
              className="text-lg text-gray-300 leading-relaxed tracking-wide"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center text-[#00BFFF] mb-6">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          {project.Technologies.map((tech, index) => (
            <li
              key={index}
              className="text-lg text-gray-300 leading-relaxed tracking-wide"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold text-center text-[#00BFFF] mb-6">
        There is a shortage.
        </h2>
        <ul className="list-disc list-inside bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          {project.shortage.map((tech, index) => (
            <li
              key={index}
              className="text-lg text-gray-300 leading-relaxed tracking-wide"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold text-center text-[#00BFFF] mb-6">
        There is a improve.
        </h2>
        <ul className="list-disc list-inside bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          {project.improve.map((tech, index) => (
            <li
              key={index}
              className="text-lg text-gray-300 leading-relaxed tracking-wide"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
