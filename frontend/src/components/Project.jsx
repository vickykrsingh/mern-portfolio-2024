import React, { useEffect, useState } from "react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";

const Project = () => {
  const [category,setCategory] = useState("all")
  const [project,setProject] = useState([])
  const projects = [
    {
      _id:1,
      img: project1,
      name: "Ecommerce App",
      github_link: "https://github.com/vickykrsingh/DD-Product.git",
      live_link: "https://ddproduct.cyclic.app",
      tech_stack: "React.js Express.js Mongodb Node.js Bootstrap",
      category:"fullstack"
    },
    {
      _id:2,
      img: project2,
      name: "keeps notes",
      github_link: "https://github.com/vickykrsingh/GoogleKeep.git",
      live_link: "https://deadlynotes.netlify.app/",
      tech_stack: "HTML5 CSS3 Javascript",
      category:"frontend"
    },
    {
      _id:3,
      img: project3,
      name: "Portfolio",
      github_link: "https://github.com/vickykrsingh/myportfolio.git",
      live_link: "https://vickykumar.netlify.app",
      tech_stack: "React.js Firebase",
      category:"frontend"
    }
  ];

  useEffect(()=>{
    if(category==="frontend"){
      let FilteredProjects = projects.filter((p)=>p.category==="frontend")
      setProject(FilteredProjects)
    }else if(category==="fullstack"){
      let FilteredProjects = projects.filter((p)=>p.category==="fullstack")
      setProject(FilteredProjects)
    }else{
      setProject(projects)
    }
  },[category])
  return (
    <section className="mx-auto pt-[10vh] lg:pt-10 w-[90%] flex items-center justify-center flex-col min-h-screen">
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-2">
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          onClick={()=>setCategory("all")}
        >
          All
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          onClick={()=>setCategory("frontend")}
        >
          Frontend
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          onClick={()=>setCategory("fullstack")}
        >
          Full Stack
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.map((p) => (
          <div key={p._id} className="bg-slate-500 rounded-lg relative group overflow-hidden border-4 hover:scale-95 duration-200 border-cyan-700">
            <img class="h-auto max-w-full rounded-lg" src={p.img} alt="" />
            <div class="absolute -top-[100%] z-0 w-full h-full bg-gray-700 duration-300 group-hover:top-[0%] p-3 flex flex-col items-center justify-center gap-1">
              <h3 className="font-semibold tracking-wide">Project Name : <span className="">{p.name}</span></h3>
              <h4 className="text-xs tracking-wide">Tech stack : {p.tech_stack} </h4>
              <div className="flex gap-3 items-center justify-center mt-5">
                <a href={p.github_link} target="_blank"><button className="btn-primary">Code</button></a>
                <a href={p.live_link} target="_blank"><button className="btn-primary">Live</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
