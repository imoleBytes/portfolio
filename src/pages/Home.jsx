import React from 'react';
import Services from '../components/Services';

const Home = () => {
    return (
        <section className='bg-white rounded-2xl p-10'>
            <h1 className='text-4xl font-semibold uppercase after:block after:w-56 after:h-1 after:bg-linear-to-r after:from-primary after:to-secondary after:mx-auto'>About me</h1>
            {/* <hr className='h-0.5 bg-primary border-0'/> */}
            <p className='my-5'>Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                My journey in the world of web development has been nothing short of exhilarating, and 
                I constantly strive to enhance my skills and embrace emerging trends in the industry.
            </p>
            <h2 className='text-2xl font-semibold mb-5'>What I do!</h2>
            <Services/>
        </section>
    );
}

export default Home;
