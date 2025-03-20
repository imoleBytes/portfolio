import React, { useState } from "react";

import proj1 from "../assets/images/proj1.png"; // Adjust the path based on your structure
import proj2 from "../assets/images/proj2.png"; // Adjust the path based on your structure
import proj3 from "../assets/images/proj3.png"; // Adjust the path based on your structure

const Projects = () => {
  return (
    <section className="bg-white rounded-2xl p-10">
      <h1 className="text-4xl font-semibold uppercase after:block after:w-56 after:h-1 after:bg-linear-to-r after:from-primary after:to-secondary after:mx-auto">
        Projects!
      </h1>
      <Portfolio />
      {/* <hr className='h-0.5 bg-primary border-0'/> */}
    </section>
  );
};

export default Projects;

const data = [
    {
      id: 1,
      image: proj1,
      category: "app development",
      name: "smart bank app",
    },
    {
      id: 2,
      image: proj2,
      category: "web development",
      name: "smart bank app",
    },
    {
      id: 3,
      image: proj3,
      category: "design",
      name: "smart bank app",
    },
    {
      id: 4,
      image: proj1,
      category: "mentorship",
      name: "smart bank app",
    },
  ]

const Portfolio = () => {
      const [projects, setProjects] = useState(data)

  const handleFilter = (cat) => {
    if (cat === "all"){
        setProjects(data)
        return
    }
    let proj = data.filter(project => project.category === cat)
    setProjects(proj)
  };

  return (
    <div>
      <ul className="flex justify-self-end gap-5">
        <li onClick={()=> handleFilter("all")} className="cursor-pointer text-secondary">All</li>
        <li onClick={()=> handleFilter("app development")} className="cursor-pointer">App Development</li>
        <li onClick={()=> handleFilter("web development")} className="cursor-pointer">Web Development</li>
        <li onClick={()=> handleFilter("design")} className="cursor-pointer">Design</li>
        <li onClick={()=> handleFilter("mentorship")} className="cursor-pointer">Mentorship</li>
      </ul>

      <div className="grid grid-cols-2">
        {projects.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            category={project.category}
            name={project.name}
          />
        ))}
      </div>
    </div>
  );
};

const Project = ({ name, category, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h4>{category}</h4>
      <h3>{name}</h3>
    </div>
  );
};
