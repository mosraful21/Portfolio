import React from 'react';
import project1 from '../../assets/projects/doctor.png';
import project2 from '../../assets/projects/tourist.png';
import project3 from '../../assets/projects/learning.png';
import bg from '../../assets/project bg.jpg';

const projects = [
    {
        "id": "01",
        "img": project1,
        "bg": bg,
        "title": "Doctors Portal",
        "details": "There  is a dashboard to manage admin panel and services where an admin can add or remove a doctor and able to manage the appointments. A complete appointment management portal with google login feature and using JSON Web Token (JWT). Technologies: React.js, Node.js, Express.js, MongoDB, TailwindCSS, Firebase and Vercel."
    },
    {
        "id": "02",
        "img": project2,
        "bg": bg,
        "title": "Tourist Service",
        "details": "This is a full-stack single page web application for Tour Service built with react.js, react router and React-Tailwind CSS for the design that allows users to show different tour places. Its reviews from different users, users also purchase any services and also add services. Implemented firebase authentication system with (Email/Password and Google) Developed REST APIs along with logic responsible for authorization using JSON Web Token (JWT). Technologies: React.js, React Router, Node.js, Express.js, MongoDB, tailwindCSS, React Table, Firebase, JSON Web Token and Vercel."
    },
    {
        "id": "03",
        "img": project3,
        "bg": bg,
        "title": "Learning Platform",
        "details": "This is the Learning Platform website built with react.js, react router and React-Tailwind CSS for the design that allows users to show available courses, purchase courses, review Courses and read blogs. Besides, Admin has full access to courses and users. Implemented firebase authentication system with (Email/Password and Google). Technologies: React.js, Node.js, Express.js, MongoDB, TailwindCSS, React Table, Firebase and Vercel."
    }
]

const Project = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mb-3 lg:mb-4 mt-6 lg:mt-20'><span className='border-b-4 border-indigo-500 rounded-lg'>My Project</span></h1>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
                {
                    projects.map(project =>
                        <div className="card bg-base-100 shadow-xl image-full" key={project.id}>
                            <figure><img src={bg} alt="" /></figure>
                            <div className="card-body p-2 m-2">
                                <img src={project.img} className='h-80' alt="" />
                                <h2 className="card-title text-white">{project.title}</h2>
                                <div className="card-actions">
                                    <button className="btn w-full text-white ">Details</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Project;