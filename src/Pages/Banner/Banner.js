import React from 'react';
import img from '../../assets/IMG_1022.JPG';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello I'm Mosraful Habib</h1>
                        <h1 className="mb-5 text-3xl font-bold">I'm Frontend Developer</h1>
                        <p className="mb-5">I am very interested in learning new things and doing new practical projects. Passionate about using technical skills to build elegant, performing applications with scalable design patterns.</p>
                        <button className="btn btn-primary"><a href='https://drive.google.com/file/d/10DywtUjcxAwhwSkIQhd-PnSLUY2tMwoG/view?usp=share_link' target='blank'> <span className=' font-medium text-2xl text-white'>Resume</span></a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;