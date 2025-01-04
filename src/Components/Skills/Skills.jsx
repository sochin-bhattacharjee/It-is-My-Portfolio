import { motion } from "framer-motion";
import htmlImg from "../../assets/icons/html.png";
import cssImg from "../../assets/icons/css.png";
import jsImg from "../../assets/icons/js.png";
import reactImg from "../../assets/icons/react.png";
import tailwindImg from "../../assets/icons/tailwind.png";
import mogodbImg from "../../assets/icons/mongodb.png";

const Skills = () => {
    const skills = [
        { img: htmlImg, name: "HTML" },
        { img: cssImg, name: "CSS" },
        { img: jsImg, name: "JavaScript" },
        { img: reactImg, name: "React" },
        { img: tailwindImg, name: "Tailwind CSS" },
        { img: mogodbImg, name: "MongoDB CSS" },
    ];

    const scrollVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { type: "spring", stiffness: 100, damping: 20 } 
        },
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-6 mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-8 text-center">
                Skills
            </h1>
            <div className="w-full grid grid-cols-12 p-8 rounded-lg mt-14 shadow-lg">
                <div className="col-span-5 flex flex-col items-center justify-center gap-8">
                    {skills.slice(0, 3).map((skill, index) => (
                        <motion.div 
                            key={index}
                            className="flex flex-col items-center"
                            variants={scrollVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-[#00BFFF] p-4 shadow-lg flex items-center justify-center mb-4">
                                <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                            <p className="text-white text-xl">{skill.name}</p>
                            
                        </motion.div>
                    ))}
                </div>

                <div className="col-span-2 border-r-2 mx-auto border-[#00BFFF]"></div>

                <div className="col-span-5 flex flex-col items-center justify-center gap-8">
                    {skills.slice(3).map((skill, index) => (
                        <motion.div 
                            key={index}
                            className="flex flex-col items-center"
                            variants={scrollVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-[#00BFFF] p-4 shadow-lg flex items-center justify-center mb-4">
                                <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
                            </div>
                            <p className="text-white text-xl">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
