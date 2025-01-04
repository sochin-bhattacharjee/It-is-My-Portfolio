import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
    const location = useLocation();
    const project = location.state; // Navigate থেকে পাওয়া ডেটা

    if (!project) {
        return <div className="text-center mt-8">No project selected.</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-[#00BFFF] mb-8">{project.name}</h1>
            <img src={project.img} alt={project.name} className="w-full max-w-lg mx-auto rounded-lg mb-6" />
            <p className="text-gray-700 text-center mb-6">
                Details about <strong>{project.name}</strong>.
            </p>
            <div className="flex gap-4 justify-center">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Live Link</button>
                </a>
                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">Github Repo</button>
                </a>
            </div>
        </div>
    );
};

export default ProjectDetails;
