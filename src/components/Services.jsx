import React from 'react';
import { HiCodeBracket } from "react-icons/hi2";
import { IoIosApps } from "react-icons/io";
import { IoAppsSharp } from "react-icons/io5";
import { SiCodementor } from "react-icons/si";





const Services = () => {

    const services = [
        {
            icon: HiCodeBracket,
            title: "Web Development",
            content: `As a developer, I find myself most 
                    captivated by the power and flexibility of 
                    NEXT.js. I'm always eager to dive into new
                    projects that leverage NEXT.js and 
                    discover innovative ways to create fast, 
                    scalable, and user-friendly applications.
            `
        },
        {
            icon: IoIosApps,
            title: "App Development",
            content: `As a developer, I find myself most 
                    captivated by the power and flexibility of 
                    NEXT.js. I'm always eager to dive into new
                    projects that leverage NEXT.js and 
                    discover innovative ways to create fast, 
                    scalable, and user-friendly applications.
            `
        },
        {
            icon: IoAppsSharp,
            title: "UI/UX Designing",
            content: `As a developer, I find myself most 
                    captivated by the power and flexibility of 
                    NEXT.js. I'm always eager to dive into new
                    projects that leverage NEXT.js and 
                    discover innovative ways to create fast, 
                    scalable, and user-friendly applications.
            `
        },
        {
            icon: SiCodementor,
            title: "Mentorship",
            content: `As a developer, I find myself most 
                    captivated by the power and flexibility of 
                    NEXT.js. I'm always eager to dive into new
                    projects that leverage NEXT.js and 
                    discover innovative ways to create fast, 
                    scalable, and user-friendly applications.
            `
        }

    ]

    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                services.map(service => <Service key={service.title} icon={service.icon} title={service.title} content={service.content}/>)
            }
        </div>
    );
}

export default Services;


const Service = (props) => {
    return (
        <div>
            <div className='flex'>
                {<props.icon/>}
                <h3>{props.title}</h3>
            </div>
            <p>{props.content}</p>
        </div>
    );
}