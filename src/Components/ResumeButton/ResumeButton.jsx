import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaDownload } from "react-icons/fa6";
const ResumeButton = () => {
    return (
        <div>
            <AwesomeButton className="flex items-center gap-2 " type="primary"><FaDownload /> <span className="text-[10px] md:text-sm lg:text-base">Download Resume</span></AwesomeButton>
        </div>
    );
};

export default ResumeButton;