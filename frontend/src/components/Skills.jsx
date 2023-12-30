import React from "react";
import {SiExpress, SiNextdotjs, SiTypescript} from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      ion: "logo-javascript",
      level: "JAVASCRIPT",
      count: 80,
      status:true
    },
    {
      ion: "logo-nodejs",
      level: "NODE.JS",
      count: 40,
      status:true
    },
    {
      ion: "logo-react",
      level: "REACT.JS",
      count: 80,
      status:true
    },
    {
      ion: <SiExpress/>,
      level: "EXPRESS.JS",
      count: 80,
      status:false
    },
    {
      ion: <SiNextdotjs/>,
      level: "NEXT.JS",
      count: 80,
      status:false
    },
  ];
  return (
    <section id="skills" className="py-10 bg-transparent min-h-screen relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-16 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[6rem] max-w-[14rem] bg-gray-900 p-10 rounded-xl hover:scale-105 duration-300"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.status ? <ion-icon name={skill.ion}></ion-icon> : skill.ion}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
