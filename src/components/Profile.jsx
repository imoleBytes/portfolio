import React from 'react';
import myImage from "../assets/images/boy.jpg"; // Adjust the path based on your structure
import { FaFacebookF, FaXTwitter, FaGithub, FaRegEnvelopeOpen} from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiMapPin, FiDownload } from "react-icons/fi";



const ContactDetail = ({Icon, title, content}) => {
    return (
        <div>
            {<Icon/>}
            <div className='border-b-1'>
                <p>{title}</p>
                <p>{content}</p>
            </div>
        </div>
    );
};


const Profile = () => {
    return (
        <aside className='w-1/5'>
            <div><img src={myImage} alt="boy" /></div>
            <h2 className='font-raleway font-bold'>Imole M. Kolawole</h2>
            <h4>FullStack Developer</h4>
            <div className="socials flex">
                <FaFacebookF/>
                <FaLinkedinIn/>
                <FaXTwitter/>
                <FaGithub/>
            </div>
            <div>
                <ContactDetail Icon={IoPhonePortraitOutline} title="Phone" content="+234 90 1800 5785"/>
                <ContactDetail Icon={FaRegEnvelopeOpen} title="Email" content="imole.dev@hotmail.com"/>
                <ContactDetail Icon={FiMapPin} title="Location" content="Lagos, Nigeria"/>

                <button type="button" className='cursor-pointer text-accent rounded-4xl flex py-2 px-5 bg-linear-to-r from-primary to-secondary'>
                    <FiDownload className='mr-2'/>
                    Download Resume
                </button>
            </div>
        </aside>
    );
}

export default Profile;
