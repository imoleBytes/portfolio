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
            `,
            bgColor: "#FFEBD1",
            iconColor: "#FF9C1B"
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
            `,
            bgColor: "#F2F7FC",
            iconColor: "#EC1B09"
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
            `,
            bgColor: "#F2F7FC",
            iconColor: "#EC1B09"
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
            `,
            bgColor: "#FFEBD1",
            iconColor: "#FF9C1B"
        }

    ]

    return (
        <div className='grid md:grid-cols-2 gap-5'>
            {
                services.map(service => <Service key={service.title} icon={service.icon} title={service.title} content={service.content} bgColor={service.bgColor} iconColor={service.iconColor}/>)
            }
        </div>
    );
}

export default Services;


const Service = (props) => {
    return (
        <div className='px-10 py-5 rounded-3xl odd:bg-[#FFEBD1] even:bg-[#F2F7FC]'>
            <div className="flex gap-4 items-center rounded-2xl">
                {<props.icon style={{ color: props.iconColor }}/>}
                <h3 className='font-bold'>{props.title}</h3>
            </div>
            <p className='text-sm'>{props.content}</p>
        </div>
    );
}