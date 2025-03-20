import React from 'react';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BsEnvelopeAt } from "react-icons/bs";


const Contact = () => {
    return (
        <section className='bg-white rounded-2xl p-10'>
            <h1 className='text-4xl font-semibold uppercase after:block after:w-56 after:h-1 after:bg-linear-to-r after:from-primary after:to-secondary after:mx-auto'>Contact</h1>
            {/* <hr className='h-0.5 bg-primary border-0'/> */}
            <div>
                <div>
                    <MdOutlineWifiCalling3/>
                    <div>
                        <h3>Phone:</h3>
                        <p>+234 90 1800 5785</p>
                        <p>+234 90 1800 5785</p>
                    </div>
                </div>
                <div>
                    <BsEnvelopeAt/>
                    <div>
                        <h3>Email:</h3>
                        <p>imole.dev@hotmail.com</p>
                    </div>
                </div>
                <div>
                    <p>
                        I am always open to discussing new projects, opportunities in tech world,
                        partnerships and more so mentorship. 
                    </p>
                    <form action="" method="get">
                        <label>Name</label>
                        <input type="text" name='name' />
                        <label>Email</label>
                        <input type="email" name='email' />
                        <label>Message</label>
                        <textarea name="" id=""></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

