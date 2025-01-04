import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FaDownload } from "react-icons/fa6";

const ResumeButton = () => {
  const [showModal, setShowModal] = useState(false);

  const resumeContent = `
Resume of Sochin
Ghagra, Rangamati
Phone: +880 1610316528
Email: sochin.cs@gmail.com

Objective
A passionate and dedicated web developer seeking an opportunity to apply my skills in React, HTML, CSS, JavaScript, Tailwind CSS, and MongoDB in a professional environment.

Education
Diploma in Computer Science and Technology (CST)
[Institute Name, Year of Graduation]

Skills
Frontend Development: React, HTML, CSS, Tailwind CSS, JavaScript
Backend Development: MongoDB
Other Skills: Problem Solving, Debugging, Git & Version Control

Languages
Bengali: Native
English: Fluent

Contact Information
Location: Ghagra, Rangamati
Phone: +880 1610316528
Email: sochin.cs@gmail.com
`;

  return (
    <div>
      {/* Button to Open Modal */}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[50%]">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Resume</h2>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {resumeContent}
            </pre>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={() => {
                  const element = document.createElement("a");
                  const file = new Blob([resumeContent], {
                    type: "text/plain",
                  });
                  element.href = URL.createObjectURL(file);
                  element.download = "Resume_of_Sochin.txt";
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeButton;
