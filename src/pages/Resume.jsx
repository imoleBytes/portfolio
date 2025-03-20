import React from 'react';
import { MdOutlineSchool } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";


const Resume = () => {
    return (
        <>
            <section className='bg-white rounded-2xl p-10 grow basis-0'>
                <h1 className='text-4xl font-semibold uppercase after:block after:w-56 after:h-1 after:bg-linear-to-r after:from-primary after:to-secondary after:mx-auto'>Resume</h1>
                {/* <hr className='h-0.5 bg-primary border-0'/> */}
                <div className='flex'>
                    <div className="">
                        <div className='flex items-center'><MdOutlineSchool/><h1 className='ml-2 text-2xl font-bold'>Education</h1></div>
                        <div>
                            <h5>2024-2027</h5>
                            <p>B.Sc Computer Science - Bad Honnef, Germany</p>
                            <p>IU International University of Applied Sciences, Germany</p>
                        </div>
                        <div>
                            <h5>2011-2018</h5>
                            <p>B.Sc Marine Sciences	 - Lagos State, Nigeria </p>
                            <p>University of Lagos, Nigeria.</p>
                        </div>
                    </div>

                    <div className="">
                        <div className='flex items-center'><LuBriefcaseBusiness/><h1 className='ml-2 text-2xl font-bold'>Experience</h1></div>
                        <div>
                            <h5>2022-Present</h5>
                            <p>Web Developer</p>
                            <p>NewPage Edu Consult Lagos, Nigeria</p>
                        </div>
                        <div>
                            <h5>2011-2018</h5>
                            <p>Backend Engineer</p>
                            <p>Metafora, ALX Portfolio Project</p>
                        </div>
                    </div>   
                </div>
                {/* <Services/> */}
            </section>
            <div className='p-10'>
                <div className='flex gap-20'>
                    <div>
                        <h1 className='text-2xl font-bold'>Work Skills</h1>
                        <div className='grid grid-cols-3'>
                            <p>Next.js</p>
                            <p>React.js</p>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Tailwind CSS</p>
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                            <p>MongoDB</p>
                            <p>SQL</p>
                            <p>Git</p>
                            <p>Golang</p>
                            <p>HTMX</p>
                            <p>Python</p>
                            <p>Docker</p>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>Soft Skills</h1>
                        <div className='grid grid-cols-2'>
                            <p>Time Management</p>
                            <p>Mentorship</p>
                            <p>Effective Communication</p>
                            <p>Flexibility</p>
                            <p>Emotional Intelligence</p>
                            <p>Project Coordination</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;
