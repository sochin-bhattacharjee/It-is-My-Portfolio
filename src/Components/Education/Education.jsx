const Education = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center justify-center p-6 bg-gray-800 mb-10">
            <h1 
                className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-4 text-center"
                style={{ textShadow: "1px 1px 1px #00BFFF" }}
            >
                Education
            </h1>

            <div className="bg-gray-800 md:p-8 rounded-lg max-w-4xl w-full">
                <p
                    className="text-sm md:text-base xl:text-xl text-gray-300 mb-4"
                    style={{ textShadow: "1px 1px 1px #00BFFF" }}
                >
                    I am a student currently pursuing a diploma.
                </p>

                <p
                    className="text-sm md:text-base xl:text-xl text-gray-300 mb-4"
                    style={{ textShadow: "1px 1px 1px #00BFFF" }}
                >
                    I am currently in my <span className="font-bold text-[#00BFFF]">seventh</span> semester.
                </p>

                <p
                    className="text-sm md:text-base xl:text-xll text-gray-300 mb-4"
                >
                    Institution: <span className="font-bold text-[#00BFFF]">Bangladesh Polytechnic Institute</span>
                </p>

                <a
                    href="https://bspi.polytech.gov.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00BFFF] underline text-sm md:text-base xl:text-xl mt-4 inline-block"
                >
                    Institute Details
                </a>
            </div>
        </div>
    );
};

export default Education;
