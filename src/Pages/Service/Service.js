import React from 'react';
import serviceImg1 from '../../assets/services/web design.png';
import serviceImg2 from '../../assets/services/development.png';
import serviceImg3 from '../../assets/services/responsive.png';
import serviceImg4 from '../../assets/services/frontend.png';
import serviceImg5 from '../../assets/services/mern.png';
import serviceImg6 from '../../assets/services/marketing.png';
import bg from '../../assets/servicebg.jpg';

const services = [
    {
        "id": "01",
        "img": serviceImg1,
        "bg": bg,
        "title": "Web Designing"
    },
    {
        "id": "02",
        "img": serviceImg2,
        "bg": bg,
        "title": "Web Development"
    },
    {
        "id": "03",
        "img": serviceImg3,
        "bg": bg,
        "title": "Responsive Design"
    },
    {
        "id": "04",
        "img": serviceImg4,
        "bg": bg,
        "title": "Frontend Development"
    },
    {
        "id": "05",
        "img": serviceImg5,
        "bg": bg,
        "title": "MERN Stack Development"
    },
    {
        "id": "06",
        "img": serviceImg6,
        "bg": bg,
        "title": "Marketing Services"
    },
]

const Service = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mb-3 lg:mb-4 mt-6 lg:mt-20'><span className='border-b-4 border-indigo-500 rounded-lg'>Services</span></h1>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
                {
                    services.map(service =>
                        <div className="card bg-base-100 shadow-xl image-full" key={service.id}>
                            <figure><img src={service.bg} className='h-24' alt="" /></figure>
                            <div className="card-body items-center">
                                <img src={service.img} className='w-24 h-24' alt="" />
                                <h2 className="card-title">{service.title}</h2>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Service;