import React from "react";
import { MdOutlineSchool } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";

const Resume = () => {
  const work_skills = [
    "Next.js",
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "SQL",
    "Git",
    "Golang",
    "HTMX",
    "Python",
    "Docker",
  ];

  const soft_skills = [
    "Time Management",
    "Mentorship",
    "Effective Communication",
    "Flexibility",
    "Emotional Intelligence",
    "Project Coordination",
  ];
  return (
    <>
      <section className="bg-white rounded-2xl p-10 grow basis-0">
        <h1 className="text-4xl font-semibold uppercase after:block after:w-56 after:h-1 after:bg-linear-to-r after:from-primary after:to-secondary after:mx-auto">
          Resume
        </h1>
        {/* <hr className='h-0.5 bg-primary border-0'/> */}
        <div className="md:flex mt-5 gap-10">
          <div className="">
            <div className="flex items-center gap-2">
              <MdOutlineSchool color="#FF9C1B" size={32} />
              <h1 className="ml-2 text-2xl font-black">Education</h1>
            </div>
            <div className="mt-2 bg-[#FFE3BF] py-5 px-10 rounded-2xl mb-5">
              <h5 className="font-raleway text-gray-500">2024-2027</h5>
              <p className="my-2 font-bold">
                B.Sc Computer Science - Bad Honnef, Germany
              </p>
              <p className="font-black text-sm">
                IU International University of Applied Sciences, Germany
              </p>
            </div>
            <div className="mt-2 bg-[#FFEED9] py-5 px-10 rounded-2xl">
              <h5 className="text-gray-500">2011-2018</h5>
              <p className="my-2 font-bold">
                B.Sc Marine Sciences - Lagos State, Nigeria{" "}
              </p>
              <p className="font-black text-sm">
                University of Lagos, Nigeria.
              </p>
            </div>
          </div>

          <div className="max-md:mt-5">
            <div className="flex items-center gap-2">
              <LuBriefcaseBusiness />
              <h1 className="ml-2 text-2xl font-bold">Experience</h1>
            </div>
            <div className="mt-2 bg-[#FFEED9] py-5 px-10 rounded-2xl mb-5">
              <h5 className="text-gray-500">2022-Present</h5>
              <p className="my-2 font-bold">Web Developer</p>
              <p className="font-black text-sm">
                NewPage Edu Consult Lagos, Nigeria
              </p>
            </div>
            <div className="mt-2 bg-[#FFE3BF] py-5 px-10 rounded-2xl">
              <h5 className="text-gray-500">2011-2018</h5>
              <p className="my-2 font-bold">Backend Engineer</p>
              <p className="font-black text-sm">
                Metafora, ALX Portfolio Project
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#F8FBFB] pl-10">
        <div className="md:flex gap-20">
          <div>
            <h1 className="text-2xl font-bold mb-5">Work Skills</h1>
            <div className="grid grid-cols-3 justify-between">
              {work_skills.map((skill) => (
                <p
                  key={skill}
                  className="text-sm p-1 text-center m-1 bg-[#E1E8EF] rounded-xl w-max"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
          <div className="max-md:mt-5">
            <h1 className="text-2xl font-bold mb-5">Soft Skills</h1>
            <div className="grid grid-cols-2">
              {soft_skills.map((skill) => (
                <p
                  key={skill}
                  className="text-sm p-1 text-center m-1 bg-[#E1E8EF] rounded-xl w-max"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
