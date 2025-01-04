const AboutMe = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto mt-10 xl:mt-20 mb-10 p-5 md:p-8 lg:p-10 xl:p-20 bg-gray-800 text-gray-200 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-4 text-center">
                About Me
            </h1>
            <p 
                className="text-sm md:text-base xl:text-xl leading-relaxed text-gray-300 text-justify mb-4 relative"
                style={{ textShadow: "1px 1px 1px #00BFFF" }}
            >
                I love playing cricket. I didn't know what programming was before. I got to know about it through one of my uncles. He was the one who first introduced me to this programming. And from then on my programming journey started.
            </p>
            <p 
                className="text-sm md:text-base xl:text-xl leading-relaxed text-gray-300 text-justify relative"
                style={{ textShadow: "1px 1px 1px #00BFFF" }}
            >
                An enthusiastic front-end developer, who is committed to creativity and perfection. I love creating beautiful and accessible web experiences for the user. Let's build the future through code together.
            </p>
        </div>
    );
};

export default AboutMe;
