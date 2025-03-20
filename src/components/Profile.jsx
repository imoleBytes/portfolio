import React from 'react';
import myImage from "../assets/images/imolemask.jpg"; // Adjust the path based on your structure
import { FaFacebookF, FaXTwitter, FaGithub, FaRegEnvelopeOpen} from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiMapPin, FiDownload } from "react-icons/fi";
import { useLocation } from 'react-router-dom';



const ContactDetail = ({Icon, title, content, iconColor}) => {
    return (
        <div className='contact-detail flex gap-5 items-center pl-10 py-2'>
            {<Icon className={iconColor}/>}
            <div className='font-raleway'>
                <p className='text-sm text-[#1A1003]'>{title}</p>
                <p className='font-bold'>{content}</p>
            </div>
        </div>
    );
};


const Profile = () => {
    const path = useLocation().pathname
    // console.log("location is: ",loc)
    return (
        <aside className={`${path !== '/' ? 'max-md:hidden': ''} relative md:w-2/6 bg-white py-10 rounded-2xl md:pt-35 grow basis-0`}>
            <div className='w-1/2 mx-auto rounded-2xl md:absolute md:-top-[12vh] md:left-1/4'><img src={myImage} alt="boy" className='rounded-2xl'/></div>
            <h2 className='font-raleway-bold font-bold my-2 text-center text-2xl'>Imole M. Kolawole</h2>
            <h4 className='text-center'>FullStack Developer</h4>
            <div className="socials grid grid-cols-4 gap-2 my-2 w-fit mx-auto">
                <div className='w-10 h-10 bg-[#F2F7FC] flex justify-center items-center text-[#1877F2] rounded'><FaFacebookF className='text-2x'/></div>
                <div className='w-10 h-10 bg-[#F2F7FC] flex justify-center items-center text-[#0077B5] rounded'><FaLinkedinIn className='text-2x'/></div>
                <div className='w-10 h-10 bg-[#F2F7FC] flex justify-center items-center text-[#0B0909] rounded'><FaXTwitter className='text-2x'/></div>
                <div className='w-10 h-10 bg-[#F2F7FC] flex justify-center items-center text-[#0B0909] rounded'><FaGithub className='text-2x'/></div>
            </div>
            <div className='bg-accent w-4/5 rounded-3xl mx-auto py-5'>
                <ContactDetail Icon={IoPhonePortraitOutline} title="Phone" content="+234 90 1800 5785" iconColor="text-secondary"/>
                <ContactDetail Icon={FaRegEnvelopeOpen} title="Email" content="imole.dev@hotmail.com" iconColor="text-primary"/>
                <ContactDetail Icon={FiMapPin} title="Location" content="Lagos, Nigeria" iconColor="text-secondary"/>

                <button type="button" className='animate-mybounce cursor-pointer mx-auto text-accent rounded-4xl flex mt-5 py-2 px-5 bg-linear-to-r from-primary to-secondary'>
                    <FiDownload className='mr-2'/>
                    Download Resume
                </button>
            </div>
        </aside>
    );
}

export default Profile;
