import React from 'react';
import img from '../../assets/IMG_1006.JPG';
import linkedIn from '../../assets/logo/linkedin.png';
import github from '../../assets/logo/github.png';
import facebook from '../../assets/logo/facebook.png';

const About = () => {
    return (
        <div className='bg-white'>
            <div className='lg:flex w-full lg:p-5'>
                <div className='lg:w-1/2 w-full'>
                    <div className='lg:flex'>
                        <img className='lg:w-1/3 p-2 rounded-2xl' src={img} alt="" />
                        <div className='w-full p-2 lg:mt-1'>
                            <p><span className='font-serif font-semibold text-2xl text-black'>Name:</span> <span className='font-serif font-medium text-xl text-black'>Mosraful Habib</span></p>
                            <p><span className='font-serif font-semibold text-2xl text-black'>Email:</span> <span className='font-serif font-medium text-xl text-black'>mosraful21@gmail.com</span></p>
                            <p><span className='font-serif font-semibold text-2xl text-black'>Phone:</span> <span className='font-mono font-medium text-xl text-black'>+88 01774514821</span></p>
                            <p><span className='font-serif font-semibold text-2xl text-black'>Address:</span> <span className='font-serif font-medium text-xl text-black'>Dhaka, Bangladesh</span></p>
                            <div className='flex gap-2'>
                                <a href='https://www.linkedin.com/in/mosrafulhabib' target='blank'> <img src={linkedIn} className='w-8 h-8' alt="" /></a>
                                <a href='https://github.com/mosraful21' target='blank'> <img src={github} className='w-8 h-8' alt="" /></a>
                                <a href='https://www.facebook.com/profile.php?id=100041049621159' target='blank'> <img src={facebook} className='w-8 h-8' alt="" /></a>
                            </div>
                            <div className='mt-2'>
                                <a className='bg-blue-500 px-3 py-1 rounded-md' href='https://drive.google.com/file/d/10DywtUjcxAwhwSkIQhd-PnSLUY2tMwoG/view?usp=share_link' target='blank'> <span className='font-serif font-medium text-xl text-black'>Download Resume</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full p-2'>
                    <h1 className='text-3xl text-black font-semibold font-serif mb-2'><span className='border-b-4 border-indigo-500 rounded-lg'>About Me</span></h1>
                    <p className='font-serif text-2xl text-black text-justify'>I am a self-taught passionate Web developer. I love to learn new technology and implement in projects. I always try to attach with programing world and gather tech knowledge to enrich my skills in web development filed. </p>
                </div>
            </div>

            <h1 className='text-3xl text-center text-black font-semibold font-serif mb-2'><span className='border-b-4 border-indigo-500 rounded-lg'>Skills</span></h1>
            <div className='lg:flex w-full lg:p-5'>
                <div className='lg:w-1/2 w-full p-2'>
                    
                </div>
                <div className='lg:w-1/2 w-full p-2'>
                    
                </div>
            </div>
        </div>
    );
};

export default About;