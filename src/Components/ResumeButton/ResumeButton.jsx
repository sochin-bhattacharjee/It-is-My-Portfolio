import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaDownload } from "react-icons/fa6";

const ResumeButton = () => {
  const [showModal, setShowModal] = useState(false);

  const resumeLink =
    "https://docs.google.com/document/d/1nZyJGeS_xewvtx5Fx_cXzvpYDIo9MOrTGJL1nPLJ6IU/edit?usp=sharing";

  return (
    <div>
      <AwesomeButton
        className="flex items-center gap-2"
        type="primary"
        onPress={() => setShowModal(true)}
      >
        <FaDownload />{" "}
        <span className="text-[10px] md:text-sm lg:text-base">
          Download Resume
        </span>
      </AwesomeButton>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto p-6">
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              Resume
            </h2>
            <p className="text-sm text-white mb-6 text-center">
              Please choose an action for the resume.
            </p>
            <div className="flex flex-col sm:flex-row md:justify-end gap-4">
              <button
                className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => window.open(resumeLink, "_blank")}
              >
                Resume Preview
              </button>

              <button
                className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={() => {
                  const element = document.createElement("a");
                  element.href = resumeLink.replace(
                    "/edit?usp=sharing",
                    "/export?format=docx"
                  );
                  element.download = "Resume_of_Sochin.docx";
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
              >
                Download
              </button>

              <button
                className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeButton;
